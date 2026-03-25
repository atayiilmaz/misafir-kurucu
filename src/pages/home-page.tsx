import { ArrowRight, FileCheck2 } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";
import { Features } from "@/components/ui/features";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppLink } from "@/components/ui/app-link";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { PricingSection } from "@/components/ui/pricing-section";
import { cn } from "@/lib/utils";
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

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel p-8 md:p-10">
            <Badge variant="secondary">Hızlı Bakış</Badge>
            <h2 className="mt-4 font-display text-5xl leading-none">
              Bu sitede sizi bekleyen sayfalar hazır
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Artık header menüsündeki her başlık ayrı sayfaya gidiyor. Böylece
              ziyaretçi Hakkımda, Blog ve SSS içeriklerini bağımsız bir akışla
              gezebiliyor. Programlar ise anasayfada görünür kalırken detayları
              ayrı sayfalara açılıyor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AppLink
                href="/hakkimda"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Hakkımda Sayfası
              </AppLink>
              <AppLink
                href="/#programlar"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                Programlara İn
              </AppLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-white/80 p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              İlk görüşmede netleştirdiğimiz başlıklar
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7">
              <li className="flex gap-3">
                <FileCheck2 className="mt-1 h-4 w-4 text-primary" />
                <span>Marka fikrinizin hangi aşamada olduğu</span>
              </li>
              <li className="flex gap-3">
                <FileCheck2 className="mt-1 h-4 w-4 text-primary" />
                <span>Üretim planındaki kritik eksikler</span>
              </li>
              <li className="flex gap-3">
                <FileCheck2 className="mt-1 h-4 w-4 text-primary" />
                <span>Satış ve içerik tarafında ilk hedefler</span>
              </li>
            </ul>
            <AppLink
              href="/gorusme-planlayin"
              className={cn(buttonVariants(), "mt-8")}
            >
              Görüşme Planlayın
            </AppLink>
          </div>
        </div>
      </section>

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
