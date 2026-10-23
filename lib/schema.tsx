import { SITE } from "@/lib/site";
import { SERVICES, type Service } from "@/lib/content";

const ORG_ID = `${SITE.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/icon.svg`,
        image: `${SITE.url}/opengraph-image`,
        email: SITE.email,
        telephone: `+${SITE.whatsappNumber}`,
        priceRange: "€€",
        address: { "@type": "PostalAddress", addressLocality: SITE.city, addressCountry: "PT" },
        areaServed: ["Portugal", "España", "Europa"].map((name) => ({ "@type": "Place", name })),
        knowsLanguage: ["es", "pt", "en"],
        founder: {
          "@type": "Person",
          name: SITE.fullName,
          jobTitle: "Diseñador y desarrollador",
          image: `${SITE.url}${SITE.photo}`,
        },
        taxID: SITE.taxId.replace(/\s/g, ""),
        sameAs: [SITE.github],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de AstroNexo Studio",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}/servicios/${s.slug}` },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "es",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: Service) {
  const url = `${SITE.url}/servicios/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.seoDescription,
        url,
        provider: { "@id": ORG_ID },
        areaServed: ["Portugal", "España"].map((name) => ({ "@type": "Country", name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE.url}/#servicios` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
    ],
  };
}

/** Migas de pan a partir de pares [nombre, ruta]; la ruta "" es la portada. */
export function breadcrumbSchema(items: [string, string][]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE.url}${path}`,
    })),
  };
}

/** Página por tipo de negocio: el servicio que se ofrece a ese público. */
export function solutionSchema(s: { slug: string; short: string; h1: string; seoDescription: string }) {
  const url = `${SITE.url}/soluciones/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.h1,
        description: s.seoDescription,
        audience: { "@type": "BusinessAudience", name: s.short },
        url,
        provider: { "@id": ORG_ID },
        areaServed: ["Portugal", "España"].map((name) => ({ "@type": "Country", name })),
      },
      breadcrumbSchema([
        ["Inicio", ""],
        ["Soluciones", "/soluciones"],
        [s.short, `/soluciones/${s.slug}`],
      ]),
    ],
  };
}

/** Guía escrita por Alex, firmada con su nombre real. */
export function articleSchema(g: { slug: string; title: string; description: string; published: string; updated: string }) {
  const url = `${SITE.url}/guias/${g.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: g.title,
        description: g.description,
        url,
        mainEntityOfPage: url,
        inLanguage: "es",
        datePublished: g.published,
        dateModified: g.updated,
        image: `${SITE.url}/opengraph-image`,
        author: { "@type": "Person", name: SITE.fullName, url: SITE.url, image: `${SITE.url}${SITE.photo}` },
        publisher: { "@id": ORG_ID },
      },
      breadcrumbSchema([
        ["Inicio", ""],
        ["Guías", "/guias"],
        [g.title, `/guias/${g.slug}`],
      ]),
    ],
  };
}

/** Serializa JSON-LD escapando "<" para que no pueda cerrar el <script>. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
