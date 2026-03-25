import { Badge } from "@/components/ui/badge";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import FeatureSection from "@/components/ui/feature-section";
import { cn } from "@/lib/utils";

export function AboutPage() {
  return (
    <>
      <section className="section-shell pb-16 pt-8 md:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl md:block" />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
              alt="Sevinç portresi"
              className="relative h-full min-h-[500px] w-full rounded-[2.5rem] object-cover shadow-soft"
            />
          </div>

          <div className="rounded-[2rem] border border-border/60 bg-white/45 p-8 backdrop-blur-sm md:p-10 lg:p-12">
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

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-white/70 p-5 shadow-sm">
                <p className="font-display text-4xl">16+</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  yıl sektör deneyimi
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white/70 p-5 shadow-sm">
                <p className="font-display text-4xl">3</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  ana program akışı
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white/70 p-5 shadow-sm">
                <p className="font-display text-4xl">1:1</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  yakın takipli mentorluk
                </p>
              </div>
            </div>

            <AppLink
              href="/gorusme-planlayin"
              className={cn(buttonVariants({ size: "lg" }), "mt-8")}
            >
              Görüşme Planlayın
            </AppLink>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-border/60 bg-white/70 p-8 shadow-soft md:p-10">
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

          <div className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-primary/10 via-white/70 to-accent/10 p-8 shadow-soft md:p-10">
            <p className="text-xs tracking-[0.24em] text-muted-foreground">
              Çalışma biçimi
            </p>
            <div className="mt-6 space-y-5">
              <div className="rounded-[1.5rem] bg-white/80 p-5">
                <p className="font-display text-3xl">01</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Mevcut durumu netleştirir, problemi gerçekten nerede yaşadığını
                  görünür hale getiririz.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white/80 p-5">
                <p className="font-display text-3xl">02</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Marka, üretim ve satış tarafını birbirinden kopuk değil tek
                  sistem içinde ele alırız.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white/80 p-5">
                <p className="font-display text-3xl">03</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Program sonunda yalnızca fikir değil, uygulanabilir bir aksiyon
                  akışı çıkarırız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
