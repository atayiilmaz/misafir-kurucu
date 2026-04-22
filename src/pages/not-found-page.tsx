import { RevealSection } from "@/components/gsap/reveal-section";
import SubtleButton from "@/components/ui/subtle-button";
import { useSeo } from "@/lib/seo";

export function NotFoundPage() {
  useSeo({
    title: "Sayfa bulunamadı",
    description: "Aradığınız sayfa kaldırılmış olabilir veya bağlantı hatalı olabilir.",
    path: "/404",
    noindex: true,
  });

  return (
    <RevealSection
      as="section"
      className="section-shell section-space"
      itemSelector="[data-gsap-item]"
    >
      <div className="glass-panel p-10 text-center">
        <p className="section-kicker" data-gsap-item>
          404
        </p>
        <h1 className="font-display text-6xl" data-gsap-item>
          Sayfa bulunamadı
        </h1>
        <p className="mt-5 text-muted-foreground" data-gsap-item>
          İlgili içerik kaldırılmış olabilir veya bağlantı hatalı olabilir.
        </p>
        <SubtleButton
          href="/"
          size="lg"
          className="mt-8"
          data-gsap-item
        >
          Anasayfa’ya dön
        </SubtleButton>
      </div>
    </RevealSection>
  );
}
