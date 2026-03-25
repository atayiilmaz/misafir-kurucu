import { useEffect } from "react";
import { PageIntro } from "@/components/page-intro";

export function ConsultationPage() {
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
        eyebrow="Görüşme Planlayın"
        title="Markanız için bir sonraki net adımı birlikte belirleyelim"
        description="Ücretsiz ön görüşmede mevcut durumunuzu, hedefinizi ve hangi programın size daha uygun olduğunu değerlendiriyoruz."
      />

      <section className="section-shell py-10">
        <div
          className="calendly-inline-widget min-w-[320px]"
          data-url="https://calendly.com/misafirkurucu/30min"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </section>
    </>
  );
}
