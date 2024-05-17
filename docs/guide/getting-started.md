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

You can try VitePress Blog directly in your browser on [StackBlitz](https://stackblitz.com/~/github.com/chunge16/vitepress-blogs-theme-template).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or higher.
- Terminal for accessing VitePress via its command line interface (CLI).
- Text Editor with [Markdown](https://en.wikipedia.org/wiki/Markdown) syntax support.
  - [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

VitePress Blog can be used on its own, or be installed into an existing project.

You need to install both `vitepress` and `@chunge16/vitepress-blogs-theme` In both cases, you can install it with:

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


### Use themes
Need to inherit `@chunge16/vitepress-blogs-theme` custom theme in `.vitepress/theme/index.js`

Because `VitePress Blog` itself is an extension based on the `vitepress` official default theme, it can inherit and synchronize with the `vitepress` official theme

```js
// .vitepress/theme/index.js

import {VPBTheme} from "@chunge16/vitepress-blogs-theme";
export default {
    extends: VPBTheme
    // 其他 vitepress 主题配置
    // https://vitepress.dev/zh/guide/custom-theme#theme-resolving
};
```

### Configuration file

Configure the blog theme in the `themeConfig/blog` option of the `.vitepress/config.js` file

`VitePress Blog` specific configuration options can be viewed in [VPB Theme Configuration](/reference/config)

::: details Configuration file
```js
// .vitepress/config.js
export default {
  // vitepress 站点级选项
  title: 'VitePress',
  description: 'Just playing around.',
  themeConfig:{
      blog: {
          path: "/blog",
          title: 'Blog',
          description: 'All these articles were written by chunge!',
          defaultAuthor: 'chunge',
          categoryIcons: {
              article: 'i-[carbon/notebook]', 
            tutorial: 'i-[carbon/book]', 
            document: 'i-[carbon/document]',
          }, 
          tagIcons: {
              github: 'i-[carbon/logo-github]', 
              vue: 'i-[logos/vue]',
              javascript: 'i-[logos/javascript]',
              'web development': 'i-[carbon/development]',
              html: 'i-[logos/html-5]',
              git: 'i-[logos/git-icon]',
              vite: 'i-[logos/vitejs]',
              locked: 'i-[twemoji/locked]',
              react: 'i-[logos/react]',
              blog: 'i-[carbon/blog]',
              comment: 'i-[carbon/add-comment]',
          },
          // 其他` VitePress Blog` 配置选项
      }
    
  }
}
```
:::


### Create blog folder
Create the following files and folders under the `docs` folder at the same time

- Create `/blog/posts` to store blog files, and create a new blog md file in this folder
- Create `/blog/authors` where the blog author exists, and create a new md file named after the author in this folder
- Create `/blog/tags.md` file and display tags page

::: details tags.md
```markdown
---
layout: home
---

<VPBTags />

```
:::

- Create `/blog/archives.md` file to display the blog collection page
::: details archives.md
```markdown
---
layout: home
---

<VPBArchives />


```
:::

- Create `/blog/index.md` file to display the blog homepage
::: details index.md
```markdown
---
layout: home
---


<VPBHome />



```
:::

Please see the figure below for the specific file structure.

```

├── docs
│   ├── blog
│   │   ├── archives.md
│   │   ├── authors
│   │   │   └── chunge.md
│   │   ├── index.md
│   │   ├── posts
│   │   │   ├── 2023
│   │   │   │   ├── git.md
│   │   │   │   ├── unload-LVSecurityAgent.md
│   │   │   │   ├── vitepress-Algolia.md
│   │   │   │   ├── vitepress-blog-theme.md
│   │   │   │   ├── vitepress-plugin-comment-with-giscus.md
│   │   │   │   
│   │   │   └── 2024
│   │   │       └── Jetbrains-crack.md
│   │   └── tags.md
├── package.json
├── pnpm-lock.yaml
└── tailwind.config.js

```

### Tailwind configuration

Because `VitePress Blog` uses Tailwind CSS. So it needs to be configured separately.

For specific configuration, please see [VPB Tailwind Configuration](/reference/tailwind)

---

::: details Getting missing peer deps warnings?
If using PNPM, you will notice a missing peer warning for `@docsearch/js`. This does not prevent VitePress from working. If you wish to suppress this warning, add the following to your `package.json`:

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search",
      "search-insights"
    ]
  }
}
```

:::

::: tip NOTE

VitePress is an ESM-only package. Don't use `require()` to import it, and make sure your nearest `package.json` contains `"type": "module"`, or change the file extension of your relevant files like `.vitepress/config.js` to `.mjs`/`.mts`. Refer to [Vite's troubleshooting guide](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only) for more details. Also, inside async CJS contexts, you can use `await import('vitepress')` instead.

:::


## File Structure
If you use the scaffolding of the VitePress project to build a project, the generated file structure should look like this: `./docs`

- The `blog` directory is the content directory for the `VitePress Blog`. It serves as a reserved location for the Posts and Authors directory of the VitePress Blog.


```
├── docs
│   ├── .vitepress
│   │   ├── theme
│   │   └── config.js
│   ├── blog
│   │   ├── authors
│   │   ├── posts
│   │   ├── archives.md
│   │   ├── index.md
│   │   └── tags.md
│   ├── api-examples.md
│   ├── index.md
│   └── markdown-examples.md
├── package.json

```

The directory is considered the project root of the VitePress site. The directory is a reserved location for VitePress' config file, dev server cache, build output, and optional theme customization code`.docs`  `.vitepress`


### Start Repo

We have a starter template repo available on GitHub:

https://github.com/chunge16/vitepress-blogs-theme-template

- You can click the large green `Use This Template` button GitHub 
- use ` npx degit` to get started
- use `git clone` to get started

::: code-group

```sh [npm]
$ npx degit https://github.com/chunge16/vitepress-blogs-theme-template
```

```sh [Git]
$ git clone https://github.com/chunge16/vitepress-blogs-theme-template
```

:::


:::tip Vue as dev Dependency
If you intend to perform customization that uses Vue components or APIs, you should also explicitly install `vue` as a dev dependency.
:::

### Posts and Authors

Files stored under `/blog/posts` are converted to blog posts, while files stored under `/blog/authors` are treated as author details. These paths can be configured as needed.

You can also set a default author if you don't want to specify an author for every post, for exmple, if there is only one author.

### Categories and Tags

The category is a top level item, and is optional. For example, this can be articles, documentation, tutorials, whatever you want it to be.

Tags are specified on each post and each post can have as many tags as you want.

### The Config File

The config file (`.vitepress/config.js`) allows you to customize various aspects of your VitePress site, with the most basic options being the title and description of the site:

```js
// .vitepress/config.js
export default {
  // site-level options
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // theme-level options
  },
}
```

## Up and Running

The tool should have also injected the following npm scripts to your `package.json` if you allowed it to do so during the setup process:

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

The `docs:dev` script will start a local dev server with instant hot updates. Run it with the following command:

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

Instead of npm scripts, you can also invoke VitePress directly with:

::: code-group

```sh [npm]
$ npx vitepress dev docs
```

```sh [pnpm]
$ pnpm exec vitepress dev docs
```

:::

The dev server should be running at `http://localhost:5173`. Visit the URL in your browser to see your new site in action!

## What's Next?

- For full details of VitePress and its deployment, please refer to the [VitePress Guide](https://vitepress.dev/guide/getting-started)
