import { useEffect } from "react";

export const SITE_NAME = "Misafir Kurucu";
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://misafirkurucu.com").replace(/\/+$/, "");
export const SITE_AUTHOR = "Sevinç Gürgüzel";
export const SITE_DESCRIPTION =
  "Moda markası kurmak, büyütmek ve stratejik kararları netleştirmek isteyen kurucular için birebir danışmanlık, programlar ve içerikler.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/herosection.jpeg`;

type SeoStructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: SeoStructuredData;
};

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content?: string | null,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href?: string | null) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!href) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertStructuredData(data?: SeoStructuredData) {
  const scriptId = "seo-structured-data";
  const existing = document.getElementById(scriptId);

  if (!data) {
    existing?.remove();
    return;
  }

  const script = existing ?? document.createElement("script");
  script.id = scriptId;
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.appendChild(script);
  }
}

export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function useSeo({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  keywords,
  publishedTime,
  modifiedTime,
  structuredData,
}: SeoConfig) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(path);
    const socialImage = image ? absoluteUrl(image) : DEFAULT_OG_IMAGE;
    const pageTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;

    document.title = pageTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords?.join(", "));
    upsertMeta("name", "author", SITE_AUTHOR);
    upsertMeta("name", "robots", noindex ? "noindex,nofollow" : "index,follow");
    upsertMeta("name", "theme-color", "#fffaf5");

    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "tr_TR");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", socialImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", socialImage);

    upsertMeta("property", "article:published_time", type === "article" ? publishedTime : null);
    upsertMeta("property", "article:modified_time", type === "article" ? modifiedTime : null);

    upsertLink("canonical", canonicalUrl);
    upsertStructuredData(structuredData);
  }, [
    description,
    image,
    keywords,
    modifiedTime,
    noindex,
    path,
    publishedTime,
    structuredData,
    title,
    type,
  ]);
}
