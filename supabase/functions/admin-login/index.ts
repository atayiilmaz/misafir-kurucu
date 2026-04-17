import { createAdminToken } from "../_shared/admin-token.ts";
import { handleCors, jsonResponse } from "../_shared/cors.ts";

Deno.serve(async (request) => {
  const corsResponse = handleCors(request);

  if (corsResponse) {
    return corsResponse;
  }

  try {
    const { password } = await request.json();
    const expectedPassword = Deno.env.get("ADMIN_PANEL_PASSWORD");

    if (!expectedPassword) {
      return jsonResponse(
        { message: "ADMIN_PANEL_PASSWORD tanimli degil." },
        { status: 500 },
      );
    }

    if (typeof password !== "string" || password !== expectedPassword) {
      return jsonResponse({ message: "Sifre hatali." }, { status: 401 });
    }

    const session = await createAdminToken();
    return jsonResponse(session);
  } catch (_error) {
    return jsonResponse(
      { message: "Giris istegi islenemedi." },
      { status: 400 },
    );
  }
});
