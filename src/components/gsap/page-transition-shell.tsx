import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type PageTransitionShellProps = {
  children: ReactNode;
  routeKey: string;
};

export function PageTransitionShell({
  children,
  routeKey,
}: PageTransitionShellProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

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

          if (conditions?.reduce) {
            gsap.set(root, { autoAlpha: 1, y: 0, clearProps: "all" });
            return;
          }

          gsap.fromTo(
            root,
            { autoAlpha: 0, y: 26, filter: "blur(10px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.82,
              ease: "power3.out",
              clearProps: "filter",
              overwrite: "auto",
            },
          );
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [routeKey], revertOnUpdate: true },
  );

  return <div ref={rootRef}>{children}</div>;
}
