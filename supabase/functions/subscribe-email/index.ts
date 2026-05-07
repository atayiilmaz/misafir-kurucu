import { handleCors, jsonResponse } from "../_shared/cors.ts";
import { supabaseAdmin } from "../_shared/supabase-admin.ts";

Deno.serve(async (request) => {
  const corsResponse = handleCors(request);

  if (corsResponse) {
    return corsResponse;
  }

  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
    const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse(
        { message: "Gecerli bir e-posta adresi girin." },
        { status: 400 },
      );
    }

    if (!firstName || !lastName) {
      return jsonResponse(
        { message: "Ad ve soyad gerekli." },
        { status: 400 },
      );
    }

    const source = typeof body.source === "string" ? body.source : "free-resource";

    const { error } = await supabaseAdmin
      .from("email_subscribers")
      .insert({ email, first_name: firstName, last_name: lastName, source });

    if (error) {
      if (error.code === "23505") {
        return jsonResponse({
          success: true,
          message: "Bu e-posta adresiyle zaten kayitlisiniz.",
          alreadySubscribed: true,
        });
      }

      return jsonResponse({ message: error.message }, { status: 400 });
    }

    return jsonResponse({
      success: true,
      message: "Kayit basarili.",
    });
  } catch (_error) {
    return jsonResponse(
      { message: "Kayit istegi islenemedi." },
      { status: 400 },
    );
  }
});
