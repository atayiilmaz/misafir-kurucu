"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

type StaticImageData = string;

type Step = {
  id: string;
  name: string;
  title: string;
  description: string;
};

type ImageSet = {
  step1img1: StaticImageData;
  step1img2: StaticImageData;
  step2img1: StaticImageData;
  step2img2: StaticImageData;
  step3img: StaticImageData;
  step4img: StaticImageData;
  alt: string;
};

type StepImageProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
};

type AnimatedFeatureCarouselProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: Step[];
  image: ImageSet;
};

type AnimatedStepImageProps = StepImageProps & {
  preset?: "fadeInScale" | "slideInLeft" | "slideInRight";
  delay?: number;
};

const animationPresets = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { type: "spring", stiffness: 280, damping: 24, mass: 0.6 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 28 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -28 },
    transition: { type: "spring", stiffness: 280, damping: 24, mass: 0.6 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -28 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 28 },
    transition: { type: "spring", stiffness: 280, damping: 24, mass: 0.6 },
  },
} as const;

function useNumberCycler(totalSteps: number, interval = 5000) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
    }, interval);

    return () => window.clearTimeout(timerId);
  }, [currentNumber, totalSteps, interval]);

  const setStep = useCallback(
    (stepIndex: number) => {
      setCurrentNumber(stepIndex % totalSteps);
    },
    [totalSteps],
  );

  return { currentNumber, setStep };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile;
}

const StepImage = forwardRef<HTMLImageElement, StepImageProps>(
  ({ src, alt, className, style, ...props }, ref) => (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ position: "absolute", userSelect: "none", maxWidth: "unset", ...style }}
      {...props}
    />
  ),
);

StepImage.displayName = "StepImage";

const MotionStepImage = motion(StepImage);

function AnimatedStepImage({
  preset = "fadeInScale",
  delay = 0,
  ...props
}: AnimatedStepImageProps) {
  const presetConfig = animationPresets[preset];

  return (
    <MotionStepImage
      {...props}
      {...presetConfig}
      transition={{ ...presetConfig.transition, delay }}
    />
  );
}

function FeatureCard({
  children,
  step,
  steps,
}: {
  children: React.ReactNode;
  step: number;
  steps: Step[];
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative w-full rounded-[2.3rem]"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div className="relative w-full overflow-hidden rounded-[2.3rem] border border-border/70 bg-white shadow-soft">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(26rem_circle_at_var(--x)_var(--y),rgba(190,132,77,0.14),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative grid min-h-[34rem] gap-8 p-6 md:p-10 lg:grid-cols-[0.78fr_1.22fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="z-10 flex flex-col justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary/85">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  {steps[step].id}
                </span>
                {steps[step].name}
              </div>
              <h3 className="font-display text-[2.35rem] leading-[1.02] text-foreground md:text-[3.55rem]">
                {steps[step].title}
              </h3>
              <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                {steps[step].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] border border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,240,232,0.86))] md:min-h-[28rem]">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StepsNav({
  steps,
  current,
  onChange,
}: {
  steps: Step[];
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <nav aria-label="Program süreç adımları" className="flex justify-center px-4">
      <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
        {steps.map((step, stepIdx) => {
          const isCompleted = current > stepIdx;
          const isCurrent = current === stepIdx;

          return (
            <motion.li
              key={step.id}
              animate={{ scale: isCurrent ? 1 : 0.96, opacity: isCurrent ? 1 : 0.82 }}
              transition={{ duration: 0.24 }}
            >
              <button
                type="button"
                className={cn(
                  "group flex items-center gap-2.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                  isCurrent
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-foreground hover:bg-primary/8",
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs transition-all duration-300",
                    isCompleted
                      ? "bg-primary-foreground/90 text-primary"
                      : isCurrent
                        ? "bg-primary-foreground/90 text-primary"
                        : "bg-primary/10 text-primary",
                  )}
                >
                  {isCompleted ? <Check className="h-3.5 w-3.5" /> : stepIdx + 1}
                </span>
                <span className="hidden sm:inline-block">{step.name}</span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

const defaultClasses = {
  img: "rounded-[1.4rem] border border-border/70 object-cover shadow-soft",
  step1img1: "left-[4%] top-[10%] h-[40%] w-[44%]",
  step1img2: "left-[46%] top-[34%] h-[44%] w-[44%]",
  step2img1: "left-[7%] top-[16%] h-[52%] w-[40%]",
  step2img2: "left-[48%] top-[28%] h-[40%] w-[34%]",
  step3img: "left-[8%] top-[16%] h-[68%] w-[82%]",
  step4img: "left-[8%] top-[16%] h-[68%] w-[82%]",
} as const;

export function FeatureCarousel({
  eyebrow,
  title,
  description,
  steps,
  image,
}: AnimatedFeatureCarouselProps) {
  const { currentNumber: step, setStep } = useNumberCycler(steps.length);

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="relative h-full w-full">
            <AnimatedStepImage
              alt={image.alt}
              className={cn(defaultClasses.img, defaultClasses.step1img1)}
              src={image.step1img1}
              preset="slideInLeft"
            />
            <AnimatedStepImage
              alt={image.alt}
              className={cn(defaultClasses.img, defaultClasses.step1img2)}
              src={image.step1img2}
              preset="slideInRight"
              delay={0.1}
            />
          </div>
        );
      case 1:
        return (
          <div className="relative h-full w-full">
            <AnimatedStepImage
              alt={image.alt}
              className={cn(defaultClasses.img, defaultClasses.step2img1)}
              src={image.step2img1}
            />
            <AnimatedStepImage
              alt={image.alt}
              className={cn(defaultClasses.img, defaultClasses.step2img2)}
              src={image.step2img2}
              delay={0.08}
            />
          </div>
        );
      case 2:
        return (
          <AnimatedStepImage
            alt={image.alt}
            className={cn(defaultClasses.img, defaultClasses.step3img)}
            src={image.step3img}
          />
        );
      case 3:
        return (
          <AnimatedStepImage
            alt={image.alt}
            className={cn(defaultClasses.img, defaultClasses.step4img)}
            src={image.step4img}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="section-shell section-space">
      <div className="mb-8 max-w-3xl">
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="mt-4 font-display text-[2.5rem] leading-[1.01] text-foreground md:text-[4rem]">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
      </div>

      <div className="flex w-full flex-col gap-8">
        <FeatureCard step={step} steps={steps}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              {...animationPresets.fadeInScale}
              className="absolute inset-0 h-full w-full"
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </FeatureCard>

        <div className="flex items-center justify-between gap-4 rounded-[2rem] border border-border/60 bg-white/75 p-4 shadow-soft">
          <StepsNav current={step} onChange={setStep} steps={steps} />
          <div className="hidden items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary lg:flex">
            adımı değiştir
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
