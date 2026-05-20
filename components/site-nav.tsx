"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";

const LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#proyectos" },
];

export function SiteNav() {
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
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled
            ? "my-3 rounded-full border border-line bg-deep/70 py-3 backdrop-blur-xl"
            : "my-5 border border-transparent py-2"
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
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-focus micro-glint hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-void transition-colors hover:bg-white sm:inline-flex"
          >
            Auditoría privada
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="premium-focus grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
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
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-focus mt-1 block rounded-xl bg-ink px-4 py-3 text-center font-medium text-void"
            >
              Pedir auditoría privada
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
