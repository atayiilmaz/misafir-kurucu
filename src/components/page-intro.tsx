import { RevealSection } from "@/components/gsap/reveal-section";
import { cn } from "@/lib/utils";

interface PageIntroProps {
  title: string;
  description: string;
  titleClassName?: string;
}

export function PageIntro({ title, description, titleClassName }: PageIntroProps) {
  return (
    <RevealSection
      as="section"
      className="section-shell section-space"
      itemSelector="[data-gsap-item]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className={cn("section-title text-[2.8rem] sm:text-[3rem] md:text-[3.5rem]", titleClassName)}
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
