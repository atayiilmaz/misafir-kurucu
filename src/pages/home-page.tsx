import { RevealSection } from "@/components/gsap/reveal-section";
import { ParallaxImageSection } from "@/components/gsap/parallax-image-section";
import FeatureSection from "@/components/ui/feature-section";
import { HeroSection } from "@/components/ui/hero-section-2";
import { PricingSection } from "@/components/ui/pricing-section";
import { plans } from "@/content/programs";
import { SITE_AUTHOR, SITE_NAME, SITE_URL, absoluteUrl, useSeo } from "@/lib/seo";

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

const resourceItems = [
  "Marka kurulum ve büyütme şablonları",
  "Ürün, koleksiyon ve fiyatlandırma analiz dökümanları",
  "Numune ve üretim süreci kılavuzları",
  "Çekim, içerik ve marka dili rehberleri",
  "Satış ve lansman planları",
  "Güvenilir üretici ve tedarikçi bağlantıları",
  "Mevcut markalar için yeniden yapılandırma dökümanları",
];

export function HomePage() {
  useSeo({
    title: "Moda markası kurmak ve büyütmek için birebir danışmanlık",
    description:
      "Misafir Kurucu ile moda markanı kurmak, büyütmek veya kritik kararlarını netleştirmek için birebir çalış. Programlar, danışmanlık yapısı ve saha deneyimi aynı çatı altında.",
    path: "/",
    image: "/images/herosection.jpeg",
    keywords: [
      "moda markası danışmanlığı",
      "tekstil danışmanlığı",
      "marka kurma danışmanlığı",
      "e-ticaret danışmanlığı",
      "misafir kurucu",
    ],
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        image: absoluteUrl("/images/herosection.jpeg"),
        email: "mailto:misafirkurucu@gmail.com",
        sameAs: [
          "https://www.instagram.com/misafirkurucu/",
          "https://www.linkedin.com/in/sevincgurguzel/",
          "https://www.youtube.com/@misafirkurucu",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE_AUTHOR,
        jobTitle: "Moda markası danışmanı",
        url: `${SITE_URL}/hakkimda`,
        sameAs: [
          "https://www.instagram.com/misafirkurucu/",
          "https://www.linkedin.com/in/sevincgurguzel/",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "tr-TR",
      },
    ],
  });

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

      <ParallaxImageSection
        className="py-12 md:py-16"
        contentClassName="section-shell"
        imageSrc="/images/herosection.jpeg"
        imageClassName="object-[center_64%]"
        overlayClassName="bg-[linear-gradient(180deg,rgba(244,248,252,0.82),rgba(244,248,252,0.9))]"
        fromYPercent={-8}
        toYPercent={9}
      >
        <RevealSection
          as="div"
          className="flex min-h-[22rem] items-center justify-center py-8 md:min-h-[28rem] md:py-10"
        >
          <p
            className="mx-auto max-w-6xl text-center font-display text-[2.2rem] leading-[1.02] text-foreground md:text-[3.45rem]"
            data-gsap-item
          >
            Her marka farklıdır ve aynı yöntemlerle büyümez. Bu yüzden hazır
            bir eğitim programı sunmak yerine, markanıza özel ve birebir
            çalışarak birlikte ilerliyoruz.
          </p>
        </RevealSection>
      </ParallaxImageSection>

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
      <FeatureSection
        id="hakkimda"
        title=""
        headline="16 yılı aşkın süredir tekstil sektörünün içindeyim."
        paragraphs={[
          "Kendi mağazamı kurarak başladım; üretim, tedarik, e-ticaret ve marka kurma süreçlerinin tamamını sahada deneyimledim. Bu süreçte hem büyüttüm hem yeniden başlamak zorunda kaldım.",
          "Üretim ve e-ticaret alanında kendi iş modellerimi kurarak markalar geliştirdim ve devrettim.",
          "Bugün, edindiğim bu deneyimle markalara danışmanlık veriyorum.",
          "Amacım; teorik bilgi aktarmak değil, markaların doğru yapı ve stratejiyle büyümesini sağlamak.",
        ]}
        backgroundClassName="bg-[#eef2f6]"
      />
      <FeatureSection
        reverse
        title="NEYE YATIRIM YAPIYORSUNUZ?"
        items={investmentItems}
        imageSrc="/images/featuresection1.jpeg"
        imageAlt="Birebir çalışma modelini anlatan görsel"
        compactImage
        compactGap
      />
      <FeatureSection
        title="NE ELDE EDERSİN?"
        items={outcomeItems}
        imageSrc="/images/featuresection2.jpeg"
        imageAlt="Program kazanımlarını anlatan görsel"
        backgroundClassName="bg-[#eef2f6]"
      />
      <FeatureSection
        reverse
        title="HANGİ KAYNAKLARA ERİŞİRSİN?"
        items={resourceItems}
        imageSrc="/images/featuresection3.jpeg"
        imageAlt="Kaynaklara erişimi anlatan görsel"
        compactImage
        compactGap
      />
    </>
  );
}
