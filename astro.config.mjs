// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: 'swaaax0t',
      dataset: 'production',
      useCdn: true,
      studioBasePath: "/admin",
      // Remove this prerender config from Sanity integration
    })
  ],
  output: 'server',
  adapter: netlify(),
  devToolbar: {
    enabled: false
  },
  image: {
    remotePatterns: [{}] // Simplified to allow all images
  }
});