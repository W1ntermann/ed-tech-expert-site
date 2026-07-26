"use client";

import { motion } from "framer-motion";
import portrait from "@/assets/Expert-Photo.png";
import { EXPERT, EXPERT_STATS } from "@/lib/landing-data";
import { fadeUp, stagger } from "./motion-primitives";


export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-marine-200 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* ─── Top: Two-column layout ─── */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left: Photo with badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0"
          >
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(34,95,236,0.25), 0 0 0 1px rgba(34,95,236,0.08)",
              }}
            >
              <img
                src={portrait.src}
                alt={`Портрет ${EXPERT.name} — власника освітнього холдингу`}
                width={450}
                height={560}
                loading="lazy"
                className="w-full max-w-md object-cover rounded-2xl"
                style={{ filter: "grayscale(20%)" }}
              />
            </div>
          </motion.div>

          {/* Right: Expert info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-lg"
          >
            <h1
              className="text-xl uppercase font-semibold text-brand-black"
              style={{
                fontFamily: "var(--font-e-ukraine-head)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Про експерта
            </h1>
            <div
              className="mt-2 h-[3px] w-24 rounded-full"
              style={{
                background: "linear-gradient(to right, #60a5fa, #1e40af)",
              }}
            />

            <div className="mt-6 space-y-3">
              <p
                className="text-sm leading-relaxed text-silver"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.7 }}
              >
                {EXPERT.shortBio}
              </p>
              <p
                className="text-sm leading-relaxed text-silver"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.7 }}
              >
                Моя місія — допомогти власникам EdTech-бізнесів побудувати системи, які масштабуються без щоденного втручання засновника. Від методології до фінансової моделі — я даю перевірені інструменти.
              </p>
              <p
                className="text-sm leading-relaxed text-silver"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.7 }}
              >
                Разом ми розберемо твою освітню модель, знайдемо точки зростання та вибудуємо дорожню карту, яка приведе до стабільного результату.
              </p>
            </div>

          </motion.div>
        </div>

        {/* ─── Divider ─── */}
        <div className="mt-20 mb-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
          </motion.div>
        </div>

        {/* ─── Stats row ─── */}
      </div>
    </section>
  );
}