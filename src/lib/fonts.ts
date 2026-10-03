import { DM_Sans, Jost, Syne } from "next/font/google";

// Variant A uses Jost for everything; variant B pairs Syne headings with DM Sans text.
export const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  display: "swap",
});

export const syne = Syne({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-syne",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm",
  display: "swap",
});

export const fontVariables = `${jost.variable} ${syne.variable} ${dmSans.variable}`;
