import { ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";

export function PricingHelpCtaSection() {
  return (
    <RevealSection
      as="section"
      className="w-full bg-[#2b1e13] px-3 py-11 md:px-4 md:py-14 lg:px-5"
      itemSelector="[data-gsap-item]"
      start="top 86%"
      distance={24}
    >
      <div
        className="mx-auto max-w-[90rem] text-center"
        data-gsap-item
      >
        <p className="mx-auto max-w-3xl text-base leading-7 text-[#c7b8aa] md:text-lg">
          Hangi paketi seçeceğinden emin değil misin? Kısa bir görüşmeyle
          birlikte karar verebiliriz.
        </p>
        <AppLink
          href="/gorusme-planlayin"
          className="group mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#fff8f1] px-8 text-base font-semibold text-[#2b1e13] shadow-[0_16px_34px_-24px_rgba(255,248,241,0.45)] transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_22px_42px_-24px_rgba(255,129,5,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          Ücretsiz ön görüşme al
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </AppLink>
      </div>
    </RevealSection>
  );
}
