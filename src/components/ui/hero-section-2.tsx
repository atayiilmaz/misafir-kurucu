import * as React from "react";
import { motion } from "framer-motion";
import { AppLink } from "@/components/ui/app-link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface HeroSectionProps {
  className?: string;
  logo?: {
    url?: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      slogan,
      title,
      subtitle,
      callToAction,
      backgroundImage,
    },
    ref,
  ) => {
    return (
      <motion.section
        ref={ref}
        className={cn("relative overflow-hidden pb-12 pt-0 md:pb-20", className)}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="section-shell">
          <div className="relative overflow-hidden px-4 py-4 md:px-7 md:py-6 lg:px-8 lg:py-8">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
              <motion.div
                className="relative order-2 lg:order-1"
                variants={itemVariants}
              >
                <div className="group relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-[0_28px_60px_-28px_rgba(55,32,16,0.42)]">
                  <motion.div
                    className="aspect-[5/6] w-full bg-cover bg-center sm:aspect-[4/5] lg:min-h-[39rem]"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    initial={{ scale: 1.08, opacity: 0.78 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: "easeOut" as const }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="order-1 flex flex-col justify-center lg:order-2"
                variants={containerVariants}
              >
                {slogan ? (
                  <motion.p
                    className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
                    variants={itemVariants}
                  >
                    {slogan}
                  </motion.p>
                ) : null}

                <motion.h1
                  className="max-w-[11ch] font-display text-[3.35rem] leading-[0.9] md:text-[4.8rem] lg:text-[5.5rem]"
                  variants={itemVariants}
                >
                  {title}
                </motion.h1>

                <motion.p
                  className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-8 text-muted-foreground md:text-[1.15rem]"
                  variants={itemVariants}
                >
                  {subtitle}
                </motion.p>

                <motion.div
                  className="mt-9 flex flex-wrap items-center gap-4"
                  variants={itemVariants}
                >
                  <AppLink
                    href={callToAction.href}
                    className={cn(buttonVariants({ size: "lg" }), "min-w-[14rem]")}
                  >
                    {callToAction.text}
                  </AppLink>
                  <AppLink
                    href="/blog"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "min-w-[14rem]",
                    )}
                  >
                    Son içeriklere göz atın
                  </AppLink>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  },
);

HeroSection.displayName = "HeroSection";
