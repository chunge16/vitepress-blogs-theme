# 快速开始

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

## 在线试用

您可以直接在 [StackBlitz](https://stackblitz.com/~/github.com/chunge16/vitepress-blogs-theme-template) 的浏览器中尝试使用 `VitePress Blog`


## 安装

### 前提条件

- [Node.js](https://nodejs.org/) 版本 18 以上.
- 通过命令行界面 (CLI) 访问 VitePress 的终端.
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的文本编辑器。
  - 推荐使用 [VSCode](https://code.visualstudio.com/), 以及Vue官方插件 [volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

VitePress Blog 可以独立使用，也可以安装到现有项目中

本身基于[官方主题扩展](https://vitepress.dev/zh/guide/custom-theme#consuming-a-custom-theme)，你可以在 `docs/.vitepress/theme/index.js` 里添加自定义的配置 

在两种情况下，你都需要安装 `vitepress` 和 `@chunge16/vitepress-blogs-theme`。 你可以使用以下方式进行安装：

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

### 安装向导
VitePress Blog 附带一个命令行设置向导，可以帮助你构建一个博客文件夹。安装后，通过运行以下命令启动向导
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

将需要回答几个简单的问题：

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
## 文件结构

如果你使用 VitePress 项目的脚手架构建项目，那么生成的文件结构应该像这样: `./docs` 

`blog`为 `VitePress Blog` 的内容目录，该目录是 VitePress Blog  `Posts` 和 `Authors` 文件夹的保留位置

```
├── docs                # 项目根目录
│   ├── .vitepress
│   │   ├── theme       # 主题入口 
│   │   └── config.js   # 配置文件
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
`docs` 目录被视为 VitePress 站点的项目根目录。`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置

### 配置文件

在`.vitepress/config.js`配置文件里，配置博客主题在 `themeConfig/blog`里，

`VitePress Blog` 具体配置选项可在 [VPB主题配置](/reference/config) 中查看

::: details .vitepress/config.js
```js
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
          // 其他` VitePress Blog` 配置选项
      }
    
  }
}
```
:::

### 主题配置

`VitePress Blog` 本身是基于官方主题扩展的，你可以在这个文件里添加自定义的配置

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

## 启动并运行

如果您在设置过程中允许它这样做，该工具还应该将以下 npm 脚本注入到您的`package.json`中

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
该脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：`docs:dev`


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
除了 npm 脚本，您还可以直接使用以下命令调用 VitePress：


::: code-group

```sh [npm]
$ npx vitepress dev docs
```

```sh [pnpm]
$ pnpm exec vitepress dev docs
```

:::

开发服务器应在 上运行。访问浏览器中的 URL，查看新网站的运行情况！`http://localhost:5173`

### 模板仓库

我们在 GitHub 上有一个启动模板仓库可用:

https://github.com/chunge16/vitepress-blogs-theme-template

- 你可以点击 GitHub 上的绿色 `Use This Template` 按钮，
- 使用 `npx degit` 来开始
- 使用 `git clone` 来开始

::: code-group

```sh [npm]
$ npx degit https://github.com/chunge16/vitepress-blogs-theme-template
```

```sh [Git]
$ git clone https://github.com/chunge16/vitepress-blogs-theme-template
```

:::


## 下一步
- 有关 VitePress 及其部署的完整详细信息，请参阅 [VitePress Guide](https://vitepress.dev/guide/getting-started)

