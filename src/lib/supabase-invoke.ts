import {
  FunctionsFetchError,
  FunctionsHttpError,
  FunctionsRelayError,
} from "@supabase/supabase-js";
import { supabase, assertSupabaseConfig } from "@/lib/supabase";
import { ApiError } from "@/lib/api-error";

export async function invokeFunction<T>(
  functionName: string,
  options?: {
    body?: Record<string, unknown>;
  },
) {
  assertSupabaseConfig();
  const { data, error } = await supabase.functions.invoke(functionName, {
    body: options?.body,
  });

  if (error) {
    throw await normalizeFunctionError(error);
  }

  return data as T;
}

export async function invokeAdminFunction<T>(
  functionName: string,
  adminToken: string,
  body?: Record<string, unknown>,
) {
  if (!adminToken) {
    throw new ApiError("Admin oturumu bulunamadi.", 401);
  }

  assertSupabaseConfig();
  const { data, error } = await supabase.functions.invoke(functionName, {
    body,
    headers: {
      "x-admin-token": adminToken,
    },
  });

  if (error) {
    throw await normalizeFunctionError(error);
  }

  return data as T;
}

async function normalizeFunctionError(error: Error) {
  if (error instanceof FunctionsHttpError) {
    const payload = await error.context.json().catch(() => null);
    return new ApiError(
      payload?.message ?? "Sunucu istegi basarisiz oldu.",
      error.context.status,
    );
  }

  if (
    error instanceof FunctionsFetchError ||
    error instanceof FunctionsRelayError
  ) {
    return new ApiError(
      "Sunucuya ulasilamadi. Supabase ayarlarini kontrol edin.",
    );
  }

  return new ApiError(error.message);
}
