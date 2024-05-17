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

- [Node.js](https://nodejs.org/) 版本 16 以上.
- 通过命令行界面 (CLI) 访问 VitePress 的终端.
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的文本编辑器。
  - 推荐使用 [VSCode](https://code.visualstudio.com/), 以及Vue官方插件 [volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

VitePress Blog 可以独立使用，也可以安装到现有项目中。

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

### 使用主题
需要在 `.vitepress/theme/index.js`继承 `@chunge16/vitepress-blogs-theme`自定义主题

因为 `VitePress Blog` 本身基于 `vitepress` 官方默认主题进行的扩展，所以可以继承并且同步 `vitepress` 官方主题
```js
// .vitepress/theme/index.js

import {VPBTheme} from "@chunge16/vitepress-blogs-theme";
export default {
    extends: VPBTheme
    // 其他 vitepress 主题配置
    // https://vitepress.dev/zh/guide/custom-theme#theme-resolving
};
```

### 配置文件
在 `.vitepress/config.js` 文件的 `themeConfig/blog`的选项里配置博客主题

`VitePress Blog` 具体配置选项可以查看 [VPB 主题配置](/zh/reference/config)

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



### 创建博客文件夹

`docs`文件夹下同时创建以下文件和文件夹

- 创建 `/blog/posts` 存放博客文件，该文件夹下新建博客 md 文件
- 创建 `/blog/authors` 存在博客作者，该文件夹下新建以作者名字命名的 md 文件 
- 创建 `/blog/tags.md` 文件，显示标签页面
::: details tags.md
```markdown
---
layout: home
---

<VPBTags />

```
:::

- 创建  `/blog/archives.md` 文件，显示博客集合页面
::: details archives.md
```markdown
---
layout: home
---

<VPBArchives />


```
:::
- 创建 `/blog/index.md` 文件，显示博客首页

::: details index.md
```markdown
---
layout: home
---


<VPBHome />



```
:::

具体文件结构，请看下图

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

### Tailwind 配置

因为 `VitePress Blog` 使用 Tailwind CSS. 所以需要单独配置

具体配置请看 [VPB Tailwind 配置](/zh/reference/tailwind)

---

::: details 获取缺失的对等依赖警告详情？
如果你使用 PNPM，你会注意到对 `@docsearch/js` 的缺失同级依赖警告。这并不会阻止 `VitePress` 的工作。如果你希望消除这个警告，把以下内容添加到你的 `package.json` 中：


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



::: tip 注意

VitePress 是一个仅支持 ESM 的包。不要使用 `require()` 来导入它，并确保你最近的 `package.json` 包含 `"type": "module"`，或者改变你相关文件的扩展名，如 `.vitepress/config.js 到 .mjs/.mts`。参考 [Vite 的故障排除指南](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only) 以获取更多详情。另外，在异步 CJS 上下文中，你可以使用 `await import('vitepress')` 替代。

:::

## 文件结构

如果你使用 VitePress 项目的脚手架构建项目，那么生成的文件结构应该像这样: `./docs` 

- `blog`为 `VitePress Blog` 的内容目录，该目录是 VitePress Blog  `Posts` 和 `Authors` 文件夹的保留位置

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

该目录被视为 VitePress 站点的项目根目录。该目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的保留位置。`.docs`  `.vitepress`




### Start Repo

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



:::tip Vue 作为开发依赖
如果你打算执行使用 Vue 组件或 API 的定制，你也应该明确地将 vue 安装为开发依赖
:::

### Posts and Authors

存储在 `/blog/posts` 下的文件会被转换为博客文章，而存储在 `/blog/authors` 下的文件会被视为作者详细信息。这些路径可以根据需要进行配置。

如果你不想为每篇文章都指定作者，比如，如果只有一个作者，你也可以设置一个默认作者


### Categories and Tags

该类别是顶级项目，并且是可选的。例如，这可以是文章、文档、教程，无论你想要什么。

每个帖子都指定了标签，每个帖子可以有任意数量的标签。


### The Config File

配置文件 (`.vitepress/config.js`) 允许您自定义 VitePress 网站的各个方面，最基本的选项是网站的标题和描述


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


## What's Next?
- 有关 VitePress 及其部署的完整详细信息，请参阅 [VitePress Guide](https://vitepress.dev/guide/getting-started)

