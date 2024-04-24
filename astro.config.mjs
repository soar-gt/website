import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      transformer: 'lightningcss'
    }
  },
  integrations: [icon()]
});