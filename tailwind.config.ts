import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        brand: {
          cyan: "#06b6d4",
          blue: "#2563eb",
          dark: "#050d1a",
          card: "#0a1628",
        },
      },
      backgroundImage: {
        "grid-pattern": `linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.3)",
        "glow-blue": "0 0 30px rgba(37, 99, 235, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
