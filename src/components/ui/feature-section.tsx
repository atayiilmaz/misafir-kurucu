const aboutParagraphs = [
  "16 yılı aşkın süredir tekstil sektörünün içindeyim.",
  "Kendi mağazamı kurarak başladım; üretim, tedarik, e-ticaret ve marka kurma süreçlerinin tamamını sahada deneyimledim. Bu süreçte hem büyüttüm hem yeniden başlamak zorunda kaldım.",
  "Üretim ve e-ticaret alanında kendi iş modellerimi kurarak markalar geliştirdim ve devrettim.",
  "Bugün, edindiğim bu deneyimle markalara danışmanlık veriyorum.",
  "Amacım; teorik bilgi aktarmak değil, markaların doğru yapı ve stratejiyle büyümesini sağlamak.",
];

export default function FeatureSection() {
  return (
    <section className="section-shell py-20" id="hakkimda">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative w-full max-w-md">
          <img
            src="/images/aboutme.jpeg"
            alt="Sevinç hakkında görsel"
            className="h-full min-h-[420px] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-5xl leading-none">Hakkımda</h2>
          <div className="max-w-2xl space-y-4 text-lg leading-8 text-muted-foreground">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
