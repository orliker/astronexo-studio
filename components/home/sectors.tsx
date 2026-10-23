import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion-primitives";

/**
 * Lo que haría para cada tipo de negocio. Son propuestas, no casos: los
 * clientes reales están en Proyectos. Los precios salen de PACKS y SERVICES.
 */
const SECTORS = [
  {
    who: "Clínicas y consultas",
    what: "Citas online y un WhatsApp que responde las preguntas de siempre y agenda solo. Menos teléfono, más pacientes atendidos.",
    price: "Desde 250 €",
    message: "Hola Alex, tengo una clínica o consulta y quiero menos llamadas y más citas. Mi negocio es: ",
  },
  {
    who: "Restaurantes y bares",
    what: "Carta digital con QR, reservas sin llamar y tu ficha de Google Maps cuidada para que te encuentren.",
    price: "Desde 150 €",
    message: "Hola Alex, tengo un restaurante o bar y me interesa la carta digital y las reservas. Mi negocio es: ",
  },
  {
    who: "Autónomos, coaches y terapeutas",
    what: "Una web que explica lo que haces, con reserva y pago de sesiones. Sin cuota mensual y fácil de cambiar tú.",
    price: "Desde 150 €",
    message: "Hola Alex, soy autónomo/a y quiero una web con reservas y pago de sesiones. Mi actividad es: ",
  },
  {
    who: "Inmobiliarias",
    what: "Web con tus inmuebles, fichas claras y un sistema que recoge cada contacto y te avisa por WhatsApp.",
    price: "Desde 500 €",
    message: "Olá Alex, tenho uma imobiliária e quero uma web com imóveis e captação de contactos. A minha empresa é: ",
  },
  {
    who: "Pymes con pedidos y Excel",
    what: "Pedidos, presupuestos y facturas que se hacen solos, con avisos y exportación para la gestoría.",
    price: "Desde 90 €",
    message: "Hola Alex, en mi empresa llevamos pedidos o facturas en Excel y quiero automatizarlo. Mi empresa es: ",
  },
  {
    who: "Tienes una idea de app",
    what: "Te ayudo a aterrizar la idea y construyo una primera versión que funcione, en web, iOS o Android.",
    price: "Desde 1.500 €",
    message: "Hola Alex, tengo una idea de app y quiero saber precio y plazo. La idea es: ",
  },
];

export function Sectors() {
  return (
    <section id="tu-negocio" className="scroll-mt-20 border-t border-line py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          kicker="Para tu negocio"
          title={
            <>
              ¿Cuál es <span className="premium-word">tu negocio?</span>
            </>
          }
          intro="Ejemplos de lo que haría para ti. Si tu sector no está aquí, escríbeme igual: el diagnóstico es gratis."
        />
        <p className="mt-4 text-sm text-ink-mute sm:hidden" aria-hidden="true">
          Desliza para ver los 6 →
        </p>

        <Stagger className="-mx-5 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <StaggerItem key={s.who} className="h-full w-[82%] shrink-0 snap-start sm:w-auto">
              <a
                href={waLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-focus panel-edge group flex h-full flex-col rounded-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold">{s.who}</h3>
                  <span className="shrink-0 text-sm font-semibold text-ember">{s.price}</span>
                </div>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{s.what}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  Contármelo por WhatsApp
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
