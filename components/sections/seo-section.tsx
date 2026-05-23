"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, ArrowUpRight, Search, Compass, Star, TrendingUp, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

// Constantes declaradas al inicio para evitar problemas de hoisting/TypeScript
export const OPTIONS = [
  {
    title: "Optimización de Google Business Profile",
    desc: "Ajuste de palabras clave, configuración de categorías y geolocalización de imágenes corporativas.",
  },
  {
    title: "Estrategia de Reseñas y Reputación",
    desc: "Embudo automático en WhatsApp para incentivar calificaciones de 5 estrellas de clientes satisfechos.",
  },
  {
    title: "SEO Local y Enlaces de Directorio",
    desc: "Alta de tu dirección e información comercial en directorios de alta autoridad local para elevar tu ranking.",
  },
  {
    title: "Auditoría de Palabras Clave Competitivas",
    desc: "Investigación profunda de los términos y búsquedas locales con los que tu competencia captura clientes.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Aparecer en el Top 3 de Google Maps nos trajo un 150% más de llamadas telefónicas de clientes de la zona listos para comprar. Es increíble lo rápido que subimos posiciones en el mapa en pocas semanas.",
    name: "Barbería Malditos Bastardos (Madrid)",
    result: "+150% llamadas",
  },
  {
    quote: "Estábamos completamente invisibles para búsquedas locales en nuestro distrito. Tras optimizar la ficha local y geolocalizar imágenes, salimos primeros de la zona en nuestra categoría y las reservas se triplicaron.",
    name: "Floristería Bourguignon (Madrid)",
    result: "Ficha Local Top 1",
  },
  {
    quote: "Las indicaciones de ruta a la clínica subieron un 90% gracias a la optimización de palabras clave locales. La tasa de conversión del mapa supera con creces cualquier red social para nosotros.",
    name: "Fisioterapia Barrio de Salamanca (Madrid)",
    result: "+90% visitas a clínica",
  },
  {
    quote: "Centralizar las reseñas automatizadas en cada taller nos posicionó en el mapa de forma imparable. Las llamadas directas de clientes cercanos buscando taller urgente aumentaron desde el primer mes.",
    name: "Talleres Midas (España)",
    result: "+45% clics de llamada",
  },
];

