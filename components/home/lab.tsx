import { ArrowUpRight } from "lucide-react";
import { LAB, STACK } from "@/lib/content";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem, Reveal } from "@/components/motion-primitives";

export function Lab() {
  return (
    <section id="laboratorio" className="scroll-mt-20 py-20 sm:py-28">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            kicker="Laboratorio"
            title={
              <>
                Lo que construyo cuando <span className="premium-word">nadie me lo encarga</span>
              </>
            }
            intro="Sistemas propios donde pruebo lo más difícil antes de llevarlo a un cliente: IA con control, voz en tiempo real, pagos y automatización a escala."
          />
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-focus inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-ink-mute lg:self-auto"
          >
            Ver código en GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LAB.map((l, i) => {
            const body = (
              <>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
                  {l.href ? (
                    <span className="inline-flex items-center gap-1 text-[11px] text-ink-mute group-hover:text-ink">
                      Código abierto <ArrowUpRight size={13} aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="text-[11px] text-ink-mute">Privado</span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{l.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">{l.what}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{l.detail}</p>
                <p className="mt-auto pt-5 font-mono text-[11px] text-ink-mute">{l.stack.join(" / ")}</p>
              </>
            );
            const cls = "panel-edge group flex h-full flex-col rounded-card p-6";
            return (
              <StaggerItem key={l.name} className="h-full">
                {l.href ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={`premium-focus ${cls}`}>
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Herramientas por áreas */}
        <Reveal className="mt-14">
          <div className="grid gap-6 rounded-card border border-line bg-deep/40 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {STACK.map((g) => (
              <div key={g.group}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-nebula-soft">{g.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-md border border-line bg-void/50 px-2 py-1 text-xs text-ink-soft">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
