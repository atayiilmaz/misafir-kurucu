import { handleCors, jsonResponse } from "../_shared/cors.ts";
import { requireAdminSession } from "../_shared/auth.ts";
import { getImageExtension, slugify } from "../_shared/blog-utils.ts";
import { supabaseAdmin } from "../_shared/supabase-admin.ts";

const BLOG_MEDIA_BUCKET = "blog-media";

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
    const fileName = typeof body.fileName === "string" ? body.fileName : "";
    const contentType = typeof body.contentType === "string" ? body.contentType : "";
    const target = body.target === "inline" ? "inline" : "cover";

    if (!fileName || !contentType.startsWith("image/")) {
      return jsonResponse(
        { message: "Yalnizca gorsel dosyalari yuklenebilir." },
        { status: 400 },
      );
    }

    const extension = getImageExtension(fileName, contentType);
    const baseName = slugify(fileName.replace(/\.[^.]+$/, "")) || "blog-image";
    const dateSegment = new Date().toISOString().slice(0, 10);
    const path = `${target}/${dateSegment}/${crypto.randomUUID()}-${baseName}.${extension}`;

    const { data, error: uploadError } = await supabaseAdmin.storage
      .from(BLOG_MEDIA_BUCKET)
      .createSignedUploadUrl(path);

    if (uploadError || !data) {
      return jsonResponse(
        { message: uploadError?.message ?? "Upload URL olusturulamadi." },
        { status: 400 },
      );
    }

    const { data: publicUrlData } = supabaseAdmin.storage
      .from(BLOG_MEDIA_BUCKET)
      .getPublicUrl(path);

    return jsonResponse({
      path: data.path,
      token: data.token,
      publicUrl: publicUrlData.publicUrl,
    });
  } catch (_error) {
    return jsonResponse(
      { message: "Gorsel yukleme istegi islenemedi." },
      { status: 400 },
    );
  }
});
