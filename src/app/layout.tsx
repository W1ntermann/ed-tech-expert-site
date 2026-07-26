import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const golosText = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-golos",
});

const eUkraineHead = localFont({
  src: [
    {
      path: "../../public/fonts/e-UkraineHead-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/e-UkraineHead-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-e-ukraine-head",
});

export const metadata: Metadata = {
  title: "EdTech-експерт — відео про продажі освітніх продуктів у 2026",
  description:
    "Безкоштовне відео про те, як змінився EdTech: воронки, юніт-економіка та системне зростання освітнього бізнесу.",
  openGraph: {
    title: "EdTech-експерт — відео про продажі освітніх продуктів у 2026",
    description:
      "Безкоштовне відео про те, як змінився EdTech: воронки, юніт-економіка та системне зростання освітнього бізнесу.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${golosText.variable} ${eUkraineHead.variable}`}>
      <body>{children}</body>
    </html>
  );
}
