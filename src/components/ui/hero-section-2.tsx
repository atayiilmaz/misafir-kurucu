import * as React from "react";
import { motion } from "framer-motion";
import { AppLink } from "@/components/ui/app-link";
import { cn } from "@/lib/utils";
import SubtleButton from "@/components/ui/subtle-button";

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
        className={cn(
          "home-hero relative overflow-hidden pb-8 pt-0 md:pb-14 lg:flex lg:min-h-[calc(100svh-5.75rem)] lg:items-center lg:pb-8 xl:pb-16",
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="section-shell">
          <div className="home-hero-frame relative overflow-hidden px-3 py-3 md:px-6 md:py-5 lg:px-6 lg:py-4 xl:px-8 xl:py-8">
            <div className="home-hero-grid grid items-center gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10 xl:gap-16">
              <motion.div
                className="home-hero-media-wrap relative order-2 lg:order-1 lg:max-w-[28rem] xl:max-w-[28rem]"
                variants={itemVariants}
              >
                <div className="group relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-none">
                  <motion.div
                    className="home-hero-media aspect-[5/6] w-full bg-cover bg-center sm:aspect-[4/5] lg:min-h-[23rem] xl:min-h-[32rem]"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    initial={{ scale: 1.08, opacity: 0.78 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: "easeOut" as const }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="home-hero-copy order-1 flex flex-col justify-center lg:order-2"
                variants={containerVariants}
              >
                {slogan ? (
                  <motion.p
                    className="home-hero-kicker mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground sm:text-sm md:mb-4"
                    variants={itemVariants}
                  >
                    {slogan}
                  </motion.p>
                ) : null}

                <motion.h1
                  className="home-hero-title max-w-[12ch] font-display text-[2.65rem] leading-[0.99] sm:text-[3rem] md:text-[4.5rem] lg:text-[4.5rem] xl:max-w-[11ch] xl:text-[4.5rem]"
                  variants={itemVariants}
                >
                  {title}
                </motion.h1>

                <motion.p
                  className="home-hero-subtitle mt-4 max-w-2xl whitespace-pre-line text-base leading-7 text-muted-foreground sm:text-[1.02rem] md:mt-5 md:text-[1.08rem] md:leading-8 xl:mt-6 xl:text-[1.15rem]"
                  variants={itemVariants}
                >
                  {subtitle}
                </motion.p>

                <motion.div
                  className="home-hero-actions mt-7 flex flex-wrap items-center gap-3 md:mt-8 md:gap-4"
                  variants={itemVariants}
                >
                  <SubtleButton
                    href={callToAction.href}
                    size="lg"
                    fullWidth
                    className="home-hero-action h-11 px-6 text-[0.95rem] sm:h-12 sm:w-auto sm:min-w-[13rem] sm:px-8 sm:text-base"
                  >
                    {callToAction.text}
                  </SubtleButton>
                  <SubtleButton
                    href="/blog"
                    size="lg"
                    fullWidth
                    className="home-hero-action h-11 px-6 text-[0.95rem] sm:h-12 sm:w-auto sm:min-w-[13rem] sm:px-8 sm:text-base"
                  >
                    Son içeriklere göz atın
                  </SubtleButton>
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
