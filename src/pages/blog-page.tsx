import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { AppLink } from "@/components/ui/app-link";
import { blogPosts } from "@/content/site";

export function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Sosyal medya içeriklerinin derinleşmiş hali"
        description="Kısa videolarda değindiğim başlıkları burada daha geniş bağlamıyla anlatıyorum: marka kurulumundan üretim risklerine, içerikten satışa kadar."
      />

      <section className="section-shell py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.title}
                className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-soft"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-80 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    <Icon className="h-4 w-4" />
                    Makale
                  </div>
                  <h2 className="text-2xl font-semibold leading-tight">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-end">
          <AppLink
            href="/gorusme-planlayin"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
          >
            Bu konuları markana uyarlayalım
            <ArrowRight className="h-4 w-4" />
          </AppLink>
        </div>
      </section>
    </>
  );
}
