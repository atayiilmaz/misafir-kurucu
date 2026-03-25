import { Badge } from "@/components/ui/badge";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { PageIntro } from "@/components/page-intro";
import FeatureSection from "@/components/ui/feature-section";
import { cn } from "@/lib/utils";

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Hakkımda"
        title="Sevinç olarak tekstil sahasında geçen yılları girişimciye çevrilebilir bir sisteme dönüştürüyorum"
        description="Üretim, koleksiyon, tedarik, satış ve görünürlük tarafında sahada öğrendiğim konuları; marka kurmak isteyen kişiler için sadeleştiriyor, uygulanabilir hale getiriyor ve birlikte takip ediyoruz."
      />

      <FeatureSection />

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80"
            alt="Mentor portre"
            className="h-full min-h-[420px] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="glass-panel p-8 md:p-10">
            <Badge>Yaklaşımım</Badge>
            <h2 className="mt-4 font-display text-5xl leading-none">
              İlham değil, uygulanabilir netlik
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              İçerik üretirken motivasyon vermek tek başına yeterli değil.
              Girişimcinin neyi ne sırayla yapacağını, hangi kararın neden
              öncelikli olduğunu ve sahada nerede hata verebileceğini açıkça
              görmek gerekiyor. Sevinç olarak çalışma biçimim tam olarak bunun
              üzerine kurulu.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-muted p-5">
                <p className="font-display text-4xl">16+</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  yıl sektör deneyimi
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-muted p-5">
                <p className="font-display text-4xl">3</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  ana program akışı
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-muted p-5">
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
    </>
  );
}
