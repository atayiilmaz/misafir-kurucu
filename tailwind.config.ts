import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(40, 35, 24, 0.14)",
      },
      fontFamily: {
        display: ['"Neue Kabel"', "sans-serif"],
        sans: ['"Manrope"', '"Segoe UI"', "Arial", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(193, 135, 78, 0.35), transparent 35%), radial-gradient(circle at 85% 10%, rgba(85, 119, 99, 0.22), transparent 28%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
