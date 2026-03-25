import { Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import { RuixenFeatureSection } from "@/components/ui/ruixen-feature-section";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { programDetails } from "@/content/site";
import {
  programPageSections,
  type ProgramSlug,
} from "@/content/program-page-sections";
import { cn } from "@/lib/utils";

export function ProgramDetailPage() {
  const { slug } = useParams();
  const program = slug ? programDetails[slug as keyof typeof programDetails] : null;
  const pageConfig = slug
    ? programPageSections[slug as keyof typeof programPageSections]
    : null;

  if (!program || !pageConfig || !slug) {
    return <Navigate to="/" replace />;
  }

  const storySections = pageConfig.storyFrames.map((section) => ({
    ...section,
    items: section.itemIndexes
      .map((index) => program.audience[index])
      .filter(Boolean),
  }));

  const processGroups = pageConfig.processSteps.map((step) => ({
    ...step,
    topics: step.topicIndexes.map((index) => program.topics[index]).filter(Boolean),
  }));

  return (
    <>
      <RuixenFeatureSection
        eyebrow={pageConfig.heroEyebrow}
        title={program.title}
        description={program.description}
        cards={pageConfig.heroCards}
        quickPoints={pageConfig.heroQuickPoints}
        stats={pageConfig.heroStats}
        quote={pageConfig.heroQuote}
        quoteAuthor={pageConfig.heroQuoteAuthor}
        image={pageConfig.heroImage}
        imageAlt={pageConfig.heroImageAlt}
      />

      <ParallaxScrollFeatureSection
        eyebrow={pageConfig.storyEyebrow}
        title={pageConfig.storyTitle}
        description={pageConfig.storyDescription}
        sections={storySections}
      />

      <FeatureCarousel
        eyebrow={pageConfig.processEyebrow}
        title={pageConfig.processTitle}
        description={pageConfig.processDescription}
        steps={pageConfig.processSteps.map(({ id, name, title, description }) => ({
          id,
          name,
          title,
          description,
        }))}
        image={pageConfig.processImages}
      />

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {processGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-[2rem] border border-border/70 bg-white/82 p-6 shadow-soft md:p-8"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary/85">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  {group.id}
                </span>
                {group.name}
              </div>
              <h3 className="mt-4 font-display text-[2rem] leading-[0.96] text-foreground md:text-[2.6rem]">
                {group.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {group.description}
              </p>
              <div className="mt-6 grid gap-3">
                {group.topics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-[1.2rem] border border-border/60 bg-background/50 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-foreground/85">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-8 md:py-12">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.2rem] border border-primary/20 bg-gradient-to-br from-primary/14 via-white to-accent/8 p-7 shadow-soft md:p-10">
            <p className="section-kicker">{program.outputsTitle}</p>
            <h2 className="mt-4 font-display text-[2.4rem] leading-[0.94] text-foreground md:text-[3.6rem]">
              {pageConfig.resultsTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {pageConfig.heroLead}
            </p>
            <p className="mt-8 text-base leading-8 text-muted-foreground">
              {program.closing}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AppLink
                href="/gorusme-planlayin"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Bu program için görüşme al
              </AppLink>
              <AppLink
                href="/"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                Anasayfaya dön
              </AppLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {program.outcomes.map((outcome, index) => (
              <div
                key={outcome}
                className={cn(
                  "rounded-[1.8rem] border border-border/70 bg-white/88 p-6 shadow-soft",
                  index === 0 || index === program.outcomes.length - 1
                    ? "md:translate-y-4"
                    : "",
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-display text-[1.35rem] leading-tight text-foreground">
                      {outcome}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Bu çıktı, sonraki kararlarını tahmine değil daha görünür bir zemine taşıman için tasarlanır.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-8 pt-4 md:pb-12">
        <div className="overflow-hidden rounded-[2.2rem] border border-border/70 bg-white/86 shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <img
              src={program.image}
              alt={program.title}
              className="h-full min-h-[20rem] w-full object-cover"
            />
            <div className="p-7 md:p-10">
              <p className="section-kicker">Program Özeti</p>
              <h2 className="mt-4 font-display text-[2.2rem] leading-[0.96] text-foreground md:text-[3.2rem]">
                {program.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {program.description}
              </p>
              <ul className="mt-7 grid gap-4 md:grid-cols-2">
                {program.audience.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-[1.3rem] border border-border/60 bg-background/45 px-4 py-4 text-sm leading-7 text-foreground/85"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <AppLink
                  href="/gorusme-planlayin"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Görüşme planlayın
                </AppLink>
                <AppLink
                  href="/"
                  className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}
                >
                  Tüm programlara göz at
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AppLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
