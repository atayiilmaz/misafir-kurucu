import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";
import { Features } from "@/components/ui/features";
import { AppLink } from "@/components/ui/app-link";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { PricingSection } from "@/components/ui/pricing-section";
import {
  accordionPrograms,
  blogPosts,
  featureItems,
  plans,
} from "@/content/site";

export function HomePage() {
  return (
    <>
      <HeroSection
        logo={{ alt: "Misafir Kurucu", text: "Misafir Kurucu" }}
        slogan="Sevinç ile tekstil girişimciliği danışmanlığı"
        title={
          <>
            Tekstilde kendi markanı
            <br />
            <span className="text-primary">sağlam temellerle büyüt.</span>
          </>
        }
        subtitle="Sevinç olarak sektörde 16 yılı aşan deneyimimi; marka kurmak, üretim sürecini yönetmek ve sosyal medyada görünürlüğünü satışa taşımak isteyen girişimciler için uygulanabilir bir sisteme dönüştürüyorum."
        callToAction={{ text: "Programları Keşfet", href: "/#programlar" }}
        backgroundImage="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=80"
      />

      <Features
        eyebrow="Nasıl çalışıyoruz?"
        title="Danışmanlık sürecinde fikir, üretim ve satış birbirinden kopuk ilerlemez"
        features={featureItems}
      />

      <LandingAccordionItem
        eyebrow="Program Yapısı"
        title="Başlangıç, üretim ve lansman süreçleri için ayrılmış akış"
        description="Programlar anasayfada duruyor. Açılır menüden doğrudan detay sayfalarına geçebilir, buradan da genel çerçeveyi birlikte görebilirsiniz."
        cta={{ label: "Görüşme planlayın", href: "/gorusme-planlayin" }}
        items={accordionPrograms}
      />

      <PricingSection plans={plans} />

      <section className="section-shell py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker">Blog Önizleme</div>
            <h2 className="section-title">İçerik üretimini stratejiye bağlayan yazılar</h2>
          </div>
          <AppLink
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
          >
            Tüm yazıları gör
            <ArrowRight className="h-4 w-4" />
          </AppLink>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
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
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    <Icon className="h-4 w-4" />
                    Makale
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
