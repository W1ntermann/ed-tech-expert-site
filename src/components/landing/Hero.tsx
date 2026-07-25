"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Play } from "lucide-react";
import { EXPERT } from "@/lib/landing-data";

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

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0 0 0 / 1) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* ─── Text Column ─── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Headline */}
            <h1
              className="max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.12] text-brand-black"
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

            {/* Checklist — smaller font */}
            <ul className="mt-7 space-y-3.5">
              {CHECKLIST_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-signal-violet) 12%, transparent)" }}
                  >
                    <Check size={13} strokeWidth={2.5} style={{ color: "var(--color-signal-violet)" }} />
                  </span>
                  <span
                    className="text-sm leading-snug text-fog sm:text-base"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
                  >
                    <span
                      className="font-medium text-brand-black"
                      style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
                    >
                      {item.title}
                    </span>
                    {" — "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons — professional block */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#video"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-signal-violet px-7 py-3.5 text-[15px] font-medium text-white shadow-lg shadow-signal-violet/25 transition-all hover:bg-signal-violet/90 hover:shadow-xl hover:shadow-signal-violet/30 hover:scale-[1.03] active:scale-[0.98]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
              >
                <Play size={16} fill="currentColor" />
                Дивитись відео
              </motion.a>
              <motion.a
                href="#about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-signal-violet/20 px-7 py-3.5 text-[15px] font-medium text-signal-violet transition-all hover:border-signal-violet hover:bg-signal-violet/5 hover:scale-[1.03] active:scale-[0.98]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
              >
                Детальніше
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* ─── Video Column ─── */}
          <motion.div
            id="video"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="scroll-mt-28 flex items-center justify-center"
          >
            <div className="relative aspect-video w-full max-w-[420px] overflow-hidden rounded-2xl bg-graphite shadow-subtle">
              <iframe
                src={EXPERT.videoUrl}
                title="Відео-презентація"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#about"
            aria-label="Прокрутити далі"
            className="animate-float grid h-10 w-10 place-items-center rounded-full shadow-subtle text-cloud transition-colors hover:text-signal-violet"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}