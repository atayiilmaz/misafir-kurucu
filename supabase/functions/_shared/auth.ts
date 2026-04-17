import { jsonResponse } from "./cors.ts";
import { verifyAdminToken } from "./admin-token.ts";

export async function requireAdminSession(request: Request) {
  const adminToken = request.headers.get("x-admin-token");

  if (!adminToken) {
    return {
      error: jsonResponse({ message: "Admin oturumu gerekli." }, { status: 401 }),
    };
  }

  const isValid = await verifyAdminToken(adminToken);

  if (!isValid) {
    return {
      error: jsonResponse({ message: "Admin oturumu gecersiz veya suresi doldu." }, { status: 401 }),
    };
  }

  return { error: null };
}
