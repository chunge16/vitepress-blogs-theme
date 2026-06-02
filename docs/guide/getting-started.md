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

## Before You Start

`VitePress Blog` works well in two common situations:

- You are starting a brand-new VitePress blog project
- You already have a VitePress site and want to add blog functionality to it

If you just want to explore the generated structure first, try the template in [StackBlitz](https://stackblitz.com/~/github.com/chunge16/vitepress-blogs-theme-template).

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- A terminal to run the VitePress CLI
- A text editor with [Markdown](https://en.wikipedia.org/wiki/Markdown) support
- [VS Code](https://code.visualstudio.com/) with the official [Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) is recommended

## Install the Packages

`VitePress Blog` can be used in a brand-new project or added to an existing VitePress site.

The theme extends the [default VitePress theme](https://vitepress.dev/guide/custom-theme#extending-the-default-theme), so the setup stays familiar and you can keep customizing `docs/.vitepress/theme/index.js` as your site grows.

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

`VitePress Blog` includes a setup wizard that scaffolds the basic blog structure for you. After installing the package, run:

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

The wizard walks you through the core setup values for your site:

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

After that, it will:

- Generates the blog pages, author pages, and `.vitepress` theme files in the target directory
- Creates a new `package.json` when the project does not already have one
- Adds `docs:dev`, `docs:build`, and `docs:preview` scripts to an existing `package.json` when you choose that option
- Appends the required VitePress cache and build output entries to `.gitignore`
- Safely writes text values such as titles and descriptions into the generated config files

If you run the wizard inside an existing project, your current `package.json` is preserved and only the missing VitePress blog scripts are added.

## What You Get

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

This gives you a usable VitePress site with a blog section already wired in.

## File Structure

The generated structure is intentionally simple:

- `docs` is the root of your VitePress site
- `.vitepress` contains site config and theme entry files
- `blog/posts` is where your post content lives
- `blog/authors` stores author profile pages
- `blog/index.md`, `tags.md`, and `archives.md` are the built-in blog landing pages

### Config File

Most theme-specific options live in `.vitepress/config.js` under `themeConfig.blog`.

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

`VitePress Blog` extends the default VitePress theme, so `.vitepress/theme/index.js` is still your place to add custom components, styles, or app enhancements.

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

If those scripts already exist, the wizard leaves them unchanged.

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

Once the site is running, the usual next steps are:

- update the site title and description
- replace the example author content
- add your first post in `docs/blog/posts`
- review [VPB Theme Config](/reference/config) for paths, icons, and date formatting
