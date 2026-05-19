# AstroNexo Studio — Web portfolio

Web portfolio comercial premium. Next.js + Tailwind + Framer Motion, con
hero cinematic de vídeo sticky-scroll.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
```

## Estructura

```
app/
  layout.tsx          Metadata SEO + Open Graph + fuentes + scroll suave
  page.tsx            Ensambla todas las secciones
  globals.css         Sistema de diseño (paleta cosmos, tokens, utilidades)
components/
  hero-cinematic.tsx  Hero con vídeo sticky (encoge a panel al hacer scroll)
  cosmos-backdrop.tsx Fondo de estrellas en canvas + nebulosas
  site-nav.tsx        Navbar flotante con blur al hacer scroll
  smooth-scroll.tsx   Lenis (se desactiva con prefers-reduced-motion)
  sections/           Una sección por archivo
lib/
  site.ts             Número de WhatsApp, email y mensaje (edítalo aquí)
public/videos/
  astronexo-cinematic.mp4   Vídeo protagonista
  hero-poster.svg           Poster/fallback del vídeo
```

## Personalización rápida

- **WhatsApp / email:** edita `lib/site.ts` (`whatsappNumber`, `email`,
  `whatsappMessage`). Se propaga a todos los CTAs.
- **Vídeo:** sustituye `public/videos/astronexo-cinematic.mp4`.
- **Proyectos:** edita el array `PROJECTS` en
  `components/sections/projects.tsx`.

## Cómo funciona el vídeo

`<video autoPlay muted loop playsInline preload="metadata">` con
`poster` SVG ligero como fallback. El scroll **no** controla el tiempo
del vídeo (eso es frágil): el vídeo reproduce solo en loop y lo que se
anima con el scroll es su escala, radio, blur y los overlays —
estable y barato. Con `prefers-reduced-motion` se muestra una versión
estática sin transformaciones.

## Subir a GitHub

```bash
git add -A
git commit -m "AstroNexo Studio portfolio"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

## Desplegar en Vercel

1. Importa el repo en [vercel.com/new](https://vercel.com/new).
2. Framework: **Next.js** (autodetectado). Sin variables de entorno.
3. Deploy. El `.mp4` se sirve desde `public/` por el CDN de Vercel.
