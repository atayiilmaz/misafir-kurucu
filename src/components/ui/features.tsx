import { type ElementType, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FeatureItem = {
  id: number;
  icon: ElementType;
  title: string;
  description: string;
  image: string;
};

interface FeaturesProps {
  features: FeatureItem[];
  eyebrow: string;
  title: string;
}

export function Features({ features, eyebrow, title }: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 80);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, 200);

    return () => window.clearTimeout(timeout);
  }, [features.length, progress]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (!activeFeatureElement || !container) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const elementRect = activeFeatureElement.getBoundingClientRect();

    container.scrollTo({
      left:
        activeFeatureElement.offsetLeft -
        (containerRect.width - elementRect.width) / 2,
      behavior: "smooth",
    });
  }, [currentFeature]);

  return (
    <section className="section-shell section-space-lg">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto pb-4 lg:flex-col lg:overflow-visible"
        >
          <div className="lg:mb-4">
            <div className="section-kicker">{eyebrow}</div>
            <h2 className="section-title max-w-xl">{title}</h2>
          </div>

          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = currentFeature === index;

            return (
              <div
                key={feature.id}
                ref={(element) => {
                  featureRefs.current[index] = element;
                }}
                className={cn(
                  "min-w-[280px] cursor-pointer rounded-[1.75rem] border p-5 transition-all duration-300 lg:min-w-0",
                  isActive
                    ? "border-primary/20 bg-white shadow-soft"
                    : "border-transparent bg-white/55 hover:bg-white/80",
                )}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "mt-1 flex h-12 w-12 items-center justify-center rounded-full",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="mt-5 h-1 overflow-hidden rounded-full bg-muted">
                      {isActive && (
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.08, ease: "linear" as const }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-xl justify-self-center">
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="overflow-hidden rounded-[2rem] border border-white/70 bg-white p-4 shadow-soft"
          >
            <img
              src={features[currentFeature].image}
              alt={features[currentFeature].title}
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
