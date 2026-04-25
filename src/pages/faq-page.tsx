import { RevealSection } from "@/components/gsap/reveal-section";
import { PageIntro } from "@/components/page-intro";
import FaqSections from "@/components/ui/faq-sections";
import { faqs } from "@/content/site";
import { SITE_NAME, SITE_URL, useSeo } from "@/lib/seo";

export function FaqPage() {
  useSeo({
    title: "Sıkça Sorulan Sorular",
    description:
      "Misafir Kurucu danışmanlığı, çalışma modeli, program yapısı ve başlangıç süreciyle ilgili en sık sorulan soruları inceleyin.",
    path: "/sikca-sorulan-sorular",
    keywords: ["sıkça sorulan sorular", "danışmanlık süreci", "misafir kurucu faq"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: `Sıkça Sorulan Sorular | ${SITE_NAME}`,
      url: `${SITE_URL}/sikca-sorulan-sorular`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  });

  return (
    <>
      <PageIntro
        title="Aradığınız cevap burada olabilir"
        description="Misafir Kurucu danışmanlığıyla ilgili en sık gelen soruları burada topladım. Program yapısı, görüşme düzeni ve başlangıç seviyesiyle ilgili temel başlıkları hızlıca inceleyebilirsiniz."
        titleClassName="page-intro-title-large"
      />

      <RevealSection as="section" className="section-shell pt-0 pb-10 md:pb-16">
        <FaqSections />
      </RevealSection>
    </>
  );
}
