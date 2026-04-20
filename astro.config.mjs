import { defineConfig } from 'astro/config';

export default defineConfig({
  // Untuk development, gunakan base: '/'
  // Untuk GitHub Pages, ubah ke base: '/your-repo-name'
  site: 'https://yourusername.github.io',
  base: '/',
  trailingSlash: 'ignore'
});
