import { Instagram, Send } from "lucide-react";
import { FLAGSHIP_LINKS } from "@/lib/landing-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline-dark bg-bg-dark py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-blue font-display text-sm font-bold text-text-light">
              ЕТ
            </span>
            <span className="truncate font-display text-base font-bold text-text-light">
              Едтех Експерт
            </span>
          </div>
          <a
            href={FLAGSHIP_LINKS.consulting}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-accent-blue underline-offset-4 hover:underline"
          >
            Флагманський сайт
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="grid h-10 w-10 place-items-center rounded-xl border border-hairline-dark text-text-light transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            <Send size={18} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-xl border border-hairline-dark text-text-light transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <p className="border-t border-hairline-dark pt-6 text-xs text-text-muted-light">
          © {new Date().getFullYear()} Едтех Експерт. Усі права захищені.
        </p>
      </div>
    </footer>
  );
}
