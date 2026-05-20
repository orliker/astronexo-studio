import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

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

const SITE_URL = "https://astronexo-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AstroNexo Studio | Webs premium, estrategia y automatización",
  description:
    "Diseñamos activos digitales premium para negocios que necesitan verse más serios, explicar mejor su oferta y convertir visitas en oportunidades reales.",
  keywords: [
    "estudio diseño web",
    "web premium",
    "landing page",
    "menú digital restaurante",
    "página web negocio local",
    "experiencias digitales",
    "automatizaciones simples",
    "embudo WhatsApp",
    "auditoría Instagram",
    "presencia digital premium",
    "SEO local",
    "desarrollo web Next.js",
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
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
