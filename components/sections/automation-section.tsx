"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, ArrowUpRight, Bot, Star, Sparkles, Clock, AlertCircle, TrendingUp, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

// Constantes declaradas al inicio del archivo para evitar errores de hoisting/ámbito en TS
export const OPTIONS = [
  {
    title: "WhatsApp para Reservas y Delivery",
    desc: "Bot interactivo en WhatsApp para automatizar pedidos o reserva de mesas sin intervención humana.",
  },
  {
    title: "Calificador de Clientes Potenciales",
    desc: "Filtra de inmediato a los prospectos que llegan de tus anuncios antes de pasarlos a un comercial real.",
  },
  {
    title: "Agendador Automático de Citas",
    desc: "Integración directa con tu calendario (Google Calendar, Calendly) para reservar citas en piloto automático.",
  },
  {
    title: "Automatizaciones n8n a Medida",
    desc: "Flujos de trabajo personalizados que conectan tus chats con CRM, bases de datos o paneles internos.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "El bot de WhatsApp responde a nuestros clientes en segundos indicándoles si hay mesa o cómo pedir a domicilio. Hemos ganado más de 12 horas semanales de gestión manual y logramos un control de reservas impecable.",
    name: "Toma Café (Madrid)",
    result: "+12h libres/sem",
  },
  {
    quote: "Implementar la automatización de WhatsApp agilizó la atención del delivery los fines de semana. Las consultas repetitivas se resuelven solas y el equipo ahora se enfoca al 100% en el servicio de mesa.",
    name: "Federal Café (España)",
    result: "Foco total en salón",
  },
  {
    quote: "Para las promociones masivas, canalizar las respuestas iniciales mediante un flujo automático automatizó el filtrado de incidencias y la asignación estructurada a soporte real, reduciendo la saturación.",
    name: "Goiko Grill (España)",
    result: "Soporte optimizado",
  },
  {
    quote: "La integración de reservas automatizadas redujo las inasistencias en un 38% gracias a las confirmaciones automáticas y recordatorios puntuales enviados directamente por WhatsApp.",
    name: "Bacoa Burger (Barcelona)",
    result: "-38% inasistencias",
  },
];

