import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fichanatural.com.br',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
