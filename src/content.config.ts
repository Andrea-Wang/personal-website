import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const novel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/novel' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['世界观', '人物', '地理', '历史', '势力', '其他']).default('其他'),
    order: z.number().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { novel };
