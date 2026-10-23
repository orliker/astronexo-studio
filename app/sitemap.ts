import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/content";
import { SOLUTIONS } from "@/lib/solutions";
import { GUIDES } from "@/lib/guides";

// Fecha del último cambio de contenido: con `new Date()` cada despliegue
// diría a Google que todo cambió y la señal pierde valor.
const UPDATED = new Date("2026-10-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, lastModified = UPDATED) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    priority,
  });
  return [
    page("", 1),
    page("/soluciones", 0.8),
    ...SOLUTIONS.map((s) => page(`/soluciones/${s.slug}`, 0.9)),
    ...SERVICES.map((s) => page(`/servicios/${s.slug}`, 0.8)),
    page("/guias", 0.6),
    ...GUIDES.map((g) => page(`/guias/${g.slug}`, 0.7, new Date(g.updated))),
    page("/privacidad", 0.1),
  ];
}
