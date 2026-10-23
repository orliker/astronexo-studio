import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <>
      {/* Escritorio: burbuja */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a Alex por WhatsApp"
        title="Escribir por WhatsApp"
        className="premium-focus fixed bottom-5 right-5 z-40 hidden h-14 w-14 place-items-center rounded-full border border-line bg-ink text-void shadow-[0_22px_70px_-24px_rgba(244,245,251,0.85)] transition-transform hover:-translate-y-0.5 sm:grid"
      >
        <MessageCircle size={22} aria-hidden="true" />
      </a>

      {/* Móvil: barra fija */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-void/90 px-4 py-3 backdrop-blur-md sm:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="premium-focus flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-void active:scale-[0.98]"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Pedir diagnóstico gratis
        </a>
      </div>
    </>
  );
}
