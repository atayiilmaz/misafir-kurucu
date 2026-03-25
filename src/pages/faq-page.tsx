import { RevealSection } from "@/components/gsap/reveal-section";
import FaqSections from "@/components/ui/faq-sections";

export function FaqPage() {
  return (
    <RevealSection as="section" className="section-shell py-10 md:py-16">
      <FaqSections />
    </RevealSection>
  );
}
