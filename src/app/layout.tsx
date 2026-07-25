import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
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
    <html lang="en" className={`${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}