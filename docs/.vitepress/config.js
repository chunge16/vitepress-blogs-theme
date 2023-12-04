import { defineConfig } from 'vitepress';
import {processData} from "../../src/config/index.js";
import enConfig from "./locales/en.js";
import zhConfig from "./locales/zh.js";
import { base } from "./meta.js";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    blog: {
      title: 'My AI Written Blog',
      description: 'All these articles were written by AI!',
      defaultAuthor: 'AI Writer',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/chunge16/vitepress-blogs-theme',
      },
    ],

  },
  vite: {
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },
  locales: {
    root: { label: 'English', lang: 'en-US', ...enConfig },
    zh: { label: '简体中文', lang: 'zh-CN', ...zhConfig },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});



