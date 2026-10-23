# AstroNexo Studio

Web de servicios de AstroNexo Studio (Alex, Oporto). Next.js 16 + Tailwind 4,
publicada en Vercel (proyecto `astronexo-studio`, despliegue automático al
hacer push a `master`).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Dominio, WhatsApp, email, GitHub | `lib/site.ts` (o `NEXT_PUBLIC_SITE_URL` en Vercel) |
| Servicios, casos, laboratorio, precios, FAQ | `lib/content.ts` |
| Datos estructurados (Schema.org) | `lib/schema.tsx` |
| Secciones de la home | `components/home/*` |
| Página de cada servicio | `app/servicios/[slug]/page.tsx` (una por cada entrada de `SERVICES`) |
| Capturas del portafolio | `node scripts/capture-work.mjs` (guarda en `public/work`) |

Añadir un servicio en `lib/content.ts` crea su página, su entrada en el
sitemap, su enlace en el pie y su `Service` en el JSON-LD.

## Reglas de contenido

- Solo datos comprobables: nada de métricas inventadas ni testimonios que no
  hayan escrito los clientes. Si llega una reseña real, se añade con su permiso.
- Sin raya larga (U+2014) en ningún texto.

## Rendimiento

Sin librerías de animación: las entradas por scroll son CSS +
`components/reveal-observer.tsx`. Sin JS todo se ve igual (el estado oculto
solo existe bajo `html.js`). En móvil el fondo de estrellas queda estático y
Lenis se desactiva.
