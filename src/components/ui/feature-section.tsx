import { cn } from "@/lib/utils";

const aboutParagraphs = [
  "16 yılı aşkın süredir tekstil sektörünün içindeyim.",
  "Kendi mağazamı kurarak başladım; üretim, tedarik, e-ticaret ve marka kurma süreçlerinin tamamını sahada deneyimledim. Bu süreçte hem büyüttüm hem yeniden başlamak zorunda kaldım.",
  "Üretim ve e-ticaret alanında kendi iş modellerimi kurarak markalar geliştirdim ve devrettim.",
  "Bugün, edindiğim bu deneyimle markalara danışmanlık veriyorum.",
  "Amacım; teorik bilgi aktarmak değil, markaların doğru yapı ve stratejiyle büyümesini sağlamak.",
];

type FeatureSectionProps = {
  id?: string;
  reverse?: boolean;
  title?: string;
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
  title = "Hakkımda",
  paragraphs = aboutParagraphs,
  items,
  imageSrc = "/images/aboutme.jpeg",
  imageAlt = "Sevinç hakkında görsel",
  backgroundClassName,
  compactImage = false,
  compactGap = false,
}: FeatureSectionProps) {
  return (
    <section className={cn("py-20", backgroundClassName)} id={id}>
      <div className="section-shell">
        <div
          className={cn(
            "mx-auto grid max-w-[80rem] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:max-w-[82rem] xl:gap-12",
            compactGap && "lg:gap-7 xl:gap-8",
          )}
        >
          <div
            className={cn(
              "relative w-full lg:justify-self-start",
              compactImage ? "max-w-[26rem] xl:max-w-[28rem]" : "max-w-[31rem] xl:max-w-[33rem]",
              reverse && "lg:order-2 lg:justify-self-end",
            )}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className={cn(
                "w-full rounded-[2rem] object-cover shadow-soft",
                compactImage
                  ? "aspect-[4/5] object-[center_top]"
                  : "h-[28rem] xl:h-[32rem]",
              )}
            />
          </div>

          <div
            className={cn(
              "w-full max-w-[40rem] space-y-6 lg:justify-self-end",
              reverse && "lg:order-1 lg:justify-self-start",
            )}
          >
            <h2 className="font-display text-[2.8rem] leading-[0.94] md:text-5xl">
              {title}
            </h2>
            {items ? (
              <ul className="max-w-2xl space-y-3 text-lg leading-8 text-muted-foreground">
                {items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="max-w-2xl space-y-4 text-lg leading-8 text-muted-foreground">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
