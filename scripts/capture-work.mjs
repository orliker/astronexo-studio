// Captura la primera pantalla de los proyectos reales del portafolio.
// uso: node scripts/capture-work.mjs  (deja los JPG en public/work)
import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { fileURLToPath } from "url";

const OUT = new URL("../public/work/", import.meta.url);
mkdirSync(OUT, { recursive: true });

const SITES = [
  ["circulo-consciente", "https://www.circuloconsciente.es/"],
  ["banqa", "https://banqa.es/"],
  ["bright-infinity", "https://www.brightinfinitypt.com/"],
  ["mundo-de-papel", "https://mundodepapelportugal.com/"],
];

const browser = await chromium.launch(
  process.env.CHROME ? { executablePath: process.env.CHROME } : {},
);
for (const [name, url] of SITES) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2000);
    const dismiss = page.getByRole("button", { name: /^rechazar$/i });
    if (await dismiss.count()) await dismiss.first().click().catch(() => {});
    await page.waitForTimeout(1200);
    await page.screenshot({ path: fileURLToPath(new URL(`${name}.jpg`, OUT)), type: "jpeg", quality: 82 });
    console.log("ok", name);
  } catch (e) {
    console.log("FALLO", name, e.message);
  }
  await ctx.close();
}
await browser.close();
