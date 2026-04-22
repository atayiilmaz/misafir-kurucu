import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import SubtleButton from "@/components/ui/subtle-button";
import { cn } from "@/lib/utils";
import type { ProgramData } from "@/content/programs";

type ProgramShowcaseSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  programs: ProgramData[];
  compact?: boolean;
};

export function ProgramShowcaseSection({
  eyebrow,
  title,
  description,
  programs,
  compact = false,
}: ProgramShowcaseSectionProps) {
  return (
    <RevealSection
      as="section"
      className={cn("section-shell py-16 md:py-20", compact && "py-12 md:py-14")}
      id="programlar"
      itemSelector="[data-gsap-item]"
      distance={42}
    >
      <div className="flex flex-col gap-5 md:max-w-4xl" data-gsap-item>
        <div className="section-kicker">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-10 space-y-8 md:mt-14">
        {programs.map((program, index) => (
          <article
            key={program.slug}
            className="overflow-hidden rounded-[2.5rem] border border-border/60 bg-white/76 shadow-soft backdrop-blur-sm"
            data-gsap-item
          >
            <div
              className={cn(
                "grid gap-0 lg:grid-cols-[0.95fr_1.05fr]",
                index % 2 === 1 && "lg:grid-cols-[1.05fr_0.95fr]",
              )}
            >
              <div
                className={cn(
                  "order-2 px-5 py-6 md:px-8 md:py-8 lg:flex lg:flex-col lg:justify-between lg:px-10 lg:py-10",
                  index % 2 === 1 && "lg:order-1",
                )}
              >
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/72">
                    {program.order}
                  </p>
                  <h3 className="mt-4 font-display text-[2.2rem] leading-[0.99] text-foreground md:text-[3.4rem]">
                    {program.name}
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/78">
                    {program.listingSubtitle}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    {program.listingDescription}
                  </p>
                </div>

                <div className="mt-8 grid gap-3">
                  {program.teaserPoints.map((point) => (
                    <div
                      key={point}
                      className="border-t border-border/50 pt-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/72"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <SubtleButton
                    href={program.href}
                    size="lg"
                  >
                    Programı İncele
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </SubtleButton>
                </div>
              </div>

              <div
                className={cn(
                  "order-1 min-h-[21rem] overflow-hidden lg:min-h-full",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <img
                  src={program.showcaseImage}
                  alt={program.showcaseImageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
