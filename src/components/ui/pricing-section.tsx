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
        "border-[#e9cdbb] bg-[linear-gradient(180deg,rgba(255,244,234,0.98)_0%,rgba(255,235,220,0.96)_60%,rgba(255,251,247,0.98)_100%)] text-[#2f201b] shadow-[0_26px_56px_-44px_rgba(103,67,45,0.24)]",
      bodyClass: "text-[#6c5448]",
      iconClass: "text-[#c2774f]",
      featureIconClass: "text-[#cb7a4d]",
      buttonClass:
        "!border-[#e1b89d] !bg-[linear-gradient(180deg,rgba(255,249,244,0.98),rgba(251,231,216,0.98))] !text-[#8a5339] shadow-[0_16px_30px_-24px_rgba(120,73,48,0.24)] hover:!border-[#d49d79] hover:!bg-[linear-gradient(180deg,#fff8f2,#f6dfcf)] hover:shadow-[0_20px_34px_-24px_rgba(120,73,48,0.3)]",
    },
    {
      cardClass:
        "border-[#dcc5c0] bg-[linear-gradient(180deg,rgba(251,239,236,0.98)_0%,rgba(243,227,222,0.97)_58%,rgba(255,249,247,0.99)_100%)] text-[#2f201d] shadow-[0_26px_56px_-44px_rgba(100,68,55,0.22)]",
      bodyClass: "text-[#6b554a]",
      iconClass: "text-[#ad685b]",
      featureIconClass: "text-[#ba7162]",
      buttonClass:
        "!border-[#d6b7af] !bg-[linear-gradient(180deg,rgba(255,250,248,0.98),rgba(243,228,224,0.98))] !text-[#825443] shadow-[0_16px_30px_-24px_rgba(116,77,61,0.22)] hover:!border-[#c69184] hover:!bg-[linear-gradient(180deg,#fff9f7,#ecddd8)] hover:shadow-[0_20px_34px_-24px_rgba(116,77,61,0.28)]",
    },
    {
      cardClass:
        "border-[#d1c4bf] bg-[linear-gradient(180deg,rgba(242,235,231,0.98)_0%,rgba(231,221,216,0.97)_56%,rgba(251,247,244,0.98)_100%)] text-[#2a211e] shadow-[0_26px_56px_-44px_rgba(80,58,49,0.22)]",
      bodyClass: "text-[#645651]",
      iconClass: "text-[#87665c]",
      featureIconClass: "text-[#946f64]",
      buttonClass:
        "!border-[#cab7b0] !bg-[linear-gradient(180deg,rgba(255,253,252,0.98),rgba(234,226,222,0.98))] !text-[#70544b] shadow-[0_16px_30px_-24px_rgba(89,67,58,0.2)] hover:!border-[#b09388] hover:!bg-[linear-gradient(180deg,#fffdfc,#e5dad5)] hover:shadow-[0_20px_34px_-24px_rgba(89,67,58,0.26)]",
    },
  ] as const;
  const theme = themes[index] ?? themes[themes.length - 1];
  const titleLines = title.includes(" ")
    ? [title.split(" ")[0], title.split(" ").slice(1).join(" ")]
    : [title];
  const [descriptionHeading, ...descriptionBodyParts] = description.split("\n");
  const hasDescriptionHeading = descriptionHeading.trim().endsWith("?");
  const descriptionBody = hasDescriptionHeading
    ? descriptionBodyParts.join("\n").trim()
    : description;
  const heroIcons = [
    <AArrowUpIcon key="hero-icon-up" size={34} className={theme.iconClass} />,
    <TrendingUpIcon key="hero-icon-trending" size={34} className={theme.iconClass} />,
    <ChartLineIcon key="hero-icon-chart" size={34} className={theme.iconClass} />,
  ] as const;
  const heroIcon = heroIcons[index] ?? heroIcons[heroIcons.length - 1];

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className={cn(
        "flex h-full flex-col justify-between rounded-[2.6rem] border p-7 shadow-soft md:p-8",
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
              <p className={cn("whitespace-pre-line text-base leading-7", theme.bodyClass)}>
                {priceDescription}
              </p>
            </div>
          </div>
          <motion.div
            className="flex shrink-0 items-center justify-center pt-1"
            whileHover={{ rotate: -6, scale: 1.08 }}
          >
            {heroIcon}
          </motion.div>
        </div>

        <div className="mt-5 space-y-4">
          {hasDescriptionHeading ? (
            <p className={cn("text-base font-semibold leading-7", theme.bodyClass)}>{descriptionHeading}</p>
          ) : null}
          <p className={cn("whitespace-pre-line text-base leading-7", theme.bodyClass)}>
            {descriptionBody}
          </p>
        </div>

        <p className={cn("mt-6 text-base font-semibold leading-7", theme.bodyClass)}>
          Ne elde edeceksin?
        </p>
        <ul className="mt-6 space-y-3.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-base leading-7">
              <CheckCircle2 className={cn("mt-1 h-4 w-4 shrink-0", theme.featureIconClass)} />
              <span className="whitespace-pre-line">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <SubtleButton
        href={href ?? "/gorusme-planlayin"}
        fullWidth
        theme="secondary"
        className={cn("mt-8 h-12 text-[0.95rem] font-semibold tracking-[0.01em]", theme.buttonClass)}
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
