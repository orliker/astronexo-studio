import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { PACKS } from "@/lib/content";
import { waLink } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";

export function Pricing() {
  return (
    <section id="precios" className="scroll-mt-20 border-t border-line bg-deep/30 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="05"
          kicker="Precios"
          title={
            <>
              Precios claros, <span className="premium-word">cerrados antes de empezar</span>
            </>
          }
          intro="Puntos de partida orientativos. Después del diagnóstico recibes un precio cerrado para tu caso, por escrito. Cómo se paga: una parte al empezar y el resto al entregar; en proyectos grandes, por fases. Sin cuota obligatoria conmigo."
        />

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PACKS.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-card p-7 ${
                  p.highlight ? "panel-edge premium-surface" : "border border-line bg-void/50"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-ember px-3 py-1 text-[11px] font-semibold text-void">
                    Más ahorro de tiempo
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-3 font-display text-3xl font-semibold">{p.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.for}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-ink">
                      <Check size={15} className="mt-0.5 shrink-0 text-aurora" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px] leading-relaxed text-ink-mute">{p.raises}</p>
                <div className="mt-auto pt-8">
                  <a
                    href={waLink(p.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pedir ${p.name} por WhatsApp`}
                    className={`premium-focus flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                      p.highlight ? "bg-ink text-void hover:bg-white" : "border border-line hover:border-ink-mute"
                    }`}
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    Pedir este
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-5">
          <div className="panel-edge flex flex-col gap-6 rounded-card p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-nebula-soft">A medida · desde 1.500 €</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">¿Algo más grande? Aplicaciones, apps y CRM a medida.</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Portales con login, pagos con Stripe, apps móviles y de escritorio, CRM y paneles a medida.
                Empezamos por una primera versión útil y crece contigo. Un panel de seguimiento sencillo
                ya entra en el Sistema completo, desde 500 €.
              </p>
            </div>
            <a
              href={waLink("Hola Alex, tengo un proyecto a medida (aplicación, app o CRM) y quiero contártelo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-focus inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-white"
            >
              Contarte mi proyecto
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
