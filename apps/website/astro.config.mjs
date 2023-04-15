import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: '../../dist/apps/website',
  integrations: [react(), mdx(), sitemap(), tailwind()],
});
