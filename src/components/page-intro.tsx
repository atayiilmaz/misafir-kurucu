import { RevealSection } from "@/components/gsap/reveal-section";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <RevealSection
      as="section"
      className="section-shell pb-10 pt-8 md:pt-10"
      itemSelector="[data-gsap-item]"
    >
      <div className="glass-panel p-8 md:p-10 lg:p-12">
        <div className="section-kicker" data-gsap-item>
          {eyebrow}
        </div>
        <h1
          className="font-display text-5xl leading-[0.95] md:text-6xl"
          data-gsap-item
        >
          {title}
        </h1>
        <p
          className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg"
          data-gsap-item
        >
          {description}
        </p>
      </div>
    </RevealSection>
  );
}
