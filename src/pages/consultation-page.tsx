import { useEffect, useRef } from "react";
import { RevealSection } from "@/components/gsap/reveal-section";
import { SITE_NAME, SITE_URL, useSeo } from "@/lib/seo";

export function ConsultationPage() {
  const calendlyRef = useRef<HTMLDivElement | null>(null);

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
    let isCancelled = false;

    const initCalendly = () => {
      const calendly = (
        window as Window & {
          Calendly?: {
            initInlineWidget: (options: {
              url: string;
              parentElement: HTMLElement;
              resize?: boolean;
            }) => void;
          };
        }
      ).Calendly;

      if (!calendly || !calendlyRef.current || isCancelled) {
        return;
      }

      calendlyRef.current.innerHTML = "";
      calendly.initInlineWidget({
        url: "https://calendly.com/misafirkurucu/30min",
        parentElement: calendlyRef.current,
        resize: true,
      });
    };

    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (existingScript) {
      initCalendly();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initCalendly;
    document.body.appendChild(script);

    return () => {
      isCancelled = true;
      if (calendlyRef.current) {
        calendlyRef.current.innerHTML = "";
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <RevealSection as="section" className="section-shell section-space">
      <div className="mx-auto grid max-w-[84rem] gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,1.18fr)] lg:items-start xl:gap-14">
        <div className="max-w-[34rem] pt-2 lg:pt-16">
          <h1 className="font-display text-[2.6rem] leading-[0.97] text-foreground sm:text-[3.2rem] md:text-[4rem]">
            Markanız için bir sonraki net adımı birlikte belirleyelim
          </h1>
          <p className="mt-6 max-w-[31rem] text-base leading-8 text-muted-foreground md:text-[1.08rem]">
            Ücretsiz ön görüşmede mevcut durumunuzu, hedefinizi ve hangi programın
            ya da çalışma modelinin size daha uygun olduğunu birlikte
            değerlendiriyoruz.
          </p>
        </div>

        <div
          ref={calendlyRef}
          className="min-w-[320px] w-full"
          style={{ minWidth: "320px", minHeight: "700px" }}
        />
      </div>
    </RevealSection>
  );
}
