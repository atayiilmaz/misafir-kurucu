import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import SubtleButton from "@/components/ui/subtle-button";
import { cn } from "@/lib/utils";

type Segment = "new" | "active" | "focused";

type Option = {
  value: string;
  title: string;
  description?: string;
};

type Question = {
  title: string;
  options: Option[];
};

type Result = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

const firstQuestion: Question = {
  title: "Şu an nerede duruyorsun?",
  options: [
    {
      value: "new",
      title: "Henüz başlamadım",
      description: "Fikrim var ama marka veya ürün yok",
    },
    {
      value: "active",
      title: "Markam var, satış yapıyorum",
      description: "Ama büyüme durdu ya da yavaşladı",
    },
    {
      value: "focused",
      title: "Belirli bir sorunum var",
      description: "Uzun süreç değil, hızlı çözüm istiyorum",
    },
  ],
};

const followUpQuestions: Record<Segment, [Question, Question]> = {
  new: [
    {
      title: "En büyük endişen ne?",
      options: [
        {
          value: "mistake",
          title: "Yanlış adım atmak",
          description: "Pahalı hatalardan kaçınmak istiyorum",
        },
        {
          value: "where",
          title: "Nereden başlayacağımı bilmemek",
          description: "Adım adım yol haritası istiyorum",
        },
        {
          value: "time",
          title: "Zamanı boşa harcamak",
          description: "Doğru işlere odaklanmak istiyorum",
        },
      ],
    },
    {
      title: "Koleksiyon planın var mı?",
      options: [
        { value: "none", title: "Hayır, henüz yok" },
        { value: "idea", title: "Fikir aşamasında" },
        { value: "ready", title: "Evet, üretime geçmek istiyorum" },
      ],
    },
  ],
  active: [
    {
      title: "En çok hangi konuda destek istiyorsun?",
      options: [
        {
          value: "sales",
          title: "Satış ve büyüme",
          description: "Daha fazla müşteri, daha yüksek ciro",
        },
        {
          value: "brand",
          title: "Marka kimliği",
          description: "Daha profesyonel bir imaj",
        },
        {
          value: "process",
          title: "İş süreçleri",
          description: "Daha sistematik, daha az kaos",
        },
      ],
    },
    {
      title: "Kaç süredir aktif satış yapıyorsun?",
      options: [
        { value: "under-one", title: "1 yıldan az" },
        { value: "one-to-three", title: "1-3 yıl" },
        { value: "over-three", title: "3 yıldan fazla" },
      ],
    },
  ],
  focused: [
    {
      title: "Sorunun ne kadar acil?",
      options: [
        {
          value: "urgent",
          title: "Çok acil",
          description: "Bu ay çözülmesi gerekiyor",
        },
        {
          value: "planned",
          title: "Planlı",
          description: "Doğru zamanda doğru adım",
        },
        {
          value: "decision",
          title: "Karar aşamasındayım",
          description: "Önce fikir almak istiyorum",
        },
      ],
    },
    {
      title: "Sorunun türü nedir?",
      options: [
        { value: "product", title: "Ürün / koleksiyon yönetimi" },
        { value: "marketing", title: "Pazarlama ve satış" },
        { value: "strategy", title: "Genel strateji / büyük karar" },
      ],
    },
  ],
};

const results: Record<Segment, Result> = {
  new: {
    title: "Markanı Kur",
    description:
      "Sıfırdan doğru temeller atmak, koleksiyon ve lansman adımlarını birbirine bağlı bir plana dönüştürmek için en uygun başlangıç.",
    href: "/programlar/markani-kur",
    cta: "Markanı Kur paketini incele",
  },
  active: {
    title: "Markanı Büyüt",
    description:
      "Potansiyelinin altında kalan markana ivme kazandırmak; satış, dijital görünürlük, marka algısı ve operasyonu birlikte güçlendirmek için doğru seçim.",
    href: "/programlar/markani-buyut",
    cta: "Markanı Büyüt paketini incele",
  },
  focused: {
    title: "Markanı Konumlandır",
    description:
      "Sosyal medya, içerik dili ve dijital algısı güçlü ürünü desteklemeyen markalar için kimlik, platform ve iletişim yönünü netleştiren odaklı çalışma modeli.",
    href: "/programlar/markani-konumlandir",
    cta: "Markanı Konumlandır paketini incele",
  },
};

