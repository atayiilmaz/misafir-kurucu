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
}: FeatureSectionProps) {
  return (
    <section className={cn("py-20", backgroundClassName)} id={id}>
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div
            className={`relative w-full max-w-md ${
              reverse ? "lg:order-2 lg:justify-self-end" : ""
            }`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full min-h-[420px] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>

          <div className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}>
            <h2 className="font-display text-5xl leading-none">{title}</h2>
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
