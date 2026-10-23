// Regresión tras el juicio: overflow, primer pantallazo, carrusel y Laboratorio plegado.
// uso: node scripts/verificar.mjs [url] [carpeta_capturas]
import { chromium } from "playwright";
import { existsSync } from "fs";

const url = process.argv[2] ?? "http://localhost:3177/";
const out = process.argv[3] ?? ".";
const LOCAL = "C:/Users/orlai/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe";
const browser = await chromium.launch(existsSync(LOCAL) ? { executablePath: LOCAL } : {});
let fallos = 0;
const check = (ok, msg) => {
  if (!ok) fallos++;
  console.log(`${ok ? "OK " : "MAL"} ${msg}`);
};

for (const [w, h] of [[1920, 965], [1536, 864], [1440, 900], [834, 1112], [390, 844], [320, 568]]) {
  const mobile = w < 768;
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: mobile, hasTouch: mobile });
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "networkidle" });
  await p.screenshot({ path: `${out}/v-${w}.png` });

  const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  check(ov <= 0, `${w}: sin desborde lateral (${ov})`);

  if (w >= 1440) {
    const r = await p.evaluate(() => {
      const dl = document.querySelector("#top dl").getBoundingClientRect();
      const chips = document.querySelector("#top ul").getBoundingClientRect();
      return { dl: Math.round(dl.bottom), chips: Math.round(chips.bottom) };
    });
    check(r.chips <= h, `${w}: accesos por necesidad dentro del primer pantallazo (${r.chips}/${h})`);
    check(r.dl <= h, `${w}: cifras dentro del primer pantallazo (${r.dl}/${h})`);
  }

  // Carrusel: un arrastre cambia la carta y nada se desplaza de lado.
  const deck = p.locator('[aria-roledescription="carrusel"]');
  await deck.evaluate((e) => e.scrollIntoView({ block: "center" }));
  const host = () => p.evaluate(() => document.querySelector('[aria-live="polite"] span')?.textContent);
  const antes = await host();
  const b = await deck.boundingBox();
  check(b.x + b.width <= w, `${w}: el carrusel cabe en la pantalla (${Math.round(b.x + b.width)}/${w})`);
  const y = b.y + b.height * 0.7;
  await p.mouse.move(b.x + b.width * 0.75, y);
  await p.mouse.down();
  for (let i = 1; i <= 10; i++) await p.mouse.move(b.x + b.width * (0.75 - i * 0.05), y);
  await p.mouse.up();
  await p.waitForTimeout(800);
  const despues = await host();
  const lado = await p.evaluate(() => [document.querySelector("#top").scrollLeft, document.body.scrollLeft, scrollX]);
  check(antes !== despues, `${w}: el arrastre gira la pila (${antes} -> ${despues})`);
  check(lado.every((v) => v === 0), `${w}: nada se desplaza de lado (${lado})`);

  // Laboratorio: 3 tarjetas en móvil, 6 tras el botón; 6 siempre en escritorio.
  const visibles = () =>
    p.evaluate(() => [...document.querySelectorAll("#laboratorio .grid > *")].filter((e) => e.offsetParent).length);
  if (mobile) {
    check((await visibles()) === 3, `${w}: Laboratorio plegado con 3 proyectos`);
    await p.getByRole("button", { name: "Ver los 6 proyectos y las herramientas" }).click();
    check((await visibles()) >= 6, `${w}: el botón despliega el resto`);
  } else {
    check((await visibles()) >= 6, `${w}: Laboratorio completo`);
  }

  // Orden de secciones.
  const orden = await p.evaluate(() => [...document.querySelectorAll("main > section")].map((s) => s.id).join(","));
  check(orden.indexOf("precios") < orden.indexOf("laboratorio"), `${w}: Precios va antes que el Laboratorio`);
  await ctx.close();
}
await browser.close();
console.log(fallos ? `${fallos} fallos` : "todo bien");
process.exit(fallos ? 1 : 0);
