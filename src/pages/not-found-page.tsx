import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFoundPage() {
  return (
    <RevealSection
      as="section"
      className="section-shell py-24"
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
        <AppLink
          href="/"
          className={cn(buttonVariants({ size: "lg" }), "mt-8")}
          data-gsap-item
        >
          Anasayfa’ya dön
        </AppLink>
      </div>
    </RevealSection>
  );
}
