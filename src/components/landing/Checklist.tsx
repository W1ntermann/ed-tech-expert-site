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
    <section id="checklist" className="scroll-mt-24 bg-bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-text-dark"
          >
            Що ви дізнаєтесь з відео
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base text-text-muted-dark"
          >
            Чотири блоки, які закривають найчастіші питання власників освітніх продуктів.
          </motion.p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-hairline-light bg-card p-6 shadow-card transition-colors duration-200 hover:border-accent-blue sm:p-7"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-blue/10 text-accent-blue">
                  <Check size={20} strokeWidth={2.5} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-text-dark sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted-dark sm:text-base">
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
