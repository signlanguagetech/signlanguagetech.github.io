import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const videos = await getCollection('video');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: videos.map((post) => ({
			...post.data,
			link: `/video/${post.slug}/`,
		})),
	});
}
