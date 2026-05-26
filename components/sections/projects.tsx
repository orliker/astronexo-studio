"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, ArrowUpRight, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

const PROJECTS = [
  {
    title: "Anderbrows Academy",
    type: "Preview Comercial",
    sector: "Formación Beauty",
    desc: "Landing page premium diseñada para cursos presenciales, con alta autoridad visual y conversión directa a WhatsApp.",
    problem: "Fuga de registros debido a un embudo complejo en Instagram y falta de información clara.",
    solution: "Landing page de un solo objetivo centrada en la autoridad de la mentora, resolviendo dudas frecuentes en 3 segundos y guiando directamente al chat.",
    improvement: "Ruta de inscripción unificada, reduciendo el soporte manual y acelerando el cierre de plazas.",
    image: "/portfolio/portfolio-anderbrows.jpeg",
    url: "https://anderbrows.vercel.app/",
  },
  {
    title: "Infinity Bright Clean",
    type: "Preview Comercial",
    sector: "Servicios de Limpieza",
    desc: "Plataforma de servicios de limpieza comercial con estructura de reservas y presentación corporativa seria.",
    problem: "Imagen amateur en redes que impedía justificar tarifas profesionales para contratos comerciales.",
    solution: "Estructuración de servicios residenciales y de oficinas bajo una identidad minimalista y seria que transmite confianza institucional.",
    improvement: "Eliminación de llamadas repetitivas de cotización y captación directa de leads de alto valor.",
    image: "/portfolio/portfolio-sams-lyart.jpeg",
    url: "https://infinitybrightclean.vercel.app/",
  },
  {
    title: "CURB Porto",
    type: "Demo Conceptual",
    sector: "Restauración / Hamburguesería",
    desc: "Concepto interactivo para hamburguesería con imágenes premium a pantalla completa y acceso al menú en 1 clic.",
    problem: "Menús en PDF pesados, lentos de descargar y con experiencia móvil desastrosa.",
    solution: "Menú interactivo ultra-rápido en Next.js con carga instantánea de fotografías del producto y botón de pedido a WhatsApp.",
    improvement: "Carga en < 1s, eliminando la fricción y facilitando pedidos de clientes de paso o locales.",
    image: "/portfolio/portfolio-curb.jpeg",
    url: "https://curbwebpreviewe.vercel.app/",
  },
  {
    title: "Kire Tattoo Studio",
    type: "Demo Conceptual",
    sector: "Estudio de Tatuajes",
    desc: "Diseño de estilo editorial oscuro para estudios de tatuajes y artistas independientes enfocado en mostrar el portafolio visual.",
    problem: "Portafolio desordenado en las historias destacadas de Instagram y alta fricción para reservar citas.",
    solution: "Galería web premium de estilo dark room que enmarca las mejores obras del artista y ofrece un botón de reserva directa.",
    improvement: "Presentación impecable de obras de arte que justifica tarifas premium y facilita la selección del artista.",
    image: "/portfolio/portfolio-kire-tattoo.jpeg",
    url: "https://kiretattoostudio.vercel.app/",
  },
];

export function ProjectsSection() {
  const getWhatsAppLink = (projectTitle: string) => {
    const msg = `Hola Alex, he visto el proyecto de "${projectTitle}" en vuestro portafolio y me gustaría una solución similar para mi negocio.`;
    return `https://wa.me/351931056365?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="proyectos"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 border-t border-line bg-deep/20"
    >
      <div className="pointer-events-none absolute -left-12 top-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.02),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="08"
        kicker="Casos de Estudio y Demostraciones"
        title={
          <>
            Demos Conceptuales y <span className="premium-word">Activos en Producción</span>
          </>
        }
        intro="Explora ejemplos reales y conceptos interactivos diseñados bajo nuestro criterio técnico. Cada pieza resuelve un problema comercial específico de conversión y experiencia de usuario."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <motion.article
              whileHover="hover"
              className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-void/35 transition-shadow duration-500 hover:shadow-[0_20px_90px_-70px_rgba(255,157,87,0.15)]"
            >
              {/* Media Container */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/9] overflow-hidden bg-panel"
                aria-label={`Abrir ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 44vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top opacity-85 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
                <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <span className="rounded-full border border-line bg-void/70 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-ink-soft backdrop-blur font-mono">
                      {project.sector}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[9px] uppercase tracking-wider backdrop-blur font-bold font-mono ${
                        project.type === "Preview Comercial"
                          ? "border-aurora/35 bg-aurora/10 text-aurora"
                          : "border-ember/35 bg-ember/10 text-ember"
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>
                  <motion.span
                    variants={{ hover: { rotate: 45, color: "#ff9d57" } }}
                    transition={{ duration: 0.2 }}
                    className="grid h-8 w-8 place-items-center rounded-full border border-line bg-void/65 text-ink-soft backdrop-blur shadow-sm"
                  >
                    <ArrowUpRight size={14} />
                  </motion.span>
                </div>
              </a>

              {/* Text Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base sm:text-lg font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  {project.desc}
                </p>

                {/* Grid con detalles comerciales */}
                <div className="mt-4 grid gap-3 grid-cols-1 border-t border-line/35 pt-4">
                  <div className="text-[11px] leading-relaxed">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-red-400 font-bold block mb-0.5">Problema Inicial:</span>
                    <p className="text-ink-soft/90">{project.problem}</p>
                  </div>
                  <div className="text-[11px] leading-relaxed">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-aurora font-bold block mb-0.5">Solución AstroNexo:</span>
                    <p className="text-ink-soft/90">{project.solution}</p>
                  </div>
                  <div className="text-[11px] leading-relaxed">
                    <span className="text-[9px] uppercase tracking-[0.1em] text-ember font-bold block mb-0.5">Resultado Esperado:</span>
                    <p className="text-ink-soft/90">{project.improvement}</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-5 pt-4 border-t border-line/35 flex flex-wrap gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-10 inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink-soft hover:text-ink hover:border-ink-soft hover:bg-void/45 transition-colors"
                  >
                    <Eye size={13} />
                    {project.type === "Preview Comercial" ? "Ver Web Real" : "Ver Demo"}
                  </a>
                  <a
                    href={getWhatsAppLink(project.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-10 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-void hover:bg-white transition-colors"
                  >
                    <MessageCircle size={13} />
                    Quiero algo parecido
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
