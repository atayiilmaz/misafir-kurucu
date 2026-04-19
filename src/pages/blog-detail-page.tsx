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
import { formatBlogDate } from "@/features/blog/utils";
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

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  if (!isConfigured) {
    return (
      <RevealSection as="section" className="section-shell py-16">
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
      <RevealSection as="section" className="section-shell py-16">
        <div className="glass-panel animate-pulse p-8">
          <div className="h-8 w-32 rounded-full bg-muted" />
          <div className="mt-6 h-16 rounded-3xl bg-muted" />
          <div className="mt-4 h-5 w-2/3 rounded-full bg-muted" />
          <div className="mt-8 h-[28rem] rounded-[2rem] bg-muted" />
        </div>
      </RevealSection>
    );
  }

  if (detailQuery.isError || !detailQuery.data) {
    return (
      <RevealSection as="section" className="section-shell py-16">
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
            Bloga geri don
          </AppLink>
        </div>
      </RevealSection>
    );
  }

  const post = detailQuery.data;

  return (
    <RevealSection as="section" className="section-shell py-10" itemSelector="[data-gsap-item]">
      <AppLink
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
        data-gsap-item
      >
        <ArrowLeft className="h-4 w-4" />
        Bloga geri don
      </AppLink>

      <div className="mt-6 glass-panel overflow-hidden" data-gsap-item>
        {post.coverImageUrl ? (
          <img
            src={post.coverImageUrl}
            alt={post.title}
            className="h-[22rem] w-full object-cover md:h-[30rem]"
          />
        ) : null}

          <div className="p-8 md:p-10">
            <h1 className="font-display text-[2.85rem] leading-[0.98] md:text-[4.35rem]">
              {post.title}
            </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{formatBlogDate(post.publishedAt ?? post.updatedAt)}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {post.readingTimeMinutes} dk okuma
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl" data-gsap-item>
        <BlogMarkdown content={post.contentMarkdown} />
      </div>
    </RevealSection>
  );
}
