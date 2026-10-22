import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { pageDates } from './src/data/dates.mjs';

export default defineConfig({
  site: 'https://fichanatural.com.br',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // lastmod = último commit que mudou o arquivo da página (não a data da publicação do site).
      serialize(item) {
        const { modified } = pageDates(new URL(item.url).pathname);
        return { ...item, lastmod: modified };
      },
    }),
  ],
});
