'use client';

import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AppLink } from "@/components/ui/app-link";
import { cn } from "@/lib/utils";

const subtleButtonVariants = cva(
  "group relative inline-flex items-center justify-center gap-3 whitespace-nowrap overflow-hidden rounded-full backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
  {
    variants: {
      theme: {
        light:
          "surface-primary-gradient text-white shadow-[0_16px_34px_-24px_rgba(255,129,5,0.55)] hover:shadow-[0_22px_38px_-26px_rgba(255,129,5,0.65)]",
        dark:
          "surface-primary-gradient text-white shadow-[0_18px_36px_-24px_rgba(255,129,5,0.45)] hover:shadow-[0_22px_44px_-26px_rgba(255,129,5,0.52)]",
        secondary:
          "border border-[#d9b79f] bg-[linear-gradient(180deg,rgba(255,237,221,0.98),rgba(255,223,198,0.98))] text-foreground shadow-[0_16px_32px_-22px_rgba(84,48,28,0.24)] hover:border-[#cf9d78] hover:bg-[linear-gradient(180deg,rgba(255,232,212,1),rgba(255,214,183,1))] hover:shadow-[0_22px_38px_-24px_rgba(84,48,28,0.3)]",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      theme: "light",
      size: "default",
      fullWidth: false,
    },
  },
);

type BaseProps = VariantProps<typeof subtleButtonVariants> & {
  children: React.ReactNode;
  className?: string;
};

type SubtleButtonProps = BaseProps &
  React.HTMLAttributes<HTMLElement> & {
    href?: string;
    rel?: string;
    target?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  };

function InnerContent({
  children,
  isHovered,
  isPressed,
  theme = "light",
}: Pick<BaseProps, "children" | "theme"> & {
  isHovered: boolean;
  isPressed: boolean;
}) {
  const textTone =
    theme === "secondary"
      ? "text-foreground group-hover:text-foreground"
      : "text-white group-hover:text-white";

  return (
    <>
      <div
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          theme === "dark"
            ? "from-white/0 via-white/10 to-white/0"
            : theme === "secondary"
              ? "from-white/0 via-white/35 to-white/0"
              : "from-primary/0 via-primary/10 to-primary/0",
        )}
      />

      <span
        className={cn(
          "relative z-10 inline-flex items-center gap-3 font-medium tracking-wide transition-all duration-300",
          textTone,
        )}
      >
        {children}
      </span>

    </>
  );
}

export default function SubtleButton(props: SubtleButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const sharedProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => {
      setIsHovered(false);
      setIsPressed(false);
    },
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
  };

  if (props.href) {
    const {
      children,
      className,
      theme,
      size,
      fullWidth,
      href,
      ...linkProps
    } = props;

    return (
      <AppLink
        href={href}
        className={cn(subtleButtonVariants({ theme, size, fullWidth }), className)}
        {...sharedProps}
        {...(linkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <InnerContent
          isHovered={isHovered}
          isPressed={isPressed}
          theme={theme}
        >
          {children}
        </InnerContent>
      </AppLink>
    );
  }

  const {
    children,
    className,
    theme,
    size,
    fullWidth,
    type,
    ...buttonProps
  } = props;

  return (
    <button
      type={(type as React.ButtonHTMLAttributes<HTMLButtonElement>["type"]) ?? "button"}
      className={cn(subtleButtonVariants({ theme, size, fullWidth }), className)}
      {...sharedProps}
      {...(buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <InnerContent
        isHovered={isHovered}
        isPressed={isPressed}
        theme={theme}
      >
        {children}
      </InnerContent>
    </button>
  );
}

export { subtleButtonVariants };
