"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type StorySection = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  items: string[];
};

type ParallaxScrollFeatureSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: StorySection[];
};

function StoryBlock({ section }: { section: StorySection }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [0.18, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.72],
    ["inset(0 100% 0 0 round 2rem)", "inset(0 0% 0 0 round 2rem)"],
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [64, 0]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "grid min-h-[78vh] items-center gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
        section.reverse && "lg:grid-cols-[1.1fr_0.9fr]",
      )}
    >
      <motion.div
        style={{ y: translateY }}
        className={cn("space-y-6", section.reverse && "lg:order-2")}
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
          0{section.id}
        </div>
        <h3 className="font-display text-[2.2rem] leading-[0.95] text-foreground md:text-[3.4rem]">
          {section.title}
        </h3>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground">
          {section.description}
        </p>
        <div className="grid gap-3 pt-2">
          {section.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-[1.5rem] border border-border/60 bg-white/70 px-4 py-4 shadow-soft"
            >
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm leading-7 text-foreground/85">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ opacity, clipPath }}
        className={cn("relative", section.reverse && "lg:order-1")}
      >
        <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-soft">
          <img
            src={section.imageUrl}
            alt={section.title}
            className="h-[22rem] w-full object-cover md:h-[32rem]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function ParallaxScrollFeatureSection({
  eyebrow,
  title,
  description,
  sections,
}: ParallaxScrollFeatureSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="section-shell">
        <div className="flex min-h-[44vh] flex-col items-center justify-center rounded-[2.5rem] border border-border/60 bg-white/80 px-6 py-12 text-center shadow-soft md:px-10">
          <p className="section-kicker">{eyebrow}</p>
          <h2 className="mt-4 max-w-4xl font-display text-[2.6rem] leading-[0.95] text-foreground md:text-[4.4rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          <p className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
            Kaydırarak incele <ArrowDown className="h-4 w-4" />
          </p>
        </div>
      </div>

      <div className="section-shell">
        {sections.map((section) => (
          <StoryBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}
