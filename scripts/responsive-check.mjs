import { chromium } from "playwright";

const URL = process.argv[2] || "https://www.astronexo.com/";
const OUT = "C:/Users/orlai/OneDrive/Desktop/nuevo portafolio/scripts/shots";
import { mkdirSync } from "fs";
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const issues = [];
  page.on("console", (m) => { if (m.type() === "error") issues.push("console: " + m.text().slice(0,120)); });
  await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  // detectar overflow horizontal (rompe el responsive)
  const overflow = await page.evaluate(() => {
    const de = document.documentElement;
    return { scrollW: de.scrollWidth, clientW: de.clientWidth, overflowsX: de.scrollWidth > de.clientWidth + 2 };
  });
  await page.screenshot({ path: `${OUT}/${vp.name}.png`, fullPage: true });
  console.log(`[${vp.name}] ${vp.width}px -> overflowX: ${overflow.overflowsX} (scroll ${overflow.scrollW} vs client ${overflow.clientW}); errores consola: ${issues.length}`);
  issues.slice(0,3).forEach(i => console.log("   " + i));
  await ctx.close();
}
await browser.close();
console.log("Capturas en scripts/shots/");
