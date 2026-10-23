import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion-primitives";
import { ServiceIcon } from "@/components/service-icon";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-20 sm:py-28">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="01"
            kicker="Servicios"
            title={
              <>
                Todo lo que puedo <span className="premium-word">construir</span> para tu negocio
              </>
            }
          />
          <p className="max-w-md text-pretty text-ink-soft lg:text-right">
            La web es solo el principio. Diseño, programo y conecto todo lo que hay
            detrás: pagos, datos, automatizaciones e inteligencia artificial.
          </p>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <StaggerItem key={s.slug} className="h-full">
              <Link
                href={`/servicios/${s.slug}`}
                className="premium-focus panel-edge group flex h-full flex-col rounded-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-void/60 text-ember">
                    <ServiceIcon name={s.icon} size={20} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-mute transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.pitch}</p>
                <ul className="mt-5 hidden flex-wrap gap-1.5 sm:flex">
                  {s.examples.map((e) => (
                    <li key={e} className="rounded-full border border-line bg-void/40 px-2.5 py-1 text-xs text-ink-soft">
                      {e}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-nebula-soft">
                  {s.price}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
