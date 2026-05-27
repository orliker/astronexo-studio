"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * FAQ + proceso. Doble función:
 * 1. Confianza: resuelve las objeciones del cliente que no nos conoce
 *    (¿sois reales? ¿cuánto tarda? ¿y si no me gusta? ¿la web es mía?).
 * 2. SEO: incluye JSON-LD FAQPage, que Google muestra como rich snippet.
 */

const FAQS = [
  {
    q: "¿Sois un estudio real o un freelance suelto?",
    a: "AstroNexo Studio es un estudio digital con base en Oporto, Portugal, dirigido por Alex. Trabajamos para clientes de Portugal, España, Reino Unido y Estados Unidos. Hablas directamente con quien diseña y construye tu proyecto, sin intermediarios ni comerciales.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Primero hacemos una auditoría gratuita de tu presencia digital. Si encaja, te enviamos una propuesta clara con precio cerrado y una previsualización de cómo quedaría. Empiezas con una parte del pago y el resto al entregar. Sin sorpresas ni costes ocultos.",
  },
  {
    q: "¿Cuánto tarda y cuánto cuesta?",
    a: "Una landing premium puede estar lista en pocos días; proyectos más completos (web + WhatsApp IA + automatizaciones) llevan algo más. Los precios van desde 50€ en automatizaciones sencillas hasta proyectos a medida con tienda, login y pagos. Te damos precio cerrado antes de empezar.",
  },
  {
    q: "¿Y si no me gusta el resultado?",
    a: "Trabajamos con previsualización antes de cerrar, así ves la dirección desde el principio. Incluimos rondas de ajustes en cada proyecto para que el resultado final sea el que necesitas. No entregamos algo con lo que no estés conforme.",
  },
  {
    q: "¿La web es mía? ¿Me atáis con permanencia?",
    a: "La web y el código son tuyos, sin contratos de permanencia abusivos. Puedes mantener el proyecto con nosotros o llevártelo. Trabajamos con tecnología moderna y estándar (Next.js), no plantillas cerradas.",
  },
  {
    q: "Ya tengo web (WordPress, Wix...). ¿Me sirve hablar con vosotros?",
    a: "Sí. Muchos negocios tienen webs lentas o desactualizadas en WordPress o Wix. Las modernizamos, las hacemos más rápidas y las preparamos para convertir, o añadimos automatización de WhatsApp y facturas a lo que ya tienes.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-4xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 border-t border-line"
    >
      {/* JSON-LD para rich snippets de Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <Reveal>
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-mono">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
            Todo lo que quieres saber antes de escribirnos
          </h2>
          <p className="mt-3 text-sm text-ink-mute max-w-xl mx-auto">
            Transparencia total. Si te queda cualquier duda, escríbenos directamente por WhatsApp.
          </p>
        </div>
      </Reveal>

      <div className="space-y-3">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.q} delay={i * 0.05}>
              <div
                className={`rounded-2xl border bg-void/25 transition-colors ${
                  isOpen ? "border-ember/35" : "border-line hover:border-ink-soft/45"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="premium-focus flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-semibold text-ink sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
                      isOpen ? "border-ember/40 bg-ember/10 text-ember" : "border-line text-ink-soft"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">
                    {faq.a}
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ember/35 bg-ember/10 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ember hover:bg-ember/15"
          >
            <MessageCircle size={16} />
            Tengo otra duda
          </a>
        </div>
      </Reveal>
    </section>
  );
}
