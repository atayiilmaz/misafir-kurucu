import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFoundPage() {
  return (
    <section className="section-shell py-24">
      <div className="glass-panel p-10 text-center">
        <p className="section-kicker">404</p>
        <h1 className="font-display text-6xl">Sayfa bulunamadı</h1>
        <p className="mt-5 text-muted-foreground">
          İlgili içerik kaldırılmış olabilir veya bağlantı hatalı olabilir.
        </p>
        <AppLink href="/" className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
          Anasayfa’ya dön
        </AppLink>
      </div>
    </section>
  );
}
