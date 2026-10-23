import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Buscadores y asistentes de IA pueden leerlo todo: que ChatGPT, Claude o
// Perplexity citen la web también trae clientes.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
