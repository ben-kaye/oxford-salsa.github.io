import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ouss.co.uk',
  base: '/',
  integrations: [react()],
});
