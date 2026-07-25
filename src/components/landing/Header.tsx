"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { EXPERT, NAV_ITEMS } from "@/lib/landing-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ash bg-white/90 backdrop-blur-xl shadow-subtle"
            : "border-b border-transparent bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          {/* Logo */}
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-signal-violet text-sm font-medium text-white" style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}>
              {EXPERT.initials}
            </span>
            <span className="truncate text-base font-medium tracking-tight text-brand-black" style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}>
              {EXPERT.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="text-sm font-medium text-cloud transition-colors hover:text-signal-violet"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Burger button — mobile only */}
          <button
            type="button"
            aria-label="Відкрити меню"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-lg text-brand-black md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-ash">
              <span className="text-lg font-medium text-brand-black" style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}>Меню</span>
              <button
                type="button"
                aria-label="Закрити меню"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg shadow-subtle text-brand-black"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6 pb-24">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05 }}
                  className="border-b border-ash py-5 text-3xl font-light tracking-tight text-brand-black"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}