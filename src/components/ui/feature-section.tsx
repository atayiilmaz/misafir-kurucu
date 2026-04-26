import { RevealSection } from "@/components/gsap/reveal-section";
import { cn } from "@/lib/utils";

const aboutParagraphs = [
  "16 yılı aşkın süredir tekstil sektörünün içindeyim.",
  "Tekstil dünyasına kendi mağazamı kurarak adım attım; üretimden tedariğe, e-ticaretten marka inşasına kadar tüm süreçleri bizzat sahada yönettim. Bu yolculukta sadece başarılı markalar kurmakla kalmadım, aynı zamanda kriz yönetimini ve yeniden yapılanmayı deneyimleyerek esneklik kazandım.",
  "Üretim ve e-ticaret odağında geliştirdiğim iş modellerini başarıyla devrettikten sonra, bugün bu birikimimi markalara aktarıyorum. Benim yaklaşımım teorinin ötesinde; markanızın doğru yapı, optimize edilmiş süreçler ve sürdürülebilir stratejilerle büyümesini sağlamaktır. Sektördeki 16 yılımı, markanızın en güvenli yolu bulması için kullanıyorum."
];

type FeatureSectionProps = {
  id?: string;
  reverse?: boolean;
  title?: string;
  headline?: string;
  paragraphs?: string[];
  items?: string[];
  imageSrc?: string;
  imageAlt?: string;
  backgroundClassName?: string;
  compactImage?: boolean;
  compactGap?: boolean;
};

export default function FeatureSection({
  id,
  reverse = false,
  title = "HAKKIMDA",
  headline,
  paragraphs = aboutParagraphs,
  items,
  imageSrc = "/images/features1.jpeg",
  imageAlt = "Sevinç hakkında görsel",
  backgroundClassName,
  compactImage = false,
  compactGap = false,
}: FeatureSectionProps) {
  return (
    <RevealSection
      as="section"
      className={cn("section-space-lg", backgroundClassName)}
      id={id}
      itemSelector="[data-gsap-item]"
      start="top 84%"
      stagger={0.1}
      distance={28}
    >
      <div className="section-shell">
        <div
          className={cn(
            "mx-auto grid max-w-[80rem] items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:max-w-[82rem] xl:gap-12",
            compactGap && "lg:gap-7 xl:gap-8",
          )}
        >
          <div
            className={cn(
              "relative w-full lg:justify-self-start",
              compactImage ? "max-w-[26rem] xl:max-w-[28rem]" : "max-w-[31rem] xl:max-w-[33rem]",
              reverse && "lg:order-2 lg:justify-self-end",
            )}
            data-gsap-item
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className={cn(
                "w-full rounded-[2rem] object-cover shadow-soft",
                compactImage
                  ? "aspect-[4/5] object-[center_top]"
                  : "h-[22rem] sm:h-[25rem] lg:h-[28rem] xl:h-[32rem]",
              )}
            />
          </div>

          <div
            className={cn(
              "w-full max-w-[40rem] space-y-6 lg:justify-self-end",
              reverse && "lg:order-1 lg:justify-self-start",
            )}
          >
            {title ? (
              <h2
                className="font-display text-[2.25rem] leading-[1.01] sm:text-[2.55rem] md:text-[3rem]"
                data-gsap-item
              >
                {title}
              </h2>
            ) : null}
            {headline ? (
              <h3
                className="font-display text-[1.9rem] leading-[1.06] text-foreground sm:text-[2.1rem] md:text-[3rem]"
                data-gsap-item
              >
                {headline}
              </h3>
            ) : null}
            {items ? (
              <ul className="max-w-2xl space-y-3 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {items.map((item) => (
                  <li key={item} className="flex gap-3" data-gsap-item>
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="max-w-2xl space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} data-gsap-item>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
