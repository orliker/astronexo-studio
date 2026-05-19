import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://astronexostudio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AstroNexo Studio | Webs premium y automatizaciones en 48-72h",
  description:
    "Creamos webs premium, landing pages, embudos de WhatsApp y automatizaciones simples para negocios que quieren verse más profesionales y convertir visitas en contactos.",
  keywords: [
    "estudio diseño web",
    "web premium",
    "landing page",
    "menú digital restaurante",
    "página web negocio local",
    "experiencias digitales",
    "automatizaciones simples",
    "embudo WhatsApp",
    "desarrollo web Next.js",
    "AstroNexo Studio",
  ],
  authors: [{ name: "AstroNexo Studio" }],
  creator: "AstroNexo Studio",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "AstroNexo Studio",
    title: "AstroNexo Studio | Webs premium y automatizaciones en 48-72h",
    description:
      "Webs visuales, contacto por WhatsApp y propuestas rápidas para negocios que quieren verse más profesionales.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroNexo Studio | Webs premium y automatizaciones en 48-72h",
    description:
      "Pide una propuesta rápida: envíanos tu Instagram o web y te decimos qué podemos crear.",
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
      className={`${display.variable} ${sans.variable} antialiased`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
