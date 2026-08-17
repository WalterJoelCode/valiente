import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE ?? "https://freddyvaliente.github.io",
  base: "/freddyvaliente",
  integrations: [sitemap()],
});
