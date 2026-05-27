"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";
import { useLang, dict } from "@/components/lang-provider";

const LINKS = [
  { label: dict.nav.automation, href: "#automatizaciones" },
  { label: dict.nav.websQr, href: "#webs-y-qr" },
  { label: dict.nav.invoices, href: "#facturas" },
  { label: dict.nav.seo, href: "#seo-local" },
  { label: dict.nav.campaigns, href: "#campanas-y-trafico" },
];

function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-line bg-void/45 p-0.5 text-xs ${
        compact ? "" : ""
      }`}
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`premium-focus rounded-full px-2.5 py-1 font-medium uppercase transition-colors ${
            lang === l ? "bg-ink text-void" : "text-ink-soft hover:text-ink"
          }`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function SiteNav() {
  const { tr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-4 md:mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ${
          scrolled
            ? "my-2 md:my-3 rounded-full border border-line bg-deep/80 px-4 py-1.5 md:px-6 md:py-2.5 backdrop-blur-xl shadow-lg"
            : "my-3 md:my-5 rounded-full border border-transparent px-2 py-2"
        }`}
      >
        <a href="#top" className="premium-focus rounded-2xl">
          <BrandLogo compact />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="premium-focus rounded-full px-1 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {tr(l.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LangToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-focus micro-glint hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-void transition-colors hover:bg-white sm:inline-flex"
          >
            {tr(dict.nav.privateAudit)}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="premium-focus grid h-8 w-8 place-items-center rounded-full border border-line text-ink-soft md:hidden"
            aria-label={open ? tr(dict.nav.closeMenu) : tr(dict.nav.openMenu)}
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 overflow-hidden rounded-2xl border border-line bg-deep/95 p-2 backdrop-blur-xl md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="premium-focus block rounded-xl px-4 py-3 text-ink-soft transition-colors hover:bg-panel hover:text-ink"
              >
                {tr(l.label)}
              </a>
            ))}
            <div className="px-4 py-3">
              <LangToggle compact />
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-focus mt-1 block rounded-xl bg-ink px-4 py-3 text-center font-medium text-void"
            >
              {tr(dict.nav.requestAudit)}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
