// Avisa a Bing, Yandex y demás buscadores de IndexNow de que hay páginas
// nuevas o cambiadas. Google no usa IndexNow: allí se envía el sitemap en
// Search Console.
// uso: node scripts/indexnow.mjs [https://dominio]   (lee las URLs del sitemap publicado)
const KEY = "b734106c36a4cb5fbd138b45d4da33f4"; // public/<KEY>.txt
const site = (process.argv[2] ?? "https://astronexo-studio.vercel.app").replace(/\/$/, "");

const xml = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).host, key: KEY, keyLocation: `${site}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} (${urlList.length} URLs)`);
