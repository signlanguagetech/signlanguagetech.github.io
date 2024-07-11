import type { CollectionEntry } from 'astro:content';
import type { Tag } from '../model/model';

export const getTotalTags = (blogs: readonly CollectionEntry<'blog'>[]): readonly string[] => {
  return blogs.reduce((acc, blog) => {
    return acc.concat(
      blog.data.tags!.reduce((_acc, tag) => {
        return _acc.concat(tag.toLocaleLowerCase());
      }, [] as string[])
    );
  }, [] as string[]);
};

export const countTags = (tags: readonly string[]): Tag[] => {
  const map = new Map<string, number>();
  tags.forEach((tag) => map.set(tag, (map.get(tag) || 0) + 1));
  return Array.from(map, ([tag, count]) => ({ tag, count }));
};
