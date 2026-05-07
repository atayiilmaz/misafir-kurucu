import { handleCors, jsonResponse } from "../_shared/cors.ts";
import { requireAdminSession } from "../_shared/auth.ts";
import { supabaseAdmin } from "../_shared/supabase-admin.ts";

Deno.serve(async (request) => {
  const corsResponse = handleCors(request);

  if (corsResponse) {
    return corsResponse;
  }

  const { error: authError } = await requireAdminSession(request);

  if (authError) {
    return authError;
  }

  try {
    const body = await request.json().catch(() => ({}));
    const action = typeof body.action === "string" ? body.action : "list";

    if (action === "delete") {
      const id = typeof body.id === "string" ? body.id : "";

      if (!id) {
        return jsonResponse(
          { message: "Abone ID gerekli." },
          { status: 400 },
        );
      }

      const { error: deleteError } = await supabaseAdmin
        .from("email_subscribers")
        .delete()
        .eq("id", id);

      if (deleteError) {
        return jsonResponse({ message: deleteError.message }, { status: 400 });
      }

      return jsonResponse({ success: true });
    }

    if (action === "count") {
      const { count, error: countError } = await supabaseAdmin
        .from("email_subscribers")
        .select("*", { count: "exact", head: true });

      if (countError) {
        return jsonResponse({ message: countError.message }, { status: 400 });
      }

      return jsonResponse({ total: count ?? 0 });
    }

    const { data, error: listError } = await supabaseAdmin
      .from("email_subscribers")
      .select("id, first_name, last_name, email, source, subscribed_at")
      .order("subscribed_at", { ascending: false });

    if (listError) {
      return jsonResponse({ message: listError.message }, { status: 400 });
    }

    return jsonResponse({ items: data ?? [] });
  } catch (_error) {
    return jsonResponse(
      { message: "E-posta listesi alinamadi." },
      { status: 400 },
    );
  }
});
