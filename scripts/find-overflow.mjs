import { chromium } from "playwright";
const URL = "https://www.astronexo.com/";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);
const culprits = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const out = [];
  document.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 && r.width > 50) {
      out.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className || "").toString().slice(0, 70),
        right: Math.round(r.right),
        width: Math.round(r.width),
      });
    }
  });
  // los más a la derecha primero, dedup por clase
  const seen = new Set();
  return out.sort((a,b)=>b.right-a.right).filter(c=>{const k=c.cls;if(seen.has(k))return false;seen.add(k);return true;}).slice(0, 12);
});
culprits.forEach(c => console.log(`right=${c.right} w=${c.width} <${c.tag}> ${c.cls}`));
await browser.close();
