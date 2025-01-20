import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        love: {
          light: "#FFE4E6",
          DEFAULT: "#FB7185",
          dark: "#E11D48",
        },
        accent: {
          light: "#F3E8FF",
          DEFAULT: "#D8B4FE",
          dark: "#9333EA",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        type: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heartBeat: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        type: "type 3s steps(40, end)",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        heartBeat: "heartBeat 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;