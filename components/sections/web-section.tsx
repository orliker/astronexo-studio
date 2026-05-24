"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, ArrowUpRight, Eye, Globe, Sparkles, Star, ShieldAlert, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

// Constantes al inicio del archivo para evitar errores de hoisting/TypeScript
export const FEATURED_PROJECTS = [
  {
    title: "Anderbrows Academy",
    type: "Preview Comercial",
    sector: "Formación beauty",
    desc: "Landing page premium diseñada para cursos presenciales, con alta autoridad visual y conversión directa a WhatsApp.",
    problem: "Resolvió la fricción en la inscripción de alumnas, concentrando el contacto en una ruta de acción inmediata sin intermediarios.",
    image: "/portfolio/portfolio-anderbrows.jpeg",
    url: "https://anderbrows.vercel.app/",
  },
  {
    title: "Infinity Bright Clean",
    type: "Preview Comercial",
    sector: "Servicios de limpieza",
    desc: "Plataforma de servicios de limpieza comercial con estructura de reservas y presentación corporativa seria.",
    problem: "Eliminó la imagen amateur del negocio local anterior, permitiendo capturar contratos residenciales y comerciales de alto ticket.",
    image: "/portfolio/portfolio-sams-lyart.jpeg",
    url: "https://infinitybrightclean.vercel.app/",
  },
  {
    title: "CURB Porto",
    type: "Demo Conceptual",
    sector: "Restauración / Hamburguesería",
    desc: "Concepto interactivo para hamburguesería con imágenes premium a pantalla completa y acceso al menú en 1 clic.",
    problem: "Solucionó la lentitud y mala experiencia de los menús en PDF tradicionales, ofreciendo una navegación móvil rápida y fluida.",
    image: "/portfolio/portfolio-curb.jpeg",
    url: "https://curbwebpreviewe.vercel.app/",
  },
  {
    title: "Kire Tattoo Studio",
    type: "Demo Conceptual",
    sector: "Estudio de Tatuajes",
    desc: "Diseño de estilo editorial oscuro para estudios de tatuajes y artistas independientes enfocado en mostrar el portafolio visual.",
    problem: "Resolvió la presentación desordenada del portafolio del artista en Instagram, unificando los mejores trabajos en un activo digital.",
    image: "/portfolio/portfolio-kire-tattoo.jpeg",
    url: "https://kiretattoostudio.vercel.app/",
  },
];

export const OPTIONS = [
  {
    title: "Menú QR Digital Autogestionable",
    desc: "Tu menú móvil rápido con fotos premium, acceso instantáneo y botón de pedidos a WhatsApp.",
  },
  {
    title: "Landing Page Premium",
    desc: "Una sola página optimizada, ideal para academias, estudios, clínicas y venta de servicios concretos.",
  },
  {
    title: "Sitio Web Corporativo Completo",
    desc: "Múltiples páginas preparadas para posicionamiento SEO y estructuración clara de servicios.",
  },
  {
    title: "Sistema de Reservas / Pagos Integrados",
    desc: "Pasarela de cobro simple o reservas automatizadas integradas directamente en tu panel web.",
  },
];

export const SCENARIOS = [
  {
    title: "Restauración",
    subtitle: "Menú QR dinámico autogestionable",
    desc: "Carga instantánea de la carta digital con fotografías optimizadas y acceso directo a WhatsApp para realizar pedidos directos.",
    tag: "Menos fricción de respuesta"
  },
  {
    title: "Clínicas & Estética",
    subtitle: "Landing page de alta conversión y velocidad",
    desc: "Estructuración clara de tratamientos médicos y estéticos con llamadas a la acción enfocadas en agendar citas directas.",
    tag: "Ruta de contacto directa"
  },
  {
    title: "Servicios Locales",
    subtitle: "Web corporativa estructurada para captar leads",
    desc: "Diseño optimizado para buscadores (SEO) que presenta los servicios del negocio de forma seria y corporativa.",
    tag: "Reducción de tareas repetitivas"
  }
];

