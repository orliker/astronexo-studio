import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { CASES, type Case } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

function host(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function Shot({ c, sizes }: { c: Case; sizes: string }) {
  return (
    <div className="browser overflow-hidden rounded-xl">
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="ml-2 truncate text-[10px] text-ink-mute">{host(c.url)}</span>
      </div>
      <div className="overflow-hidden">
        <Image
          src={c.image}
          alt={`Captura de la web de ${c.client}`}
          width={1440}
          height={900}
          sizes={sizes}
          className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.025]"
        />
      </div>
    </div>
  );
}

function Status({ c }: { c: Case }) {
  const own = c.status === "Producto propio";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        own ? "border-nebula/30 bg-nebula/10 text-nebula-soft" : "border-aurora/30 bg-aurora/10 text-aurora"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${own ? "bg-nebula-soft" : "bg-aurora"}`} />
      {own ? "Proyecto propio, no es cliente" : c.status}
    </span>
  );
}

export function Work() {
  const [featured, ...rest] = CASES;
  return (
    <section id="trabajo" className="scroll-mt-20 border-t border-line bg-deep/30 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          index="02"
          kicker="Proyectos reales"
          title={
            <>
              Trabajo publicado, <span className="premium-word">en producción</span>
            </>
          }
          intro="Webs y sistemas que hoy usan negocios de verdad. Puedes abrirlos y comprobarlo tú mismo."
        />

        {/* Caso principal */}
        <Reveal className="mt-12">
          <article className="panel-edge group grid gap-8 overflow-hidden rounded-card p-5 sm:p-8 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-12">
            <Shot c={featured} sizes="(min-width: 1024px) 50vw, 92vw" />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Status c={featured} />
                <span className="text-xs text-ink-mute">
                  {featured.sector} · {featured.place}
                </span>
              </div>
              <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{featured.client}</h3>
              <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{featured.summary}</p>
              <ul className="mt-6 space-y-2.5">
                {featured.built.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-ink">
                    <Check size={16} className="mt-0.5 shrink-0 text-aurora" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tecnologías">
                {featured.stack.map((t) => (
                  <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-mute">
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-focus mt-7 inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-ink-mute"
              >
                Ver la web en vivo
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        </Reveal>

        {/* Resto */}
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06} className="h-full">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-focus panel-edge group flex h-full flex-col rounded-card p-4"
              >
                <Shot c={c} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 46vw, 92vw" />
                <div className="flex flex-1 flex-col px-1 pt-5">
                  <div className="flex items-center justify-between gap-2">
                    <Status c={c} />
                    <ArrowUpRight
                      size={17}
                      className="text-ink-mute transition-colors group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{c.client}</h3>
                  <p className="mt-1 text-xs text-ink-mute">
                    {c.sector} · {c.place}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
                  <p className="mt-auto pt-4 text-xs text-ink-mute">{c.stack.join(" · ")}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
