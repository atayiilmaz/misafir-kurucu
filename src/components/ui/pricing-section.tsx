import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import SubtleButton from "@/components/ui/subtle-button";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/content/programs";

interface PricingCardProps extends PricingPlan {
  index: number;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
  },
};

function PricingCard({
  title,
  priceDescription,
  description,
  features,
  buttonText,
  href,
  imageSrc,
  imageAlt,
  index,
}: PricingCardProps) {
  const themes = [
    {
      cardClass:
        "border-[#efbe9d] bg-[linear-gradient(180deg,#ffc9a8_0%,#ffe0cc_58%,#fff4eb_100%)] text-foreground",
      bodyClass: "text-foreground/72",
      iconClass: "text-[#d47b47]",
      imageClass: "border border-white/70 shadow-[0_12px_24px_-18px_rgba(170,96,44,0.55)]",
      buttonClass:
        "bg-primary text-white shadow-[0_16px_30px_-22px_hsl(var(--primary)/0.6)] hover:bg-primary/92",
    },
    {
      cardClass:
        "border-[#d59a84] bg-[linear-gradient(180deg,#e09a79_0%,#efc0ae_54%,#fbebe3_100%)] text-foreground",
      bodyClass: "text-foreground/78",
      iconClass: "text-[#a45a43]",
      imageClass: "border border-white/55 shadow-[0_12px_24px_-18px_rgba(124,71,54,0.55)]",
      buttonClass:
        "bg-primary text-white shadow-[0_16px_30px_-22px_hsl(var(--primary)/0.6)] hover:bg-primary/92",
    },
    {
      cardClass:
        "border-[#5d3731] bg-[linear-gradient(180deg,#2f1412_0%,#6b433d_40%,#9a675b_72%,#d8b0a2_100%)] text-white",
      bodyClass: "text-white/76",
      iconClass: "text-[#ffbf95]",
      imageClass: "border border-white/12 shadow-[0_12px_24px_-18px_rgba(0,0,0,0.8)]",
      buttonClass:
        "bg-primary text-white shadow-[0_16px_30px_-22px_hsl(var(--primary)/0.65)] hover:bg-primary/92",
    },
  ] as const;
  const theme = themes[index] ?? themes[themes.length - 1];

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className={cn(
        "flex h-full flex-col justify-between rounded-[2.6rem] border p-6 shadow-soft md:p-7",
        theme.cardClass,
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[2rem] leading-none sm:text-[2.2rem] md:text-[2.65rem]">
              {title}
            </h3>
            <div className="mt-5">
              <p className={cn("text-sm", theme.bodyClass)}>{priceDescription}</p>
            </div>
          </div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className={cn(
              "h-20 w-20 rounded-[1.5rem] object-cover",
              theme.imageClass,
            )}
            whileHover={{ rotate: -4, scale: 1.04 }}
          />
        </div>

        <p className={cn("mt-5 text-sm leading-6", theme.bodyClass)}>
          {description}
        </p>

        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm">
              {index === 1 ? (
                <Sparkles className={cn("h-4 w-4", theme.iconClass)} />
              ) : (
                <CheckCircle2 className={cn("h-4 w-4", theme.iconClass)} />
              )}
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <SubtleButton
        href={href ?? "/gorusme-planlayin"}
        fullWidth
        theme={index === 2 ? "dark" : "light"}
        className={cn("mt-8", theme.buttonClass)}
      >
        {buttonText}
      </SubtleButton>
    </motion.article>
  );
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <RevealSection
      as="section"
      className="section-shell py-20"
      id="programlar"
      itemSelector="[data-gsap-item]"
    >
      <div className="text-center" data-gsap-item>
        {/* <div className="section-kicker">Programlar</div> */}
        <h2 className="section-title">Hedefinize göre seçebileceğiniz çalışma modelleri</h2>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={plan.title} data-gsap-item>
            <PricingCard {...plan} index={index} />
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
