"use client";

import { motion } from "framer-motion";
import { Briefcase, Compass, MessageSquare, Users } from "lucide-react";
import { FLAGSHIP_LINKS } from "@/lib/landing-data";
import { fadeUp, stagger } from "./motion-primitives";
import { AnimatedServiceCard } from "./AnimatedServiceCard";

const CARDS = [
  {
    icon: Briefcase,
    title: "Консалтинг",
    description:
      "Комплексний аудит бізнес-процесів, дорожня карта та супровід впровадження змін для стабільного росту вашої EdTech-компанії.",
    href: FLAGSHIP_LINKS.consulting,
  },
  {
    icon: MessageSquare,
    title: "Консультація",
    description:
      "Прогнозований аналіз бізнес-моделі, оперативний план на наступні 90 днів та пріоритетні кроки для швидкого ефекту.",
    href: FLAGSHIP_LINKS.consultation,
  },
  {
    icon: Compass,
    title: "Страт сесія",
    description:
      "Стратегічна сесія: позиціонування продукту, масштабування продажів та операційна модель для масштабованого EdTech.",
    href: FLAGSHIP_LINKS.strategySession,
  },
  {
    icon: Users,
    title: "Клуб",
    description:
      "Закрите співтовариство власників EdTech-бізнесів з фокусом на KPI, кейси та практичні рішення для росту.",
    href: FLAGSHIP_LINKS.club,
  },
];

export function FlagshipBridge() {

  return (
    <section
      id="services"
      className="scroll-mt-24 relative overflow-hidden bg-obsidian py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(56,189,248,0.14), transparent 22%), radial-gradient(circle at 85% 18%, rgba(96,165,250,0.08), transparent 18%), linear-gradient(to bottom, rgba(255,255,255,0.02), transparent 80%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300/90">
              Послуги
            </p>
            <h2
              className="mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-brand-black"
              style={{
                fontFamily: "var(--font-e-ukraine-head)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              Професійні рішення для зрілого EdTech-бізнесу
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-fog" style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}>
              Чотири перевірені формати співпраці для запуску, структурування, масштабування та системного управління вашої освітньої компанії.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {CARDS.map((card) => (
              <AnimatedServiceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}