"use client";

import { Instagram, Send, Youtube } from "lucide-react";
import { EXPERT, FLAGSHIP_LINKS } from "@/lib/landing-data";

export function Footer() {
  return (
    <footer className="border-t border-ash bg-void-black py-12">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-signal-violet text-sm font-medium text-paper-white"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              {EXPERT.initials}
            </span>
            <span
              className="truncate text-base font-medium text-paper-white"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              {EXPERT.name}
            </span>
          </div>
          <p
            className="mt-3 max-w-sm text-sm text-fog"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
          >
            {EXPERT.tagline}
          </p>
          <a
            href={FLAGSHIP_LINKS.consulting}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-signal-violet transition-colors hover:text-paper-white"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
          >
            Флагманський сайт
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={EXPERT.socials.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="grid h-10 w-10 place-items-center rounded-full shadow-subtle text-cloud transition-colors hover:text-signal-violet"
          >
            <Youtube size={18} />
          </a>
          <a
            href={EXPERT.socials.telegram}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="grid h-10 w-10 place-items-center rounded-full shadow-subtle text-cloud transition-colors hover:text-signal-violet"
          >
            <Send size={18} />
          </a>
          <a
            href={EXPERT.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full shadow-subtle text-cloud transition-colors hover:text-signal-violet"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1200px] px-5 sm:px-8">
        <p
          className="border-t border-ash pt-6 text-xs text-smoke"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
        >
          © {new Date().getFullYear()} {EXPERT.name}. Усі права захищені.
        </p>
      </div>
    </footer>
  );
}