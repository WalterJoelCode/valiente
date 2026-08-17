import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE ?? "https://walterjoelcode.github.io";
const base = process.env.BASE_PATH ?? "/valiente";

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
