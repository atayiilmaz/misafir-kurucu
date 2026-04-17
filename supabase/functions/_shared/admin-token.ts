const encoder = new TextEncoder();

type TokenPayload = {
  role: "admin";
  exp: number;
};

export async function createAdminToken(expiresInSeconds = 60 * 60 * 8) {
  const secret = getSecret();
  const nowInSeconds = Math.floor(Date.now() / 1000);
  const payload: TokenPayload = {
    role: "admin",
    exp: nowInSeconds + expiresInSeconds,
  };

  const encodedHeader = base64UrlEncode(
    JSON.stringify({ alg: "HS256", typ: "JWT" }),
  );
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = await sign(`${encodedHeader}.${encodedPayload}`, secret);

  return {
    token: `${encodedHeader}.${encodedPayload}.${signature}`,
    expiresAt: new Date(payload.exp * 1000).toISOString(),
  };
}

export async function verifyAdminToken(token: string) {
  const secret = getSecret();
  const [encodedHeader, encodedPayload, encodedSignature] = token.split(".");

  if (!encodedHeader || !encodedPayload || !encodedSignature) {
    return false;
  }

  const verified = await verifySignature(
    `${encodedHeader}.${encodedPayload}`,
    encodedSignature,
    secret,
  );

  if (!verified) {
    return false;
  }

  const payload = JSON.parse(base64UrlDecodeToString(encodedPayload)) as TokenPayload;

  if (payload.role !== "admin") {
    return false;
  }

  return payload.exp > Math.floor(Date.now() / 1000);
}

function getSecret() {
  const secret = Deno.env.get("ADMIN_SESSION_SECRET");

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET tanimli degil.");
  }

  return secret;
}

async function sign(value: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));

  return base64UrlEncode(new Uint8Array(signature));
}

async function verifySignature(
  value: string,
  signature: string,
  secret: string,
) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );

  return crypto.subtle.verify(
    "HMAC",
    key,
    base64UrlDecodeToBytes(signature),
    encoder.encode(value),
  );
}

function base64UrlEncode(input: string | Uint8Array) {
  const bytes = typeof input === "string" ? encoder.encode(input) : input;
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecodeToString(input: string) {
  return atob(normalizeBase64(input));
}

function base64UrlDecodeToBytes(input: string) {
  const binary = atob(normalizeBase64(input));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function normalizeBase64(input: string) {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padding = base64.length % 4 === 0 ? "" : "=".repeat(4 - (base64.length % 4));
  return `${base64}${padding}`;
}
