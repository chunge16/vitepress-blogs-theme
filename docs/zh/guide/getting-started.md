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

## 开始之前

`VitePress Blog` 主要适合两类场景：

- 你准备从零开始搭一个基于 VitePress 的博客
- 你已经有一个 VitePress 站点，想把它扩展成“文档 + 博客”

如果你想先看看生成后的结构和效果，可以直接在浏览器中通过 [StackBlitz](https://stackblitz.com/~/github.com/chunge16/vitepress-blogs-theme-template) 体验 `VitePress Blog`。

## 前置条件

- [Node.js](https://nodejs.org/) 18 或更高版本
- 一个可运行 VitePress CLI 的终端环境
- 一个支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 的编辑器
- 推荐使用 [VS Code](https://code.visualstudio.com/) 和官方 [Vue 插件](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 安装依赖

`VitePress Blog` 既可以用于全新项目，也可以集成到已有的 VitePress 站点中。

这个主题基于 [扩展默认主题](https://vitepress.dev/zh/guide/custom-theme#extending-the-default-theme) 的方式构建，所以整体配置方式依然是 VitePress 那一套，你也可以继续在 `docs/.vitepress/theme/index.js` 中扩展站点。

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

`VitePress Blog` 提供了一个初始化向导，可以帮你快速生成博客所需的基础目录和配置。安装完成后，运行下面的命令启动向导：

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

向导会依次询问站点初始化所需的几个关键配置：

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
◇  Choose starter template:
│  minimal - core blog structure only
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
◇  Add VitePress output entries to .gitignore?
│  Yes
│
◇  Overwrite generated files if they already exist?
│  No
│
◇  Date format:
│  yyyy/MM/dd (e.g., 2024/01/26)
│
└  Done! Next steps:

  pnpm install
  pnpm run docs:dev
```

确认完成后，向导会自动帮你完成这些事情：

- 在目标目录中生成博客页面、作者页面以及 `.vitepress` 主题文件
- 可以选择最小博客结构，或带本地化示例内容的 demo 结构
- 当项目中不存在 `package.json` 时自动创建一个新的配置文件
- 如果你选择允许写入脚本，会根据目标目录把对应的 VitePress 脚本合并写入已有的 `package.json`
- 自动补充缺失的运行依赖，并避免重复添加已经写在其他依赖字段里的包
- 自动把 VitePress 缓存目录和构建产物目录追加到 `.gitignore`
- 安全写入站点标题、描述等文本，避免因为特殊字符导致生成的配置文件出错
- 默认不会覆盖已有生成文件，除非你明确选择覆盖

如果你是在已有项目中运行向导，它会保留现有的 `package.json` 内容，只补充缺失的 VitePress Blog 脚本和依赖。

## 你会得到什么

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
│   ├── index.md
│   └── public
└── package.json
```

也就是说，向导跑完后，你拿到的不是一堆零散配置，而是一套已经把博客结构接好的 VitePress 站点。

如果你选择 demo 模板，还会额外生成 `markdown-examples.md`、`api-examples.md`、示例文章和示例作者页。

## 文件结构

这套结构刻意保持得比较简单：

- `docs` 是整个 VitePress 站点的根目录
- `.vitepress` 里放的是站点配置和主题入口
- `blog/posts` 用来存放博客文章
- `blog/authors` 用来存放作者资料页
- `blog/index.md`、`tags.md`、`archives.md` 是主题内置的博客导航页面

### 配置文件

主题的主要配置放在 `.vitepress/config.js` 的 `themeConfig.blog` 下。

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

`VitePress Blog` 是在 VitePress 默认主题之上扩展出来的，所以你依然可以继续在 `.vitepress/theme/index.js` 中添加组件、样式或 `enhanceApp` 逻辑。

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

如果这些脚本已经存在，向导会保留原有内容，不会覆盖。

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

站点跑起来之后，通常下一步会是：

- 改掉默认的站点标题和描述
- 替换示例作者信息
- 在 `docs/blog/posts` 下新增第一篇文章
- 去 [VPB 主题配置](/zh/reference/config) 里继续调整路径、图标和日期格式
