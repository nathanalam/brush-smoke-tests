import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* Brush brand scale — blueprint slate + electric cyan/emerald */
        ink: {
          950: "#0A0E13",
          900: "#0D1117",
          800: "#161B22",
          700: "#1C2129",
          600: "#30363D",
          500: "#484F58",
        },
        blueprint: {
          DEFAULT: "#0EA5E9",
          soft: "#38BDF8",
          deep: "#0284C7",
        },
        signal: {
          DEFAULT: "#10B981",
          soft: "#34D399",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(14,165,233,0.25), 0 18px 60px -18px rgba(14,165,233,0.45)",
        "glow-emerald":
          "0 0 0 1px rgba(16,185,129,0.25), 0 18px 60px -18px rgba(16,185,129,0.45)",
        panel: "0 24px 80px -32px rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(48,54,61,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(48,54,61,0.55) 1px, transparent 1px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        sweep: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(320%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        sweep: "sweep 4.5s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
