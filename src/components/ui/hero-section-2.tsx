import * as React from "react";
import { motion } from "framer-motion";
import { CirclePlay } from "lucide-react";
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
        className={cn("relative overflow-hidden pb-12 pt-4 md:pb-20", className)}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_20%_10%,rgba(255,169,98,0.22),transparent_24%),radial-gradient(circle_at_75%_18%,rgba(255,208,166,0.36),transparent_22%)]" />

        <div className="section-shell">
          <div className="relative overflow-hidden px-4 py-5 md:px-7 md:py-7 lg:px-8 lg:py-8">
            <div className="pointer-events-none absolute left-8 top-10 h-32 w-32 rounded-full bg-primary/16 blur-3xl" />
            <div className="pointer-events-none absolute bottom-10 right-8 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />

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

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/5 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                  />

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.42 }}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white text-foreground shadow-lg backdrop-blur">
                      <CirclePlay className="h-8 w-8 fill-current" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute left-5 top-5 inline-flex rounded-full border border-white/60 bg-white/84 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/82 backdrop-blur"
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.28 }}
                  >
                    16+ yıl saha deneyimi
                  </motion.div>

                  <motion.div
                    className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/15 bg-black/26 p-4 text-white backdrop-blur-md"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.48 }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/78">
                      Misafir Kurucu sistemi
                    </p>
                    <p className="mt-2 font-display text-[1.7rem] leading-[0.96]">
                      Strateji, üretim ve satış akışı tek çatı altında
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="order-1 flex flex-col justify-center lg:order-2"
                variants={containerVariants}
              >
                <motion.div
                  className="mb-5 flex flex-wrap items-center gap-3"
                  variants={itemVariants}
                >
                  <div className="section-kicker mb-0">Tekstil girişimciliği danışmanlığı</div>
                  {logo?.text ? (
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/60">
                      {logo.text}
                    </span>
                  ) : null}
                </motion.div>

                <motion.h1
                  className="max-w-[11ch] font-display text-[3.35rem] leading-[0.9] md:text-[4.8rem] lg:text-[5.5rem]"
                  variants={itemVariants}
                >
                  {title}
                </motion.h1>

                <motion.div
                  className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/78"
                  variants={itemVariants}
                >
                  <span className="text-[1.05rem] tracking-[0.14em] text-foreground">
                    ★★★★★
                  </span>
                  <span>{slogan}</span>
                </motion.div>

                <motion.p
                  className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-[1.15rem]"
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

                <motion.div
                  className="mt-10 grid gap-3 text-sm text-foreground/82 sm:grid-cols-3"
                  variants={itemVariants}
                >
                  <div className="rounded-[1.35rem] border border-border/55 bg-white/68 px-4 py-4 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Netleşme
                    </p>
                    <p className="mt-2 leading-6">
                      Hedef müşteri, niş ve ürün yapısını baştan netleştiriyoruz.
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-border/55 bg-white/68 px-4 py-4 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Kurulum
                    </p>
                    <p className="mt-2 leading-6">
                      Üretim, maliyet ve tedarik akışını parçalayarak kuruyoruz.
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-border/55 bg-white/68 px-4 py-4 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Satış
                    </p>
                    <p className="mt-2 leading-6">
                      İçerik ve teklif dilini satış kanallarıyla eşliyoruz.
                    </p>
                  </div>
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
