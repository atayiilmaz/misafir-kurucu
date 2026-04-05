import { Badge } from "@/components/ui/badge";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import FeatureSection from "@/components/ui/feature-section";
import { cn } from "@/lib/utils";

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
        className="section-shell pb-16 pt-8 md:pt-10"
        itemSelector="[data-gsap-item]"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div className="relative" data-gsap-item>
            <div className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl md:block" />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
              alt="Sevinç portresi"
              className="relative h-full min-h-[500px] w-full rounded-[2.5rem] object-cover shadow-soft"
            />
          </div>

          <div
            className="rounded-[2rem] border border-border/60 bg-white/45 p-8 backdrop-blur-sm md:p-10 lg:p-12"
            data-gsap-item
          >
            <Badge>Hakkımda</Badge>
            <h1 className="mt-4 font-display text-[3.1rem] leading-[0.95] md:text-[4.4rem]">
              Sevinç ile tekstilde fikirden üretime uzanan gerçek saha bilgisi
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Yıllar içinde üretim, koleksiyon, tedarik, satış ve görünürlük
              tarafında sahada öğrendiğim konuları; kendi markasını kurmak
              isteyenler için daha net, uygulanabilir ve takip edilebilir hale
              getiriyorum.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Amacım ilham verip geri çekilmek değil. Ne yapılacağını, hangi
              sırayla yapılacağını ve nerede hata verme riskinin arttığını açık
              biçimde göstermek.
            </p>

            <AppLink
              href="/gorusme-planlayin"
              className={cn(buttonVariants({ size: "lg" }), "mt-8")}
            >
              Görüşme Planlayın
            </AppLink>
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
      />

      <RevealSection
        as="section"
        className="section-shell py-20"
        itemSelector="[data-gsap-item]"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="rounded-[2rem] border border-border/60 bg-white/70 p-8 shadow-soft md:p-10"
            data-gsap-item
          >
            <Badge>Yaklaşımım</Badge>
            <h2 className="mt-4 font-display text-5xl leading-none">
              İlham değil, uygulanabilir netlik
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              İçerik üretirken motivasyon vermek tek başına yeterli değil.
              Girişimcinin neyi ne sırayla yapacağını, hangi kararın neden
              öncelikli olduğunu ve sahada nerede hata verebileceğini açıkça
              görmek gerekiyor.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Sevinç olarak çalışma biçimim; sahadaki karmaşayı sadeleştirmek,
              doğru öncelikleri belirlemek ve girişimciyi uygulanabilir bir yol
              haritasıyla bırakmak üzerine kurulu.
            </p>
          </div>

          <div className="space-y-5">
            {/* <p className="text-xs tracking-[0.24em] text-muted-foreground">
              Çalışma biçimi
            </p> */}
            {workingMethodItems.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.75rem] border border-border/60 bg-gradient-to-br from-primary/10 via-white/90 to-accent/10 p-6 shadow-soft md:p-7"
                data-gsap-item
              >
                <p className="font-display text-[2.4rem] leading-none">
                  {item.step}
                </p>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
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
