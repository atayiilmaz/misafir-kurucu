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

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealSectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "footer";
  children: ReactNode;
  itemSelector?: string;
  start?: string;
  stagger?: number;
  distance?: number;
  once?: boolean;
};

export function RevealSection({
  as = "section",
  children,
  itemSelector,
  start = "top 82%",
  stagger = 0.12,
  distance = 34,
  once = true,
  ...props
}: RevealSectionProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const Component = as;

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
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

          const targets = itemSelector
            ? Array.from(root.querySelectorAll<HTMLElement>(itemSelector))
            : [root];

          if (!targets.length) {
            return;
          }

          if (conditions?.reduce) {
            gsap.set(targets, { autoAlpha: 1, y: 0, clearProps: "all" });
            return;
          }

          gsap.fromTo(
            targets,
            { autoAlpha: 0, y: distance },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: targets.length > 1 ? stagger : 0,
              overwrite: "auto",
              scrollTrigger: {
                trigger: root,
                start,
                once,
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
    { ref: rootRef as Ref<HTMLElement>, ...props },
    children,
  );
}