export function AutomationSection() {
  // Estado para el configurador de servicios (Derecha)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "WhatsApp para Reservas y Delivery",
  ]);

  // Estado para el simulador de IA (Izquierda)
  const [businessName, setBusinessName] = useState("");
  const [businessNiche, setBusinessNiche] = useState("Restauración / Cafetería");
  const [messagesPerDay, setMessagesPerDay] = useState(40);
  const [calcStatus, setCalcStatus] = useState<"idle" | "calculating" | "result">("idle");
  const [loadingStep, setLoadingStep] = useState(0);

  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  const getWhatsAppLinkConfig = () => {
    const baseMsg = "Hola AstroNexo. Me interesa tu solución de Automatización con IA.";
    const selectedText =
      selectedOptions.length > 0
        ? ` He seleccionado: ${selectedOptions.join(", ")}.`
        : "";
    const fullMsg = `${baseMsg}${selectedText} Mi negocio es: `;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
  };

  const runCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;
    setCalcStatus("calculating");
    setLoadingStep(0);

    const steps = [
      "Escaneando canales de atención de chats...",
      "Analizando tiempos promedio de respuesta en tu nicho...",
      "Identificando fugas de conversión por demoras...",
    ];

    const timer = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setCalcStatus("result");
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  // Fórmulas de estimación
  const hoursSaved = Math.round((messagesPerDay * 2 * 30) / 60);
  const leadsRecovered = Math.round(messagesPerDay * 30 * 0.28);

  const getWhatsAppLinkCalc = () => {
    const msg = `Hola AstroNexo. He usado el simulador de IA para "${businessName}" (${businessNiche}). El reporte indica un ahorro de ${hoursSaved} horas/mes y la recuperación de +${leadsRecovered} leads/mes con vuestros bots de WhatsApp. Quiero corregir los 3 problemas críticos que detectó el simulador.`;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const loadingMessages = [
    "Escaneando canales de atención de chats...",
    "Analizando tiempos promedio de respuesta en tu nicho...",
    "Identificando fugas de conversión por demoras...",
  ];

  return (
    <section
      id="automatizaciones"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-12 top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.05),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="02"
        kicker="Servicio de Mayor Demanda"
        title={
          <>
            Automatización inteligente de{" "}
            <span className="premium-word">WhatsApp con IA</span>
          </>
        }
        intro="Libera a tu equipo de responder las mismas dudas una y otra vez. Implementamos flujos automatizados con IA que gestionan, filtran y agendan tus clientes potenciales 24/7."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Lado Izquierdo: Dashboard de Métricas y Simulador de Ahorro */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-8 h-full">
          {/* Dashboard Analítico: 4 Gráficos y Métricas */}
          <Reveal>
            <div className="premium-surface rounded-card border border-line bg-void/35 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex items-center gap-1.5 mb-5">
                <Sparkles size={11} className="text-ember animate-pulse" />
                Panel Analítico de Eficiencia (WhatsApp vs Humano)
              </span>

              <div className="grid gap-5 md:grid-cols-12">
                {/* Gráfico 1 (Principal): SVG Line Chart - Mensajes Gestionados */}
                <div className="md:col-span-8 rounded-xl border border-line/60 bg-deep/20 p-4">
                  <span className="block text-[11px] font-semibold text-ink-soft mb-3">
                    Escalabilidad de Mensajes al Mes
                  </span>
                  
                  {/* Contenedor del gráfico SVG */}
                  <div className="relative h-36 w-full flex items-end">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      {/* Línea Humano (Límite plano) */}
                      <path
                        d="M 0,32 Q 25,31 50,30 T 100,31"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                      />
                      {/* Línea IA (Crecimiento exponencial) */}
                      <path
                        d="M 0,35 Q 25,28 50,15 T 100,4"
                        fill="none"
                        stroke="url(#automationGrad)"
                        strokeWidth="1.5"
                      />
                      {/* Relleno de degradado para la línea IA */}
                      <path
                        d="M 0,35 Q 25,28 50,15 T 100,4 L 100,40 L 0,40 Z"
                        fill="url(#automationGradArea)"
                        opacity="0.15"
                      />
                      
                      <defs>
                        <linearGradient id="automationGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#ff9d57" />
                          <stop offset="50%" stopColor="#7c6cff" />
                          <stop offset="100%" stopColor="#38e0c9" />
                        </linearGradient>
                        <linearGradient id="automationGradArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff9d57" />
                          <stop offset="100%" stopColor="#ff9d57" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Leyendas del gráfico */}
                    <div className="absolute top-1 right-2 flex flex-col gap-1 text-[9px] font-mono text-ink-mute">
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                        <span>Manual (Límite Fijo)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                        <span>Flujo IA (Ilimitado)</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-[9px] text-ink-mute font-mono">
                    <span>Semana 1</span>
                    <span>Semana 2</span>
                    <span>Semana 3</span>
                    <span>Semana 4</span>
                  </div>
                </div>

                {/* Gráfico 2: Medidor Radial de Eficiencia */}
                <div className="md:col-span-4 rounded-xl border border-line/60 bg-deep/20 p-4 flex flex-col justify-between items-center text-center">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    Fidelidad de Respuesta
                  </span>
                  
                  <div className="relative my-2 flex items-center justify-center">
                    <svg className="h-20 w-20 transform -rotate-90">
                      {/* Círculo fondo */}
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-line"
                        strokeWidth="5"
                        fill="transparent"
                      />
                      {/* Círculo progreso */}
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-ember"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 32}
                        strokeDashoffset={2 * Math.PI * 32 * (1 - 0.98)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-sm font-bold text-ink">98%</span>
                      <span className="text-[7px] text-ink-mute font-mono">Instantáneo</span>
                    </div>
                  </div>
                  
                  <span className="block text-[9px] leading-tight text-ink-mute">
                    Cero chats perdidos por saturación de agentes.
                  </span>
                </div>
              </div>

              {/* Sparklines / KPI Mini Cards (Gráficos 3 y 4) */}
              <div className="mt-4 grid gap-4 grid-cols-2">
                {/* Gráfico 3: Leads Agendados Sparkline */}
                <div className="rounded-xl border border-line/60 bg-deep/20 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] uppercase tracking-wider text-ink-mute font-mono">Agendamiento Activo</span>
                    <span className="block font-display text-base font-bold text-aurora">+42 leads / día</span>
                  </div>
                  <div className="w-14 h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <path
                        d="M0,15 L10,13 L20,18 L30,8 L40,11 L50,2"
                        fill="none"
                        stroke="#38e0c9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Gráfico 4: Tiempo Liberado Sparkline */}
                <div className="rounded-xl border border-line/60 bg-deep/20 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] uppercase tracking-wider text-ink-mute font-mono">Tiempo Liberado</span>
                    <span className="block font-display text-base font-bold text-ember">48 hrs / mes</span>
                  </div>
                  <div className="w-14 h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <path
                        d="M0,18 L10,14 L20,15 L30,9 L40,8 L50,3"
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

          {/* Simulador de Ahorro IA / Auditoría Especializada */}
          <Reveal delay={0.08}>
            <div className="premium-surface rounded-card border border-line bg-deep/55 p-6 shadow-[0_15px_45px_-20px_rgba(255,157,87,0.1)]">
              <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                <Bot size={16} className="text-ember" />
                Auditor IA de WhatsApp y Conversión de Chats
              </h3>
              <p className="mt-1 text-xs text-ink-mute">
                Descubre cómo responde tu negocio y simula las fugas de conversión actuales.
              </p>

              <AnimatePresence mode="wait">
                {calcStatus === "idle" && (
                  <motion.form
                    key="idle-form"
                    onSubmit={runCalculator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 space-y-4"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-ink-mute mb-1.5">
                          Nombre del negocio
                        </label>
                        <input
                          type="text"
                          required
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="Ej: Toma Café"
                          className="w-full h-10 px-4 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-ember transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-ink-mute mb-1.5">
                          Sector o Nicho
                        </label>
                        <select
                          value={businessNiche}
                          onChange={(e) => setBusinessNiche(e.target.value)}
                          className="w-full h-10 px-4 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-ember transition-all"
                        >
                          <option value="Restauración / Cafetería">Restauración / Cafetería</option>
                          <option value="Clínica / Estética / Dental">Clínica / Estética / Dental</option>
                          <option value="Servicios Profesionales">Servicios Profesionales</option>
                          <option value="E-commerce / Comercio">E-commerce / Comercio</option>
                          <option value="Academia / Educación">Academia / Educación</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] uppercase tracking-wider text-ink-mute mb-1.5">
                        <span>Consultas / Chats diarios recibidos</span>
                        <span className="text-ember font-bold">{messagesPerDay}</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="200"
                        step="5"
                        value={messagesPerDay}
                        onChange={(e) => setMessagesPerDay(Number(e.target.value))}
                        className="w-full h-1.5 bg-line rounded-lg appearance-none cursor-pointer accent-ember"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-panel border border-line text-xs font-semibold text-ink hover:border-ink-soft transition-colors cursor-pointer"
                    >
                      Ejecutar Diagnóstico IA
                    </button>
                  </motion.form>
                )}

                {calcStatus === "calculating" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="h-6 w-6 rounded-full border-2 border-t-transparent border-ember animate-spin" />
                    <span className="mt-3 block text-xs font-mono text-ink-mute transition-all duration-300">
                      {loadingMessages[loadingStep]}
                    </span>
                  </motion.div>
                )}

                {calcStatus === "result" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 space-y-4 text-left"
                  >
                    {/* Alerta de Auditoría con preguntas provocativas */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                          <AlertCircle size={13} />
                          Reporte de Fugas: 3 Problemas Críticos en {businessNiche}
                        </span>
                        <span className="rounded bg-red-400/25 px-2 py-0.5 text-[9px] font-bold text-red-300">
                          Puntuación de Eficiencia: 32% (Baja)
                        </span>
                      </div>
                      
                      <ol className="list-decimal pl-4 text-xs text-ink-soft space-y-2 leading-relaxed">
                        <li>
                          <strong>Fuga del 60% en horas no comerciales:</strong> El 60% de tus prospectos te escriben cuando estás cerrado. ¿Cuántas ventas estás dejando ir al responder al día siguiente?
                        </li>
                        <li>
                          <strong>Tiempo de espera medio de 18 min:</strong> Cada minuto de espera reduce un 15% el interés. ¿Cuántas personas buscan otra alternativa en Google mientras esperan tu respuesta?
                        </li>
                        <li>
                          <strong>Ausencia de pre-cualificación:</strong> Tu equipo gasta tiempo respondiendo tarifas y stock. ¿Por qué malgastar horas humanas en dudas repetitivas en lugar de cerrar clientes filtrados?
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-line bg-void/45 p-3 text-center">
                        <span className="block text-[9px] uppercase tracking-wider text-ink-mute">Tiempo libre mensual</span>
                        <span className="block mt-1 font-display text-xl font-bold text-ember">~{hoursSaved} hrs</span>
                        <span className="block text-[8px] text-ink-mute mt-0.5">En tareas repetitivas</span>
                      </div>
                      <div className="rounded-xl border border-line bg-void/45 p-3 text-center">
                        <span className="block text-[9px] uppercase tracking-wider text-ink-mute">Leads recuperados</span>
                        <span className="block mt-1 font-display text-xl font-bold text-aurora">+{leadsRecovered} / mes</span>
                        <span className="block text-[8px] text-ink-mute mt-0.5">Por atención inmediata 24/7</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={getWhatsAppLinkCalc()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 inline-flex justify-center items-center gap-1.5 rounded-full bg-ink text-xs font-semibold text-void hover:bg-white transition-colors text-center"
                      >
                        <MessageCircle size={14} />
                        Corregir estos 3 fallos en WhatsApp
                      </a>
                      <button
                        onClick={() => {
                          setCalcStatus("idle");
                          setBusinessName("");
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
                Selecciona tu mejora:
              </h3>
              <p className="mt-1 text-xs text-ink-mute">
                Marcarás las opciones que deseas discutir en nuestra auditoría gratuita.
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
                  <MessageCircle size={17} />
                  Construir mi Sistema con IA
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="mt-3 block text-center text-[10px] text-ink-mute">
                  Generará un mensaje a WhatsApp con tus {selectedOptions.length} opciones seleccionadas.
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
            <div className="premium-surface h-full flex flex-col justify-between rounded-card border border-line bg-gradient-to-r from-deep/40 via-ember/5 to-deep/40 p-6">
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
