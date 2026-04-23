import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AArrowUpIcon } from "@/components/ui/a-arrow-up";
import { ChartLineIcon } from "@/components/ui/chart-line";
import { TrendingUpIcon } from "@/components/ui/trending-up";
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
  index,
}: PricingCardProps) {
  const themes = [
    {
      cardClass:
        "border-[#efbe9d] bg-[linear-gradient(180deg,#ffc9a8_0%,#ffe0cc_58%,#fff4eb_100%)] text-foreground",
      bodyClass: "text-foreground/72",
      iconClass: "text-[#d47b47]",
      featureIconClass: "text-[#d47b47]",
      heroIconWrapClass: "bg-[#f4be96]/55 border border-white/72",
      buttonClass:
        "text-white shadow-[0_16px_30px_-22px_hsl(var(--primary)/0.6)]",
    },
    {
      cardClass:
        "border-[#d59a84] bg-[linear-gradient(180deg,#e09a79_0%,#efc0ae_54%,#fbebe3_100%)] text-foreground",
      bodyClass: "text-foreground/78",
      iconClass: "text-[#a45a43]",
      featureIconClass: "text-[#a45a43]",
      heroIconWrapClass: "bg-[#cc9c84]/38 border border-white/58",
      buttonClass:
        "text-white shadow-[0_16px_30px_-22px_hsl(var(--primary)/0.6)]",
    },
    {
      cardClass:
        "border-[#5d3731] bg-[linear-gradient(180deg,#2f1412_0%,#6b433d_40%,#9a675b_72%,#d8b0a2_100%)] text-white",
      bodyClass: "text-white/76",
      iconClass: "text-[#ffbf95]",
      featureIconClass: "text-[#ffbf95]",
      heroIconWrapClass: "bg-[#8f6a5f]/24 border border-white/16",
      buttonClass:
        "text-white shadow-[0_16px_30px_-22px_hsl(var(--primary)/0.65)]",
    },
  ] as const;
  const theme = themes[index] ?? themes[themes.length - 1];
  const titleLines =
    index < 2 && title.includes(" ") ? [title.split(" ")[0], title.split(" ").slice(1).join(" ")] : [title];
  const imageZoomClass = "scale-[1.35]";
  const imagePositions = [
    "object-[58%_48%]",
    "object-center",
    "object-center",
  ] as const;
  const [descriptionHeading, ...descriptionBodyParts] = description.split("\n");
  const hasDescriptionHeading = descriptionHeading.trim().endsWith("?");
  const descriptionBody = hasDescriptionHeading
    ? descriptionBodyParts.join("\n").trim()
    : description;
  const heroIcons = [
    <AArrowUpIcon key="hero-icon-up" size={30} className={theme.iconClass} />,
    <TrendingUpIcon key="hero-icon-trending" size={30} className={theme.iconClass} />,
    <ChartLineIcon key="hero-icon-chart" size={30} className={theme.iconClass} />,
  ] as const;
  const heroIcon = heroIcons[index] ?? heroIcons[heroIcons.length - 1];

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
              {titleLines.map((line, lineIndex) => (
                <span key={`${line}-${lineIndex}`} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <div className="mt-5">
              <p className={cn("whitespace-pre-line ", theme.bodyClass)}>
                {priceDescription}
              </p>
            </div>
          </div>
          <motion.div
            className={cn(
              "flex h-20 w-20 min-h-20 min-w-20 shrink-0 items-center justify-center rounded-[1.5rem] shadow-[0_12px_24px_-18px_rgba(84,48,28,0.34)]",
              theme.heroIconWrapClass,
            )}
            whileHover={{ rotate: -4, scale: 1.04 }}
          >
            {heroIcon}
          </motion.div>
        </div>

        <div className="mt-5 space-y-4">
          {hasDescriptionHeading ? (
            <p className={cn("text-sm font-semibold", theme.bodyClass)}>{descriptionHeading}</p>
          ) : null}
          <p className={cn("whitespace-pre-line text-sm leading-6", theme.bodyClass)}>
            {descriptionBody}
          </p>
        </div>

        <p className={cn("mt-6 text-sm font-semibold", theme.bodyClass)}>
          Ne elde edeceksin?
        </p>
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", theme.featureIconClass)} />
              <span className="whitespace-pre-line">{feature}</span>
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
      className="section-shell section-space-lg"
      id="programlar"
      itemSelector="[data-gsap-item]"
    >
      <div className="text-center" data-gsap-item>
        {/* <div className="section-kicker">Programlar</div> */}
        <h2 className="section-title">Hedefinize göre seçebileceğiniz çalışma modelleri</h2>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={plan.title} className="h-full" data-gsap-item>
            <PricingCard {...plan} index={index} />
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
