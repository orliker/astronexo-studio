import { chromium } from "playwright";
const OUT = "C:/Users/orlai/OneDrive/Desktop/nuevo portafolio/scripts/shots";
import { mkdirSync } from "fs";
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
// móvil: solo el primer viewport (no fullpage, para ver la primera impresión)
for (const [name, w, h] of [["m-hero",390,844],["d-hero",1440,900]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const p = await ctx.newPage();
  await p.goto("https://www.astronexo.com/", { waitUntil: "networkidle", timeout: 60000 });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `${OUT}/final-${name}.png` });
  await ctx.close();
}
await browser.close();
console.log("ok");
