import type { ContentEntryMap } from "astro:content";

export type Pixel = `${string}px`;

export interface Tag {
  readonly tag: string;
  readonly count: number;
}

export type ContentKeys = keyof ContentEntryMap;
