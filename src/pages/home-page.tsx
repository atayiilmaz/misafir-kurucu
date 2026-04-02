import { RevealSection } from "@/components/gsap/reveal-section";
import FeatureSection from "@/components/ui/feature-section";
import { HeroSection } from "@/components/ui/hero-section-2";
import { PricingSection } from "@/components/ui/pricing-section";
import { plans } from "@/content/site";

const investmentItems = [
  "Özel birebir Zoom strateji görüşmeleri",
  "Kaynaklar ve çalışma sayfaları",
  "Günlük sohbet desteği",
  "Markanın tüm kararlarını yöneten net bir marka çerçevesi",
  "Ürün ve koleksiyon oluşturma yapıları",
  "Üretim ve tedarik ağına yönlendirme",
  "Satış ve lansman planları",
  "Sürekli geri bildirim ve karar desteği",
];

const outcomeItems = [
  "Tek başına karar almak zorunda kalmazsın",
  "Deneme-yanılma yerine sistemle ilerlersin",
  "Kararsız kalmazsın, kritik kararları hızlı ve net alırsın",
  "Üretim ve tedarikte doğru insanlara ulaşırsın",
  "Süreç boyunca yalnız ilerlemezsin, sürekli geri bildirim ve yönlendirme alırsın",
];

export function HomePage() {
  return (
    <>
      <HeroSection
        logo={{ alt: "Misafir Kurucu", text: "Misafir Kurucu" }}
        slogan="Merhaba, ben Sevinç."
        title={
          <>
            <span className="text-primary">Kazançlı bir moda markası</span>{" "}
            oluşturmanız için yanınızdayım.
          </>
        }
        subtitle={`İster yeni başlıyor olun, ister markanızı büyütüyor olun; bu süreci netleştiriyor ve satış getiren bir yapıya dönüştürüyorum.
Bu süreçte ben misafirim, siz kurucusunuz.`}
        callToAction={{ text: "Programları Keşfet", href: "/#programlar" }}
        backgroundImage="/images/herosection.jpeg"
      />

      <RevealSection as="section" className="bg-[#eef2f6] py-12 md:py-16">
        <div className="section-shell">
          <p
            className="mx-auto max-w-6xl text-center font-display text-[2.2rem] leading-[1.02] text-foreground md:text-[3.45rem]"
            data-gsap-item
          >
            Her marka farklıdır ve aynı yöntemlerle büyümez.
            <br />
            Bu yüzden hazır bir eğitim programı sunmak yerine, markanıza
            <br />
            özel ve birebir çalışarak birlikte ilerliyoruz.
          </p>
        </div>
      </RevealSection>

      {/*
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
      */}

      <PricingSection plans={plans} />
      <FeatureSection id="hakkimda" />
      <FeatureSection
        reverse
        title="NEYE YATIRIM YAPIYORSUNUZ"
        items={investmentItems}
        imageSrc="/images/featuresection1.jpeg"
        imageAlt="Strateji ve yatırım sürecini anlatan görsel"
        backgroundClassName="bg-[#eef2f6]"
        compactImage
        compactGap
      />
      <FeatureSection
        title="NE ELDE EDERSİN?"
        items={outcomeItems}
        imageSrc="/images/featuresection2.jpeg"
        imageAlt="Program kazanımlarını anlatan görsel"
      />

      {/*
      <RevealSection
        as="section"
        className="section-shell py-20"
        itemSelector="[data-gsap-item]"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div data-gsap-item>
            <div className="section-kicker">Blog Önizleme</div>
            <h2 className="section-title">İçerik üretimini stratejiye bağlayan yazılar</h2>
          </div>
          <AppLink
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
            data-gsap-item
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
                data-gsap-item
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
      </RevealSection>
      */}
    </>
  );
}
