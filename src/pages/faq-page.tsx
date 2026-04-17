import { RevealSection } from "@/components/gsap/reveal-section";
import { PageIntro } from "@/components/page-intro";
import FaqSections from "@/components/ui/faq-sections";

export function FaqPage() {
  return (
    <>
      <PageIntro
        title="Aradığınız cevap burada olabilir"
        description="Misafir Kurucu danışmanlığıyla ilgili en sık gelen soruları burada topladım. Program yapısı, görüşme düzeni ve başlangıç seviyesiyle ilgili temel başlıkları hızlıca inceleyebilirsiniz."
      />

      <RevealSection as="section" className="section-shell pt-0 pb-10 md:pb-16">
        <FaqSections />
      </RevealSection>
    </>
  );
}
