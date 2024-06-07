import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Gamja_Flower as FontGamja,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontGamja = FontGamja({
  subsets: ["latin"],
  variable: "--font-gamja",
  weight: "400",
});