export function SEOSection() {
  // Estado para el configurador (Derecha)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Optimización de Google Business Profile",
  ]);

  // Estado para el analizado IA (Izquierda)
  const [sector, setSector] = useState("");
  const [city, setCity] = useState("");
  const [seoStatus, setSeoStatus] = useState<"idle" | "analyzing" | "result">("idle");
  const [seoStep, setSeoStep] = useState(0);

  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  const getWhatsAppLinkConfig = () => {
    const baseMsg = "Hola AstroNexo. Me interesa tu solución de SEO Local y Posicionamiento.";
    const selectedText =
      selectedOptions.length > 0
        ? ` He seleccionado: ${selectedOptions.join(", ")}.`
        : "";
    const fullMsg = `${baseMsg}${selectedText} Mi negocio es: `;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
  };

  const runSeoAnalyzer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sector.trim() || !city.trim()) return;
    setSeoStatus("analyzing");
    setSeoStep(0);

    const steps = [
      "Escaneando competidores en Google Maps...",
      "Midiendo densidad de búsquedas locales...",
      "Analizando optimización de ficha (GBP)...",
    ];

    const timer = setInterval(() => {
      setSeoStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setSeoStatus("result");
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  const getWhatsAppLinkSeo = () => {
    const msg = `Hola AstroNexo. He usado el analizador de Maps para mi negocio de "${sector}" en "${city}". El reporte indica que estoy perdiendo más de 1,200 búsquedas locales mensuales y tengo visibilidad de 30%. Quiero corregir los 3 fallos de visibilidad en Google Maps.`;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const seoSteps = [
    "Escaneando competidores en Google Maps...",
    "Midiendo densidad de búsquedas locales...",
    "Analizando optimización de ficha (GBP)...",
  ];

  return (
    <section
      id="seo-local"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32 border-t border-line bg-void/10"
    >
      <div className="pointer-events-none absolute -left-12 top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(56,224,201,0.03),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="05"
        kicker="Servicios de Alta Demanda"
        title={
          <>
            SEO Local & Posicionamiento en{" "}
            <span className="premium-word">Google Maps</span>
          </>
        }
        intro="Si tu negocio no aparece cuando tus clientes cercanos buscan lo que ofreces, tu competencia se queda con las llamadas. Posicionamos tu perfil para capturar de inmediato la intención de compra local."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Lado Izquierdo: Dashboard de Posición y Analizador Maps */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-8 h-full">
          {/* Dashboard SEO: 4 Gráficos y Métricas */}
          <Reveal>
            <div className="premium-surface rounded-card border border-line bg-void/35 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex items-center gap-1.5 mb-5">
                <TrendingUp size={11} className="text-aurora" />
                Historial y Cobertura de Posicionamiento Local
              </span>

              <div className="grid gap-5 md:grid-cols-12">
                {/* Gráfico 1 (Principal): SVG Line Chart - Posición de Maps en 6 Semanas */}
                <div className="md:col-span-8 rounded-xl border border-line/60 bg-deep/20 p-4">
                  <span className="block text-[11px] font-semibold text-ink-soft mb-3">
                    Evolución de Ranking en Google Maps (Top Posiciones)
                  </span>
                  
                  <div className="relative h-32 w-full flex items-end">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      {/* Línea de Posición (Evolución de posición 15 a la 2, menor valor Y = mejor posición) */}
                      <path
                        d="M 0,32 Q 20,28 40,24 T 80,12 T 100,5"
                        fill="none"
                        stroke="#38e0c9"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 0,32 Q 20,28 40,24 T 80,12 T 100,5 L 100,40 L 0,40 Z"
                        fill="url(#seoGradArea)"
                        opacity="0.15"
                      />
                      
                      {/* Puntos destacados */}
                      <circle cx="0" cy="32" r="2.5" fill="#f87171" />
                      <circle cx="100" cy="5" r="2.5" fill="#38e0c9" />

                      <defs>
                        <linearGradient id="seoGradArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38e0c9" />
                          <stop offset="100%" stopColor="#38e0c9" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Etiquetas flotantes */}
                    <div className="absolute top-6 left-1 text-[8px] font-mono text-red-400 bg-void/80 px-1 border border-red-500/10 rounded">
                      Posición #12 (Invisible)
                    </div>
                    <div className="absolute top-1 right-1 text-[8px] font-mono text-aurora bg-void/80 px-1 border border-aurora/25 rounded">
                      Posición #2 (Top 3!)
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-[9px] text-ink-mute font-mono">
                    <span>Semana 1</span>
                    <span>Semana 2</span>
                    <span>Semana 3</span>
                    <span>Semana 4</span>
                    <span>Semana 5</span>
                    <span>Semana 6</span>
                  </div>
                </div>

                {/* Gráfico 2: Medidor Radial de Cobertura Geográfica Local */}
                <div className="md:col-span-4 rounded-xl border border-line/60 bg-deep/20 p-4 flex flex-col justify-between items-center text-center">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    Cobertura Local
                  </span>
                  
                  <div className="relative my-2 flex items-center justify-center">
                    <svg className="h-20 w-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-line"
                        strokeWidth="5"
                        fill="transparent"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-aurora"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 32}
                        strokeDashoffset={2 * Math.PI * 32 * (1 - 0.95)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-sm font-bold text-ink">95%</span>
                      <span className="text-[7px] text-ink-mute font-mono">Visibilidad</span>
                    </div>
                  </div>
                  
                  <span className="block text-[9px] leading-tight text-ink-mute">
                    Indexación en un radio de 5km en tu zona.
                  </span>
                </div>
              </div>

              {/* Sparklines / KPI Mini Cards (Gráficos 3 y 4) */}
              <div className="mt-4 grid gap-4 grid-cols-2">
                {/* Gráfico 3: Clics de Ruta Sparkline */}
                <div className="rounded-xl border border-line/60 bg-deep/20 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] uppercase tracking-wider text-ink-mute font-mono">Indicaciones de Ruta</span>
                    <span className="block font-display text-base font-bold text-aurora">+90% mensual</span>
                  </div>
                  <div className="w-14 h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <path
                        d="M0,16 L10,14 L20,13 L30,9 L40,8 L50,2"
                        fill="none"
                        stroke="#38e0c9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Gráfico 4: Llamadas Recibidas Sparkline */}
                <div className="rounded-xl border border-line/60 bg-deep/20 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] uppercase tracking-wider text-ink-mute font-mono">Llamadas Directas</span>
                    <span className="block font-display text-base font-bold text-ember">+150% Llamadas</span>
                  </div>
                  <div className="w-14 h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <path
                        d="M0,17 L10,15 L20,10 L30,12 L40,6 L50,1"
                        fill="none"
                        stroke="#ff9d57"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Analizador de Maps */}
          <Reveal delay={0.08}>
            <div className="premium-surface rounded-card border border-line bg-deep/55 p-6 shadow-[0_15px_45px_-20px_rgba(56,224,201,0.1)]">
              <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                <Compass size={16} className="text-aurora" />
                Analizador IA de Visibilidad en Maps
              </h3>
              <p className="mt-1 text-xs text-ink-mute">
                Estima cuántas búsquedas y llamadas locales estás perdiendo frente al Top 3 de tu zona.
              </p>

              <AnimatePresence mode="wait">
                {seoStatus === "idle" && (
                  <motion.form
                    key="idle-form"
                    onSubmit={runSeoAnalyzer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-ink-mute mb-1.5">
                          Sector del negocio
                        </label>
                        <input
                          type="text"
                          required
                          value={sector}
                          onChange={(e) => setSector(e.target.value)}
                          placeholder="Ej: Peluquería"
                          className="w-full h-10 px-4 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-aurora transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-ink-mute mb-1.5">
                          Tu ciudad
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Ej: Madrid"
                          className="w-full h-10 px-4 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-aurora transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-panel border border-line text-xs font-semibold text-ink hover:border-ink-soft transition-colors cursor-pointer"
                    >
                      Analizar Visibilidad Local
                    </button>
                  </motion.form>
                )}

                {seoStatus === "analyzing" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="h-6 w-6 rounded-full border-2 border-t-transparent border-aurora animate-spin" />
                    <span className="mt-3 block text-xs font-mono text-ink-mute transition-all duration-300">
                      {seoSteps[seoStep]}
                    </span>
                  </motion.div>
                )}

                {seoStatus === "result" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 space-y-4 text-left"
                  >
                    {/* Alerta con 3 fallos localizadores */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                          <AlertTriangle size={13} />
                          Diagnóstico Maps: 3 Puntos de Penalización Críticos
                        </span>
                        <span className="rounded bg-red-400/25 px-2 py-0.5 text-[9px] font-bold text-red-300">
                          Visibilidad en {city}: 30% (Oculto)
                        </span>
                      </div>
                      
                      <ol className="list-decimal pl-4 text-xs text-ink-soft space-y-2 leading-relaxed">
                        <li>
                          <strong>Ficha sin indexar en categorías secundarias:</strong> Solo compites por la palabra clave exacta del nombre. ¿Cuántas búsquedas de competidores con menor calificación se quedan con tus clientes?
                        </li>
                        <li>
                          <strong>Imágenes corporativas sin geolocalización meta:</strong> Google no puede certificar que tus fotos corresponden a {city}. Esto reduce la relevancia geográfica de tu perfil.
                        </li>
                        <li>
                          <strong>Nula estrategia automatizada de reseñas:</strong> Si no incentivas las calificaciones ni las respondes con palabras clave locales, el algoritmo penaliza tu ranking.
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-line bg-void/45 p-3 text-center">
                        <span className="block text-[9px] uppercase tracking-wider text-ink-mute">Búsquedas Locales Perdidas</span>
                        <span className="block mt-1 font-display text-xl font-bold text-red-400">~1,200+ / mes</span>
                        <span className="block text-[8px] text-ink-mute mt-0.5">Frente al Top 3</span>
                      </div>
                      <div className="rounded-xl border border-line bg-void/45 p-3 text-center">
                        <span className="block text-[9px] uppercase tracking-wider text-ink-mute">Llamadas no realizadas</span>
                        <span className="block mt-1 font-display text-xl font-bold text-ember">~45 / mes</span>
                        <span className="block text-[8px] text-ink-mute mt-0.5">Por falta de optimización</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={getWhatsAppLinkSeo()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 inline-flex justify-center items-center gap-1.5 rounded-full bg-ink text-xs font-semibold text-void hover:bg-white transition-colors text-center"
                      >
                        <MessageCircle size={14} />
                        Corregir estos 3 fallos y subir al Top 3
                      </a>
                      <button
                        onClick={() => {
                          setSeoStatus("idle");
                          setSector("");
                          setCity("");
                        }}
                        className="px-4 py-2.5 rounded-full border border-line text-xs text-ink-soft hover:text-ink transition-colors"
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

        {/* Lado Derecho: Bloque interactivo con seleccionables */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="premium-surface relative overflow-hidden rounded-card border border-line bg-deep/45 p-6 sm:p-8">
              <span className="absolute right-4 top-4 rounded-full border border-line bg-void/50 px-3 py-1 text-[10px] uppercase tracking-wider text-ink-soft">
                Configurador en vivo
              </span>
              
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                Selecciona tu mejora de SEO Local:
              </h3>
              <p className="mt-1 text-xs text-ink-mute">
                Coloca tu negocio en el mapa y atrae llamadas directas de tu zona.
              </p>

              {/* Lista de Seleccionables */}
              <div className="mt-6 space-y-3">
                {OPTIONS.map((opt) => {
                  const isSelected = selectedOptions.includes(opt.title);
                  return (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => toggleOption(opt.title)}
                      className={`w-full text-left flex items-start gap-4 rounded-2xl border transition-all duration-300 ${
                        isSelected
                          ? "border-ember bg-ember/5 shadow-[0_0_15px_rgba(255,157,87,0.06)]"
                          : "border-line bg-void/35 hover:border-ink-soft"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${
                          isSelected
                            ? "border-ember bg-ember text-void"
                            : "border-line bg-void"
                        }`}
                      >
                        {isSelected && <Check size={14} className="stroke-[3]" />}
                      </span>
                      <div>
                        <span className={`block text-sm font-semibold tracking-tight transition-colors ${
                          isSelected ? "text-ink" : "text-ink-soft"
                        }`}>
                          {opt.title}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-ink-mute">
                          {opt.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Botón dinámico */}
              <div className="mt-8">
                <a
                  href={getWhatsAppLinkConfig()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-glint group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-sm font-semibold text-void transition-colors hover:bg-white"
                >
                  <Search size={16} />
                  Posicionar mi Negocio
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="mt-3 block text-center text-[10px] text-ink-mute">
                  Generará un mensaje en WhatsApp indicando tus áreas prioritarias de SEO.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Testimonios de Clientes Reales (4 Reseñas) */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, index) => (
          <Reveal key={t.name} delay={0.1 + index * 0.08}>
            <div className="premium-surface h-full flex flex-col justify-between rounded-card border border-line bg-gradient-to-r from-deep/40 via-aurora/5 to-deep/40 p-6">
              <div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-ember fill-ember" />
                  ))}
                </div>
                <p className="text-xs italic leading-relaxed text-ink-soft">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-line/35 pt-4">
                <span className="block text-[11px] font-bold text-ink leading-tight">
                  {t.name}
                </span>
                <span className="rounded-full bg-void/50 border border-line px-2.5 py-0.5 text-[8px] uppercase tracking-wider text-ember font-semibold shrink-0">
                  {t.result}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
