import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import { cn } from "@/lib/utils";

type AccordionItem = {
  id: number;
  title: string;
  caption: string;
  imageUrl: string;
};

interface LandingAccordionItemProps {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  items: AccordionItem[];
}

export function LandingAccordionItem({
  eyebrow,
  title,
  description,
  cta,
  items,
}: LandingAccordionItemProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <RevealSection
      as="section"
      className="section-shell section-space-lg"
      id="programlar"
      itemSelector="[data-gsap-item]"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div data-gsap-item>
          <div className="section-kicker">{eyebrow}</div>
          <h2 className="section-title max-w-xl">{title}</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground md:text-lg">
            {description}
          </p>
          <AppLink
            href={cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-white"
          >
            {cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </AppLink>
        </div>

        <div
          className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur"
          data-gsap-item
        >
          <div className="flex min-h-[420px] flex-col gap-4 overflow-x-auto md:flex-row">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  className={cn(
                    "relative h-[320px] w-full overflow-hidden rounded-[1.5rem] transition-all duration-700 ease-in-out md:h-[420px]",
                    isActive
                      ? "md:flex-[3.6]"
                      : "md:min-w-0 md:flex-[1.2]",
                  )}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  type="button"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 p-6 text-left text-white transition-all duration-500",
                      !isActive && "md:bottom-10 md:rotate-90 md:origin-bottom-left",
                    )}
                  >
                    <p className="font-display text-3xl leading-none">{item.title}</p>
                    <p
                      className={cn(
                        "mt-3 max-w-[18rem] text-sm text-white/80 transition-opacity",
                        isActive ? "opacity-100" : "opacity-0 md:hidden",
                      )}
                    >
                      {item.caption}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
