import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-foreground/20 bg-primary text-primary-foreground shadow-[0_12px_30px_-18px_hsl(var(--primary)/0.95)] hover:-translate-y-0.5 hover:bg-primary/92",
        outline:
          "border-primary/25 bg-white/72 text-foreground hover:bg-white",
        ghost: "border-transparent text-foreground hover:bg-white/60",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ className, variant, size }))}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button, buttonVariants };
