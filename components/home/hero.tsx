import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { SITE, WHATSAPP_URL, waLink } from "@/lib/site";
import { HeroDeck } from "./hero-deck";

/** Cada visitante encuentra su puerta: abre WhatsApp con el mensaje ya empezado. */
const NEEDS = [
  { label: "Que me encuentren en Google", message: "Hola Alex, tengo un negocio local y quiero salir mejor en Google. Mi negocio es: " },
  { label: "Citas y reservas sin llamar", message: "Hola Alex, quiero que mis clientes reserven solos (web o WhatsApp). Mi negocio es: " },
  { label: "WhatsApp que contesta solo", message: "Hola Alex, me interesa el asistente de WhatsApp con IA. Mi negocio es: " },
  { label: "Dejar el Excel y las facturas a mano", message: "Hola Alex, quiero automatizar pedidos, Excel o facturas. Mi empresa es: " },
  { label: "Tengo una idea de app", message: "Hola Alex, tengo una idea de app y quiero saber precio y plazo. La idea es: " },
];

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
    <section id="top" className="relative overflow-clip pt-28 pb-16 sm:pt-32 lg:min-h-[100svh] lg:pt-32 lg:pb-12">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[46rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,108,255,0.16),transparent)]" />

      <div className="shell relative grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-deep/60 px-3.5 py-1.5 text-xs text-ink-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora" />
            </span>
            Estudio en Oporto · Atiendo en español y português
          </p>

          <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.04] text-balance sm:text-6xl lg:text-[3.6rem] xl:text-[3.9rem]">
            Webs, apps y automatizaciones que{" "}
            <span className="premium-word">trabajan por tu negocio.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            <Image
              src={SITE.photo}
              alt=""
              width={800}
              height={800}
              sizes="32px"
              className="mr-2 inline-block h-8 w-8 rounded-full object-cover align-middle ring-1 ring-line"
            />
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

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-mute">
            Diagnóstico gratis: me mandas tu web o tu idea y te respondo por escrito qué cambiaría. Sin compromiso.
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-nebula-soft">¿Qué necesitas?</p>
            <ul className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
              {NEEDS.map((n) => (
                <li key={n.label} className="shrink-0">
                  <a
                    href={waLink(n.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-focus inline-flex items-center rounded-full border border-line bg-deep/60 px-3.5 py-2 text-[13px] text-ink-soft transition-colors hover:border-ember/60 hover:text-ink"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-0">
          <HeroDeck />
          <dl className="mt-8 grid max-w-xl lg:max-w-none grid-cols-3 gap-4 border-t border-line pt-6">
            {PROOF.map((p) => (
              <div key={p.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-[13px] leading-snug text-ink-mute sm:text-sm">{p.label}</dt>
                <dd className="font-display text-lg font-semibold text-ink min-[380px]:text-xl sm:text-2xl">{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
