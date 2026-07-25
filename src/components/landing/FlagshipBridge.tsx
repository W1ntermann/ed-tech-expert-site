"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass, MessageSquare, Users } from "lucide-react";
import { FLAGSHIP_LINKS } from "@/lib/landing-data";
import { fadeUp, stagger } from "./motion-primitives";

const CARDS = [
  {
    icon: MessageSquare,
    title: "Консультації",
    text: "Персональний розбір вашої освітньої моделі та план дій на найближчий квартал.",
    href: FLAGSHIP_LINKS.consultations,
  },
  {
    icon: Compass,
    title: "Стратегії",
    text: "Готові сценарії масштабування продукту, воронки та відділу продажів.",
    href: FLAGSHIP_LINKS.strategies,
  },
  {
    icon: Users,
    title: "Клуб",
    text: "Спільнота власників EdTech-бізнесів: практика, метрики й обмін рішеннями.",
    href: FLAGSHIP_LINKS.club,
  },
];

export function FlagshipBridge() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-text-light"
          >
            Хочеш глибше? Ласкаво просимо у флагман
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-text-muted-light">
            Три формати роботи — обери той, що відповідає стадії твого бізнесу.
          </motion.p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CARDS.map(({ icon: Icon, ...card }) => (
              <motion.a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col rounded-2xl border border-hairline-dark bg-surface-dark p-7 transition-colors duration-200 hover:border-accent-blue"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-blue/15 text-accent-blue transition-colors duration-200 group-hover:bg-accent-blue group-hover:text-text-light">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-text-light">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted-light">
                  {card.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-gold">
                  Перейти
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
