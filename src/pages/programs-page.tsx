import { Badge } from "@/components/ui/badge";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { PricingSection } from "@/components/ui/pricing-section";
import { PageIntro } from "@/components/page-intro";
import {
  accordionPrograms,
  plans,
  programDetails,
} from "@/content/site";
import { cn } from "@/lib/utils";

export function ProgramsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Programlar"
        title="İhtiyaca göre ayrılmış net mentorluk paketleri"
        description="Aşağıdaki program yapısı sayesinde ziyaretçi önce genel çerçeveyi görür, ardından kendi ihtiyacına en yakın detay sayfasına geçer."
      />

      <LandingAccordionItem
        eyebrow="Program Yapısı"
        title="Başlangıç, üretim ve lansman süreçleri için ayrılmış akış"
        description="Programlar menüsü artık ayrı sayfalara açılıyor. Buradaki özet bölüm, o sayfalara gitmeden önce genel resmi hızlıca göstermek için duruyor."
        cta={{ label: "Görüşme planlayın", href: "/gorusme-planlayin" }}
        items={accordionPrograms}
      />

      <section className="section-shell pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(programDetails).map(([slug, item], index) => (
            <article
              key={slug}
              className="rounded-[1.75rem] border border-border/70 bg-white/80 p-6 shadow-soft"
            >
              <Badge variant={index === 1 ? "secondary" : "default"}>
                Program {index + 1}
              </Badge>
              <h3 className="mt-4 font-display text-4xl leading-none">
                {item.title.replace(`Program ${index + 1} · `, "")}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
              <AppLink
                href={`/programlar/${slug}`}
                className={cn(buttonVariants({ variant: "outline" }), "mt-6")}
              >
                Detaya Git
              </AppLink>
            </article>
          ))}
        </div>
      </section>

      <PricingSection plans={plans} />
    </>
  );
}
