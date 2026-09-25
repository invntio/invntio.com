import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const legal = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        updated: z.coerce.date(),
    }),
});

export const collections = { legal };
