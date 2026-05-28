import { chromium } from "playwright";
const browser = await chromium.launch();
// Navegador en inglés → debe detectar EN
const ctxEN = await browser.newContext({ locale: "en-US", viewport: { width: 1440, height: 900 } });
const pEN = await ctxEN.newPage();
await pEN.goto("https://www.astronexo.com/", { waitUntil: "networkidle", timeout: 60000 });
await pEN.waitForTimeout(2500);
const h1EN = (await pEN.locator("h1").first().innerText()).replace(/\n/g," ").slice(0,80);
const htmlLang = await pEN.getAttribute("html", "lang");
console.log("[EN browser] html lang:", htmlLang);
console.log("[EN browser] H1:", h1EN);
await ctxEN.close();
// Navegador en español → debe detectar ES
const ctxES = await browser.newContext({ locale: "es-ES", viewport: { width: 1440, height: 900 } });
const pES = await ctxES.newPage();
await pES.goto("https://www.astronexo.com/", { waitUntil: "networkidle", timeout: 60000 });
await pES.waitForTimeout(2500);
const h1ES = (await pES.locator("h1").first().innerText()).replace(/\n/g," ").slice(0,80);
console.log("[ES browser] H1:", h1ES);
await ctxES.close();
await browser.close();
