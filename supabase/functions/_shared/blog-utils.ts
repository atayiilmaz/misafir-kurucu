export function slugify(input: string) {
  return input
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function getImageExtension(fileName: string, contentType: string) {
  const fromFileName = fileName.split(".").pop()?.toLowerCase();

  if (fromFileName && /^[a-z0-9]+$/.test(fromFileName)) {
    return fromFileName;
  }

  switch (contentType) {
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/gif":
      return "gif";
    case "image/svg+xml":
      return "svg";
    default:
      return "jpg";
  }
}
