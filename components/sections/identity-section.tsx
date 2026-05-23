"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, ArrowUpRight, Palette, Sparkles, Star, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

// Constantes declaradas al inicio del archivo para evitar problemas de hoisting/TypeScript
export const OPTIONS = [
  {
    title: "Rediseño de Logotipo & Identidad",
    desc: "Renovación de logo, selección de tipografías y colores corporativos adaptados a redes y web.",
  },
  {
    title: "Redacción Persuasiva (Copywriting)",
    desc: "Textos sin relleno que responden de inmediato a las dudas y objeciones de tus clientes potenciales.",
  },
  {
    title: "Diseño de Piezas de Redes Sociales",
    desc: "Plantillas visuales alineadas a tu nueva identidad para que tus publicaciones se sientan premium.",
  },
  {
    title: "Estrategia de Tono y Mensaje de Marca",
    desc: "Definición de las palabras clave y estilo con el que tu marca debe hablar a su nicho ideal.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "El rediseño de identidad digital corporativa y los textos persuasivos sostienen nuestras tarifas sin objeción alguna por parte de grandes clientes corporativos. Transmite un prestigio absoluto.",
    name: "Garrigues Abogados (Madrid)",
    result: "Prestigio & Autoridad",
  },
  {
    quote: "Adecuar el tono de marca y los textos de la landing de producto eliminó la sensación de amateurismo. El ticket promedio de compra web subió un 25% el primer mes.",
    name: "Kibuc Muebles (España)",
    result: "+25% ticket medio",
  },
  {
    quote: "Estábamos compitiendo únicamente por precio frente a otras agencias. El nuevo diseño de marca y los textos profesionales justifican el valor real de nuestras consultorías sin regateo.",
    name: "Lluc & Pau Consultores (Barcelona)",
    result: "Cierre sin regateo",
  },
  {
    quote: "Nuestra consistencia visual en redes y web es impecable. Transmitimos la confianza exacta que cobramos y logramos capturar clientes internacionales de alto valor.",
    name: "Pampa Holding (Madrid)",
    result: "Clientes Internacionales",
  },
];

