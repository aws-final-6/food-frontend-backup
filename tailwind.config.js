import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
        gamja: ["var(--font-gamja)"],
        jua: ["var(--font-jua)"],
        gaegu: ["var(--font-gaegu)"],
      },
      colors: {
        kakao: "#FEE500",
        naver: "#03C75A",
        main: "#FC9F6D",
        sub: "#FFD163",
        subdark: "#4F4B4A",
        selectedmain: "#e7673e",
        selectedsub: "#e6a045",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
