import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://salsabil.io',
  integrations: [tailwind(), react()],
  content: {
    collections: {
      blog: {
        path: 'src/content/blog',
      },
    },
  },
});