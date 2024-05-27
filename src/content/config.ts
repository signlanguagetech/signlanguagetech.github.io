import { defineCollection, z } from 'astro:content';

const videoCollectionSchemaBase = z.object({
    title: z.string(),
    description: z.string(),
    speaker: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    thumbnail: z.string(),
    alt: z.string().optional()
  });

export type VideoCollectionSchemaBase = typeof videoCollectionSchemaBase;

const vlogCollection = defineCollection({
  type: 'content',
  schema: videoCollectionSchemaBase,
});

const talkCollection = defineCollection({
  type: 'content',
  schema: videoCollectionSchemaBase,
});

export const collections = {
  vlogs: vlogCollection,
  talks: talkCollection,
};
