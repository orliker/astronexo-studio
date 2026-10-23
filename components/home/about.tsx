import Image from "next/image";
import { Languages, MapPin, MessageCircle, Wrench } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

const FACTS = [
  { icon: MapPin, title: "Oporto, Portugal", text: "Trabajo en remoto con negocios de España, Portugal y otros países." },
  { icon: Languages, title: "Español, portugués e inglés", text: "Te atiendo en tu idioma y hago webs multiidioma de verdad." },
  { icon: Wrench, title: "De principio a fin", text: "Diseño, programación, datos, automatización y publicación." },
  { icon: MessageCircle, title: "Trato directo", text: "Hablas conmigo, no con un comercial. Respondo por WhatsApp." },
];

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            index="06"
            kicker="Sobre mí"
            title={
              <>
                Una persona, <span className="premium-word">todo el oficio</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              <p>
                Soy {SITE.fullName}, Alex para los clientes, y construyo para internet de principio a fin: webs para negocios locales,
                aplicaciones con pagos y bases de datos, automatizaciones que ahorran horas y sistemas con
                inteligencia artificial que funcionan en producción, no solo en una demo.
              </p>
              <p>
                Monté AstroNexo Studio para trabajar con negocios que tienen un buen servicio pero una
                presencia digital que no está a su altura, o procesos que todavía se hacen a mano. Mi
                trabajo es entender tu negocio, decirte con honestidad qué te conviene y construirlo bien.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="panel-edge premium-surface rounded-card p-6 sm:p-8">
            <div className="flex items-center gap-5 border-b border-line pb-6">
              <Image
                src={SITE.photo}
                alt={`${SITE.fullName}, fundador de AstroNexo Studio`}
                width={800}
                height={800}
                sizes="112px"
                className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-1 ring-line sm:h-28 sm:w-28"
              />
              <div className="min-w-0">
                <p className="font-display text-xl font-semibold">{SITE.fullName}</p>
                <p className="mt-1 text-sm text-ink-soft">Fundador de AstroNexo Studio</p>
                <span className="mt-3 inline-flex rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-ember">
                  Desde Oporto
                </span>
              </div>
            </div>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {FACTS.map((f) => (
                <li key={f.title}>
                  <f.icon size={18} className="text-nebula-soft" aria-hidden="true" />
                  <p className="mt-3 font-display font-semibold">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-focus micro-glint mt-8 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-white"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Escríbeme por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
