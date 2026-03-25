interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="section-shell pb-10 pt-8 md:pt-10">
      <div className="glass-panel p-8 md:p-10 lg:p-12">
        <div className="section-kicker">{eyebrow}</div>
        <h1 className="font-display text-5xl leading-[0.95] md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
