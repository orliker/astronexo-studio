/**
 * Datos del estudio en un solo sitio. Cambia aquí el dominio, el número o el
 * email y se propaga a metadatos, sitemap, CTAs y datos estructurados.
 */
export const SITE = {
  name: "AstroNexo Studio",
  founder: "Alex",
  fullName: "Alexander Ruiz",
  // Facturo como autónomo con este nombre y NIF (dato de Alex, 23-oct-2026).
  legalName: "Alexander Ruiz",
  taxId: "320 675 670",
  photo: "/alex.jpg",
  // Dominio público. Si la web pasa a astronexo.com, basta con cambiar esto
  // (o definir NEXT_PUBLIC_SITE_URL en Vercel).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://astronexo-studio.vercel.app").replace(/\/$/, ""),
  whatsappNumber: "351931056365",
  phoneDisplay: "+351 931 056 365",
  email: "alex@astronexo.com",
  city: "Oporto",
  country: "Portugal",
  github: "https://github.com/orliker",
  languages: ["Español", "Português", "English"],
};

export const DEFAULT_WA_MESSAGE =
  "Hola Alex, he visto tu web y quiero contarte un proyecto. Mi negocio es: ";

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = waLink();
