import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Clock3 } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { BlogMarkdown } from "@/components/blog/blog-markdown";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import {
  BLOG_DETAIL_CACHE_TTL,
  BLOG_QUERY_GC_TIME,
  fetchPublishedBlogPostBySlug,
} from "@/features/blog/api";
import { DEFAULT_BLOG_COVER_IMAGE } from "@/features/blog/constants";
import { formatBlogDate } from "@/features/blog/utils";
import { SITE_AUTHOR, SITE_NAME, SITE_URL, absoluteUrl, useSeo } from "@/lib/seo";
import { hasSupabaseConfig } from "@/lib/supabase";

export function BlogDetailPage() {
  const { slug } = useParams();
  const isConfigured = hasSupabaseConfig();
  const detailQuery = useQuery({
    queryKey: ["blog", "detail", slug],
    queryFn: () => fetchPublishedBlogPostBySlug(slug ?? ""),
    staleTime: BLOG_DETAIL_CACHE_TTL,
    gcTime: BLOG_QUERY_GC_TIME,
    enabled: Boolean(slug) && isConfigured,
  });
  const post = detailQuery.data;
  const seoImage = post?.coverImageUrl || DEFAULT_BLOG_COVER_IMAGE;

  useSeo({
    title: post?.title ?? "Blog yazısı",
    description:
      post?.excerpt ??
      "Misafir Kurucu blogundaki moda markası stratejileri ve saha deneyimi odaklı yazıları inceleyin.",
    path: slug ? `/blog/${slug}` : "/blog",
    image: seoImage,
    type: post ? "article" : "website",
    noindex: !slug || (!detailQuery.isLoading && !post),
    publishedTime: post?.publishedAt ?? undefined,
    modifiedTime: post?.updatedAt ?? undefined,
    keywords: post ? [post.title, "moda markası blog", "misafir kurucu"] : undefined,
    structuredData: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: [absoluteUrl(post.coverImageUrl || DEFAULT_BLOG_COVER_IMAGE)],
          datePublished: post.publishedAt ?? post.updatedAt,
          dateModified: post.updatedAt,
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          author: {
            "@type": "Person",
            name: SITE_AUTHOR,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          inLanguage: "tr-TR",
        }
      : undefined,
  });

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  if (!isConfigured) {
    return (
      <RevealSection as="section" className="section-shell section-space">
        <div className="glass-panel p-8 text-center">
          <p className="section-kicker">Blog</p>
          <h1 className="font-display text-5xl">Supabase bilgileri eksik</h1>
          <p className="mt-4 text-muted-foreground">
            Blog detay sayfasini calistirmak icin public Supabase env
            degiskenlerini tanimlayin.
          </p>
        </div>
      </RevealSection>
    );
  }

  if (detailQuery.isLoading) {
    return (
      <RevealSection as="section" className="section-shell section-space">
        <div className="mx-auto max-w-5xl animate-pulse">
          <div className="h-5 w-36 rounded-full bg-muted" />
          <div className="mt-8 h-16 max-w-4xl rounded-[1.75rem] bg-muted md:h-24" />
          <div className="mt-4 h-6 max-w-3xl rounded-full bg-muted" />
          <div className="mt-10 flex gap-3">
            <div className="h-12 w-12 rounded-full bg-muted" />
            <div className="flex-1 space-y-3">
              <div className="h-4 w-44 rounded-full bg-muted" />
              <div className="h-4 w-56 rounded-full bg-muted" />
            </div>
          </div>
          <div className="mt-10 h-[22rem] rounded-[2.25rem] bg-muted md:h-[30rem]" />
        </div>
      </RevealSection>
    );
  }

  if (detailQuery.isError || !detailQuery.data) {
    return (
      <RevealSection as="section" className="section-shell section-space">
        <div className="glass-panel p-8 text-center">
          <p className="section-kicker">Blog</p>
          <h1 className="font-display text-5xl">Yazi bulunamadi</h1>
          <p className="mt-4 text-muted-foreground">
            Bu yazi kaldirilmis olabilir ya da henuz yayinlanmamis olabilir.
          </p>
          <AppLink
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            BLOGA GERİ DÖN
          </AppLink>
        </div>
      </RevealSection>
    );
  }

  const resolvedPost = detailQuery.data;
  const coverImage = resolvedPost.coverImageUrl || DEFAULT_BLOG_COVER_IMAGE;
  const publishedLabel = formatBlogDate(resolvedPost.publishedAt ?? resolvedPost.updatedAt);

  return (
    <RevealSection as="section" className="section-shell section-space" itemSelector="[data-gsap-item]">
      <AppLink
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
        data-gsap-item
      >
        <ArrowLeft className="h-4 w-4" />
        BLOGA GERİ DÖN
      </AppLink>

      <header className="mx-auto mt-8 max-w-[48rem] pb-4 md:pb-6" data-gsap-item>
        <h1 className="max-w-[15ch] font-display text-[3.1rem] leading-[0.99] tracking-[-0.05em] md:text-[5.4rem]">
          {resolvedPost.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground md:text-[0.95rem]">
          <span>{publishedLabel}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {resolvedPost.readingTimeMinutes} dk okuma
          </span>
        </div>
      </header>

      <div className="mx-auto mt-10 max-w-6xl" data-gsap-item>
        <img
          src={coverImage}
          alt={resolvedPost.title}
          className="h-[22rem] w-full rounded-[2.25rem] border border-white/70 object-cover shadow-[0_30px_80px_-52px_rgba(46,31,19,0.42)] md:h-[30rem]"
        />
      </div>

      <div className="mx-auto mt-14 max-w-[48rem]" data-gsap-item>
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-border/80 to-transparent" />
        <BlogMarkdown content={resolvedPost.contentMarkdown} />
      </div>
    </RevealSection>
  );
}
