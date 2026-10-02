import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const outreach = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/outreach' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { outreach };
