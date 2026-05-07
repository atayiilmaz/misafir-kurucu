import { supabase, assertSupabaseConfig } from "@/lib/supabase";
import { ApiError } from "@/lib/api-error";
import {
  invokeFunction,
  invokeAdminFunction,
} from "@/lib/supabase-invoke";
import {
  type AdminBlogPostSummary,
  type AdminSession,
  type BlogPostDetail,
  type BlogPostFormValues,
  type BlogPostListItem,
  type BlogPostStatus,
  type PaginatedBlogResponse,
} from "@/features/blog/types";
import { estimateReadingTime, slugify } from "@/features/blog/utils";

const BLOG_MEDIA_BUCKET = "blog-media";
export const BLOG_PAGE_SIZE = 6;
export const BLOG_LIST_CACHE_TTL = 5 * 60 * 1000;
export const BLOG_DETAIL_CACHE_TTL = 10 * 60 * 1000;
export const BLOG_QUERY_GC_TIME = 30 * 60 * 1000;

const publicBlogListCache = new Map<
  number,
  { data: PaginatedBlogResponse; expiresAt: number }
>();
const publicBlogDetailCache = new Map<
  string,
  { data: BlogPostDetail | null; expiresAt: number }
>();

type BlogPostRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image_url: string | null;
  content_markdown: string;
  status: BlogPostStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export const EMPTY_BLOG_POST_FORM: BlogPostFormValues = {
  title: "",
  slug: "",
  excerpt: "",
  coverImageUrl: "",
  contentMarkdown: "",
};

export function getNormalizedPageParam(rawValue: string | null) {
  const parsedValue = Number(rawValue);

  if (!rawValue || !Number.isInteger(parsedValue) || parsedValue < 1) {
    return 1;
  }

  return parsedValue;
}

export async function fetchPublishedBlogPosts(
  page: number,
): Promise<PaginatedBlogResponse> {
  assertSupabaseConfig();

  const normalizedPage = Math.max(1, page);
  const cachedList = publicBlogListCache.get(normalizedPage);

  if (cachedList && cachedList.expiresAt > Date.now()) {
    return cachedList.data;
  }

  const from = (normalizedPage - 1) * BLOG_PAGE_SIZE;
  const to = from + BLOG_PAGE_SIZE - 1;
  const { data, error, count } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, excerpt, cover_image_url, published_at, created_at, updated_at",
      { count: "exact" },
    )
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false })
    .range(from, to);

  if (error) {
    throw new ApiError(error.message);
  }

  const total = count ?? 0;
  const totalPages = total > 0 ? Math.ceil(total / BLOG_PAGE_SIZE) : 1;

  const response = {
    items: (data ?? []).map(mapListItem),
    page: normalizedPage,
    pageSize: BLOG_PAGE_SIZE,
    total,
    totalPages,
  };

  publicBlogListCache.set(normalizedPage, {
    data: response,
    expiresAt: Date.now() + BLOG_LIST_CACHE_TTL,
  });

  return response;
}

export async function fetchPublishedBlogPostBySlug(
  slug: string,
): Promise<BlogPostDetail | null> {
  assertSupabaseConfig();
  const normalizedSlug = slug.trim();
  const cachedDetail = publicBlogDetailCache.get(normalizedSlug);

  if (cachedDetail && cachedDetail.expiresAt > Date.now()) {
    return cachedDetail.data;
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, excerpt, cover_image_url, content_markdown, published_at, created_at, updated_at",
    )
    .eq("slug", normalizedSlug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    throw new ApiError(error.message);
  }

  const response = data ? mapDetailItem(data as BlogPostRow) : null;

  publicBlogDetailCache.set(normalizedSlug, {
    data: response,
    expiresAt: Date.now() + BLOG_DETAIL_CACHE_TTL,
  });

  return response;
}

export async function loginAdmin(password: string): Promise<AdminSession> {
  return invokeFunction<AdminSession>("admin-login", {
    body: { password },
  });
}

export async function fetchAdminBlogPosts(
  adminToken: string,
): Promise<AdminBlogPostSummary[]> {
  const response = await invokeAdminFunction<{ items: BlogPostRow[] }>(
    "admin-blog-list",
    adminToken,
  );

  return response.items.map((item) => ({
    ...mapListItem(item),
    status: item.status,
  }));
}

export async function fetchAdminBlogPostById(
  adminToken: string,
  id: string,
): Promise<BlogPostDetail & { status: BlogPostStatus }> {
  const response = await invokeAdminFunction<{ item: BlogPostRow }>(
    "admin-blog-list",
    adminToken,
    { id },
  );

  const item = response.item;

  return {
    ...mapDetailItem(item),
    status: item.status,
  };
}

export async function upsertAdminBlogPost(
  adminToken: string,
  values: BlogPostFormValues,
  status: BlogPostStatus,
): Promise<BlogPostDetail & { status: BlogPostStatus }> {
  const response = await invokeAdminFunction<{ item: BlogPostRow }>(
    "admin-blog-upsert",
    adminToken,
    {
      id: values.id,
      title: values.title.trim(),
      slug: slugify(values.slug || values.title),
      excerpt: values.excerpt.trim(),
      coverImageUrl: values.coverImageUrl.trim(),
      contentMarkdown: values.contentMarkdown.trim(),
      status,
    },
  );

  clearPublicBlogCache();

  return {
    ...mapDetailItem(response.item),
    status: response.item.status,
  };
}

export async function requestMediaUpload(
  adminToken: string,
  file: File,
  target: "cover" | "inline",
) {
  const uploadRequest = await invokeAdminFunction<{
    path: string;
    token: string;
    publicUrl: string;
  }>("admin-media-upload-url", adminToken, {
    fileName: file.name,
    contentType: file.type,
    target,
  });

  const { error } = await supabase.storage
    .from(BLOG_MEDIA_BUCKET)
    .uploadToSignedUrl(uploadRequest.path, uploadRequest.token, file);

  if (error) {
    throw new ApiError(error.message);
  }

  return uploadRequest;
}

export async function deleteAdminBlogPost(adminToken: string, id: string) {
  await invokeAdminFunction<{ success: true }>("admin-blog-delete", adminToken, {
    id,
  });

  clearPublicBlogCache();
}

export function clearPublicBlogCache() {
  publicBlogListCache.clear();
  publicBlogDetailCache.clear();
}

function mapListItem(item: Pick<
  BlogPostRow,
  | "id"
  | "title"
  | "slug"
  | "excerpt"
  | "cover_image_url"
  | "published_at"
  | "created_at"
  | "updated_at"
>) {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    coverImageUrl: item.cover_image_url,
    publishedAt: item.published_at,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  } satisfies BlogPostListItem;
}

function mapDetailItem(item: BlogPostRow) {
  return {
    ...mapListItem(item),
    contentMarkdown: item.content_markdown,
    readingTimeMinutes: estimateReadingTime(item.content_markdown),
  } satisfies BlogPostDetail;
}
