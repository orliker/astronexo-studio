import { SITE } from "@/lib/site";
import { CASES, FAQ, PACKS, SERVICES } from "@/lib/content";
import { SOLUTIONS } from "@/lib/solutions";
import { GUIDES } from "@/lib/guides";

// Resumen en texto plano para asistentes de IA (formato llms.txt): quién es,
// qué hace, precios y enlaces, sacado del mismo contenido que la web.
export const dynamic = "force-static";

export function GET() {
  const u = SITE.url;
  const lines = [
    `# ${SITE.name}`,
    "",
    `> Estudio de ${SITE.fullName} (Alex) en ${SITE.city}, ${SITE.country}. Diseña y programa páginas web, aplicaciones, apps, automatizaciones y asistentes de WhatsApp con IA para negocios de España y Portugal. Trato directo con quien construye, precio cerrado por escrito antes de empezar, precios sin IVA, código y dominio a nombre del cliente.`,
    "",
    `- Contacto: WhatsApp ${SITE.phoneDisplay}, email ${SITE.email}`,
    `- Idiomas: ${SITE.languages.join(", ")}`,
    `- Facturación: ${SITE.legalName}, NIF ${SITE.taxId}`,
    "",
    "## Precios de partida",
    ...PACKS.map((p) => `- ${p.name}: ${p.price}. ${p.for}`),
    ...SERVICES.map((s) => `- ${s.name}: ${s.price}`),
    "",
    "## Servicios",
    ...SERVICES.map((s) => `- [${s.name}](${u}/servicios/${s.slug}): ${s.seoDescription}`),
    "",
    "## Por tipo de negocio",
    ...SOLUTIONS.map((s) => `- [${s.short}](${u}/soluciones/${s.slug}): ${s.seoDescription}`),
    "",
    "## Clientes en producción",
    ...CASES.map((c) => `- [${c.client}](${c.url}): ${c.sector}, ${c.place}. ${c.summary}`),
    "",
    "## Guías",
    ...GUIDES.map((g) => `- [${g.title}](${u}/guias/${g.slug}): ${g.description}`),
    "",
    "## Preguntas frecuentes",
    ...FAQ.map((f) => `- ${f.q} ${f.a}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
