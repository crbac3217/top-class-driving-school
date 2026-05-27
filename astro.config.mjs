// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crbac3217.github.io',
  base: '/top-class-driving-school',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-HK', 'zh-CN'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
