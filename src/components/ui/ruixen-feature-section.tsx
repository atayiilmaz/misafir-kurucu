"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type RotatingCard = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
};

type QuickPoint = {
  title: string;
  description: string;
};

type StatItem = {
  value: string;
  label: string;
};

type RuixenFeatureSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: RotatingCard[];
  quickPoints: QuickPoint[];
  stats: StatItem[];
  quote: string;
  quoteAuthor: string;
  image: string;
  imageAlt: string;
};

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full bg-primary/10 px-2 py-1 text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}

type CardItem = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
};

function CardStack({
  items,
  offset = 12,
  scaleFactor = 0.06,
}: {
  items: CardItem[];
  offset?: number;
  scaleFactor?: number;
}) {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        const lastCard = newArray.pop();

        if (lastCard) {
          newArray.unshift(lastCard);
        }

        return newArray;
      });
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mx-auto my-4 h-52 w-full md:w-[26rem]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute flex h-52 w-full flex-col justify-between rounded-[2rem] border border-border/70 bg-white p-5 shadow-soft"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold tracking-[0.24em] text-primary/80">
                {card.title}
              </p>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <p className="text-base leading-7 text-foreground/80">{card.content}</p>
          </div>
          <div>
            <p className="font-display text-lg text-foreground">{card.subtitle}</p>
            <p className="text-sm text-muted-foreground">Misafir Kurucu program akışı</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function RuixenFeatureSection({
  eyebrow,
  title,
  description,
  cards,
  quickPoints,
  stats,
  quote,
  quoteAuthor,
  image,
  imageAlt,
}: RuixenFeatureSectionProps) {
  return (
    <section className="section-shell section-space">
      <div className="overflow-hidden rounded-[2.5rem] border border-border/70 bg-white/88 shadow-soft">
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-border/60 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <p className="section-kicker">{eyebrow}</p>
            <div className="relative mb-8 w-full">
              <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />
              <CardStack items={cards} />
            </div>
            <h1 className="font-display text-[2.9rem] leading-[0.99] text-foreground md:text-[4.6rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="overflow-hidden rounded-[2rem] border border-border/60">
              <img
                src={image}
                alt={imageAlt}
                className="h-[18rem] w-full object-cover md:h-[22rem]"
              />
            </div>
            <h3 className="mt-6 text-2xl leading-tight text-foreground md:text-3xl">
              Programın seni taşıdığı yer:{" "}
              <Highlight className="font-display text-base tracking-[0.18em]">
                daha net, daha ölçülebilir, daha uygulanabilir kararlar
              </Highlight>
            </h3>
            <div className="group relative mt-6 inline-flex w-full items-center justify-center rounded-[1.75rem] border border-border/60 bg-background/70 p-1">
              <CardContent className="w-full space-y-3 rounded-[1.4rem] border border-white/80 bg-white/90 p-4 sm:p-5">
                {quickPoints.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start justify-between gap-4 rounded-[1.25rem] border border-border/60 px-4 py-4 transition hover:bg-primary/5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                ))}
              </CardContent>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-t border-border/60 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div className="grid grid-cols-3 gap-5 text-center sm:text-left">
            {stats.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="font-display text-[2.1rem] text-foreground md:text-[2.7rem]">
                  {item.value}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-primary/20 pl-5 text-muted-foreground">
            <p className="text-base leading-8 md:text-lg">{quote}</p>
            <cite className="mt-4 block text-sm font-semibold uppercase tracking-[0.22em] text-primary/85 not-italic">
              {quoteAuthor}
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
