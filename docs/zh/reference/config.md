# VPB 主题配置

本页介绍 `VitePress Blog` 提供的博客主题配置项。普通的 [VitePress 站点配置](https://vitepress.dev/zh/reference/site-config) 依然可以正常使用。

所有主题配置都写在 VitePress 配置文件的 `themeConfig.blog` 中：

```js
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { processData } from '@chunge16/vitepress-blogs-theme/config'
import { enUS } from 'date-fns/locale'

export default defineConfig({
  themeConfig: {
    blog: {
      title: 'Blog',
      description: 'All these articles were written by AI Writer',
      defaultAuthor: 'AI Writer',
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
      giscus: {
        repo: 'your github repository',
        repoId: 'your repository id',
        categoryId: 'your category id',
        category: 'General',
        mapping: 'pathname',
        inputPosition: 'top',
        lang: 'en',
        lightTheme: 'light',
        darkTheme: 'transparent_dark',
        defaultEnable: true,
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

## giscus

- Type: `object`

用于配置内置评论区功能。

默认值：

- `repo`: `your github repository`
- `repoId`: `your repository id`
- `categoryId`: `your category id`
- `category`: `General`
- `mapping`: `pathname`
- `inputPosition`: `top`
- `lang`: `zh-CN`
- `lightTheme`: `light`
- `darkTheme`: `transparent_dark`
- `defaultEnable`: `true`

具体参数获取方式可参考 [giscus 官方文档](https://giscus.app/)。

::: tip defaultEnable
`defaultEnable` 用于控制是否默认给所有文章启用评论区。

如果你将它设置为 `false`，仍然可以在单篇文章的 [frontmatter](/zh/guide/frontmatter-post) 中通过 `comment: true` 单独开启评论。
:::

## title

- Type: `string`

博客区域显示的标题。

## description

- Type: `string`

博客首页使用的描述文案。

## path

- Type: `string`
- Default: `/blog`

博客模块的基础路由。

## postsPath

- Type: `string`
- Default: `/blog/posts`

文章页面使用的路由前缀。

## authorsPath

- Type: `string`
- Default: `/blog/authors`

作者页面使用的路由前缀。

## tagsPath

- Type: `string`
- Default: `/blog/tags`

标签页使用的路径。

```md
<!-- /blog/tags.md -->

---
layout: home
---

<VPBTags />
```

## defaultAuthor

- Type: `string`
- Default: `Unknown`

当文章没有显式声明作者时使用的默认作者名。

## defaultCategory

- Type: `string`
- Default: `Article`

当文章没有显式声明分类时使用的默认分类名。

## categoryIcons

- Type: `Record<string, string>`
- Default: `none`

分类图标映射。图标格式请参考 [Icons](./icons)。

```js
{
  article: 'i-[carbon--notebook]',
  tutorial: 'i-[carbon--book]',
  document: 'i-[carbon--document]',
}
```

## tagIcons

- Type: `Record<string, string>`
- Default: `none`

标签图标映射。图标格式请参考 [Icons](./icons)。

## dateConfig

- Type: `object`
- Default: `{ format: 'yyyy/MM/dd', locale: enUS }`

基于 [date-fns](https://date-fns.org/v2.16.1/docs/format) 的日期格式化配置。
