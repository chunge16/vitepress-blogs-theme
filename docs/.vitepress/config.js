import { defineConfig } from 'vitepress'
import {processData} from "../../src/config/index.js";
const pkg = require('../../package.json');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: 'VitePress Blog',
  description: '一个 VitePress 博客主题',
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
    nav: [
      {
        text: 'Guide',
        link: '/guide/what-is-vitepress-blog',
        activeMatch: '/guide/',
      },
      {
        text: 'Reference',
        link: '/reference/config',
        activeMatch: '/reference/',
      },
      {
        text: 'Examples',
        items: [
          {
            text: 'Markdown',
            link: '/markdown-examples',
          },
          {
            text: 'api-examples',
            link: '/api-examples',
          },
        ],
      },
      {
        text: 'Blog',
        activeMatch: '/blog/',
        items: [
          {
            text: 'Blog Home',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          // {
          //   text: 'RSS Feed',
          //   link: '/blog/feed.rss',
          // },
        ],
      },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/chunge16/vitepress-blogs-theme/blob/main/CHANGELOG.md',
          },
        ],
      },
    ],

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference(),
    },

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
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
})


function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        {
          text: 'What is VitePress Blog?',
          link: '/guide/what-is-vitepress-blog',
        },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Roadmap', link: '/guide/roadmap' },
        { text: 'Credits', link: '/guide/credits' },
      ],
    },
    {
      text: 'Front Matter',
      collapsed: false,
      items: [
        { text: 'Post Front Matter', link: '/guide/frontmatter-post' },
        { text: 'Author Front Matter', link: '/guide/frontmatter-author' },
      ],
    },
    {
      text: 'Config & API Reference',
      link: '/reference/config',
    },
  ]
}

function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: '/reference/config' },
        { text: 'Tailwind', link: '/reference/tailwind' },
        { text: 'Icons', link: '/reference/icons' },
      ],
    },
  ]
}
