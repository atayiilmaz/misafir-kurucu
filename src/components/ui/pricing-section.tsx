import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingPlan {
  title: string;
  price: string;
  priceDescription: string;
  description: string;
  features: string[];
  buttonText: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  highlight?: boolean;
}

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
  price,
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
        "border-[#f3cdb4] bg-[linear-gradient(180deg,#fff8f3_0%,#ffe7d7_54%,#ffd8c2_100%)] text-foreground",
      bodyClass: "text-foreground/72",
      iconClass: "text-[#d47b47]",
      imageClass: "border border-white/70 shadow-[0_12px_24px_-18px_rgba(170,96,44,0.55)]",
      buttonClass:
        "border-[#efc2a2] bg-white text-foreground hover:bg-white",
    },
    {
      cardClass:
        "border-[#d9b3aa] bg-[linear-gradient(180deg,#f5dfd6_0%,#ebc0b1_56%,#d99a81_100%)] text-foreground",
      bodyClass: "text-foreground/78",
      iconClass: "text-[#a45a43]",
      imageClass: "border border-white/55 shadow-[0_12px_24px_-18px_rgba(124,71,54,0.55)]",
      buttonClass:
        "border-[#c98668] bg-white text-foreground hover:bg-white",
    },
    {
      cardClass:
        "border-[#55302b] bg-[linear-gradient(180deg,#6c4540_0%,#472723_58%,#241211_100%)] text-white",
      bodyClass: "text-white/76",
      iconClass: "text-[#ffbf95]",
      imageClass: "border border-white/12 shadow-[0_12px_24px_-18px_rgba(0,0,0,0.8)]",
      buttonClass:
        "border-white/70 bg-white text-foreground hover:bg-white",
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
            <h3 className="font-display text-4xl leading-none md:text-[2.65rem]">
              {title}
            </h3>
            <div className="mt-4">
              <span className="text-4xl font-extrabold">{price}</span>
              <p className={cn("mt-1 text-sm", theme.bodyClass)}>
                {priceDescription}
              </p>
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

      <AppLink
        href={href ?? "/gorusme-planlayin"}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mt-8 w-full",
          theme.buttonClass,
        )}
      >
        {buttonText}
      </AppLink>
    </motion.article>
  );
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <RevealSection
      as="section"
      className="section-shell py-20"
      itemSelector="[data-gsap-item]"
    >
      <div className="text-center" data-gsap-item>
        <div className="section-kicker">Programlar</div>
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
