import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    speaker: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    thumbnail: z.string(),
    alt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })
});

const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    ytShortEmbeddedLink: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
    alt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  glossary: glossaryCollection
};