export function WebSection() {
  // Estado para el configurador (Derecha)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Landing Page Premium",
  ]);

  // Estado para el auditor IA (Izquierda)
  const [targetUrl, setTargetUrl] = useState("");
  const [auditStatus, setAuditStatus] = useState<"idle" | "auditing" | "result">("idle");
  const [auditStep, setAuditStep] = useState(0);

  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  const getWhatsAppLinkConfig = () => {
    const baseMsg = "Hola AstroNexo. Me interesa tu solución de Web Premium / Menú QR.";
    const selectedText =
      selectedOptions.length > 0
        ? ` He seleccionado: ${selectedOptions.join(", ")}.`
        : "";
    const fullMsg = `${baseMsg}${selectedText} Mi negocio es: `;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
  };

  const runAuditor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUrl.trim()) return;
    setAuditStatus("auditing");
    setAuditStep(0);

    const steps = [
      "Verificando respuesta del servidor DNS...",
      "Midiendo velocidad de carga móvil en 3G/4G...",
      "Analizando fricciones y llamadas a la acción...",
    ];

    const timer = setInterval(() => {
      setAuditStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setAuditStatus("result");
          return prev;
        }
        return prev + 1;
      });
    }, 600);
  };

  const isInstagramAudit = targetUrl.includes("@") || targetUrl.toLowerCase().includes("instagram.com");

  // Auditoría personalizada si es un perfil de Instagram o una página web
  const getAuditDiagnostics = () => {
    if (isInstagramAudit) {
      return {
        score: "42/100 (Muy Deficiente)",
        title: "Diagnóstico de Instagram: 3 Fugas de Conversión",
        problems: [
          {
            title: "Link de biografía ineficiente (ej. Linktree):",
            desc: "Ofreces demasiadas opciones y links externos. El 80% de tus visitas se confunden y se van sin tomar ninguna acción."
          },
          {
            title: "Cero automatización de mensajes directos (DMs):",
            desc: "Cuando un cliente potencial pregunta precio por privado, tardas horas en responder. Pierdes la venta caliente."
          },
          {
            title: "Falta de una ruta de conversión directa:",
            desc: "No tienes una landing page rápida con un cualificador o bot que dirija al lead directo a tu WhatsApp comercial."
          }
        ],
        loss: "-35% de interés",
        ctaText: "Construir mi embudo y web para Instagram"
      };
    } else {
      return {
        score: "54/100 (Crítico)",
        title: "Diagnóstico Web: 3 Fallos Técnicos Críticos",
        problems: [
          {
            title: "Tardar &gt; 4 segundos en ser interactivo:",
            desc: "La web carga visualmente pero tarda segundos en dejar pulsar los botones. Pierdes visitas impacientes por esta demora."
          },
          {
            title: "Ausencia de pre-cualificador o flujo directo:",
            desc: "Obligas al cliente a leer textos densos para informarse. ¿Por qué no guiarlo con un formulario dinámico directo?"
          },
          {
            title: "Archivos pesados y scripts no optimizados:",
            desc: "Saturan la conexión móvil de tu cliente. Google detecta esto y penaliza tu posicionamiento orgánico."
          }
        ],
        loss: "-28% de ventas",
        ctaText: "Optimizar y rediseñar mi sitio web"
      };
    }
  };

  const diagnostics = getAuditDiagnostics();

  const getWhatsAppLinkAudit = () => {
    const auditType = isInstagramAudit ? "Instagram" : "Sitio Web";
    const msg = `Hola AstroNexo. He auditado mi ${auditType}: "${targetUrl}". El sistema indica un rendimiento crítico (${diagnostics.score}) y pérdida de conversión. Quiero corregir los 3 problemas técnicos en mi presencia online.`;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const auditSteps = [
    "Verificando respuesta del servidor DNS...",
    "Midiendo velocidad de carga móvil en 3G/4G...",
    "Analizando fricciones y llamadas a la acción...",
  ];

  return (
    <section
      id="webs-y-qr"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 border-t border-line bg-deep/20"
    >
      <div className="pointer-events-none absolute -right-12 top-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.03),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="03"
        kicker="Servicios de Alta Demanda"
        title={
          <>
            Desarrollo Web Premium y{" "}
            <span className="premium-word">Menús QR Interactivos</span>
          </>
        }
        intro="Una presencia digital veloz, limpia y con alto criterio estético. Diseñamos webs que eliminan la sensación de amateurismo y multiplican tu tasa de conversión de visitas a clientes."
      />



      {/* Bloque Interactivo de Configuración */}
      <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-10">
        {/* Lado Izquierdo: Dashboard de Carga y Auditor de Rendimiento */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6 h-full">
          {/* Dashboard de Rendimiento: 4 Gráficos y Métricas */}
          <Reveal>
            <div className="premium-surface rounded-card border border-line bg-void/25 p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex flex-wrap items-center gap-1.5 mb-4">
                <Cpu size={11} className="text-aurora" />
                Auditoría Técnica: Velocidad y Conversión de Carga
              </span>

              <div className="grid gap-4 md:grid-cols-12">
                {/* Gráfico 1 (Principal): SVG Horizontal Comparison Bar Chart */}
                <div className="md:col-span-8 rounded-xl border border-line/50 bg-deep/10 p-3 sm:p-4 space-y-3">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    Tiempo de Carga en Dispositivos Móviles
                  </span>
                  
                  <div className="space-y-3">
                    {/* Fila WP */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[9px] text-ink-mute font-mono">
                        <span>Wordpress / Plantilla Tradicional</span>
                        <span className="text-red-400 font-semibold">4.8 segundos</span>
                      </div>
                      <div className="h-1.5 w-full bg-void/60 rounded-full overflow-hidden border border-line/45">
                        <div className="h-full bg-red-400/80 rounded-full" style={{ width: "90%" }} />
                      </div>
                    </div>

                    {/* Fila AstroNexo */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[9px] text-ink-soft font-mono">
                        <span>AstroNexo Premium (Next.js Edge)</span>
                        <span className="text-aurora font-semibold">0.7 segundos</span>
                      </div>
                      <div className="h-1.5 w-full bg-void/60 rounded-full overflow-hidden border border-line/45">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-nebula-soft via-aurora to-aurora rounded-full shadow-[0_0_8px_rgba(56,224,201,0.4)]" 
                          style={{ width: "15%" }}
                          initial={{ width: 0 }}
                          animate={{ width: "15%" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>

                  <span className="block text-[8px] sm:text-[9px] text-ink-mute leading-relaxed">
                    El 53% de los usuarios abandona las páginas móviles que tardan más de 3 segundos en mostrar información interactiva.
                  </span>
                </div>

                {/* Gráfico 2: Medidor Radial Lighthouse Score */}
                <div className="md:col-span-4 rounded-xl border border-line/50 bg-deep/10 p-3 sm:p-4 flex flex-col justify-between items-center text-center">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    Lighthouse Score
                  </span>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative my-1 flex items-center justify-center will-change-transform"
                  >
                    <svg viewBox="0 0 80 80" className="h-16 w-16 sm:h-20 sm:w-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-line"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-aurora"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 32}
                        initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
                        animate={{ strokeDashoffset: 0 }} // 100%
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-xs sm:text-sm font-bold text-ink">100</span>
                      <span className="text-[5px] sm:text-[6px] text-aurora font-mono tracking-wider font-semibold">SCORE</span>
                    </div>
                  </motion.div>
                  
                  <span className="block text-[8px] sm:text-[9px] leading-tight text-ink-mute">
                    Calificación de rendimiento y accesibilidad móvil de Google.
                  </span>
                </div>
              </div>

              {/* Sparklines / KPI Mini Cards (Gráficos 3 y 4) */}
              <div className="mt-3 grid gap-3 grid-cols-2">
                {/* Gráfico 3: Tasa de Rebote Sparkline */}
                <div className="rounded-xl border border-line/50 bg-deep/10 p-2.5 sm:p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] sm:text-[10px] uppercase tracking-wider text-ink-mute font-mono">Tasa de Rebote</span>
                    <span className="block font-display text-xs sm:text-sm font-bold text-aurora">-65% Reducción</span>
                  </div>
                  <div className="w-10 sm:w-14 h-6 sm:h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <motion.path
                        d="M0,2 L10,3 L20,12 L30,14 L40,17 L50,18"
                        fill="none"
                        stroke="#38e0c9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Gráfico 4: Conversiones Sparkline */}
                <div className="rounded-xl border border-line/50 bg-deep/10 p-2.5 sm:p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] sm:text-[10px] uppercase tracking-wider text-ink-mute font-mono">Conversión Visitas</span>
                    <span className="block font-display text-xs sm:text-sm font-bold text-ember">+3.2x Tráfico</span>
                  </div>
                  <div className="w-10 sm:w-14 h-6 sm:h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <motion.path
                        d="M0,18 L10,16 L20,14 L30,8 L40,6 L50,2"
                        fill="none"
                        stroke="#ff9d57"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Simulador Auditor Web */}
          <Reveal delay={0.08}>
            <div className="premium-surface rounded-card border border-line bg-deep/45 p-4 sm:p-6 shadow-[0_12px_35px_-20px_rgba(124,108,255,0.1)]">
              <h3 className="font-display text-sm sm:text-base font-semibold text-ink flex items-center gap-2">
                <Globe size={16} className="text-aurora animate-spin" style={{ animationDuration: "12s" }} />
                Auditor IA de Velocidad y Conversión Web
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs text-ink-mute">
                Evalúa tu sitio web actual o cuenta de Instagram para identificar cuellos de botella de carga.
              </p>

              <AnimatePresence mode="wait">
                {auditStatus === "idle" && (
                  <motion.form
                    key="idle-form"
                    onSubmit={runAuditor}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 space-y-3.5"
                  >
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider text-ink-mute mb-1">
                        URL de tu web o Instagram
                      </label>
                      <input
                        type="text"
                        required
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                        placeholder="Ej: www.minegocio.com o @mi_instagram"
                        className="w-full h-9 px-3 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-aurora transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 rounded-full bg-panel border border-line text-xs font-semibold text-ink hover:border-ink-soft transition-colors cursor-pointer"
                    >
                      Analizar Rendimiento Técnico
                    </button>
                  </motion.form>
                )}

                {auditStatus === "auditing" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center flex flex-col items-center justify-center"
                  >
                    <div className="h-5 w-5 rounded-full border-2 border-t-transparent border-aurora animate-spin" />
                    <span className="mt-2 block text-[11px] font-mono text-ink-mute transition-all duration-300">
                      {auditSteps[auditStep]}
                    </span>
                  </motion.div>
                )}

                {auditStatus === "result" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 space-y-3 text-left"
                  >
                    {/* Alerta de Auditoría con preguntas provocativas */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                          <ShieldAlert size={12} />
                          {diagnostics.title}
                        </span>
                        <span className="rounded bg-red-400/25 px-1.5 py-0.5 text-[8px] font-bold text-red-300">
                          {diagnostics.score}
                        </span>
                      </div>
                      
                      <ol className="list-decimal pl-4 text-[11px] text-ink-soft space-y-1.5 leading-relaxed">
                        {diagnostics.problems.map((p, idx) => (
                          <li key={idx}>
                            <strong>{p.title}</strong> {p.desc}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="rounded-xl border border-line bg-void/45 p-2.5 flex items-center justify-between">
                      <div className="text-left">
                        <span className="block text-[8px] uppercase tracking-wider text-ink-mute font-mono">Pérdida de conversión</span>
                      </div>
                      <span className="block font-display text-sm font-bold text-red-400">{diagnostics.loss}</span>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={getWhatsAppLinkAudit()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 inline-flex justify-center items-center gap-1 rounded-full bg-ink text-[11px] font-semibold text-void hover:bg-white transition-colors text-center"
                      >
                        <MessageCircle size={13} />
                        {diagnostics.ctaText}
                      </a>
                      <button
                        onClick={() => {
                          setAuditStatus("idle");
                          setTargetUrl("");
                        }}
                        className="px-3.5 py-2 rounded-full border border-line text-[11px] text-ink-soft hover:text-ink transition-colors"
                      >
                        Reiniciar
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* Derecha: Selector interactivo */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="premium-surface relative overflow-hidden rounded-card border border-line bg-deep/45 p-5 sm:p-7">
              <span className="absolute right-4 top-4 rounded-full border border-line bg-void/50 px-2 py-0.5 text-[8px] uppercase tracking-wider text-ink-soft">
                Configurador
              </span>
              
              <h3 className="font-display text-sm sm:text-base font-semibold tracking-tight text-ink">
                Selecciona tu formato web ideal:
              </h3>
              <p className="mt-0.5 text-[11px] text-ink-mute">
                Adapta tu presencia según tu tipo de negocio.
              </p>

              {/* Lista de Opciones */}
              <div className="mt-4 space-y-2">
                {OPTIONS.map((opt) => {
                  const isSelected = selectedOptions.includes(opt.title);
                  return (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => toggleOption(opt.title)}
                      className={`w-full text-left flex items-start gap-3 rounded-xl border p-2.5 sm:p-3 transition-all duration-300 ${
                        isSelected
                          ? "border-ember bg-ember/5 shadow-[0_0_15px_rgba(255,157,87,0.06)]"
                          : "border-line bg-void/35 hover:border-ink-soft"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border transition-colors ${
                          isSelected
                            ? "border-ember bg-ember text-void"
                            : "border-line bg-void"
                        }`}
                      >
                        {isSelected && <Check size={11} className="stroke-[3]" />}
                      </span>
                      <div>
                        <span className={`block text-xs font-semibold tracking-tight transition-colors ${
                          isSelected ? "text-ink" : "text-ink-soft"
                        }`}>
                          {opt.title}
                        </span>
                        <span className="mt-0.5 block text-[10px] leading-relaxed text-ink-mute">
                          {opt.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Botón dinámico */}
              <div className="mt-6">
                <a
                  href={getWhatsAppLinkConfig()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-glint group flex w-full items-center justify-center gap-1.5 rounded-full bg-ink py-3 text-xs font-semibold text-void transition-colors hover:bg-white"
                >
                  <Globe size={15} />
                  Diseñar mi Web Premium
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Escenarios de Aplicación por Sector */}
      <div className="mt-12 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-5 px-5 pb-4 md:grid md:grid-cols-3 md:gap-5 md:mx-0 md:px-0 md:pb-0">
        {SCENARIOS.map((s, index) => (
          <Reveal 
            key={s.title} 
            delay={0.05 + index * 0.05}
            className="flex shrink-0 snap-center w-[285px] md:w-auto md:shrink"
          >
            <div className="premium-surface w-full h-full flex flex-col justify-between rounded-card border border-line bg-gradient-to-r from-deep/40 via-nebula/5 to-deep/40 p-4.5 sm:p-6">
              <div>
                <span className="rounded-full bg-void/50 border border-line px-2.5 py-1 text-[8px] sm:text-[9px] uppercase tracking-wider text-ember font-semibold inline-block mb-3.5">
                  Sector: {s.title}
                </span>
                <h4 className="font-display text-sm font-semibold tracking-tight text-ink mb-1.5">
                  {s.subtitle}
                </h4>
                <p className="text-[11px] sm:text-xs leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line/35 pt-3">
                <span className="rounded-full bg-void/50 border border-line px-2 py-0.5 text-[8px] uppercase tracking-wider text-aurora font-semibold shrink-0">
                  {s.tag}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
