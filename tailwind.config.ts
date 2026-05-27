import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── ブランドカラー (パンフレットと統一) ──
        coral: {
          DEFAULT: "#FF6B5E",
          light: "#FF8A7F",
          dark: "#E8503F",
        },
        teal: {
          DEFAULT: "#2BB6A8",
          light: "#4FD0C2",
          dark: "#1E8C81",
        },
        sun: {
          DEFAULT: "#FFC44D",
          light: "#FFD879",
          dark: "#F0A91E",
        },
        mint: {
          DEFAULT: "#C8F0E4",
          light: "#E3F8F1",
          dark: "#A3E2D2",
        },
        ink: {
          DEFAULT: "#2A3441",
          soft: "#4A5666",
          faint: "#8A95A3",
        },
        cream: "#FFF9F2",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(42, 52, 65, 0.08)",
        card: "0 12px 40px rgba(42, 52, 65, 0.10)",
        pop: "0 6px 0 rgba(232, 80, 63, 0.25)",
      },
      borderRadius: {
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "blink-caret": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        caret: "blink-caret 0.9s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
