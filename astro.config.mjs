import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://openfootmanager.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'pt-pt', 'es', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    tailwind(),
    mdx(),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});