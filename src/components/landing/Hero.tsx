"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoCover from "@/assets/video-cover.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bg-dark">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute inset-0 mesh-glow" />

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline-dark bg-surface-dark px-4 py-1.5 text-xs font-medium tracking-wide text-text-muted-light uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
              Безкоштовне відео
            </span>

            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-bold text-text-light">
              Як EdTech змінився — і що працює для продажів у 2026
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted-light sm:text-lg">
              45 хвилин без води: як влаштовані сучасні освітні воронки, чому падає конверсія
              у класичних запусках і які механіки дають стабільне зростання щороку.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                href="#video"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center rounded-full bg-accent-blue px-8 py-4 text-base font-semibold text-text-light shadow-glow transition-shadow duration-200 hover:shadow-glow-strong"
              >
                Забрати відео
              </motion.a>
              <a
                href="#checklist"
                className="inline-flex items-center justify-center rounded-full border border-hairline-dark px-8 py-4 text-base font-medium text-text-light transition-colors hover:border-accent-blue"
              >
                Що всередині
              </a>
            </div>
          </motion.div>

          <motion.div
            id="video"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="scroll-mt-28"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-hairline-dark bg-surface-dark">
              <img
                src={videoCover.src}
                alt="Обкладинка відео про трансформацію EdTech-бізнесу"
                width={1280}
                height={720}
                className="aspect-video w-full object-cover opacity-90"
              />
              <button
                type="button"
                aria-label="Відтворити відео"
                className="absolute inset-0 grid place-items-center"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-accent-blue text-text-light shadow-glow transition-all duration-200 group-hover:scale-105 group-hover:shadow-glow-strong">
                  <Play size={28} fill="currentColor" />
                </span>
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-text-muted-light">
              Відео · 45 хв · плейсхолдер для реального запису
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
