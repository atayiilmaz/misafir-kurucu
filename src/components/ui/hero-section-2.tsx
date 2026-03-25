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
      delayChildren: 0.2,
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
      logo,
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
          "relative w-full overflow-hidden pb-10 pt-2 md:pb-16",
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid min-h-[calc(100vh-5.75rem)] items-stretch bg-transparent md:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center bg-transparent">
              <div className="mx-auto flex h-full w-full max-w-[90rem] flex-col justify-center px-3 py-8 sm:px-4 md:px-6 md:py-12 lg:px-8 lg:py-16">
                <div>
                  <motion.header className="mb-12" variants={itemVariants}>
                    <div className="flex items-center gap-4">
                      {logo?.url ? (
                        <img
                          src={logo.url}
                          alt={logo.alt}
                          className="h-12 w-12 rounded-full object-cover shadow-md"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                          MK
                        </div>
                      )}
                      <div>
                        {logo?.text && (
                          <p className="font-display text-3xl leading-none">
                            {logo.text}
                          </p>
                        )}
                        {slogan && (
                          <p className="mt-1 text-[11px] font-semibold tracking-[0.32em] text-muted-foreground">
                            {slogan}
                          </p>
                          
                        )}
                      </div>
                    </div>
                  </motion.header>

                  <motion.div variants={containerVariants}>
                    <motion.div className="section-kicker" variants={itemVariants}>
                      16+ yıllık sektör tecrübesi
                    </motion.div>
                    <motion.h1
                      className="max-w-2xl font-display text-[3.4rem] leading-[0.9] md:text-[5rem] lg:text-[5.75rem]"
                      variants={itemVariants}
                    >
                      {title}
                    </motion.h1>
                    <motion.div
                      className="my-7 h-px w-24 bg-primary"
                      variants={itemVariants}
                    />
                    <motion.p
                      className="max-w-xl text-lg leading-8 text-muted-foreground"
                      variants={itemVariants}
                    >
                      {subtitle}
                    </motion.p>
                    <motion.div
                      className="mt-8 flex flex-wrap items-center gap-4"
                      variants={itemVariants}
                    >
                      <AppLink
                        href={callToAction.href}
                        className={cn(buttonVariants({ size: "lg" }))}
                      >
                        {callToAction.text}
                      </AppLink>
                      <AppLink
                        href="/blog"
                        className="text-sm font-semibold tracking-[0.24em] text-primary"
                      >
                        Son içeriklere göz atın
                      </AppLink>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="relative min-h-[440px] bg-cover bg-center md:min-h-[calc(100vh-5.75rem)]"
              style={{ backgroundImage: `url(${backgroundImage})` }}
              initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
              animate={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1.2, ease: "circOut" as const }}
            >
              <div className="flex h-full min-h-[440px] items-end justify-start bg-gradient-to-t from-black/40 via-black/10 to-transparent p-6 md:p-8">
                <div className="max-w-sm rounded-[1.75rem] border border-white/20 bg-black/25 p-5 text-white backdrop-blur-xl">
                  <p className="text-xs font-semibold tracking-[0.24em] text-white/80">
                    Mentorluk yaklaşımı
                  </p>
                  <p className="mt-3 font-display text-3xl leading-tight">
                    Marka fikrinden üretim ve satışa uzanan net yol haritası
                  </p>
                </div>
              </div>
            </motion.div>
        </div>
      </motion.section>
    );
  },
);

HeroSection.displayName = "HeroSection";
