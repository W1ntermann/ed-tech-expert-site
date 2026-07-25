"use client";

import { motion } from "framer-motion";
import portrait from "@/assets/expert-portrait.jpg";
import { fadeUp, stagger } from "./motion-primitives";

const STATS = [
  { value: "x1.5", label: "зростання виторгу щороку" },
  { value: "500–700", label: "нових учнів щомісяця" },
  { value: "8", label: "років в освітньому бізнесі" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-bg-light pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-hairline-light bg-surface-dark"
          >
            <img
              src={portrait.src}
              alt="Портрет експерта з EdTech"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <div className="rounded-3xl bg-bg-dark p-7 sm:p-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight text-text-light"
              >
                Про експерта
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-base leading-relaxed text-text-muted-light"
              >
                Власник та ідеолог освітньої компанії. Будую освітні продукти, які системно
                ростуть: від методології та продукту до відділу продажів і трафіку. Працюю з
                командами, що хочуть перейти від разових запусків до передбачуваної моделі.
              </motion.p>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {STATS.map((s) => (
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
                    className="rounded-2xl border border-hairline-dark bg-surface-dark p-5"
                  >
                    <p className="font-display text-3xl font-bold text-accent-gold sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-text-muted-light">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
