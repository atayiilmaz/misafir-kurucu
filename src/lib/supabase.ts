import { createClient } from "@supabase/supabase-js";
import { ApiError } from "@/lib/api-error";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(
  supabaseUrl || "https://placeholder-project.supabase.co",
  supabaseAnonKey || "placeholder-anon-key",
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  },
);

export function hasSupabaseConfig() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function assertSupabaseConfig() {
  if (!hasSupabaseConfig()) {
    throw new ApiError(
      "Supabase yapilandirmasi eksik. `VITE_SUPABASE_URL` ve `VITE_SUPABASE_ANON_KEY` degiskenlerini tanimlayin.",
    );
  }
}
