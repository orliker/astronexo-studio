import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

/**
 * FAQ con <details> nativo: accesible con teclado, sin JS y todo el texto
 * presente en el HTML para Google (también va en JSON-LD FAQPage).
 */
export function Faq({
  items,
  index = "08",
  title = "Lo que me suelen preguntar",
}: {
  items: { q: string; a: string }[];
  index?: string;
  title?: string;
}) {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line bg-deep/30 py-20 sm:py-28">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            index={index}
            kicker="Preguntas frecuentes"
            title={title}
            intro="Y si tu pregunta no está aquí, escríbeme: te contesto yo. El diagnóstico completo, por escrito, en 24 a 48 horas."
          />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {items.map((f, i) => (
            <details key={f.q} className="group" open={i < 2}>
              <summary className="premium-focus flex cursor-pointer items-center justify-between gap-6 py-5 text-left font-display text-lg font-medium">
                {f.q}
                <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ember transition-transform duration-300">
                  <Plus size={16} aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
