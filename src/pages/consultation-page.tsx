import { useEffect } from "react";
import { RevealSection } from "@/components/gsap/reveal-section";
import { PageIntro } from "@/components/page-intro";
import { SITE_NAME, SITE_URL, useSeo } from "@/lib/seo";

export function ConsultationPage() {
  useSeo({
    title: "Görüşme Planlayın",
    description:
      "Ücretsiz ön görüşmede markanızın mevcut durumunu, hedefini ve size en uygun çalışma modelini birlikte değerlendirelim.",
    path: "/gorusme-planlayin",
    keywords: ["görüşme planlayın", "ücretsiz ön görüşme", "calendly moda danışmanlığı"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: `Görüşme Planlayın | ${SITE_NAME}`,
      url: `${SITE_URL}/gorusme-planlayin`,
      inLanguage: "tr-TR",
    },
  });

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <PageIntro
        title="Markanız için bir sonraki net adımı birlikte belirleyelim"
        description="Ücretsiz ön görüşmede mevcut durumunuzu, hedefinizi ve hangi programın ya da çalışma modelinin size daha uygun olduğunu değerlendiriyoruz."
      />

      <RevealSection as="section" className="section-shell pt-0 pb-10">
        <div
          className="calendly-inline-widget min-w-[320px]"
          data-url="https://calendly.com/misafirkurucu/30min"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </RevealSection>
    </>
  );
}
