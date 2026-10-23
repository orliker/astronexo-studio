import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const PROOF = [
  { value: "4", label: "webs de clientes en producción" },
  { value: "3", label: "países: España, Portugal y Angola" },
  { value: "ES · PT · EN", label: "idiomas de trabajo" },
];

/**
 * Hero compuesto para el primer pantallazo de 1920x965 y de 390x844:
 * mensaje, CTAs y prueba visibles sin hacer scroll. La imagen frontal es el
 * LCP, por eso va con priority y sin animación de opacidad.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-[100svh] lg:pt-32 lg:pb-12">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[46rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,108,255,0.16),transparent)]" />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-deep/60 px-3.5 py-1.5 text-xs text-ink-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora" />
            </span>
            Estudio digital en Oporto · Aceptando proyectos
          </p>

          <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.04] text-balance sm:text-6xl lg:text-[3.6rem] xl:text-[3.9rem]">
            Webs, apps y automatizaciones que{" "}
            <span className="premium-word pr-1">trabajan por tu negocio.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Soy Alex, diseñador y desarrollador. Construyo de principio a fin lo que
            tu negocio necesita para vender más y trabajar menos: desde una web que
            da confianza hasta el software que te quita horas de trabajo manual.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-focus micro-glint inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-void transition-colors hover:bg-white"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Pedir diagnóstico gratis
            </a>
            <a
              href="#trabajo"
              className="premium-focus group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-deep/50 px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink-mute"
            >
              Ver proyectos reales
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
            {PROOF.map((p) => (
              <div key={p.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-ink-mute sm:text-[13px]">{p.label}</dt>
                <dd className="font-display text-xl font-semibold text-ink sm:text-2xl">{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Pila de capturas reales */}
        <div className="relative mx-auto aspect-[16/12] w-full max-w-2xl lg:max-w-none">
          <div className="float-b absolute right-0 top-0 w-[62%] opacity-70">
            <Frame src="/work/mundo-de-papel.jpg" alt="Web de Mundo de Papel Portugal" host="mundodepapelportugal.com" />
          </div>
          <div className="float-a absolute left-0 top-[14%] w-[62%] opacity-85">
            <Frame src="/work/banqa.jpg" alt="Web de BANQA, mobiliario de diseño en Barcelona" host="banqa.es" />
          </div>
          <div className="absolute bottom-0 left-[12%] w-[78%]">
            <Frame
              src="/work/circulo-consciente.jpg"
              alt="Web de Círculo Consciente, escuela de artes marciales en Burgos"
              host="circuloconsciente.es"
              priority
            />
          </div>

          <span className="absolute -left-1 bottom-[22%] hidden rounded-full border border-line bg-deep/90 px-3 py-1.5 text-xs text-ink-soft backdrop-blur sm:inline-flex">
            Pagos con Stripe
          </span>
          <span className="absolute right-[2%] bottom-[8%] hidden rounded-full border border-line bg-deep/90 px-3 py-1.5 text-xs text-ink-soft backdrop-blur sm:inline-flex">
            4 idiomas · Panel de gestión
          </span>
        </div>
      </div>
    </section>
  );
}

function Frame({
  src,
  alt,
  host,
  priority = false,
}: {
  src: string;
  alt: string;
  host: string;
  priority?: boolean;
}) {
  return (
    <figure className="browser overflow-hidden rounded-xl">
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="ml-2 truncate text-[10px] text-ink-mute">{host}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        priority={priority}
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="block h-auto w-full"
      />
    </figure>
  );
}
