"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Compass, MessageSquare, Users } from "lucide-react";
import { FLAGSHIP_LINKS } from "@/lib/landing-data";
import { fadeUp, stagger } from "./motion-primitives";

const CARDS = [
  {
    icon: Briefcase,
    title: "Консалтинг",
    text: "Комплексний аудит бізнес-процесів, розробка дорожньої карти та супровід впровадження змін у вашій EdTech-компанії.",
    href: FLAGSHIP_LINKS.consulting,
  },
  {
    icon: MessageSquare,
    title: "Консультація",
    text: "Персональний розбір вашої освітньої моделі та план дій на найближчий квартал з конкретними кроками.",
    href: FLAGSHIP_LINKS.consultation,
  },
  {
    icon: Compass,
    title: "Страт сесія",
    text: "Глибока стратегічна сесія з командою: аналіз ринку, масштабування продукту, воронки та відділу продажів.",
    href: FLAGSHIP_LINKS.strategySession,
  },
  {
    icon: Users,
    title: "Клуб",
    text: "Закрита спільнота власників EdTech-бізнесів: практичні воркшопи, розбір метрик і обмін перевіреними рішеннями.",
    href: FLAGSHIP_LINKS.club,
  },
];

export function FlagshipBridge() {
  return (
    <section id="services" className="scroll-mt-24 relative overflow-hidden bg-obsidian py-20 sm:py-28">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0 0 0 / 1) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-[clamp(1.9rem,4vw,3rem)] leading-tight text-brand-black"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300, letterSpacing: "-0.012em" }}
          >
            Хочеш глибше? Ласкаво просимо у флагман
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-fog"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
          >
            Чотири формати роботи — обери той, що відповідає стадії твого бізнесу.
          </motion.p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map(({ icon: Icon, ...card }) => (
              <motion.a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col rounded-xl bg-white p-7 shadow-subtle transition-colors duration-200 hover:shadow-subtle-5"
                style={{ borderRadius: "var(--radius-cards)" }}
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-signal-violet"
                  style={{ backgroundColor: "color-mix(in srgb, var(--color-signal-violet) 12%, transparent)" }}
                >
                  <Icon size={20} />
                </span>
                <h3
                  className="mt-6 text-xl font-medium text-brand-black"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-2 flex-1 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.6, color: "var(--color-signal-violet)" }}
                >
                  {card.text}
                </p>
                <span
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal-violet transition-colors duration-200 group-hover:text-brand-black"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
                >
                  Перейти
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
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