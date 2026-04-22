import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import { ParallaxImageSection } from "@/components/gsap/parallax-image-section";
import { cn } from "@/lib/utils";
import { AppLink } from "@/components/ui/app-link";
import { SITE_AUTHOR, SITE_NAME, SITE_URL, absoluteUrl, useSeo } from "@/lib/seo";

const sectionTitleClass =
  "font-display text-[2.2rem] leading-[1.02] text-foreground sm:text-[2.65rem] md:text-[3.35rem]";

const bodyCopyClass =
  "text-[1.02rem] leading-8 text-muted-foreground md:text-[1.08rem] md:leading-8";

const storyParagraphsLeft = [
  "Dört yıl boyunca; ürün seçimi ve görsel düzenlemeden dijital pazarlama ve finans yönetimine kadar bir işletmenin tüm operasyonel süreçlerini bizzat yönettim. Bu süreci, markayı kârlı bir noktaya getirip başarılı bir şekilde satarak tamamladım.",
  "Sonra rotamı üretime çevirdim. Atölye süreçlerinin her aşamasında yer alarak; hem kendi markam için yüksek hacimli üretimler gerçekleştirdim hem de toptan firmaları ve tasarımcı markalar için üretim yönetimi üstlendim.",
];

const storyParagraphsRight = [
  "Bu yoğun tempo, bana sadece üretim tekniklerini değil, sürdürülebilir bir iş modelinin sınırlarını da öğretti. Operasyonel verimliliği ön plana alarak iş modelimi tamamen internet odaklı hale getirdim ve ikinci markamı da başarıyla yeni sahiplerine teslim ettim.",
  "Girişimciliğin getirdiği o belirsizlik hissini, her kararı tek başına omuzlamanın yükünü çok iyi biliyorum. Aynı anda her şeyi yönetmeye çalışmanın, sürekli doğru kararı aramanın ve “yeterince iyi mi yapıyorum?” sorusuyla yaşamanın nasıl bir his olduğunu biliyorum. Çünkü ben de o yollardan geçtim.",
  "Bu yüzden size sadece teorik tavsiyeler sunmuyorum; birlikte uygulanabilir bir plan oluşturuyor ve bu yolculuğun her adımında bizzat yanınızda yer alıyorum.",
];

const proofItems = [
  {
    value: "2 Başarılı Satış",
    description:
      "Sıfırdan kurup kârlı bir noktaya getirdiğim 2 farklı moda markasını başarıyla sattım. Bir markanın nasıl büyütüleceğini ve ne zaman nakde dönüştürüleceğini bizzat deneyimledim.",
  },
  {
    value: "16+ Yıllık Sektör Tecrübesi",
    description:
      "Moda dünyasının hem vitrininde hem mutfağında geçen 16 yılı aşkın sürede, sektörün tüm değişimlerine ve zorluklarına şahitlik ettim.",
  },
  {
    value: "4 Yıl Mağazacılık Deneyimi",
    description:
      "İstanbul Kadıköy’de ürün seçiminden finansal yönetime kadar bir işletmenin tüm operasyonunu bizzat yönettim.",
  },
  {
    value: "100.000 Adet Üretim Yönetimi",
    description:
      "Atölye süreçlerinin her aşamasında yer alarak, hem kendi markalarım hem de tasarımcı markalar için bugüne kadar 100 bin adetin üzerinde üretimin planlamasını ve yönetimini üstlendim.",
  },
];

const todayItems = [
  "Bugün, bu iki farklı marka yolculuğundan edindiğim paha biçilmez saha tecrübesiyle üçüncü markamı inşa ediyorum. Aynı zamanda, benzer yollardan geçen moda girişimcilerine; bizzat deneyimlenmiş stratejilerle rehberlik ediyorum.",
  "Moda markasını ciddiye alan girişimcilere; teoriyi değil, gerçek sahayı öğretiyorum.",
  "En büyük hayalim; Türkiye’den doğacak bir dünya markasında pay sahibi olmak ve şirin bir sahil kasabasında, bahçeli bir evde yaşamak.",
];

