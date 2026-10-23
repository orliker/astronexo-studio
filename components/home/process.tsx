import { PROCESS } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion-primitives";

export function Process({ index = "05" }: { index?: string }) {
  return (
    <section id="proceso" className="scroll-mt-20 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index={index}
          kicker="Proceso"
          title={
            <>
              De la primera conversación a <span className="premium-word">publicado</span>
            </>
          }
          intro="Cuatro pasos, sin letra pequeña. En cada uno sabes qué toca, cuánto tarda y qué recibes."
        />

        <Stagger className="relative mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="hairline pointer-events-none absolute inset-x-0 top-6 hidden xl:block" aria-hidden="true" />
          {PROCESS.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="relative">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-line bg-void font-display text-base font-semibold text-ember">
                  {i + 1}
                </span>
                <p className="mt-6 text-xs uppercase tracking-[0.16em] text-nebula-soft">{p.time}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
