import { RevealSection } from "@/components/gsap/reveal-section";

interface PageIntroProps {
  title: string;
  description: string;
}

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <RevealSection
      as="section"
      className="section-shell pb-4 pt-10 md:pb-6 md:pt-14"
      itemSelector="[data-gsap-item]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="section-title text-[2.8rem] sm:text-[3rem] md:text-[3.5rem]"
          data-gsap-item
        >
          {title}
        </h1>
        <p
          className="mt-5 text-base leading-7 text-muted-foreground md:text-lg"
          data-gsap-item
        >
          {description}
        </p>
      </div>
    </RevealSection>
  );
}
