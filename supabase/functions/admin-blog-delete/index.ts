import { requireAdminSession } from "../_shared/auth.ts";
import { handleCors, jsonResponse } from "../_shared/cors.ts";
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
    const body = await request.json();
    const id = typeof body.id === "string" ? body.id.trim() : "";

    if (!id) {
      return jsonResponse({ message: "Silinecek yazi id'si gerekli." }, { status: 400 });
    }

    const { error: deleteError } = await supabaseAdmin
      .from("blog_posts")
      .delete()
      .eq("id", id);

    if (deleteError) {
      return jsonResponse({ message: deleteError.message }, { status: 400 });
    }

    return jsonResponse({ success: true });
  } catch (_error) {
    return jsonResponse({ message: "Yazi silinemedi." }, { status: 400 });
  }
});
