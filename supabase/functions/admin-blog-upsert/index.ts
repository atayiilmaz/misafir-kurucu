import { handleCors, jsonResponse } from "../_shared/cors.ts";
import { requireAdminSession } from "../_shared/auth.ts";
import { slugify } from "../_shared/blog-utils.ts";
import { supabaseAdmin } from "../_shared/supabase-admin.ts";

type BlogStatus = "draft" | "published";

Deno.serve(async (request) => {
  const corsResponse = handleCors(request);

  if (corsResponse) {
    return corsResponse;
  }

  const { error } = await requireAdminSession(request);

  if (error) {
    return error;
  }

  try {
    const body = await request.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const slug = typeof body.slug === "string" ? slugify(body.slug) : "";
    const excerpt = typeof body.excerpt === "string" ? body.excerpt.trim() : "";
    const coverImageUrl =
      typeof body.coverImageUrl === "string" && body.coverImageUrl.trim().length > 0
        ? body.coverImageUrl.trim()
        : null;
    const contentMarkdown =
      typeof body.contentMarkdown === "string" ? body.contentMarkdown.trim() : "";
    const status: BlogStatus = body.status === "published" ? "published" : "draft";

    if (!title || !slug || !contentMarkdown) {
      return jsonResponse(
        { message: "Baslik, slug ve markdown govdesi zorunludur." },
        { status: 400 },
      );
    }

    const hasExistingId = typeof body.id === "string" && body.id.trim().length > 0;
    let publishedAt: string | null = null;

    if (hasExistingId) {
      const { data: existingPost, error: existingPostError } = await supabaseAdmin
        .from("blog_posts")
        .select("id, published_at")
        .eq("id", body.id)
        .maybeSingle();

      if (existingPostError) {
        return jsonResponse({ message: existingPostError.message }, { status: 400 });
      }

      if (!existingPost) {
        return jsonResponse({ message: "Yazi bulunamadi." }, { status: 404 });
      }

      publishedAt =
        status === "published"
          ? existingPost.published_at ?? new Date().toISOString()
          : null;
    } else {
      publishedAt = status === "published" ? new Date().toISOString() : null;
    }

    const values = {
      title,
      slug,
      excerpt,
      cover_image_url: coverImageUrl,
      content_markdown: contentMarkdown,
      status,
      published_at: publishedAt,
    };

    if (hasExistingId) {
      const { data, error: updateError } = await supabaseAdmin
        .from("blog_posts")
        .update(values)
        .eq("id", body.id)
        .select("*")
        .single();

      if (updateError) {
        return jsonResponse({ message: updateError.message }, { status: 400 });
      }

      return jsonResponse({ item: data });
    }

    const { data, error: insertError } = await supabaseAdmin
      .from("blog_posts")
      .insert(values)
      .select("*")
      .single();

    if (insertError) {
      return jsonResponse({ message: insertError.message }, { status: 400 });
    }

    return jsonResponse({ item: data });
  } catch (_error) {
    return jsonResponse({ message: "Yazi kaydedilemedi." }, { status: 400 });
  }
});
