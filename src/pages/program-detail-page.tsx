import { Navigate, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { programDetails } from "@/content/site";
import { cn } from "@/lib/utils";

export function ProgramDetailPage() {
  const { slug } = useParams();
  const program = slug ? programDetails[slug as keyof typeof programDetails] : null;

  if (!program) {
    return <Navigate to="/programlar" replace />;
  }

  return (
    <>
      <PageIntro
        eyebrow="Program Detayı"
        title={program.title}
        description={program.description}
      />

      <section className="section-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <img
            src={program.image}
            alt={program.title}
            className="h-full min-h-[440px] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="glass-panel p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Bu programda ne kazanırsınız?
            </p>
            <ul className="mt-6 space-y-4">
              {program.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-7">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <AppLink
                href="/gorusme-planlayin"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Bu program için görüşme al
              </AppLink>
              <AppLink
                href="/programlar"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                Tüm programlara dön
              </AppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
