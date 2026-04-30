import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mauops.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/resume') && !page.includes('/notes'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://mauops.com/') {
          item.priority = 1.0;
        } else if (item.url.includes('/ai-solutions')) {
          item.priority = 0.9;
        } else if (item.url.includes('/salesforce-consulting') || item.url.includes('/automation-consulting') || item.url.includes('/website-design') || item.url.includes('/consulting')) {
          item.priority = 0.8;
        } else if (item.url.includes('/contact')) {
          item.priority = 0.9;
        }
        return item;
      }
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
