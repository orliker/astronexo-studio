"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";

const LINKS = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#trabajo" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Precios", href: "/#precios" },
  { label: "Laboratorio", href: "/#laboratorio" },
  { label: "FAQ", href: "/#faq" },
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell">
        <div
          className={`mt-3 flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 md:px-5 ${
            scrolled || open
              ? "border-line bg-deep/85 shadow-lg backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link href="/#top" className="premium-focus rounded-2xl" aria-label="AstroNexo Studio, inicio">
            <BrandLogo compact />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
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

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-focus micro-glint hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-void transition-colors hover:bg-white sm:inline-flex"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Hablemos
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="premium-focus grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="menu-movil"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="menu-movil"
            aria-label="Menú móvil"
            className="mt-2 overflow-hidden rounded-3xl border border-line bg-deep/95 p-2 backdrop-blur-xl lg:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="premium-focus block rounded-2xl px-4 py-3 text-ink-soft transition-colors hover:bg-panel hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-focus mt-1 flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3 font-semibold text-void"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Pedir diagnóstico gratis
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
