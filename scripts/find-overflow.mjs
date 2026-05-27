import { chromium } from "playwright";
const URL = process.argv[2] || "https://www.astronexo.com/";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);
const culprits = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const scrollW = document.documentElement.scrollWidth;
  const out = [];
  function clippedByAncestor(el) {
    let p = el.parentElement;
    while (p) {
      const s = getComputedStyle(p);
      if (s.overflowX === "hidden" || s.overflowX === "clip" || s.overflowX === "auto" || s.overflowX === "scroll") return true;
      p = p.parentElement;
    }
    return false;
  }
  document.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    // solo los que de verdad empujan el scroll del documento y NO están recortados
    if (r.right > vw + 1 && r.right <= scrollW + 2 && r.width > 30 && !clippedByAncestor(el)) {
      out.push({ tag: el.tagName.toLowerCase(), cls: (el.className||"").toString().slice(0,75), right: Math.round(r.right), width: Math.round(r.width) });
    }
  });
  const seen = new Set();
  return { scrollW, vw, list: out.sort((a,b)=>b.right-a.right).filter(c=>{if(seen.has(c.cls))return false;seen.add(c.cls);return true;}).slice(0,12) };
});
console.log(`scrollW=${culprits.scrollW} vw=${culprits.vw}`);
const list = culprits.list;
list.forEach(c => console.log(`right=${c.right} w=${c.width} <${c.tag}> ${c.cls}`));
await browser.close();
