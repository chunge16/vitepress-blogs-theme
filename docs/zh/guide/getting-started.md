# 快速开始

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

## 在线体验

你可以直接在浏览器中通过 [StackBlitz](https://stackblitz.com/~/github.com/chunge16/vitepress-blogs-theme-template) 体验 `VitePress Blog`。

## 安装

### 前置条件

- [Node.js](https://nodejs.org/) 18 或更高版本
- 一个可运行 VitePress CLI 的终端环境
- 一个支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 的编辑器
- 推荐使用 [VS Code](https://code.visualstudio.com/) 和官方 [Vue 插件](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

`VitePress Blog` 既可以用于全新项目，也可以集成到已有的 VitePress 站点中。

这个主题基于 [扩展默认主题](https://vitepress.dev/zh/guide/custom-theme#extending-the-default-theme) 的方式构建，因此你仍然可以在 `docs/.vitepress/theme/index.js` 中继续自定义站点。

先安装所需依赖：

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

### 安装向导

`VitePress Blog` 提供了一个初始化向导，可以帮你快速生成博客目录结构。安装完成后，运行下面的命令启动向导：

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

向导会依次询问一些基础配置：

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

## 文件结构

如果你将博客初始化到 `./docs`，生成后的目录结构大致如下：

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

`docs` 是 VitePress 站点根目录，`.vitepress` 用来存放站点配置、主题扩展、缓存以及构建产物。

`blog` 是博客内容目录。默认情况下，文章位于 `blog/posts`，作者信息位于 `blog/authors`。

### 配置文件

在 `.vitepress/config.js` 的 `themeConfig.blog` 下配置主题。

完整的主题配置项请参考 [VPB 主题配置](/zh/reference/config)。

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

### 主题入口

`VitePress Blog` 是在 VitePress 默认主题之上扩展出来的，因此你可以继续在 `.vitepress/theme/index.js` 中添加组件、样式或 `enhanceApp` 逻辑。

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

## 启动站点

如果你在初始化时允许向导自动修改 `package.json`，它会写入以下脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

使用 `docs:dev` 即可启动本地开发服务器：

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
