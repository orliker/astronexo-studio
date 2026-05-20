import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const url = process.env.A11Y_URL ?? "http://localhost:3000";
const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 950 },
];

const browser = await chromium.launch();
const violations = [];

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle" });

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  for (const violation of results.violations) {
    const impact = violation.impact ?? "unknown";
    if (["serious", "critical"].includes(impact)) {
      violations.push({
        viewport: viewport.name,
        id: violation.id,
        impact,
        help: violation.help,
        nodes: violation.nodes.length,
      });
    }
  }

  await context.close();
}

await browser.close();

if (violations.length > 0) {
  console.table(violations);
  process.exit(1);
}

console.log(`Axe passed for ${url} on ${viewports.map((v) => v.name).join(", ")}.`);
