import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LangProvider } from "@/components/lang-provider";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const accent = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const SITE_URL = "https://www.astronexo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AstroNexo Studio | Webs premium, estrategia y automatización",
  description:
    "Estudio digital con base en Oporto. Diseñamos activos digitales premium para negocios que necesitan verse más serios, explicar mejor su oferta y convertir visitas en oportunidades reales. Servicio en Portugal, España, Reino Unido y EE. UU.",
  keywords: [
    "estudio diseño web Oporto",
    "diseño web Portugal",
    "web premium negocio local",
    "automatización WhatsApp IA",
    "bot WhatsApp negocio",
    "automatización de facturas",
    "menú QR restaurante",
    "landing page premium",
    "página web restaurante",
    "página web clínica estética",
    "página web barbería",
    "SEO local Google Maps",
    "desarrollo web Next.js",
    "embudo WhatsApp",
    "auditoría presencia digital",
    "AstroNexo Studio",
  ],
  authors: [{ name: "AstroNexo Studio" }],
  creator: "AstroNexo Studio",
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "AstroNexo Studio",
    title: "AstroNexo Studio | Activos digitales premium para negocios serios",
    description:
      "Webs premium, estrategia visual, WhatsApp y automatización para convertir una presencia floja en un activo de confianza.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroNexo Studio | Activos digitales premium",
    description:
      "Pide una auditoría: envíanos tu Instagram o web y te decimos qué está frenando tu presencia digital.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${sans.variable} ${accent.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "AstroNexo Studio",
              "image": "https://www.astronexo.com/icon.svg",
              "@id": "https://www.astronexo.com/#organization",
              "url": "https://www.astronexo.com",
              "telephone": "+351931056365",
              "email": "hola@astronexostudio.com",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Oporto",
                "addressCountry": "PT"
              },
              "areaServed": [
                { "@type": "Country", "name": "Portugal" },
                { "@type": "Country", "name": "España" },
                { "@type": "Country", "name": "Reino Unido" },
                { "@type": "Country", "name": "Estados Unidos" }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.157944,
                "longitude": -8.629105
              },
              "description": "Estudio digital con base en Oporto. Desarrollo web premium, automatización de WhatsApp con IA, automatización de facturas y consultoría digital para escalar la presencia de tu negocio en piloto automático. Servicio internacional.",
              "founder": { "@type": "Person", "name": "Alex" },
              "knowsLanguage": ["es", "pt", "en"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios AstroNexo Studio",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatización de WhatsApp con IA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desarrollo web premium y menús QR" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatización de facturas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO local y Google Maps" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Campañas y embudos de captación" } }
                ]
              }
            }),
          }}
        />
      </head>
      <body>
        <LangProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LangProvider>
      </body>
    </html>
  );
}
