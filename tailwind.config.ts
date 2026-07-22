import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        koral: {
          navy: "#022b3a",
          "navy-light": "#033547",
          blue: "#0076e4",
          "blue-light": "#3391ea",
          teal: "#14b8a6",
          "teal-light": "#2dd4bf",
        },
        obsidian: {
          950: "#020810",
          900: "#022b3a",
          800: "#0a1f2e",
          700: "#122636",
          600: "#1a3040",
        },
        indigo: {
          electric: "#0076e4",
          glow: "#3391ea",
        },
        teal: {
          accent: "#14b8a6",
          glow: "#2dd4bf",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 118, 228, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 118, 228, 0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 118, 228, 0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
