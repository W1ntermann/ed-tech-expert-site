"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CHECKLIST_ITEMS = [
  {
    title: "Як EdTech змінився",
    text: "що ПРАЦЮЄ для продажів замість таргету на пробний урок",
  },
  {
    title: "5 частіших помилок власників онлайн-шкіл",
    text: "і готові рішення \"що з цим робити\"",
  },
  {
    title: "Як Turbo росте x1.5 щороку навіть в кризу",
    text: "і яка система за цим стоїть",
  },
  {
    title: "Екскурсія в маркетинг",
    text: "які воронки та канали працюють зараз",
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-white py-10 pt-16 sm:py-16 sm:pt-24 lg:py-20 lg:pt-28">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0 0 0 / 1) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[960px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Headline */}
          <h1
            className="text-[clamp(1.2rem,3vw,2.2rem)] leading-[1.15] text-brand-black"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              letterSpacing: "-0.016em",
            }}
          >
            ЯК ВИЖИТИ В КРИЗУ{" "}
            <span style={{ color: "var(--color-signal-violet)", fontWeight: 300 }}>
              онлайн-школам
            </span>{" "}
            і вирости до 500-700 учнів щомісяця завдяки працюючим інструментам маркетингу?
          </h1>

          {/* Checklist heading */}
          <p
            className="mt-6 sm:mt-10 text-[13px] text-brand-black sm:text-[15px]"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 600 }}
          >
            Що ви дізнаєтесь після перегляду :
          </p>

          {/* Checklist — single column */}
          <ul className="mt-2 sm:mt-3 grid gap-1.5 sm:gap-2">
            {CHECKLIST_ITEMS.map((item) => (
              <li key={item.title} className="flex items-start gap-2.5 text-left">
                <span
                  className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-md"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-signal-violet) 12%, transparent)" }}
                >
                  <Check size={12} strokeWidth={2.5} style={{ color: "var(--color-signal-violet)" }} />
                </span>
                <span
                  className="text-[13px] leading-snug text-fog sm:text-[14px]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
                >
                  <span
                    className="font-medium text-brand-black"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
                  >
                    {item.title}
                  </span>
                  <br />
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Subtitle */}
          <p
            className="mt-6 sm:mt-10 text-[14px] leading-relaxed text-brand-black sm:text-base"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 600, lineHeight: 1.6 }}
          >
            Дивись відео, де я ділюсь власним досвідом
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection("video-section")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3 rounded-full bg-signal-violet px-6 py-2.5 sm:px-8 sm:py-3 text-[14px] sm:text-[15px] font-medium text-white shadow-xl shadow-signal-violet/20 transition-all hover:bg-signal-violet/90 hover:shadow-2xl hover:shadow-signal-violet/30 hover:scale-[1.03] active:scale-[0.98]"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
          >
            Забрати відео
          </motion.button>

        </motion.div>
      </div>
    </section>
  );
}