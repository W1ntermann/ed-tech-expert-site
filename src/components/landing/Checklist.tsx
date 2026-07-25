"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, stagger } from "./motion-primitives";

const ITEMS = [
  {
    title: "Що зламалось у класичних запусках",
    text: "Чому старі схеми вебінарних воронок втрачають конверсію і які етапи треба переписати першими.",
  },
  {
    title: "Воронка, що продає без тиску",
    text: "Структура прогріву та контент-містків, які доводять учня до оплати без агресивних дедлайнів.",
  },
  {
    title: "Юніт-економіка освітнього продукту",
    text: "Як рахувати вартість учня, LTV і точку, після якої масштабування перестає бути збитковим.",
  },
  {
    title: "Системне зростання щороку",
    text: "Які процеси в команді, продукті та трафіку дають передбачуваний приріст, а не разові піки.",
  },
];

export function Checklist() {
  return (
    <section id="checklist" className="scroll-mt-24 bg-void-black py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-[clamp(1.9rem,4vw,3rem)] leading-tight text-paper-white"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300, letterSpacing: "-0.012em" }}
          >
            Що ви дізнаєтесь з відео
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-fog"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
          >
            Чотири блоки, які закривають найчастіші питання власників освітніх продуктів.
          </motion.p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-xl bg-carbon p-6 shadow-subtle transition-colors duration-200 hover:shadow-subtle-5 sm:p-7"
                style={{ borderRadius: "var(--radius-cards)" }}
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl text-circuit-teal"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-circuit-teal) 12%, transparent)" }}
                >
                  <Check size={20} strokeWidth={2.5} />
                </span>
                <h3
                  className="mt-5 text-lg font-medium text-paper-white sm:text-xl"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-fog sm:text-base"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.6 }}
                >
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}