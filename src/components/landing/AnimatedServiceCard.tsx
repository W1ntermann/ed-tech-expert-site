"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

// ─── PROPS ────────────────────────────────────────────────
export interface AnimatedServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

// ─── COMPONENT ────────────────────────────────────────────
export function AnimatedServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
  onClick,
}: AnimatedServiceCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardRef = React.useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <motion.a
      layout
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Перейти до ${title}`}
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group relative w-full overflow-hidden rounded-[28px] border border-blue-700/70 bg-blue-950/95 p-7",
        "shadow-[0_32px_80px_-40px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-950",
        className,
      )}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        backgroundImage:
          "radial-gradient(circle at top left, rgba(96,165,250,0.12), transparent 28%), radial-gradient(circle at bottom right, rgba(59,130,246,0.08), transparent 24%)",
        backgroundColor: "#172554",
      } as React.CSSProperties}
    >
      <div className="absolute inset-x-7 top-7 h-0.5 rounded-full bg-blue-400/10" />

      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 space-y-5">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
          <Icon size={18} />
        </span>

        <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-inter)", fontWeight: 600, lineHeight: 1.3 }}>
          {title}
        </h3>

        <p className="text-sm leading-7 text-blue-200" style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}>
          {description}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-transform duration-200 group-hover:translate-x-1">
          <span className="border-b border-blue-300/40">Перейти</span>
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </motion.a>
  );
}