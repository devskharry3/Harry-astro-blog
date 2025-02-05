// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sanity from '@sanity/astro';
import node from '@astrojs/node';

import netlify, { remotePatternToRegex } from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sanity({
    projectId: 'swaaax0t',
    dataset: 'production',
    useCdn: true, //it was set to true from false because it's not a static page
    studioBasePath: "/admin",
  })],

  output: 'server', 
  devToolbar:{
    enabled: false
  },
  adapter: netlify(),
  
  image: {
      remotePatterns: [{protocol: "http"}, {protocol: "https"}]
    }
});