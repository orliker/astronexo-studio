"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop Bubble */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Pedir propuesta rápida por WhatsApp"
        className="fixed bottom-4 right-4 z-40 hidden h-14 w-14 place-items-center rounded-full border border-line bg-ink text-void shadow-[0_22px_70px_-24px_rgba(244,245,251,0.85)] transition-transform hover:-translate-y-0.5 sm:grid"
        aria-label="Pedir propuesta rápida por WhatsApp"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-void text-ink">
          <MessageCircle size={18} />
        </span>
      </a>

      {/* Mobile Sticky Button Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-void/85 px-4 py-3.5 backdrop-blur-md block sm:hidden">
        <a
          href="https://wa.me/351931056365?text=Hola%20Alex%2C%20vi%20AstroNexo%20Studio%20y%20me%20gustar%C3%ADa%20pedir%20una%20auditor%C3%ADa%20gratuita%20para%20mi%20negocio."
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink text-xs font-bold text-void transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-line/30"
        >
          <MessageCircle size={15} />
          Pedir auditoría gratis
        </a>
      </div>
    </>
  );
}