export function IdentitySection() {
  // Estado para el configurador (Derecha)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Rediseño de Logotipo & Identidad",
  ]);

  // Estado para el analizador IA (Izquierda)
  const [brandInput, setBrandInput] = useState("");
  const [brandSlogan, setBrandSlogan] = useState("");
  const [brandStatus, setBrandStatus] = useState<"idle" | "analyzing" | "result">("idle");
  const [brandStep, setBrandStep] = useState(0);

  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  const getWhatsAppLinkConfig = () => {
    const baseMsg = "Hola AstroNexo. Me interesa tu solución de Identidad Digital y Rediseño de Marca.";
    const selectedText =
      selectedOptions.length > 0
        ? ` He seleccionado: ${selectedOptions.join(", ")}.`
        : "";
    const fullMsg = `${baseMsg}${selectedText} Mi negocio es: `;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
  };

  const runBrandAnalyzer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandInput.trim()) return;
    setBrandStatus("analyzing");
    setBrandStep(0);

    const steps = [
      "Midiendo consistencia cromática y visual...",
      "Analizando egocentrismo vs beneficio en el copy...",
      "Evaluando autoridad y prueba social percibida...",
    ];

    const timer = setInterval(() => {
      setBrandStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setBrandStatus("result");
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  const getWhatsAppLinkBrand = () => {
    const msg = `Hola AstroNexo. He analizado mi marca/slogan: "${brandInput}". El reporte indica una percepción de valor de 3.5/10 y 3 problemas de copy/identidad. Quiero solicitar mi auditoría de marca para elevar mis tarifas.`;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const brandSteps = [
    "Midiendo consistencia cromática y visual...",
    "Analizando egocentrismo vs beneficio en el copy...",
    "Evaluando autoridad y prueba social percibida...",
  ];

  return (
    <section
      id="identidad-digital"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32 border-t border-line bg-void/5"
    >
      <div className="pointer-events-none absolute -left-12 top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.03),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="07"
        kicker="Estrategia y Marca"
        title={
          <>
            Identidad Digital y{" "}
            <span className="premium-word">Copywriting Persuasivo</span>
          </>
        }
        intro="Una marca que se ve barata se ve obligada a competir por precio. Rediseñamos tu presencia visual y redactamos tus textos para que tu negocio se perciba premium desde el primer segundo."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Lado Izquierdo: Dashboard de Valor y Diagnóstico IA */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-8 h-full">
          {/* Dashboard de Marca: 4 Gráficos y Métricas */}
          <Reveal>
            <div className="premium-surface rounded-card border border-line bg-void/35 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex items-center gap-1.5 mb-5">
                <Sparkles size={11} className="text-ember animate-pulse" />
                Estadísticas de Percepción y Valor de Marca Premium
              </span>

              <div className="grid gap-5 md:grid-cols-12">
                {/* Gráfico 1 (Principal): SVG Price Elasticity Curve */}
                <div className="md:col-span-8 rounded-xl border border-line/60 bg-deep/20 p-4">
                  <span className="block text-[11px] font-semibold text-ink-soft mb-3">
                    Elasticidad Precio vs Valor de Marca Percibido
                  </span>
                  
                  <div className="relative h-32 w-full flex items-end">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      {/* Curva Marca Genérica (Sensibilidad al precio alta, plano) */}
                      <path
                        d="M 0,30 Q 30,29 60,30 T 100,32"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="1.2"
                        strokeDasharray="2,2"
                      />
                      
                      {/* Curva Marca Premium AstroNexo (Soporta precios altos sin bajar demanda) */}
                      <path
                        d="M 0,35 Q 25,25 50,15 T 100,2"
                        fill="none"
                        stroke="#ff9d57"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 0,35 Q 25,25 50,15 T 100,2 L 100,40 L 0,40 Z"
                        fill="url(#brandGradArea)"
                        opacity="0.15"
                      />
                      
                      <defs>
                        <linearGradient id="brandGradArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff9d57" />
                          <stop offset="100%" stopColor="#ff9d57" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute top-1 right-2 flex flex-col gap-1 text-[8px] font-mono text-ink-mute">
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 bg-red-400 rounded-full" />
                        <span>Identidad Genérica (Límite €)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 bg-ember rounded-full" />
                        <span>Identidad Premium (Aumento Margen)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex justify-between text-[9px] text-ink-mute font-mono">
                    <span>Precio Bajo</span>
                    <span>Precio Medio</span>
                    <span>Tarifa Premium</span>
                  </div>
                </div>

                {/* Gráfico 2: Medidor Radial de Coherencia de Marca */}
                <div className="md:col-span-4 rounded-xl border border-line/60 bg-deep/20 p-4 flex flex-col justify-between items-center text-center">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    Consistencia Visual
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
                        className="stroke-ember"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 32}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-sm font-bold text-ink">100%</span>
                      <span className="text-[7px] text-ink-mute font-mono">Multicanal</span>
                    </div>
                  </div>
                  
                  <span className="block text-[9px] leading-tight text-ink-mute">
                    Coherencia cromática y tipográfica en redes/web.
                  </span>
                </div>
              </div>

              {/* Sparklines / KPI Mini Cards (Gráficos 3 y 4) */}
              <div className="mt-4 grid gap-4 grid-cols-2">
                {/* Gráfico 3: Retención de Lectura Sparkline */}
                <div className="rounded-xl border border-line/60 bg-deep/20 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] uppercase tracking-wider text-ink-mute font-mono">Retención en Web</span>
                    <span className="block font-display text-base font-bold text-aurora">+80% Retención</span>
                  </div>
                  <div className="w-14 h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <path
                        d="M0,15 L10,13 L20,10 L30,9 L40,4 L50,1"
                        fill="none"
                        stroke="#38e0c9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Gráfico 4: Aumento de Ticket Sparkline */}
                <div className="rounded-xl border border-line/60 bg-deep/20 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] uppercase tracking-wider text-ink-mute font-mono">Ticket Promedio</span>
                    <span className="block font-display text-base font-bold text-ember">+25% Margen</span>
                  </div>
                  <div className="w-14 h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <path
                        d="M0,16 L10,12 L20,13 L30,8 L40,5 L50,1"
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

          {/* Diagnóstico de Marca */}
          <Reveal delay={0.08}>
            <div className="premium-surface rounded-card border border-line bg-deep/55 p-6 shadow-[0_15px_45px_-20px_rgba(255,157,87,0.1)]">
              <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                <Palette size={16} className="text-ember" />
                Analizador IA de Percepción y Copywriting
              </h3>
              <p className="mt-1 text-xs text-ink-mute">
                Evalúa si tu propuesta de marca e imagen justifican tus tarifas actuales.
              </p>

              <AnimatePresence mode="wait">
                {brandStatus === "idle" && (
                  <motion.form
                    key="idle-form"
                    onSubmit={runBrandAnalyzer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 space-y-4"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-ink-mute mb-1.5">
                          Tu Instagram o Marca
                        </label>
                        <input
                          type="text"
                          required
                          value={brandInput}
                          onChange={(e) => setBrandInput(e.target.value)}
                          placeholder="Ej: @mi_marca"
                          className="w-full h-10 px-4 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-ember transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-ink-mute mb-1.5">
                          Slogan o Servicio Clave
                        </label>
                        <input
                          type="text"
                          required
                          value={brandSlogan}
                          onChange={(e) => setBrandSlogan(e.target.value)}
                          placeholder="Ej: Hacemos consultorías"
                          className="w-full h-10 px-4 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-ember transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-panel border border-line text-xs font-semibold text-ink hover:border-ink-soft transition-colors cursor-pointer"
                    >
                      Diagnosticar Autoridad Visual
                    </button>
                  </motion.form>
                )}

                {brandStatus === "analyzing" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="h-6 w-6 rounded-full border-2 border-t-transparent border-ember animate-spin" />
                    <span className="mt-3 block text-xs font-mono text-ink-mute transition-all duration-300">
                      {brandSteps[brandStep]}
                    </span>
                  </motion.div>
                )}

                {brandStatus === "result" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 space-y-4 text-left"
                  >
                    {/* Alerta de 3 debilidades de marca */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                          <AlertTriangle size={13} />
                          Diagnóstico de Branding: 3 Incoherencias de Posicionamiento
                        </span>
                        <span className="rounded bg-red-400/25 px-2 py-0.5 text-[9px] font-bold text-red-300">
                          Percepción de Valor: 3.5 / 10
                        </span>
                      </div>
                      
                      <ol className="list-decimal pl-4 text-xs text-ink-soft space-y-2 leading-relaxed">
                        <li>
                          <strong>Copy Egocéntrico ('Hacemos', 'Somos'):</strong> Tu claim habla de ti en lugar del beneficio real para el cliente. Esto provoca desinterés rápido y alto rebote.
                        </li>
                        <li>
                          <strong>Falta de coherencia visual multicanal:</strong> Tu logo y colores en Instagram difieren del sitio web, proyectando informalidad o falta de madurez comercial.
                        </li>
                        <li>
                          <strong>Nula presencia de prueba social estructurada:</strong> No destacas de inmediato las calificaciones o testimonios de forma visible, perdiendo la oportunidad de infundir confianza instantánea.
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-line bg-void/45 p-3 text-center">
                        <span className="block text-[9px] uppercase tracking-wider text-ink-mute">Percepción de Valor</span>
                        <span className="block mt-1 font-display text-xl font-bold text-red-400">Baja (3.5)</span>
                        <span className="block text-[8px] text-red-400 font-semibold mt-0.5">Difícil cobrar caro</span>
                      </div>
                      <div className="rounded-xl border border-line bg-void/45 p-3 text-center">
                        <span className="block text-[9px] uppercase tracking-wider text-ink-mute">Oportunidad de Margen</span>
                        <span className="block mt-1 font-display text-xl font-bold text-aurora">+30% Aumento</span>
                        <span className="block text-[8px] text-ink-mute mt-0.5">Con copy y diseño premium</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={getWhatsAppLinkBrand()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 inline-flex justify-center items-center gap-1.5 rounded-full bg-ink text-xs font-semibold text-void hover:bg-white transition-colors text-center"
                      >
                        <MessageCircle size={14} />
                        Rediseñar mi marca y copywriting
                      </a>
                      <button
                        onClick={() => {
                          setBrandStatus("idle");
                          setBrandInput("");
                          setBrandSlogan("");
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

        {/* Derecha: Configurador de Marca */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="premium-surface relative overflow-hidden rounded-card border border-line bg-deep/45 p-6 sm:p-8">
              <span className="absolute right-4 top-4 rounded-full border border-line bg-void/50 px-3 py-1 text-[10px] uppercase tracking-wider text-ink-soft">
                Configurador en vivo
              </span>
              
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                Selecciona tu mejora de marca:
              </h3>
              <p className="mt-1 text-xs text-ink-mute">
                Ayuda a que tus clientes entiendan tu verdadero valor y justifiques tarifas altas.
              </p>

              {/* Lista de Opciones */}
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
                  <Palette size={16} />
                  Elevar mi Marca y Presencia
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="mt-3 block text-center text-[10px] text-ink-mute">
                  Generará un mensaje directo con tus opciones para acordar los detalles.
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
