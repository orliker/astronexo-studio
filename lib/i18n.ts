/**
 * Diccionario central de traducciones ES / EN.
 *
 * Cada componente lee de aquí vía el hook useLang() (ver components/lang-provider).
 * Idioma por defecto: detección por navegador, fallback a ES.
 *
 * Para añadir texto nuevo: ponlo en ambos idiomas. Si falta EN, cae a ES.
 */

export type Lang = "es" | "en";

export const DEFAULT_LANG: Lang = "es";

export const dict = {
  // ── Navegación ──────────────────────────────────────────────
  nav: {
    automation: { es: "Automatización", en: "Automation" },
    websQr: { es: "Webs & QR", en: "Web & QR" },
    invoices: { es: "Facturas", en: "Invoices" },
    seo: { es: "SEO Local", en: "Local SEO" },
    campaigns: { es: "Campañas", en: "Campaigns" },
    privateAudit: { es: "Auditoría privada", en: "Free audit" },
    closeMenu: { es: "Cerrar menú", en: "Close menu" },
    openMenu: { es: "Abrir menú", en: "Open menu" },
    requestAudit: { es: "Pedir auditoría privada", en: "Request a free audit" },
  },

  // ── Hero ────────────────────────────────────────────────────
  hero: {
    badge: {
      es: "Automatización inteligente · WhatsApp IA + Web premium",
      en: "Intelligent automation · AI WhatsApp + Premium web",
    },
    titleMobile: {
      es: "Tu WhatsApp puede vender mientras tú trabajas.",
      en: "Your WhatsApp can sell while you work.",
    },
    titleA: {
      es: "No respondas más mensajes a mano.",
      en: "Stop replying to messages by hand.",
    },
    titleB: { es: "Automatizamos tu", en: "We automate your" },
    titleWhatsapp: { es: "WhatsApp con IA", en: "WhatsApp with AI" },
    titleC: {
      es: "y escalamos tu presencia digital.",
      en: "and scale your digital presence.",
    },
    subMobile: {
      es: "Creamos webs premium y automatizaciones con IA para captar, filtrar y convertir más clientes sin depender de responder todo manualmente.",
      en: "We build premium websites and AI automations to attract, filter and convert more clients without replying to everything by hand.",
    },
    subDesktop: {
      es: "Creamos sistemas de automatización inteligentes y desarrollo web premium. Liberamos a tu equipo de tareas repetitivas y multiplicamos tus leads y ventas en piloto automático.",
      en: "We build intelligent automation systems and premium web development. We free your team from repetitive tasks and multiply your leads and sales on autopilot.",
    },
    ctaAudit: { es: "Pedir auditoría gratis", en: "Get a free audit" },
    ctaAuditFull: {
      es: "Solicitar Auditoría Gratuita",
      en: "Request a Free Audit",
    },
    ctaExamples: { es: "Ver ejemplos", en: "See examples" },
    ctaCases: { es: "Ver casos reales", en: "See real cases" },
    chip1: { es: "Automatización con IA", en: "AI automation" },
    chip2: { es: "WhatsApp & n8n Bots", en: "WhatsApp & n8n bots" },
    chip3: { es: "Web Premium & QR Menús", en: "Premium web & QR menus" },
    tag1: { es: "Soporte 24/7 con IA", en: "24/7 AI support" },
    tag2: { es: "Flujos en n8n", en: "n8n workflows" },
    tag3: { es: "Respuestas en < 1 min", en: "Replies in < 1 min" },
  },

  // ── Franja de confianza ─────────────────────────────────────
  trust: {
    heading: {
      es: "Por qué puedes confiar en nosotros",
      en: "Why you can trust us",
    },
    item1Title: { es: "Estudio real en Oporto", en: "Real studio in Porto" },
    item1Detail: {
      es: "Base física en Portugal, no una cuenta anónima.",
      en: "A physical base in Portugal, not an anonymous account.",
    },
    item2Title: { es: "Trabajamos para el mundo", en: "We work worldwide" },
    item2Detail: {
      es: "Portugal, España, Reino Unido, EE. UU. y toda Europa.",
      en: "Portugal, Spain, UK, USA and all of Europe.",
    },
    item3Title: { es: "Pago por fases", en: "Pay in stages" },
    item3Detail: {
      es: "Empiezas con una parte y el resto al entregar. Sin sorpresas.",
      en: "Start with a deposit, pay the rest on delivery. No surprises.",
    },
    item4Title: { es: "Sin permanencia", en: "No lock-in" },
    item4Detail: {
      es: "Ningún contrato que te ate. La web es tuya, el código es tuyo.",
      en: "No binding contracts. The website is yours, the code is yours.",
    },
  },
} as const;

/** Devuelve el texto en el idioma dado, con fallback a ES. */
export function t(
  entry: { es: string; en: string },
  lang: Lang,
): string {
  return entry[lang] ?? entry.es;
}
