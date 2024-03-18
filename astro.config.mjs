import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  // redirects: {
  //   '/v/[...slug]': '/detail?a=[...slug]'
  // },
  integrations: [tailwind(),vue()]
});