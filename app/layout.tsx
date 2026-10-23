import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { RevealObserver } from "@/components/reveal-observer";
import { SITE } from "@/lib/site";
import { JsonLd, organizationSchema } from "@/lib/schema";

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

const DESCRIPTION =
  "Diseño y desarrollo de webs premium, aplicaciones a medida, apps, automatizaciones e inteligencia artificial para negocios. Estudio en Oporto, trato directo con Alex y precio cerrado.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "AstroNexo Studio | Webs, apps y automatizaciones a medida",
    template: "%s | AstroNexo Studio",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: SITE.name,
    title: "AstroNexo Studio | Webs, apps y automatizaciones a medida",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroNexo Studio | Webs, apps y automatizaciones a medida",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${sans.variable} ${accent.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Activa las animaciones de entrada solo si hay JS (si no, todo visible). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-void"
        >
          Saltar al contenido
        </a>
        <JsonLd data={organizationSchema()} />
        <SmoothScroll>{children}</SmoothScroll>
        <RevealObserver />
      </body>
    </html>
  );
}
