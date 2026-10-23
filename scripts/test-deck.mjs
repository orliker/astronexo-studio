// Prueba el carrusel del hero: swipe táctil, flechas y overflow.
// uso: node scripts/test-deck.mjs [url]
import { chromium } from "playwright";
import { existsSync } from "fs";

const url = process.argv[2] ?? "http://localhost:3123/";
const out = process.argv[3] ?? ".";
const LOCAL = "C:/Users/orlai/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe";
const browser = await chromium.launch(existsSync(LOCAL) ? { executablePath: LOCAL } : {});

const host = (p) =>
  p.evaluate(() => document.querySelector('[aria-live="polite"] span')?.textContent);

for (const v of [
  { name: "390", width: 390, height: 844, mobile: true },
  { name: "1920", width: 1920, height: 965, mobile: false },
]) {
  const ctx = await browser.newContext({
    viewport: { width: v.width, height: v.height },
    isMobile: v.mobile,
    hasTouch: v.mobile,
  });
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "networkidle" });
  const deck = p.locator('[aria-roledescription="carrusel"]');
  await deck.scrollIntoViewIfNeeded();
  const before = await host(p);

  // Arrastre horizontal hacia la izquierda con eventos de puntero.
  const b = await deck.boundingBox();
  const y = b.y + b.height * 0.7;
  await p.mouse.move(b.x + b.width * 0.75, y);
  await p.mouse.down();
  for (let i = 1; i <= 10; i++) await p.mouse.move(b.x + b.width * (0.75 - i * 0.05), y);
  await p.mouse.up();
  await p.waitForTimeout(800);
  const afterSwipe = await host(p);

  await p.getByRole("button", { name: "Proyecto anterior" }).click();
  await p.waitForTimeout(800);
  const afterPrev = await host(p);

  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  await p.screenshot({ path: `${out}/deck-${v.name}.png` });
  console.log(v.name, { before, afterSwipe, afterPrev, overflow });
  await ctx.close();
}
await browser.close();
