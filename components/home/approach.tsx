import { Check, X } from "lucide-react";
import { DO, DONT } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

export function Approach() {
  return (
    <section id="enfoque" className="scroll-mt-20 border-t border-line bg-deep/30 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="04"
          kicker="Cómo trabajo"
          title={
            <>
              Lo que hago y <span className="premium-word">lo que no</span>
            </>
          }
          intro="Prefiero que lo sepas antes de escribirme. Así no perdemos el tiempo ninguno de los dos."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="panel-edge h-full rounded-card p-7 sm:p-9">
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-aurora/15 text-aurora">
                  <Check size={18} aria-hidden="true" />
                </span>
                Lo que sí hago
              </h3>
              <ul className="mt-7 space-y-4">
                {DO.map((d) => (
                  <li key={d} className="flex gap-3 leading-relaxed text-ink">
                    <Check size={17} className="mt-1 shrink-0 text-aurora" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-card border border-line bg-void/60 p-7 sm:p-9">
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ember/15 text-ember">
                  <X size={18} aria-hidden="true" />
                </span>
                Lo que no hago
              </h3>
              <ul className="mt-7 space-y-4">
                {DONT.map((d) => (
                  <li key={d} className="flex gap-3 leading-relaxed text-ink-soft">
                    <X size={17} className="mt-1 shrink-0 text-ember" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
