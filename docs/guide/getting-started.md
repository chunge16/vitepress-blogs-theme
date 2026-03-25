# Getting Started

<p align="left">
    <a target="_blank" href="https://www.npmjs.com/package/@chunge16/vitepress-blogs-theme">
        <img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/%40chunge16%2Fvitepress-blogs-theme?logo=npm">
    </a>
    <a target="_blank" href="https://github.com/chunge16/vitepress-blogs-theme/blob/main/LICENSE">
        <img style="display:inline-block;margin:0.2em;" alt="LICENSE" src="https://img.shields.io/github/license/chunge16/vitepress-blogs-theme?logo=github">
    </a>
     <a target="_blank" href="https://www.npmjs.com/package/@chunge16/vitepress-blogs-theme">
        <img style="display:inline-block;margin:0.2em;" alt="Downloads" src="https://img.shields.io/npm/dm/%40chunge16%2Fvitepress-blogs-theme?logo=npm&label=vitepress-blogs-theme">
    </a>
</p>

## Try It Online

Try `VitePress Blog` directly in your browser on [StackBlitz](https://stackblitz.com/~/github.com/chunge16/vitepress-blogs-theme-template).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- A terminal to run the VitePress CLI
- A text editor with [Markdown](https://en.wikipedia.org/wiki/Markdown) support
- [VS Code](https://code.visualstudio.com/) with the official [Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) is recommended

`VitePress Blog` can be used in a brand-new project or added to an existing VitePress site.

The theme is built on top of [Extending the Default Theme](https://vitepress.dev/guide/custom-theme#extending-the-default-theme), so you can keep customizing `docs/.vitepress/theme/index.js` as your site grows.

Install the required packages first:

::: code-group

```sh [npm]
$ npm install -D vitepress @chunge16/vitepress-blogs-theme tailwindcss @tailwindcss/vite
```

```sh [pnpm]
$ pnpm add -D vitepress @chunge16/vitepress-blogs-theme tailwindcss @tailwindcss/vite
```

```sh [yarn]
$ yarn add -D vitepress @chunge16/vitepress-blogs-theme tailwindcss @tailwindcss/vite
```

:::

### Setup Wizard

`VitePress Blog` includes a setup wizard that can scaffold the basic blog structure for you. After installing the package, run:

::: code-group

```sh [npm]
$ npx vitepress-blog-init
```

```sh [pnpm]
$ pnpm vitepress-blog-init
```

```sh [yarn]
$ yarn vitepress-blog-init
```

:::

The wizard will walk you through a few simple prompts:

```txt
┌   VitePress Blog Theme Init
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Blog
│
◇  Site description:
│  A VitePress Blog with Theme
│
◇  Site base URL:
│  /
│
◇  Choose site language:
│  简体中文 (zh-CN)
│
◇  Default author name:
│  Blog Author
│
◇  Enable Giscus comments?
│  No
│
◇  Add VitePress npm scripts to package.json?
│  yes
│
◇  Date format:
│  yyyy/MM/dd (e.g., 2024/01/26)
│
└  Done! Now run:

  pnpm install
  pnpm run docs:dev
```

## File Structure

If you initialize the blog in `./docs`, the generated structure will look like this:

```txt
├── docs
│   ├── .vitepress
│   │   ├── theme
│   │   │   └── index.js
│   │   └── config.js
│   ├── blog
│   │   ├── authors
│   │   ├── posts
│   │   ├── archives.md
│   │   ├── index.md
│   │   └── tags.md
│   ├── api-examples.md
│   ├── index.md
│   ├── markdown-examples.md
│   └── public
└── package.json
```

The `docs` directory is the root of your VitePress site. The `.vitepress` directory contains site configuration, theme extensions, cache files, and build output.

The `blog` directory is reserved for blog content. By default, posts live in `blog/posts` and authors live in `blog/authors`.

### Config File

Configure the theme in `.vitepress/config.js` under `themeConfig.blog`.

You can find the full list of blog-specific options in [VPB Theme Config](/reference/config).

::: details .vitepress/config.js
```js
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { processData } from '@chunge16/vitepress-blogs-theme/config'
import { enUS } from 'date-fns/locale'

export default defineConfig({
  title: 'VitePress',
  description: 'Just playing around.',
  themeConfig: {
    blog: {
      path: '/blog',
      title: 'Blog',
      description: 'All these articles were written by chunge!',
      defaultAuthor: 'chunge',
      categoryIcons: {
        article: 'i-[carbon--notebook]',
        tutorial: 'i-[carbon--book]',
        document: 'i-[carbon--document]',
      },
      tagIcons: {
        github: 'i-[carbon--logo-github]',
        vue: 'i-[carbon--logo-vue]',
        'web development': 'i-[carbon--development]',
        javascript: 'i-[logos--javascript]',
        html: 'i-[logos--html-5]',
      },
      dateConfig: {
        format: 'yyyy/MM/dd',
        locale: enUS,
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme'],
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx)
  },
})
```
:::

### Theme Entry

`VitePress Blog` extends the default VitePress theme, so you can add your own components, styles, or app enhancements in `.vitepress/theme/index.js`.

::: info .vitepress/theme/index.js
```js
import { VPBTheme } from '@chunge16/vitepress-blogs-theme'

export default {
  extends: VPBTheme,
  enhanceApp({ app }) {
    // ...
  },
}
```
:::

## Run the Site

If you chose to let the setup wizard update `package.json`, it will add these scripts:

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

Start the local development server with `docs:dev`:

::: code-group

```sh [npm]
$ npm run docs:dev
```

```sh [pnpm]
$ pnpm run docs:dev
```

```sh [yarn]
$ yarn docs:dev
```

:::
