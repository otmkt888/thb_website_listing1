import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://otmkt888.github.io',
  base: '/thb_website_listing1',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/go/'),
    }),
  ],
  output: 'static',
  trailingSlash: 'always',
});
