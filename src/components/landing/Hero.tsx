"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EXPERT } from "@/lib/landing-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-void-black">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 1) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 1) 1px, transparent 1px)",
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
            {/* Eyebrow pill badge */}
            <motion.div
              
            >

            </motion.div>

            {/* Headline */}
            <h1
              className="max-w-2xl text-[clamp(2.8rem,6vw,4.25rem)] leading-[1.08]"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                letterSpacing: "-0.016em",
              }}
            >
              Як{" "}
              <span style={{ color: "var(--color-live-wire)", fontWeight: 300 }}>
                EdTech змінився
              </span>{" "}
              — і що працює для продажів у 2026
            </h1>

            {/* Body text with signal violet emphasis */}
            <p
              className="mt-5 max-w-xl text-base leading-relaxed text-silver sm:text-lg"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.7 }}
            >
              45 хвилин без води: як влаштовані сучасні освітні воронки, чому падає конверсія
              у класичних запусках і які механіки дають{" "}
              <span className="text-signal-violet">стабільне зростання щороку</span>.
            </p>

            {/* CTA — single primary pill button */}
            
          </motion.div>

          {/* ─── Network Diagram Column ─── */}
          <motion.div
            id="video"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="scroll-mt-28 flex items-center justify-center"
          >
            <div className="relative aspect-video w-full max-w-[420px] overflow-hidden rounded-2xl bg-carbon shadow-subtle">
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