import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { RevealSection } from "@/components/gsap/reveal-section";
import { AppLink } from "@/components/ui/app-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
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

interface PricingSectionProps {
  plans: PricingCardProps[];
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
  highlight,
}: PricingCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className={cn(
        "flex h-full flex-col justify-between rounded-[2rem] border p-6 shadow-soft",
        highlight
          ? "border-primary/25 bg-gradient-to-b from-primary/10 to-white"
          : "border-border/70 bg-white/90",
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-4xl leading-none">{title}</h3>
            <div className="mt-4">
              <span className="text-4xl font-extrabold">{price}</span>
              <p className="mt-1 text-sm text-muted-foreground">
                {priceDescription}
              </p>
            </div>
          </div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="h-20 w-20 rounded-[1.5rem] object-cover"
            whileHover={{ rotate: -4, scale: 1.04 }}
          />
        </div>

        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm">
              {highlight ? (
                <Sparkles className="h-4 w-4 text-primary" />
              ) : (
                <CheckCircle2 className="h-4 w-4 text-accent" />
              )}
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <AppLink
        href={href ?? "/gorusme-planlayin"}
        className={cn(buttonVariants(), "mt-8 w-full")}
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
        {plans.map((plan) => (
          <div key={plan.title} data-gsap-item>
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
