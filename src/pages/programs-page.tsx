import { RevealSection } from "@/components/gsap/reveal-section";
import { ProgramShowcaseSection } from "@/components/programs/program-showcase-section";
import SubtleButton from "@/components/ui/subtle-button";
import { programList } from "@/content/programs";

export function ProgramsPage() {
  return (
    <>
      <RevealSection
        as="section"
        className="section-shell pb-8 pt-4 md:pb-10 md:pt-6"
        itemSelector="[data-gsap-item]"
      >
        <div className="overflow-hidden rounded-[2.6rem] border border-foreground/10 bg-[#1a0f0d] text-white shadow-[0_26px_70px_-44px_rgba(26,15,13,0.9)]">
          <div className="grid gap-8 px-5 py-7 md:px-8 md:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-12">
            <div>
              <p
                className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/48"
                data-gsap-item
              >
                Programlar
              </p>
              <h1
                className="mt-4 max-w-4xl font-display text-[2.8rem] leading-[0.9] sm:text-[3.6rem] md:text-[5rem]"
                data-gsap-item
              >
                Fikrini Gerçek Bir Markaya Dönüştür: 0'dan Başarılı Bir Lansmana
              </h1>
              <p
                className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg"
                data-gsap-item
              >
                Deneme-yanılma ile zaman ve para kaybetme. 16 yıllık sektör
                tecrübemle, markanı sağlam temeller üzerine birlikte kuralım.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-5">
              <p
                className="max-w-xl text-base leading-8 text-white/68 md:text-lg"
                data-gsap-item
              >
                Hazır paket değil, markanın bulunduğu noktaya göre ilerleyen üç
                farklı çalışma modeli var: kurulum, büyüme ve ihtiyaç anında
                stratejik destek.
              </p>
              <SubtleButton
                href="/gorusme-planlayin"
                size="lg"
                theme="dark"
                className="w-full md:w-fit"
                data-gsap-item
              >
                Görüşme Planlayın
              </SubtleButton>
            </div>
          </div>
        </div>
      </RevealSection>

      <ProgramShowcaseSection
        eyebrow="Çalışma Modelleri"
        title="İhtiyacına göre seçebileceğin üç farklı çalışma modeli"
        description="Program isimleri ve içerikleri güncellendi. Aşağıdaki akışlar aynı site içinde tek bir yapıya bağlı; detay sayfasına geçtiğinde aynı dilin genişletilmiş halini görürsün."
        programs={programList}
      />
    </>
  );
}
