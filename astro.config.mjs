import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({
      // usa tu tailwind.config.js
      config: { applyBaseStyles: true }
    })
  ],
});
