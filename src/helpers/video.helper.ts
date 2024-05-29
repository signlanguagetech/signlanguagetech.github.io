import type { CollectionEntry } from 'astro:content';
import type { Tag } from '../model/model';

export const getTotalTags = (videos: CollectionEntry<'video'>[]): string[] => {
  return videos.reduce((acc, video) => {
    return acc.concat(
      video.data.tags!.reduce((_acc, tag) => {
        return _acc.concat(tag.toLocaleLowerCase());
      }, [] as string[])
    );
  }, [] as string[]);
};

export const countTags = (tags: string[]): Tag[] => {
  const map = new Map<string, number>();
  tags.forEach((tag) => map.set(tag, (map.get(tag) || 0) + 1));
  return Array.from(map, ([tag, count]) => ({ tag, count }));
};
