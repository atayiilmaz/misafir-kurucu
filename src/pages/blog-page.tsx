import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, BookOpenText } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { AppLink } from "@/components/ui/app-link";
import { RevealSection } from "@/components/gsap/reveal-section";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogPagination } from "@/components/blog/blog-pagination";
import {
  BLOG_LIST_CACHE_TTL,
  BLOG_PAGE_SIZE,
  BLOG_QUERY_GC_TIME,
  fetchPublishedBlogPosts,
  getNormalizedPageParam,
} from "@/features/blog/api";
import { SITE_NAME, SITE_URL, absoluteUrl, useSeo } from "@/lib/seo";
import { hasSupabaseConfig } from "@/lib/supabase";
import { useSearchParams } from "react-router-dom";

export function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = getNormalizedPageParam(searchParams.get("page"));
  const isConfigured = hasSupabaseConfig();
  useSeo({
    title: "Blog",
    description:
      "Moda markası kurma, büyütme, konumlandırma, üretim ve satış stratejileri üzerine derinleştirilmiş içerikleri Misafir Kurucu blogunda keşfedin.",
    path: currentPage > 1 ? `/blog?page=${currentPage}` : "/blog",
    image: "/images/herosection.jpeg",
    keywords: [
      "moda markası blog",
      "tekstil blog",
      "satış stratejisi",
      "marka konumlandırma",
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${SITE_NAME} Blog`,
      url: `${SITE_URL}/blog`,
      inLanguage: "tr-TR",
      image: absoluteUrl("/images/herosection.jpeg"),
    },
  });
  const blogQuery = useQuery({
    queryKey: ["blog", "list", currentPage],
    queryFn: () => fetchPublishedBlogPosts(currentPage),
    staleTime: BLOG_LIST_CACHE_TTL,
    gcTime: BLOG_QUERY_GC_TIME,
    enabled: isConfigured,
  });

  useEffect(() => {
    const rawPage = searchParams.get("page");

    if (rawPage === null) {
      return;
    }

    if (String(currentPage) !== rawPage) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set("page", String(currentPage));
      setSearchParams(nextParams, { replace: true });
    }
  }, [currentPage, searchParams, setSearchParams]);

  const posts = blogQuery.data?.items ?? [];
  const totalPages = blogQuery.data?.totalPages ?? 1;

  return (
    <>
      <PageIntro
        title="Sosyal medya içeriklerinin derinleşmiş hali"
        description="Kısa videolarda değindiğim başlıkları burada daha geniş bağlamıyla anlatıyorum: marka kurulumundan üretim risklerine, içerikten satışa kadar."
      />

      <RevealSection
        as="section"
        className="section-shell pb-20 pt-6 md:pb-28 md:pt-8"
        itemSelector="[data-gsap-item]"
      >
        {!isConfigured ? (
          <div className="glass-panel p-8 text-center" data-gsap-item>
            <p className="section-kicker">Kurulum Gerekli</p>
            <h2 className="font-display text-4xl">Supabase bilgileri eksik</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Blog&apos;u çalıştırmak için <code className="text-primary">VITE_SUPABASE_URL</code> ve{" "}
              <code className="text-primary">VITE_SUPABASE_ANON_KEY</code> değişkenlerini tanımlayın.
            </p>
          </div>
        ) : blogQuery.isLoading ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {Array.from({ length: BLOG_PAGE_SIZE }).map((_, index) => (
              <div
                key={index}
                className="h-[28rem] animate-pulse rounded-[2rem] bg-white/70 shadow-soft"
                data-gsap-item
              />
            ))}
          </div>
        ) : blogQuery.isError ? (
          <div className="glass-panel p-8 text-center" data-gsap-item>
            <p className="section-kicker">Blog</p>
            <h2 className="font-display text-4xl">Yazılar yüklenemedi</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {(blogQuery.error as Error).message}
            </p>
          </div>
        ) : posts.length === 0 ? (
          <div className="glass-panel p-8 text-center" data-gsap-item>
            <BookOpenText className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-4xl">Henüz yayınlanmış yazı yok</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Yeni yazılar yayınlandığında burada listelenecek.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <BlogPagination
              className="mt-10"
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        )}

        <div className="mt-10 flex justify-end">
          <AppLink
            href="/gorusme-planlayin"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
            data-gsap-item
          >
            Bu konuları markana uyarlayalım
            <ArrowRight className="h-4 w-4" />
          </AppLink>
        </div>
      </RevealSection>
    </>
  );
}
