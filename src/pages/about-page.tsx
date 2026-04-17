import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/gsap/reveal-section";
import SubtleButton from "@/components/ui/subtle-button";
import FeatureSection from "@/components/ui/feature-section";

const workingMethodItems = [
  {
    step: "01",
    text: "Mevcut durumu netleştirir, problemi gerçekten nerede yaşadığını görünür hale getiririz.",
  },
  {
    step: "02",
    text: "Marka, üretim ve satış tarafını birbirinden kopuk değil tek sistem içinde ele alırız.",
  },
  {
    step: "03",
    text: "Program sonunda yalnızca fikir değil, uygulanabilir bir aksiyon akışı çıkarırız.",
  },
];

export function AboutPage() {
  return (
    <>
      <RevealSection
        as="section"
        className="about-top section-shell pb-12 pt-6 md:pt-8 lg:flex lg:min-h-[calc(100svh-5.75rem)] lg:items-center lg:pb-8 xl:pb-16"
        itemSelector="[data-gsap-item]"
      >
        <div className="about-top-grid grid items-center gap-6 md:gap-8 lg:grid-cols-[0.72fr_1.08fr] lg:gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-14">
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
            className="about-top-card rounded-[2rem] border border-border/60 bg-white/45 p-6 backdrop-blur-sm md:p-8 lg:p-8 xl:p-12"
            data-gsap-item
          >
            <h1 className="about-top-title mt-4 font-display text-[2.45rem] leading-[0.96] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem]">
              Sevinç ile tekstilde fikirden üretime uzanan gerçek saha bilgisi
            </h1>
            <p className="about-top-copy mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:mt-6 md:text-[1.05rem] md:leading-8">
              Yıllar içinde üretim, koleksiyon, tedarik, satış ve görünürlük
              tarafında sahada öğrendiğim konuları; kendi markasını kurmak
              isteyenler için daha net, uygulanabilir ve takip edilebilir hale
              getiriyorum.
            </p>
            <p className="about-top-copy mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted-foreground md:text-base md:leading-8">
              Amacım ilham verip geri çekilmek değil. Ne yapılacağını, hangi
              sırayla yapılacağını ve nerede hata verme riskinin arttığını açık
              biçimde göstermek.
            </p>

            <SubtleButton
              href="/gorusme-planlayin"
              size="lg"
              className="about-top-action mt-8"
            >
              Görüşme Planlayın
            </SubtleButton>
          </div>
        </div>
      </RevealSection>

      <FeatureSection
        title=""
        headline="16 yılı aşkın süredir tekstil sektörünün içindeyim."
        paragraphs={[
          "Kendi mağazamı kurarak başladım; üretim, tedarik, e-ticaret ve marka kurma süreçlerinin tamamını sahada deneyimledim. Bu süreçte hem büyüttüm hem yeniden başlamak zorunda kaldım.",
          "Üretim ve e-ticaret alanında kendi iş modellerimi kurarak markalar geliştirdim ve devrettim.",
          "Bugün, edindiğim bu deneyimle markalara danışmanlık veriyorum.",
          "Amacım; teorik bilgi aktarmak değil, markaların doğru yapı ve stratejiyle büyümesini sağlamak.",
        ]}
        reverse
        backgroundClassName="bg-[#eef2f6]"
      />

      <RevealSection
        as="section"
        className="section-shell py-14 md:py-20"
        itemSelector="[data-gsap-item]"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="rounded-[2rem] border border-border/60 bg-white/70 p-6 shadow-soft md:p-10"
            data-gsap-item
          >
            <Badge>Yaklaşımım</Badge>
            <h2 className="mt-4 font-display text-[2.3rem] leading-[0.95] sm:text-[2.7rem] md:text-5xl">
              İlham değil, uygulanabilir netlik
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-muted-foreground md:text-base md:leading-8">
              İçerik üretirken motivasyon vermek tek başına yeterli değil.
              Girişimcinin neyi ne sırayla yapacağını, hangi kararın neden
              öncelikli olduğunu ve sahada nerede hata verebileceğini açıkça
              görmek gerekiyor.
            </p>
            <p className="mt-4 text-[0.98rem] leading-7 text-muted-foreground md:text-base md:leading-8">
              Sevinç olarak çalışma biçimim; sahadaki karmaşayı sadeleştirmek,
              doğru öncelikleri belirlemek ve girişimciyi uygulanabilir bir yol
              haritasıyla bırakmak üzerine kurulu.
            </p>
          </div>

          <div className="space-y-5">
            {workingMethodItems.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.75rem] border border-border/60 bg-gradient-to-br from-primary/10 via-white/90 to-accent/10 p-5 shadow-soft md:p-7"
                data-gsap-item
              >
                <p className="font-display text-[2.1rem] leading-none md:text-[2.4rem]">
                  {item.step}
                </p>
                <p className="mt-3 text-[0.98rem] leading-7 text-muted-foreground md:mt-4 md:text-base md:leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
