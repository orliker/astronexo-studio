import { ArrowUpRight, Quote } from "lucide-react";
import { CASES, TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion-primitives";

/** Opiniones de los clientes de los proyectos de arriba, cada una enlazada a su web en vivo. */
export function Testimonials() {
  return (
    <section id="opiniones" className="scroll-mt-20 py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          kicker="Lo que dicen"
          title={
            <>
              Palabras de quienes <span className="premium-word">ya trabajan conmigo</span>
            </>
          }
          intro="Los mismos negocios cuyas webs acabas de ver. Puedes abrirlas y comprobar el trabajo."
        />

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t) => {
            const c = CASES.find((x) => x.slug === t.caseSlug);
            return (
              <StaggerItem key={t.caseSlug} className="h-full">
                <figure className="panel-edge flex h-full flex-col rounded-card p-7 sm:p-8">
                  <Quote size={22} className="text-ember" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-pretty font-display text-lg leading-relaxed text-ink sm:text-xl">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
                    <div>
                      <p className="font-semibold">{t.author}</p>
                      <p className="mt-0.5 text-sm text-ink-mute">{t.business}</p>
                    </div>
                    {c && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="premium-focus inline-flex shrink-0 items-center gap-1 rounded text-sm text-ink-soft hover:text-ink"
                      >
                        Ver su web
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </figcaption>
                </figure>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
