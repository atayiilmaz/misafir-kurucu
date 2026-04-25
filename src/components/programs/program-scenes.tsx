import { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, MoveRight } from "lucide-react";
import SubtleButton from "@/components/ui/subtle-button";
import { cn } from "@/lib/utils";
import type {
  ProgramAnalysisMode,
  ProgramBenefitCard,
  ProgramData,
  ProgramPackageItem,
  ProgramProcessStep,
} from "@/content/programs";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ProgramHeroSceneProps = {
  program: ProgramData;
};

type ProgramBenefitCardsSceneProps = {
  title: string;
  intro?: string[];
  cards: ProgramBenefitCard[];
  outro?: string[];
};

type ProgramListSceneProps = {
  title: string;
  items: string[];
  intro?: string[];
  image?: string;
  imageAlt?: string;
  dark?: boolean;
  imageOnRight?: boolean;
};

type ProgramSplitListSceneProps = {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
};

type ProgramPackageSceneProps = {
  title: string;
  items: ProgramPackageItem[];
  image?: string;
  imageAlt?: string;
};

type ProgramNarrativeSceneProps = {
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imageOnRight?: boolean;
};

type ProgramSupportSceneProps = {
  title: string;
  columns: Array<{
    heading?: string;
    items: string[];
  }>;
  image?: string;
  imageAlt?: string;
};

type ProgramProcessSceneProps = {
  title: string;
  intro: string[];
  steps: ProgramProcessStep[];
  image?: string;
  imageAlt?: string;
};

type ProgramAnalysisModesSceneProps = {
  title: string;
  columns: ProgramAnalysisMode[];
};

type ProgramFinalCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export function ProgramHeroScene({ program }: ProgramHeroSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const tickerRef = useRef<HTMLDivElement | null>(null);
  const tickerItems = useMemo(
    () => [...program.hero.ticker, ...program.hero.ticker],
    [program.hero.ticker],
  );
  const subtitleWords = program.hero.subtitle.split(" ");
  const accentWord =
    program.slug === "program-3" ? subtitleWords[subtitleWords.length - 1] : null;
  const subtitleLead = accentWord
    ? subtitleWords.slice(0, -1).join(" ")
    : program.hero.subtitle;
  const descriptionParagraphs = program.hero.description
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

  useGSAP(
    () => {
      const root = rootRef.current;
      const ticker = tickerRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          if (conditions?.reduce) {
            gsap.set(
              [
                "[data-hero-word]",
                "[data-hero-copy]",
                "[data-hero-media]",
                "[data-hero-marquee]",
              ],
              { autoAlpha: 1, y: 0, clearProps: "all" },
            );
            return;
          }

          const timeline = gsap.timeline({
            defaults: { duration: 0.95, ease: "power3.out" },
          });

          timeline
            .from("[data-hero-word]", {
              yPercent: 120,
              stagger: 0.045,
              duration: 1.05,
            })
            .from(
              "[data-hero-copy]",
              {
                autoAlpha: 0,
                y: 34,
                stagger: 0.12,
              },
              0.18,
            )
            .from(
              "[data-hero-media]",
              {
                autoAlpha: 0,
                scale: 1.08,
                rotate: -2,
                clipPath: "inset(14% 10% 16% 10%)",
                duration: 1.3,
              },
              0.08,
            )
            .from(
              "[data-hero-marquee]",
              {
                autoAlpha: 0,
                y: 32,
              },
              0.54,
            );

          if (ticker) {
            gsap.to(ticker, {
              xPercent: -50,
              duration: 26,
              ease: "none",
              repeat: -1,
            });
          }

          gsap.fromTo(
            "[data-hero-media-inner]",
            { scale: 1.12, yPercent: -4 },
            {
              scale: 1,
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="border-b border-foreground/10 bg-[#fef5ed] pb-0 pt-0 text-foreground"
    >
      <div className="grid w-full lg:min-h-[calc(100svh-4.35rem)] lg:grid-cols-2">
        <div className="flex">
          <div className="flex h-full w-full flex-col justify-center px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20">
            <div className="max-w-4xl overflow-hidden">
              <h1 className="max-w-[11.5ch] text-[2.35rem] leading-[0.98] text-foreground sm:text-[3.2rem] md:text-[4.5rem] md:leading-[0.95] lg:text-[4.5rem]">
                <span
                  className={cn("font-display", program.slug === "program-3" && "tracking-[-0.015em]")}
                  data-hero-word
                >
                  {subtitleLead}
                </span>
                {accentWord ? (
                  <>
                    <br />
                    <span
                      className="font-display text-primary"
                      data-hero-word
                    >
                      {accentWord}
                    </span>
                  </>
                ) : null}
              </h1>
            </div>
            <div className="mt-10 max-w-[37rem] space-y-5">
              {descriptionParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[1rem] leading-8 text-foreground/72 md:text-[1.02rem]"
                  data-hero-copy
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {program.slug === "program-3" ? (
              <div className="mt-12 max-w-[37rem]" data-hero-copy>
                <div className="h-px w-full bg-[linear-gradient(90deg,rgba(43,31,22,0.2),rgba(43,31,22,0.12))]" />
                <div className="grid gap-7 pt-6 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <p className="font-display text-[2.05rem] leading-none text-foreground">
                      16
                    </p>
                    <p className="mt-4 text-[0.68rem] uppercase tracking-[0.22em] text-foreground/42 md:text-[0.72rem]">
                      Yıl sektör deneyimi
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[2.05rem] leading-none text-foreground">
                      90'
                    </p>
                    <p className="mt-4 text-[0.68rem] uppercase tracking-[0.22em] text-foreground/42 md:text-[0.72rem]">
                      Odaklı seans
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[2.05rem] leading-none text-foreground">
                      Esnek
                    </p>
                    <p className="mt-4 text-[0.68rem] uppercase tracking-[0.22em] text-foreground/42 md:text-[0.72rem]">
                      İhtiyaca göre süreç
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="mt-10 h-px w-full max-w-[37rem] bg-foreground/12"
                data-hero-copy
              />
            )}
            <div className="mt-10" data-hero-copy>
              <SubtleButton href="/gorusme-planlayin" size="lg">
                {program.hero.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </SubtleButton>
            </div>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:min-h-full" data-hero-media>
          <img
            src={program.heroImage}
            alt={program.heroImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            data-hero-media-inner
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(24,18,15,0.06),rgba(24,18,15,0.18))]" />
        </div>
      </div>

      <div
        className="w-full overflow-hidden border-b border-foreground/8 border-t border-foreground/8 bg-[#f5e6d8] py-5 md:py-6"
        data-hero-marquee
      >
        <div ref={tickerRef} className="flex min-w-max items-center gap-8 px-5 md:px-8 lg:px-10">
          {tickerItems.map((item, index) => (
            <div
              key={`${program.slug}-ticker-${item}-${index}`}
              className="flex items-center gap-8 whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.24em] text-foreground/56 md:text-sm"
            >
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramBenefitCardsScene({
  title,
  cards,
}: ProgramBenefitCardsSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const usesBentoLayout = cards.length > 3 && cards.length % 2 === 1;

  const gridColumnClass =
    cards.length === 3
      ? "md:grid-cols-3"
      : usesBentoLayout
        ? "md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3"
        : "md:grid-cols-2 lg:grid-cols-3";

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          const cardsToAnimate = gsap.utils.toArray<HTMLElement>("[data-benefit-card]");

          if (conditions?.reduce) {
            gsap.set(["[data-benefit-copy]", cardsToAnimate, "[data-benefit-glow]"], {
              autoAlpha: 1,
              y: 0,
              clearProps: "all",
            });
            return;
          }

          const timeline = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: root,
              start: "top 76%",
              once: true,
            },
          });

          timeline
            .from("[data-benefit-copy]", {
              autoAlpha: 0,
              y: 40,
              stagger: 0.1,
              duration: 0.84,
            })
            .from(
              "[data-benefit-glow]",
              {
                autoAlpha: 0,
                scale: 0.92,
                stagger: 0.06,
                duration: 0.8,
              },
              0.08,
            )
            .from(
              cardsToAnimate,
              {
                autoAlpha: 0,
                y: 56,
                scale: 0.97,
                stagger: 0.08,
                duration: 0.88,
              },
              0.14,
            );
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="section-shell section-space">
      <div>
        <h2
          className="max-w-3xl font-display text-[1.9rem] leading-[1.02] text-foreground sm:text-[2.3rem] md:text-[3rem]"
          data-benefit-copy
        >
          {title}
        </h2>

        <div
          className={cn(
            "mt-14 grid overflow-hidden border border-foreground/12 bg-white/35",
            gridColumnClass,
          )}
        >
          {cards.map((card, index) => {
            const isLast = index === cards.length - 1;
            const isBentoFeature = usesBentoLayout && index === 0;

            return (
              <article
                key={`${card.title}-${card.description ?? "empty"}`}
                className={cn(
                  "group relative border-b border-foreground/12 p-7 transition-colors duration-300 hover:bg-white/50 md:border-b md:border-r md:px-8 md:py-10",
                  !usesBentoLayout && "md:border-b-0",
                  !usesBentoLayout && isLast && "border-b-0 md:border-r-0",
                  usesBentoLayout && "last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+2)]:border-r-0",
                  isBentoFeature && "lg:row-span-2",
                )}
                data-benefit-card
              >
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 h-0.5 w-8 bg-primary/70" data-benefit-glow />
                  {card.eyebrow ? (
                    <p className="mb-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {card.eyebrow}
                    </p>
                  ) : null}
                  <h3 className="text-[1.25rem] font-semibold leading-tight text-foreground md:text-[1.42rem]">
                    {card.title}
                  </h3>
                  {card.description ? (
                    <p className="mt-4 max-w-[26rem] whitespace-pre-line text-sm leading-7 text-foreground/60 md:text-[0.95rem]">
                      {card.description}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 h-px w-full bg-foreground/12" />

      </div>
    </section>
  );
}

export function ProgramListScene({
  title,
  items,
  intro,
  image,
  imageAlt,
  dark = false,
  imageOnRight = false,
}: ProgramListSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const hasImage = Boolean(image && imageAlt);
  const shouldCenterRows = items.length <= 3;

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          const rows = gsap.utils.toArray<HTMLElement>("[data-scene-row]");

          if (conditions?.reduce) {
            gsap.set(["[data-scene-copy]", rows, "[data-scene-media-inner]"], {
              autoAlpha: 1,
              y: 0,
              clearProps: "all",
            });
            return;
          }

          gsap.from("[data-scene-copy]", {
            autoAlpha: 0,
            y: 44,
            stagger: 0.1,
            duration: 0.82,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root,
              start: "top 78%",
              once: true,
            },
          });

          rows.forEach((row, index) => {
            gsap.from(row, {
              autoAlpha: 0,
              x: index % 2 === 0 ? 48 : -48,
              duration: 0.88,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 84%",
                once: true,
              },
            });
          });

          if (hasImage) {
            gsap.fromTo(
              "[data-scene-media-inner]",
              { scale: 1.18, yPercent: -5 },
              {
                scale: 1,
                yPercent: 5,
                ease: "none",
                scrollTrigger: {
                  trigger: root,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  if (!hasImage) {
    return (
      <section ref={rootRef} className="section-shell section-space text-foreground">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <h2
              className="max-w-xl font-display text-[1.82rem] leading-[1.04] sm:text-[2.2rem] md:text-[3rem]"
              data-scene-copy
            >
              {title}
            </h2>
            {intro?.length ? (
              <div className="mt-5 grid gap-3">
                {intro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-2xl text-base leading-8 text-foreground/72 md:text-[1.02rem]"
                    data-scene-copy
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-4 md:space-y-5">
            {items.map((item) => (
              <div
                key={`${title}-${item}`}
                className={cn(
                  "relative border-l pl-5 pr-2 md:pl-7",
                  dark ? "border-accent/26" : "border-primary/18",
                )}
                data-scene-row
              >
                <div className="flex gap-4 md:gap-5">
                  <span
                    className={cn(
                      "mt-3 h-2.5 w-2.5 shrink-0 rounded-full",
                      dark ? "bg-accent/90" : "bg-primary",
                    )}
                  />
                  <p
                    className={cn(
                      "max-w-3xl text-[1.05rem] leading-8 md:text-[1.18rem] md:leading-9",
                      dark ? "text-foreground/74" : "text-foreground/82",
                    )}
                  >
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={rootRef} className="section-shell section-space text-foreground">
      <div
        className={cn(
          "mx-auto grid max-w-[82rem] items-start gap-8 lg:grid-cols-[0.88fr_1.12fr]",
          imageOnRight && "lg:grid-cols-[1.12fr_0.88fr]",
        )}
      >
        <div className={cn("relative", imageOnRight && "lg:order-2")}>
          <div className="overflow-hidden rounded-[2rem] border border-white/70 shadow-soft">
            <img
              src={image}
              alt={imageAlt}
              className="h-[18rem] w-full object-cover md:h-[22rem] lg:h-[28rem] xl:h-[32rem]"
              data-scene-media-inner
            />
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col",
            imageOnRight && "lg:order-1",
          )}
        >
          <div className="max-w-[40rem]">
            <h2
              className="font-display text-[1.82rem] leading-[1.04] sm:text-[2.2rem] md:text-[3rem]"
              data-scene-copy
            >
              {title}
            </h2>
            {intro?.length ? (
              <div className="mt-5 grid gap-3">
                {intro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-2xl text-base leading-8 text-foreground/72 md:text-[1rem]"
                    data-scene-copy
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
          </div>

          <div className={cn("mt-8 space-y-4 md:space-y-5", shouldCenterRows && "lg:min-h-[22rem]")}>
            {items.map((item) => (
              <div
                key={`${title}-${item}`}
                className={cn(
                  "relative border-l pl-5 pr-2 md:pl-7",
                  dark ? "border-accent/26" : "border-primary/18",
                )}
                data-scene-row
              >
                <div className="flex gap-4 md:gap-5">
                  <span
                    className={cn(
                      "mt-3 h-2.5 w-2.5 shrink-0 rounded-full",
                      dark ? "bg-accent/90" : "bg-primary",
                    )}
                  />
                  <p
                    className={cn(
                      "max-w-3xl text-[1.05rem] leading-8 md:text-[1.22rem] md:leading-9",
                      dark ? "text-foreground/74" : "text-foreground/82",
                    )}
                  >
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramSplitListScene({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: ProgramSplitListSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          const rows = gsap.utils.toArray<HTMLElement>("[data-split-row]");

          if (conditions?.reduce) {
            gsap.set(["[data-split-copy]", rows], {
              autoAlpha: 1,
              y: 0,
              clearProps: "all",
            });
            return;
          }

          const timeline = gsap.timeline({
            defaults: { duration: 0.8, ease: "power3.out" },
            scrollTrigger: {
              trigger: root,
              start: "top 76%",
              once: true,
            },
          });

          timeline
            .from("[data-split-copy]", {
              autoAlpha: 0,
              y: 34,
              stagger: 0.08,
            })
            .from(
              rows,
              {
                autoAlpha: 0,
                y: 24,
                stagger: 0.045,
              },
              0.12,
            );
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="w-full border-b border-foreground/10 text-foreground">
      <div className="grid min-h-[42rem] lg:grid-cols-2">
        <div className="flex bg-[#edf1f5] text-foreground">
          <div className="mx-auto flex w-full max-w-[45rem] flex-col justify-start px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:ml-auto lg:px-16 xl:px-20">
            <div data-split-copy>
              <h2 className="font-display text-[2rem] leading-[1.02] text-foreground sm:text-[2.45rem] md:text-[3rem]">
                {leftTitle}
              </h2>
            </div>

            <div className="mt-12">
              {leftItems.map((item) => (
                <div
                  key={`${leftTitle}-${item}`}
                  className="flex gap-5 border-b border-foreground/12 py-5 last:border-b-0"
                  data-split-row
                >
                  <span className="mt-3 h-px w-5 shrink-0 bg-primary/75" />
                  <p className="max-w-2xl text-base leading-8 text-foreground/74 md:text-[1.05rem]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex bg-[#fef5ed]">
          <div className="mx-auto flex w-full max-w-[45rem] flex-col justify-start px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:mr-auto lg:px-16 xl:px-20">
            <div data-split-copy>
              <h2 className="font-display text-[2rem] leading-[1.02] text-foreground sm:text-[2.45rem] md:text-[3rem]">
                {rightTitle}
              </h2>
            </div>

            <div className="mt-12">
              {rightItems.map((item) => (
                <div
                  key={`${rightTitle}-${item}`}
                  className="flex gap-5 border-b border-foreground/12 py-4 last:border-b-0 md:py-5"
                  data-split-row
                >
                  <MoveRight className="mt-1.5 h-4 w-4 shrink-0 text-primary/75" />
                  <p className="max-w-2xl text-base leading-8 text-foreground/74 md:text-[1.05rem]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramNarrativeScene({
  title,
  paragraphs,
  image,
  imageAlt,
  imageOnRight = false,
}: ProgramNarrativeSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const hasImage = Boolean(image && imageAlt);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          if (conditions?.reduce) {
            gsap.set(
              ["[data-narrative-copy]", "[data-narrative-media]", "[data-narrative-line]"],
              {
                autoAlpha: 1,
                y: 0,
                clearProps: "all",
              },
            );
            return;
          }

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: "top 72%",
              once: true,
            },
          });

          timeline
            .from("[data-narrative-copy]", {
              autoAlpha: 0,
              y: 48,
              stagger: 0.12,
              duration: 0.9,
              ease: "power3.out",
            })
            .from(
              "[data-narrative-line]",
              {
                scaleX: 0,
                transformOrigin: "left center",
                stagger: 0.08,
                duration: 0.7,
                ease: "power3.out",
              },
              0.14,
            );

          if (hasImage) {
            timeline.from(
              "[data-narrative-media]",
              {
                autoAlpha: 0,
                scale: 1.08,
                clipPath: "inset(18% 18% 20% 18% round 2rem)",
                duration: 1.2,
                ease: "power3.out",
              },
              0.08,
            );

            gsap.fromTo(
              "[data-narrative-media-inner]",
              { scale: 1.12, yPercent: -6 },
              {
                scale: 1,
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: root,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  if (!hasImage) {
    return (
      <section ref={rootRef} className="section-shell section-space">
        <div className="max-w-[40rem]">
          <h2
            className="font-display text-[1.82rem] leading-[1.04] text-foreground md:text-[3rem]"
            data-narrative-copy
          >
            {title}
          </h2>
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-base leading-8 text-foreground/78 md:text-lg"
                data-narrative-copy
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={rootRef} className="section-shell section-space">
      <div className="mx-auto grid max-w-[82rem] items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-12">
        <div
          className={cn("relative w-full lg:justify-self-start", imageOnRight ? "lg:order-2 lg:justify-self-end max-w-[31rem] xl:max-w-[33rem]" : "max-w-[31rem] xl:max-w-[33rem]")}
          data-narrative-media
        >
          <img
            src={image}
            alt={imageAlt}
            className="h-[22rem] w-full rounded-[2rem] object-cover shadow-soft sm:h-[25rem] lg:h-[28rem] xl:h-[32rem]"
            data-narrative-media-inner
          />
        </div>

        <div
          className={cn(
            "w-full max-w-[40rem] space-y-6 lg:justify-self-end",
            imageOnRight && "lg:order-1 lg:justify-self-start",
          )}
        >
          <h2
            className="font-display text-[1.82rem] leading-[1.04] text-foreground md:text-[3rem]"
            data-narrative-copy
          >
            {title}
          </h2>
          <div className="space-y-4">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-base leading-8 text-foreground/78 md:text-lg"
                data-narrative-copy
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramPackageScene({
  title,
  items,
  image,
  imageAlt,
}: ProgramPackageSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const hasImage = Boolean(image && imageAlt);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          const itemsToAnimate = gsap.utils.toArray<HTMLElement>("[data-package-item]");

          if (conditions?.reduce) {
            gsap.set(
              [
                "[data-package-copy]",
                itemsToAnimate,
                "[data-package-media]",
                "[data-package-line]",
              ],
              { autoAlpha: 1, y: 0, clearProps: "all" },
            );
            return;
          }

          const timeline = gsap.timeline({
            defaults: {
              duration: 0.88,
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: root,
              start: "top 78%",
              once: true,
            },
          });

          timeline
            .from("[data-package-copy]", {
              autoAlpha: 0,
              y: 44,
              stagger: 0.1,
            })
            .from(
              "[data-package-line]",
              {
                scaleX: 0,
                transformOrigin: "left center",
                stagger: 0.07,
                duration: 0.72,
              },
              "<0.08",
            )
            .from(
              itemsToAnimate,
              {
                autoAlpha: 0,
                y: 54,
                stagger: 0.08,
                duration: 0.9,
              },
              0.14,
            );

          if (hasImage) {
            gsap.fromTo(
              "[data-package-media-inner]",
              { scale: 1.14, yPercent: -4 },
              {
                scale: 1,
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: root,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  if (!hasImage) {
    return (
      <section ref={rootRef} className="section-shell section-space">
        <div>
          <h2
            className="max-w-xl font-display text-[1.82rem] leading-[1.04] md:text-[3rem]"
            data-package-copy
          >
            {title}
          </h2>

          <div className="mt-8 border-t border-border/45">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="group grid gap-4 border-b border-border/45 py-5 transition-colors duration-300 hover:bg-white/30 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.15fr)] md:gap-7 md:py-6"
                data-package-item
              >
                <div className="text-[0.82rem] font-semibold tracking-[0.24em] text-primary/72 md:pt-1">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="max-w-sm text-[1.08rem] font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary md:pt-0.5 md:text-[1.2rem]">
                    {item.title}
                  </h3>
                  <div
                    className="mt-3 h-px w-16 bg-[linear-gradient(90deg,rgba(255,79,0,0.45),rgba(77,101,255,0.18),transparent)]"
                    data-package-line
                  />
                </div>
                <p className="max-w-3xl text-[0.98rem] leading-7 text-muted-foreground md:text-[1rem]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={rootRef} className="section-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="overflow-hidden rounded-[2.2rem]" data-package-media>
            <img
              src={image}
              alt={imageAlt}
              className="h-[20rem] w-full object-cover md:h-[26rem]"
              data-package-media-inner
            />
          </div>
          <h2
            className="mt-6 max-w-xl font-display text-[1.82rem] leading-[1.04] md:text-[3rem]"
            data-package-copy
          >
            {title}
          </h2>
        </div>

        <div className="border-t border-border/45">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group grid gap-4 border-b border-border/45 py-5 transition-colors duration-300 hover:bg-white/30 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.15fr)] md:gap-7 md:py-6"
              data-package-item
            >
              <div className="text-[0.82rem] font-semibold tracking-[0.24em] text-primary/72 md:pt-1">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="max-w-sm text-[1.08rem] font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary md:pt-0.5 md:text-[1.2rem]">
                  {item.title}
                </h3>
                <div
                  className="mt-3 h-px w-16 bg-[linear-gradient(90deg,rgba(255,79,0,0.45),rgba(77,101,255,0.18),transparent)]"
                  data-package-line
                />
              </div>
              <p className="max-w-3xl text-[0.98rem] leading-7 text-muted-foreground md:text-[1rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramSupportScene({
  title,
  columns,
  image,
  imageAlt,
}: ProgramSupportSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const hasImage = Boolean(image && imageAlt);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          if (conditions?.reduce) {
            gsap.set(
              ["[data-support-copy]", "[data-support-column]", "[data-support-media]"],
              { autoAlpha: 1, y: 0, clearProps: "all" },
            );
            return;
          }

          gsap.from("[data-support-copy]", {
            autoAlpha: 0,
            y: 36,
            stagger: 0.12,
            duration: 0.82,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root,
              start: "top 78%",
              once: true,
            },
          });

          gsap.from("[data-support-column]", {
            autoAlpha: 0,
            y: 44,
            stagger: 0.12,
            duration: 0.88,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root,
              start: "top 72%",
              once: true,
            },
          });

          if (hasImage) {
            gsap.fromTo(
              "[data-support-media-inner]",
              { scale: 1.12, yPercent: -4 },
              {
                scale: 1,
                yPercent: 4,
                ease: "none",
                scrollTrigger: {
                  trigger: root,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  if (!hasImage) {
    return (
      <section ref={rootRef} className="section-shell section-space">
        <div>
          <h2
            className="max-w-xl font-display text-[1.82rem] leading-[1.04] text-foreground md:text-[3rem]"
            data-support-copy
          >
            {title}
          </h2>
          <div className={cn("mt-8 grid gap-6", columns.length > 1 ? "lg:grid-cols-2" : "")}>
            {columns.map((column, index) => (
              <div
                key={`${column.heading ?? "support"}-${index}`}
                className="border-t border-border/35 pt-5"
                data-support-column
              >
                {column.heading ? (
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/88">
                    {column.heading}
                  </h3>
                ) : null}
                <ul className={cn("space-y-4", column.heading ? "mt-5" : "")}>
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-7 text-foreground/74 md:text-lg md:leading-8"
                    >
                      <MoveRight className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={rootRef} className="section-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <h2
            className="max-w-xl font-display text-[1.82rem] leading-[1.04] text-foreground md:text-[3rem]"
            data-support-copy
          >
            {title}
          </h2>
          <div className={cn("mt-8 grid gap-6", columns.length > 1 ? "lg:grid-cols-2" : "")}>
            {columns.map((column, index) => (
              <div
                key={`${column.heading ?? "support"}-${index}`}
                className="border-t border-border/35 pt-5"
                data-support-column
              >
                {column.heading ? (
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/88">
                    {column.heading}
                  </h3>
                ) : null}
                <ul className={cn("space-y-4", column.heading ? "mt-5" : "")}>
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-7 text-foreground/74 md:text-lg md:leading-8"
                    >
                      <MoveRight className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-[2.2rem]" data-support-media>
            <img
              src={image}
              alt={imageAlt}
              className="h-[14rem] w-full object-cover md:h-[18rem]"
              data-support-media-inner
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramProcessScene({
  title,
  intro,
  steps,
  image,
  imageAlt,
}: ProgramProcessSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const hasImage = Boolean(image && imageAlt);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          if (conditions?.reduce) {
            gsap.set(
              ["[data-process-copy]", "[data-process-step]", "[data-process-media]"],
              { autoAlpha: 1, y: 0, clearProps: "all" },
            );
            return;
          }

          const timeline = gsap.timeline({
            defaults: {
              duration: 0.84,
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: root,
              start: "top 78%",
              once: true,
            },
          });

          if (hasImage) {
            timeline.from("[data-process-media]", {
              autoAlpha: 0,
              scale: 0.96,
              clipPath: "inset(12% 10% 14% 10% round 2rem)",
              duration: 1.02,
            });
          }

          timeline
            .from(
              "[data-process-copy]",
              {
                autoAlpha: 0,
                y: 42,
                stagger: 0.12,
              },
              hasImage ? 0.08 : 0,
            )
            .from(
              "[data-process-step]",
              {
                autoAlpha: 0,
                x: 54,
                stagger: 0.14,
                duration: 0.9,
              },
              hasImage ? 0.18 : 0.08,
            );

          if (hasImage) {
            gsap.fromTo(
              "[data-process-media-inner]",
              { scale: 1.08, yPercent: -4 },
              {
                scale: 1,
                yPercent: 4,
                ease: "none",
                scrollTrigger: {
                  trigger: root,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  const stepsMarkup = (
    <div className="flex flex-col justify-center gap-5 lg:min-h-[36rem]">
      {steps.map((step) => (
        <div
          key={`${step.label}-${step.title}`}
          className="relative pl-6 md:pl-8"
          data-process-step
        >
          <span className="absolute left-0 top-[0.38rem] h-2.5 w-2.5 rounded-full bg-primary/80" />
          <div className="border-l border-primary/18 pl-5 md:pl-6">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary/76">
                {step.label}
              </p>
              <p className="mt-2 text-lg font-semibold leading-8 text-foreground md:text-[1.35rem] md:leading-9">
                {step.title}
              </p>
              <p className="mt-2 max-w-2xl text-base leading-8 text-foreground/74 md:text-[1.02rem]">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (!hasImage) {
    return (
      <section ref={rootRef} className="section-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h2
              className="font-display text-[1.82rem] leading-[1.04] md:text-[3rem]"
              data-process-copy
            >
              {title}
            </h2>
            <div className="mt-5 space-y-4">
              {intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
                  data-process-copy
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {stepsMarkup}
        </div>
      </section>
    );
  }

  return (
    <section ref={rootRef} className="section-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
        <div>
          <div
            className="relative overflow-hidden rounded-[2.2rem] min-h-[24rem] md:min-h-[31rem] lg:min-h-[36rem]"
            data-process-media
          >
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              data-process-media-inner
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,11,8,0.06)_0%,rgba(17,11,8,0.18)_42%,rgba(17,11,8,0.72)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 lg:p-10">
              <div className="max-w-xl">
                <h2
                  className="font-display text-[1.95rem] leading-[1.04] text-white md:text-[3rem]"
                  data-process-copy
                >
                  {title}
                </h2>
                <div className="mt-4 space-y-3">
                  {intro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-lg text-sm leading-7 text-white/78 md:text-[1rem]"
                      data-process-copy
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {stepsMarkup}
      </div>
    </section>
  );
}

export function ProgramAnalysisModesScene({
  title,
  columns,
}: ProgramAnalysisModesSceneProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          if (conditions?.reduce) {
            gsap.set(["[data-analysis-copy]", "[data-analysis-card]"], {
              autoAlpha: 1,
              y: 0,
              clearProps: "all",
            });
            return;
          }

          gsap.from("[data-analysis-copy]", {
            autoAlpha: 0,
            y: 40,
            duration: 0.84,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root,
              start: "top 78%",
              once: true,
            },
          });

          gsap.from("[data-analysis-card]", {
            autoAlpha: 0,
            y: 44,
            stagger: 0.12,
            duration: 0.88,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root,
              start: "top 74%",
              once: true,
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="section-shell section-space">
      <div>
        <h2
          className="max-w-xl font-display text-[1.82rem] leading-[1.04] text-foreground md:text-[3rem]"
          data-analysis-copy
        >
          {title}
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {columns.map((column) => (
            <article
              key={`${column.heading}-${column.title}`}
              className="rounded-[2rem] border border-border/55 bg-[#faf8f5] p-6 shadow-[0_18px_40px_-32px_rgba(48,39,33,0.16)] md:p-8"
              data-analysis-card
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {column.heading}
              </p>
              <h3 className="mt-5 text-[1.2rem] font-semibold leading-tight text-primary md:text-[1.45rem]">
                {column.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-foreground/74">
                {column.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramFinalCta({
  title,
  description,
  buttonLabel,
  href,
}: ProgramFinalCtaProps) {
  return (
    <section className="section-shell section-space">
      <div className="overflow-hidden rounded-[2.6rem] border border-primary/20 bg-[#fef0e4] px-5 py-7 shadow-soft md:px-8 md:py-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/72">
              Son Adım
            </p>
            <h2 className="mt-4 max-w-4xl font-display text-[2.45rem] leading-[0.99] text-foreground md:text-[3rem]">
              {title}
            </h2>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          <div className="lg:flex lg:justify-end">
            <SubtleButton href={href} size="lg" fullWidth className="lg:w-auto">
              {buttonLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </SubtleButton>
          </div>
        </div>
      </div>
    </section>
  );
}
