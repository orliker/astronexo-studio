import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad y cookies | AstroNexo Studio",
  description:
    "Política de privacidad y uso de cookies de AstroNexo Studio. Cómo tratamos los datos que nos facilitas al contactar con nosotros.",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} />
        Volver al inicio
      </Link>

      <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Política de privacidad y cookies
      </h1>
      <p className="mt-3 text-sm text-ink-mute">
        Última actualización: mayo de 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Quiénes somos</h2>
          <p className="mt-2">
            AstroNexo Studio es un estudio digital con base en Oporto, Portugal,
            dirigido por Alex. Puedes contactarnos en{" "}
            <a className="text-ember" href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
            o por WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Qué datos recogemos</h2>
          <p className="mt-2">
            Solo recogemos los datos que nos facilitas voluntariamente al
            contactarnos (por WhatsApp, email o el enlace de tu negocio que nos
            envías para la auditoría). No vendemos ni cedemos tus datos a terceros.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Para qué los usamos</h2>
          <p className="mt-2">
            Usamos tus datos únicamente para responderte, preparar tu auditoría o
            propuesta y dar seguimiento comercial. No los usamos para nada más sin
            tu consentimiento.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Cookies</h2>
          <p className="mt-2">
            Esta web es estática y no utiliza cookies de seguimiento ni publicidad.
            Si en el futuro añadimos analítica, lo indicaremos aquí y pediremos tu
            consentimiento cuando sea necesario.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ink">Tus derechos</h2>
          <p className="mt-2">
            Puedes solicitar en cualquier momento acceder, rectificar o eliminar tus
            datos escribiéndonos a{" "}
            <a className="text-ember" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            Conforme al RGPD (UE), atenderemos tu solicitud lo antes posible.
          </p>
        </section>
      </div>
    </main>
  );
}
