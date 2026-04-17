export type BlogPostStatus = "draft" | "published";

export interface BlogPostListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostDetail extends BlogPostListItem {
  contentMarkdown: string;
  readingTimeMinutes: number;
}

export interface BlogPostFormValues {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImageUrl: string;
  contentMarkdown: string;
}

export interface PaginatedBlogResponse {
  items: BlogPostListItem[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface AdminSession {
  token: string;
  expiresAt: string;
}

export interface AdminBlogPostSummary extends BlogPostListItem {
  status: BlogPostStatus;
}
