"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
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
  );
}
