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
        // Primary Colors
        purple1: "#DCB9FF",
        purple2: "#EDDCFF",
        purple3: "#F6EDFF",
        dark1: "#201232",
        dark2: "#8F8B98",
        dark3: "#C7C4CC",
        yellow1: "#EFFF65",
        yellow2: "#F4FF95",
        yellow3: "#FFFFCC",

        neutral: "#F0F0EC",
        light: "#F5F5F5",
        white: "#FFFFFF",

        successDark: "#31644E",
        successMedium: "#56C995",
        successLight: "#7FB685",
        infoDark: "#3B72C0",
        infoMedium: "#83C5C5",
        infoLight: "#BABAE1",
        warningDark: "#FFC674",
        warningMedium: "#F7C54D",
        warningLight: "#FFDF6A",
        dangerDark: "#D64340",
        dangerMedium: "#F87673",
        dangerLight: "#FBC5A1",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['"Euclid Circular A"', "Arial", "Helvetica", "sans-serif"],
      },
      spacing: {
        "1": "1px",
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "16": "16px",
        "32": "32px",
        "64": "64px",
        "128": "128px",
      },
      borderRadius: {
        "2": "2px",
        "4": "4px",
        "8": "8px",
      },
      boxShadow: {
        "inner-sm": "3px 5px 10px 0px rgba(15, 22, 30, 0.08) inset",
        "inner-md": "3px 8px 10px 0px rgba(15, 22, 30, 0.12) inset",
        "inner-lg": "3px 10px 13px 3px rgba(15, 22, 30, 0.18) inset",
        "glow-light-drop": "0px 4px 4px 0px #00000040",
        glow: "0px 0px 10px 6px #BFFF0080",
        "glow-combined": "3px 3px 10px 3px #BFFF0033, 4px 4px 10px 4px #BFFF004D",

        "elevation-1": "3px 5px 10px 0px rgba(15, 22, 30, 0.07)",
        "elevation-2": "3px 8px 10px 0px rgba(15, 22, 30, 0.11)",
        "elevation-3": "3px 10px 13px 2px rgba(15, 22, 30, 0.17)",
      },
    },
  },
  plugins: [],
};
export default config;
