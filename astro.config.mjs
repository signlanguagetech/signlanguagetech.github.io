import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import alpinejs from "@astrojs/alpinejs";
const port = 4300;
const localHostUrl = `http://localhost:${port}`;
const liveUrl = 'https://signlanguagetech.com';
const isProd = import.meta.env.PROD;


// https://astro.build/config
export default defineConfig({
  server: {
    port
  },
  site: isProd ? liveUrl : localHostUrl,
  integrations: [mdx(), sitemap(), alpinejs()]
});