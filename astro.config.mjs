import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://openfootmanager.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'es', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    tailwind(),
    mdx(),
    icon(),
  ],
});
