import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: () =>
    z.object({
      name: z.string(),
      collection: z.string(),
      category: z.string(),
      material: z.string(),
      shortDescription: z.string(),
      order: z.number().int().nonnegative().default(999),
    }),
});

export const collections = { products };