export function PackageFinderSection() {
  const [segment, setSegment] = useState<Segment | null>(null);
  const [step, setStep] = useState(0);

  const currentQuestion = useMemo(() => {
    if (step === 0 || !segment) {
      return firstQuestion;
    }

    return followUpQuestions[segment][step - 1];
  }, [segment, step]);

  const result = segment ? results[segment] : null;
  const showResult = step === 3 && result;

  function handleOption(value: string) {
    if (step === 0) {
      setSegment(value as Segment);
    }

    setStep((currentStep) => Math.min(currentStep + 1, 3));
  }

  function resetQuiz() {
    setSegment(null);
    setStep(0);
  }

  return (
    <RevealSection
      as="section"
      className="package-finder-section section-space border-y border-[#f0d6c5]/80 bg-[linear-gradient(180deg,rgba(255,250,246,0.88),rgba(255,239,226,0.72))]"
      id="hangi-paket"
      itemSelector="[data-gsap-item]"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center" data-gsap-item>
          <p className="package-finder-eyebrow font-semibold uppercase tracking-[0.24em] text-primary">
            Nerede olduğunu anlayalım
          </p>
          <h2 className="package-finder-title section-title mt-4">
            Hangi paket bana uygun?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#6f5849]">
            3 kısa soruyla sana en uygun çalışma modelini bulalım.
          </p>
        </div>

        <div
          className={cn(
            "mx-auto mt-12 max-w-4xl rounded-[2rem] border border-[#efc8af] bg-[#fff1e6] p-6 shadow-[0_28px_76px_-62px_rgba(255,129,5,0.42)] sm:p-8",
          )}
          data-gsap-item
        >
          <div className="grid grid-cols-3 gap-3" aria-hidden="true">
            {[0, 1, 2].map((progressStep) => (
              <div
                key={progressStep}
                className={cn(
                  "h-1 rounded-full bg-[#ead5c6] transition-colors duration-300",
                  progressStep < step
                    ? "bg-primary"
                    : progressStep === step
                      ? "bg-[#c7835b]"
                      : "",
                )}
              />
            ))}
          </div>

          {showResult ? (
            <div className="mt-8">
              <div className="rounded-[1.55rem] border border-[#efc8af] bg-[linear-gradient(180deg,rgba(255,250,246,0.98),rgba(255,246,239,0.94))] p-6 text-left shadow-[0_24px_64px_-54px_rgba(255,129,5,0.38)] sm:p-8 md:p-10">
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-6 py-1.5 text-sm font-semibold text-primary">
                  Önerilen paket
                </span>
                <h3 className="mt-6 font-display text-[2.25rem] leading-none text-foreground sm:text-[2.85rem]">
                  {result.title}
                </h3>
                <p className="mt-5 max-w-3xl text-[1.05rem] leading-8 text-[#6f5849]">
                  {result.description}
                </p>
                <SubtleButton
                  href={result.href}
                  size="lg"
                  className="mt-8 h-12 w-full max-w-full px-4 text-[0.9rem] sm:w-auto sm:px-8 sm:text-base"
                >
                  <span className="hidden sm:inline">{result.cta}</span>
                  <span className="sm:hidden">Paketi incele</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </SubtleButton>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#7b6557] underline decoration-[#7b6557]/70 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Tekrar dene
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-9">
              <p className="package-finder-question text-center font-display leading-tight text-foreground">
                {currentQuestion.title}
              </p>
              <div className="mx-auto mt-7 grid max-w-3xl gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleOption(option.value)}
                    className="group flex w-full items-center justify-between gap-5 rounded-[1rem] border border-[#e3c6b3] bg-white/55 px-5 py-4 text-left transition-all duration-300 hover:border-[#d49064] hover:bg-white/85 hover:shadow-[0_16px_32px_-28px_rgba(84,48,28,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
                  >
                    <span>
                      <span className="block font-semibold leading-6 text-foreground">
                        {option.title}
                      </span>
                      {option.description ? (
                        <span className="mt-1 block text-[#7b6557]">
                          {option.description}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </RevealSection>
  );
}
