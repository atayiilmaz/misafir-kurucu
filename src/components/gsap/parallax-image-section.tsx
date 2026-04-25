import {
  createElement,
  useRef,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ParallaxImageSectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  children: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  imageClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  fromYPercent?: number;
  toYPercent?: number;
};

export function ParallaxImageSection({
  as = "section",
  children,
  className,
  imageSrc,
  imageAlt = "",
  imageClassName,
  overlayClassName,
  contentClassName,
  start = "top bottom",
  end = "bottom top",
  scrub = 1.1,
  fromYPercent = -10,
  toYPercent = 10,
  ...props
}: ParallaxImageSectionProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const Component = as;

  useGSAP(
    () => {
      const root = rootRef.current;
      const image = imageRef.current;

      if (!root || !image) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as
            | { reduce?: boolean; motion?: boolean }
            | undefined;

          if (conditions?.reduce) {
            gsap.set(image, { yPercent: 0, clearProps: "transform" });
            return;
          }

          gsap.fromTo(
            image,
            { yPercent: fromYPercent },
            {
              yPercent: toYPercent,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start,
                end,
                scrub,
                invalidateOnRefresh: true,
              },
            },
          );
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return createElement(
    Component,
    {
      ref: rootRef as Ref<HTMLElement>,
      className: cn("parallax-image-section relative isolate overflow-hidden", className),
      ...props,
    },
    <>
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={imageSrc}
          alt={imageAlt}
          aria-hidden={imageAlt ? undefined : true}
          className={cn(
            "absolute left-0 top-[-14%] h-[128%] w-full max-w-none object-cover will-change-transform",
            imageClassName,
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,251,247,0.72),rgba(255,251,247,0.84))]",
            overlayClassName,
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_42%)]" />
      </div>
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </>,
  );
}
