import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AArrowUpIcon } from "@/components/ui/a-arrow-up";
import { RocketIcon } from "@/components/ui/rocket";
import { ChartLineIcon } from "@/components/ui/chart-line";
import { TrendingUpIcon } from "@/components/ui/trending-up";
import { RevealSection } from "@/components/gsap/reveal-section";
import { BlocksIcon } from "@/components/ui/blocks";
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
  buttonText,
  href,
  index,
}: PricingCardProps) {
  const themes = [
    {
      cardClass:
        "border-[#e4bea6] bg-[linear-gradient(180deg,rgba(255,233,217,0.98)_0%,rgba(249,218,198,0.97)_60%,rgba(255,244,236,0.98)_100%)] text-[#2f201b] shadow-[0_26px_56px_-44px_rgba(103,67,45,0.24)]",
      bodyClass: "text-[#6c5448]",
      iconClass: "text-[#c2774f]",
      buttonClass:
        "!border-[#d58f62] !bg-[linear-gradient(180deg,#e99b6f,#d8794c)] !text-white shadow-[0_18px_36px_-22px_rgba(202,112,68,0.58)] hover:!border-[#c9794d] hover:!bg-[linear-gradient(180deg,#e58d60,#cc6d43)] hover:shadow-[0_22px_42px_-22px_rgba(202,112,68,0.68)]",
    },
    {
      cardClass:
        "border-[#d4b5ae] bg-[linear-gradient(180deg,rgba(247,229,224,0.98)_0%,rgba(236,214,208,0.97)_58%,rgba(253,242,239,0.99)_100%)] text-[#2f201d] shadow-[0_26px_56px_-44px_rgba(100,68,55,0.22)]",
      bodyClass: "text-[#6b554a]",
      iconClass: "text-[#ad685b]",
      buttonClass:
        "!border-[#c6857c] !bg-[linear-gradient(180deg,#cf8a80,#b96f66)] !text-white shadow-[0_18px_36px_-22px_rgba(170,96,86,0.54)] hover:!border-[#b8736a] hover:!bg-[linear-gradient(180deg,#c77b72,#ad625b)] hover:shadow-[0_22px_42px_-22px_rgba(170,96,86,0.64)]",
    },
    {
      cardClass:
        "border-[#c4b2ab] bg-[linear-gradient(180deg,rgba(233,224,219,0.98)_0%,rgba(219,207,201,0.97)_56%,rgba(247,241,237,0.98)_100%)] text-[#2a211e] shadow-[0_26px_56px_-44px_rgba(80,58,49,0.22)]",
      bodyClass: "text-[#645651]",
      iconClass: "text-[#87665c]",
      buttonClass:
        "!border-[#a6877c] !bg-[linear-gradient(180deg,#a98a7f,#84675e)] !text-white shadow-[0_18px_36px_-22px_rgba(112,83,74,0.5)] hover:!border-[#95776d] hover:!bg-[linear-gradient(180deg,#9c7d73,#765b53)] hover:shadow-[0_22px_42px_-22px_rgba(112,83,74,0.6)]",
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
  const isFoundationPlan = title === "Markanı Kur";
  const isGrowthPlan = title === "Markanı Büyüt";
  const isStrategicPlan = title === "Stratejik Çözümler";
  const heroIcons = [
    <RocketIcon key="hero-icon-rocket" size={34} className={theme.iconClass} />,
    <TrendingUpIcon key="hero-icon-trending" size={34} className={theme.iconClass} />,
    <BlocksIcon key="hero-icon-up" size={34} className={theme.iconClass} />,
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
            <h3 className="pricing-plan-title font-display text-[2rem] leading-none sm:text-[2.2rem] md:text-[2.65rem]">
              {titleLines.map((line, lineIndex) => (
                <span key={`${line}-${lineIndex}`} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <div className="mt-5 min-h-14">
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

        {isFoundationPlan || isGrowthPlan ? (
          <>
            <div className="mt-7 space-y-2">
              <p className={cn("text-base font-semibold leading-7", theme.bodyClass)}>
                Kimler için?
              </p>
              <p className={cn("text-base leading-7", theme.bodyClass)}>
                {descriptionBody}
              </p>
            </div>

            {isFoundationPlan ? (
              <div className="mt-8 space-y-4 text-[#5f3e2c]">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <span className="text-sm font-semibold leading-6 text-[#6c5448]">
                    Tahmini tasarruf
                    <span className="block">(yanlış başlangıç maliyeti)</span>
                  </span>
                  <span className="shrink-0 text-right text-lg font-semibold leading-6 text-[#5f3e2c]">
                    ₺240K – ₺400K+
                  </span>
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <span className="text-sm font-semibold leading-6 text-[#6c5448]">
                    Kazanılan zaman
                  </span>
                  <span className="shrink-0 text-right text-lg font-semibold leading-6 text-[#5f3e2c]">
                    12 – 18 ay
                  </span>
                </div>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 text-[#5f3e2c]">
                <span className="text-sm font-semibold leading-6 text-[#6b554a]">
                  Tahmini verimlilik artışı
                </span>
                <span className="shrink-0 text-right text-lg font-semibold leading-6 text-[#5f3e2c]">
                  %40 – %60
                </span>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="mt-7 space-y-4">
              {hasDescriptionHeading ? (
                <p className={cn("text-base font-semibold leading-7", theme.bodyClass)}>
                  {descriptionHeading}
                </p>
              ) : null}
              <p className={cn("whitespace-pre-line text-base leading-7", theme.bodyClass)}>
                {descriptionBody}
              </p>
            </div>
            {isStrategicPlan ? (
              <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 text-[#5f3e2c]">
                <span className="text-sm font-semibold leading-6 text-[#645651]">
                  Kazanımlar
                </span>
                <span className="shrink-0 text-right text-lg font-semibold leading-6 text-[#5f3e2c]">
                  Hızlı aksiyon planı
                </span>
              </div>
            ) : null}
          </>
        )}
      </div>

      <SubtleButton
        href={href ?? "/gorusme-planlayin"}
        fullWidth
        theme="light"
        className={cn("mt-8 h-12 text-[0.95rem] font-semibold tracking-[0.01em]", theme.buttonClass)}
      >
        {buttonText}
        <ArrowUpRight
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </SubtleButton>
    </motion.article>
  );
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <RevealSection
      as="section"
      className="pricing-section section-shell section-space-lg"
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

      <div className="mx-auto mt-14 max-w-3xl text-center" data-gsap-item>
        <p className="pricing-help-cta-text leading-tight text-[#6f5849]">
          Hangi paketi seçeceğinden hala emin değil misin? Kısa bir görüşmeyle
          birlikte karar verebiliriz.
        </p>
        <SubtleButton
          href="/gorusme-planlayin"
          theme="secondary"
          size="lg"
          className="mt-6 h-12 px-8 text-base"
        >
          Ücretsiz ön görüşme al
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </SubtleButton>
      </div>
    </RevealSection>
  );
}