export function AboutPage() {
  useSeo({
    title: "Hakkımda",
    description:
      "Sevinç Gürgüzel'in mağazacılık, üretim ve marka kurma deneyiminden beslenen saha hikâyesini ve Misafir Kurucu yaklaşımını keşfedin.",
    path: "/hakkimda",
    image: "/images/aboutme.jpeg",
    keywords: [
      "sevinç gürgüzel",
      "misafir kurucu hakkında",
      "moda markası danışmanı",
      "tekstil üretim deneyimi",
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: `Hakkımda | ${SITE_NAME}`,
      url: `${SITE_URL}/hakkimda`,
      inLanguage: "tr-TR",
      about: {
        "@type": "Person",
        name: SITE_AUTHOR,
        image: absoluteUrl("/images/aboutme.jpeg"),
        sameAs: [
          "https://www.instagram.com/misafirkurucu/",
          "https://www.linkedin.com/in/sevincgurguzel/",
        ],
      },
    },
  });

  return (
    <>
      <RevealSection
        as="section"
        className="about-top section-shell pb-10 pt-6 md:pt-8 lg:flex lg:min-h-[calc(100svh-5.75rem)] lg:items-center lg:pb-8 xl:pb-12"
        itemSelector="[data-gsap-item]"
        start="top 88%"
        stagger={0.08}
        distance={28}
      >
        <div className="about-top-grid grid items-center gap-6 md:gap-8 lg:grid-cols-[0.64fr_1.16fr] lg:gap-14 xl:grid-cols-[0.7fr_1.3fr] xl:gap-20">
          <div
            className="about-top-media-wrap relative w-full lg:max-w-[24rem] xl:max-w-[28rem]"
            data-gsap-item
          >
            <div className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl md:block" />
            <img
              src="/images/aboutme.jpeg"
              alt="Sevinç portresi"
              className="about-top-media relative aspect-[4/5] w-full rounded-[2.25rem] object-cover shadow-soft"
            />
          </div>

          <div
            className="about-top-card flex flex-col justify-center lg:min-h-[26rem] lg:justify-self-end lg:pl-14 xl:min-h-[30rem] xl:pl-20"
            data-gsap-item
          >
            <div className="ml-auto flex max-w-[43rem] flex-col justify-center">
              <h1 className="about-top-title font-display text-[2.3rem] leading-[0.99] sm:text-[2.75rem] md:text-[3.2rem] lg:text-[3.55rem] xl:text-[3.95rem]">
                Dünyanın daha fazla seri üretime değil; anlamlı, özgün ve değer yaratan bağımsız markalara ihtiyacı olduğuna inanıyorum.
              </h1>
              <p className="about-top-copy mt-5 max-w-2xl text-[1.06rem] leading-8 text-muted-foreground md:text-[1.12rem] md:leading-8">
                Ben de bu boşluğu dolduran markaların ortaya çıkmasına katkı sağlıyorum.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        className="bg-[#eef2f6] py-14 md:py-20"
        itemSelector="[data-gsap-item]"
        start="top 84%"
        stagger={0.08}
        distance={26}
      >
        <div className="section-shell">
          <div className="mx-auto max-w-[78rem]">
            <div className="text-center" data-gsap-item>
              <p className="font-display text-[1.1rem] italic text-primary md:text-[1.35rem]">
                HAKKIMDA
              </p>
              <h2 className="mx-auto mt-5 max-w-4xl font-display text-[2.2rem] leading-[1.02] text-foreground sm:text-[2.65rem] md:text-[3.35rem]">
                Yolculuğum, İstanbul Kadıköy’de kadın giyim mağazası açarak başladı.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="space-y-5 text-[1.02rem] leading-8 text-foreground/78 md:text-[1.08rem] md:leading-8">
                {storyParagraphsLeft.map((paragraph) => (
                  <p key={paragraph} data-gsap-item>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-5 text-[1.02rem] leading-8 text-foreground/78 md:text-[1.08rem] md:leading-8">
                {storyParagraphsRight.map((paragraph) => (
                  <p key={paragraph} data-gsap-item>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        className="section-shell py-14 md:py-20"
        itemSelector="[data-gsap-item]"
        start="top 84%"
        stagger={0.08}
        distance={26}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {proofItems.map((item) => (
            <article
              key={item.value}
              className="group relative overflow-hidden rounded-[1.9rem] border border-border/60 bg-[linear-gradient(180deg,rgba(255,252,248,0.96),rgba(255,255,255,0.92))] p-6 shadow-[0_12px_30px_-24px_rgba(62,48,38,0.22)] transition-[transform,box-shadow,border-color,background] duration-300 ease-out hover:-translate-y-1 hover:border-primary/20 hover:bg-[linear-gradient(180deg,rgba(255,250,245,0.98),rgba(255,255,255,0.97))] hover:shadow-[0_24px_44px_-28px_rgba(62,48,38,0.3)] md:p-7"
              data-gsap-item
            >
              <div
                className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(255,121,62,0.12),transparent_68%)] opacity-80 blur-2xl transition-[transform,opacity] duration-500 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="relative">
              <p className="font-display text-[1.55rem] leading-[1.04] text-foreground transition-colors duration-300 group-hover:text-primary md:text-[1.85rem]">
                {item.value}
              </p>
              <div className="mt-4 h-px w-16 bg-[linear-gradient(90deg,rgba(255,121,62,0.45),rgba(255,121,62,0.12),transparent)] transition-all duration-300 group-hover:w-24" />
              <p className={["mt-4", bodyCopyClass].join(" ")}>
                {item.description}
              </p>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <ParallaxImageSection
        className="py-10 md:py-14"
        contentClassName="section-shell"
        imageSrc="/images/aboutme.jpeg"
        imageClassName="object-[center_32%]"
        overlayClassName="bg-[linear-gradient(180deg,rgba(240,245,254,0.82),rgba(246,248,253,0.9))]"
        fromYPercent={-7}
        toYPercent={8}
      >
        <RevealSection
          as="div"
          className="py-2 md:py-4"
          itemSelector="[data-gsap-item]"
          start="top 84%"
          stagger={0.08}
          distance={26}
        >
          <AppLink
            href="https://www.instagram.com/misafirkurucu/"
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[13rem] items-center justify-between gap-6 border-b border-primary/16 pb-2 text-foreground md:min-h-[15rem]"
            data-gsap-item
          >
            <span className="origin-left font-display text-[1.95rem] leading-[1.04] transition-transform duration-300 will-change-transform group-hover:scale-[1.03] md:text-[2.8rem]">
              Kariyerim ve saha yolculuğum hakkında daha fazla bilgiyi Instagram profilimde görebilirsiniz.
            </span>
            <span className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </AppLink>
        </RevealSection>
      </ParallaxImageSection>

      <RevealSection
        as="section"
        className="section-shell py-14 md:py-20"
        itemSelector="[data-gsap-item]"
        start="top 84%"
        stagger={0.08}
        distance={26}
      >
        <div className="max-w-[64rem]" data-gsap-item>
          <h2 className={sectionTitleClass}>
            Bugün Neredeyim?
          </h2>

          <div className="mt-6 space-y-4">
            {todayItems.map((item) => (
              <p
                key={item}
                className={bodyCopyClass}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
