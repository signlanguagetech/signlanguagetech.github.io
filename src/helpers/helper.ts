import type { CollectionEntry } from "astro:content";

import type { ContentKeys } from "../model/model";

export const sortDate = <T extends CollectionEntry<ContentKeys>>(a: T, b: T) =>
  b.data.pubDate.valueOf() - a.data.pubDate.valueOf();