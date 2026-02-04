# Getting Started

<p align="left">
    <a target="_blank" href="https://www.npmjs.com/package/@chunge16/vitepress-blogs-theme">
        <img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/%40chunge16%2Fvitepress-blogs-theme?logo=npm">
    </a>
    <a target="_blank" href="https://github.com/chunge16/vitepress-blogs-theme/blob/main/LICENSE">
        <img style="display:inline-block;margin:0.2em;" alt="LICENSE" src="https://img.shields.io/github/license/chunge16/vitepress-blogs-theme?logo=github">
    </a>
     <a target="_blank" href="https://www.npmjs.com/package/@chunge16/vitepress-blogs-theme">
        <img style="display:inline-block;margin:0.2em;" alt="LICENSE" src="https://img.shields.io/npm/dm/%40chunge16/vitepress-blogs-theme?logo=npm&label=vitepress-blogs-theme">
    </a>
</p>

## Try It Online

You can try `VitePress Blog` directly in your browser on [StackBlitz](https://stackblitz.com/~/github.com/chunge16/vitepress-blogs-theme-template).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- Terminal for accessing VitePress via its command line interface (CLI).
- Text Editor with [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax support.
  - [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

VitePress Blog can be used on its own, or be installed into an existing project.

It is based on [Extending the Default Theme](https://vitepress.dev/guide/custom-theme#consuming-a-custom-theme), and you can add custom configurations in `docs/.vitepress/theme/index.js`.

In both cases, you need to install `vitepress` and `@chunge16/vitepress-blogs-theme`. You can install them with:

::: code-group

```sh [npm]
$ npm install -D vitepress @chunge16/vitepress-blogs-theme
```

```sh [pnpm]
$ pnpm add -D vitepress @chunge16/vitepress-blogs-theme
```

```sh [yarn]
$ yarn add -D vitepress @chunge16/vitepress-blogs-theme
```

:::

### Setup Wizard

VitePress Blog comes with a command line setup wizard to help you build a Blog folder. Once installed, launch the Wizard by running the following command:

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

You will be greeted with a few simple questions:

```
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

If you use the scaffolding of the VitePress project to build a project, the generated file structure should look like this: `./docs`

The `blog` directory is the content directory for the `VitePress Blog`. It serves as a reserved location for the `Posts` and `Authors` directories of the VitePress Blog.

```
├── docs                # Project root
│   ├── .vitepress
│   │   ├── theme       # Theme entry
│   │   └── config.js   # Configuration file
│   ├── blog
│   │   ├── authors
│   │   ├── posts
│   │   ├── archives.md
│   │   ├── index.md
│   │   └── tags.md
│   ├── api-examples.md
│   ├── index.md
│   └── markdown-examples.md
│   └── public
├── package.json
```

The `docs` directory is considered the project root of the VitePress site. The `.vitepress` directory is a reserved location for VitePress' config file, dev server cache, build output, and optional theme customization code.

### Configuration file

Configure the blog theme in the `themeConfig/blog` option of the `.vitepress/config.js` file.

`VitePress Blog` specific configuration options can be viewed in [VPB Theme Configuration](/reference/config).

::: details .vitepress/config.js
```js
export default {
  // vitepress site-level options
  title: 'VitePress',
  description: 'Just playing around.',
  themeConfig:{
      blog: {
          path: "/blog",
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
          // Other `VitePress Blog` config options
      }
    
  }
}
```
:::

### Theme Configuration

`VitePress Blog` itself is based on the official theme extension, and you can add custom configurations in this file.

::: info .vitepress/theme/index.js
```js
// https://vitepress.dev/guide/custom-theme
import { VPBTheme } from '@chunge16/vitepress-blogs-theme';

export default {
  extends: VPBTheme,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
};
```
:::

## Up and Running

If you allowed it during the setup process, the tool should have also injected the following npm scripts to your `package.json`:

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

The script will start a local dev server with instant hot updates. Run it with the following command: `docs:dev`

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

Instead of npm scripts, you can also invoke VitePress directly:

::: code-group

```sh [npm]
$ npx vitepress dev docs
```

```sh [pnpm]
$ pnpm exec vitepress dev docs
```

:::

The dev server should be running at `http://localhost:5173`. Visit the URL in your browser to see your new site in action!

### Template Repo

We have a starter template repo available on GitHub:

https://github.com/chunge16/vitepress-blogs-theme-template

- You can click the large green `Use This Template` button on GitHub
- Use `npx degit` to start
- Use `git clone` to start

::: code-group

```sh [npm]
$ npx degit https://github.com/chunge16/vitepress-blogs-theme-template
```

```sh [Git]
$ git clone https://github.com/chunge16/vitepress-blogs-theme-template
```

:::

## What's Next?

- For full details of VitePress and its deployment, please refer to the [VitePress Guide](https://vitepress.dev/guide/getting-started)
