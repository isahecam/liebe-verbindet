import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://liebe-verbindet.vercel.app",
  base: "/",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});
