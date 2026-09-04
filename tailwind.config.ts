import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        accent: "var(--accent)",
        "accent-muted": "var(--accent-muted)",
        "accent-foreground": "var(--accent-foreground)",
        info: "var(--info)",
        border: "var(--border)",
        line: "var(--line)",
        input: "var(--input)",
        ring: "var(--ring)",
        selection: "var(--selection)",
        "selection-foreground": "var(--selection-foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        hand: ["var(--font-hand)", "cursive"],
        heading: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        panel: "0 1px 2px rgb(0 0 0 / 0.05)",
        pop: "0 8px 30px rgb(0 0 0 / 0.12)",
        glow: "0 0 40px -8px var(--ring)",
      },
      backgroundImage: {
        stripes:
          "repeating-linear-gradient(315deg, var(--line) 0, var(--line) 1px, transparent 0, transparent 50%)",
        glow: "radial-gradient(60% 50% at 50% 0%, rgb(120 120 140 / 0.18), transparent 70%)",
        dots: "radial-gradient(color-mix(in oklab, var(--foreground) 16%, transparent) 1px, transparent 1.5px)",
      },
      backgroundSize: {
        stripes: "10px 10px",
        dots: "18px 18px",
      },
      keyframes: {
        "flip-in": {
          "0%": { opacity: "0", transform: "translateY(8px)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "flip-in": "flip-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
