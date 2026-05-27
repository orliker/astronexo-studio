import { ImageResponse } from "next/og";

/**
 * Tarjeta social (OG image) generada dinámicamente.
 * Es lo que se ve al compartir astronexo.com en WhatsApp, LinkedIn, etc.
 * Mantiene la identidad cosmos: fondo profundo + acento ámbar.
 */

export const runtime = "edge";
export const alt = "AstroNexo Studio — Sistemas digitales premium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(120% 120% at 80% 10%, #14101f 0%, #05060a 55%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marca arriba */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#0d1019",
              border: "1px solid #1b2030",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ff9d57",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div
            style={{
              color: "#f4f5fb",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            ASTRONEXO STUDIO
          </div>
        </div>

        {/* Titular */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#f4f5fb",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Tu WhatsApp puede vender{" "}
            <span style={{ color: "#ff9d57" }}>mientras tú trabajas</span>.
          </div>
          <div style={{ color: "#aab0c4", fontSize: 30, maxWidth: 900 }}>
            Webs premium · WhatsApp IA · Automatización de facturas
          </div>
        </div>

        {/* Pie */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#81879a",
            fontSize: 24,
          }}
        >
          <span>astronexo.com</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 99,
                background: "#38e0c9",
              }}
            />
            Estudio digital · Oporto, Portugal
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
