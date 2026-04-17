import { handleCors, jsonResponse } from "../_shared/cors.ts";
import { requireAdminSession } from "../_shared/auth.ts";
import { supabaseAdmin } from "../_shared/supabase-admin.ts";

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
    const body = await request.json().catch(() => ({}));
    const requestedId = typeof body.id === "string" ? body.id : null;

    if (requestedId) {
      const { data, error: detailError } = await supabaseAdmin
        .from("blog_posts")
        .select("*")
        .eq("id", requestedId)
        .single();

      if (detailError) {
        return jsonResponse({ message: detailError.message }, { status: 400 });
      }

      return jsonResponse({ item: data });
    }

    const { data, error: listError } = await supabaseAdmin
      .from("blog_posts")
      .select(
        "id, title, slug, excerpt, cover_image_url, status, published_at, created_at, updated_at",
      )
      .order("updated_at", { ascending: false });

    if (listError) {
      return jsonResponse({ message: listError.message }, { status: 400 });
    }

    return jsonResponse({ items: data ?? [] });
  } catch (_error) {
    return jsonResponse(
      { message: "Admin blog listesi alinamadi." },
      { status: 400 },
    );
  }
});
