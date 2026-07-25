"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import portrait from "@/assets/expert-portrait.jpg";
import { EXPERT, EXPERT_STATS } from "@/lib/landing-data";
import { fadeUp, stagger } from "./motion-primitives";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-void-black pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* ─── Top row: portrait + bio ─── */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl bg-obsidian"
            style={{ borderRadius: "var(--radius-cards)" }}
          >
            <img
              src={portrait.src}
              alt={`Портрет ${EXPERT.name} — власника освітнього холдингу`}
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover opacity-90"
              style={{ filter: "grayscale(30%)" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-black/70 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void-black/80 to-transparent p-6">
              <p className="text-lg font-medium text-paper-white" style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}>
                {EXPERT.name}
              </p>
              <p className="text-sm text-fog" style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}>
                {EXPERT.tagline}
              </p>
            </div>
          </motion.div>

          {/* Bio + Stats */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight text-paper-white"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300, letterSpacing: "-0.01em" }}
              >
                Про експерта
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-base leading-relaxed text-silver"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.7 }}
              >
                {EXPERT.shortBio}
              </motion.p>

              {/* Personal stats */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {EXPERT_STATS.map((s) => (
                  <motion.div
                    key={s.value}
                    variants={{
                      hidden: { opacity: 0, scale: 0.92, y: 16 },
                      show: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="rounded-xl bg-carbon p-5 shadow-subtle"
                    style={{ borderRadius: "var(--radius-cards)" }}
                  >
                    <p
                      className="text-3xl font-light text-signal-violet sm:text-4xl"
                      style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="mt-2 text-sm leading-snug text-fog"
                      style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
                    >
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── Quote ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-xl bg-obsidian p-8 sm:p-10"
          style={{ borderRadius: "var(--radius-cards)" }}
        >
          <div className="flex items-start gap-4">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-signal-violet"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-signal-violet) 12%, transparent)" }}
            >
              <Quote size={22} />
            </span>
            <blockquote
              className="text-xl leading-relaxed text-silver sm:text-2xl"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.6 }}
            >
              {EXPERT.quote}
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}