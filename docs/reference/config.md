# VPB Theme Config

This page documents the blog-specific options provided by `VitePress Blog`. Standard [VitePress site config](https://vitepress.dev/reference/site-config) options are still available.

All theme options live under `themeConfig.blog` in your VitePress config:

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

Use this option to configure the built-in comment section.

Default values:

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

For setup details, see [giscus](https://giscus.app/).

::: tip defaultEnable
`defaultEnable` controls whether comments are enabled for every post by default.

If you set it to `false`, you can still enable comments for individual posts with `comment: true` in [post frontmatter](/guide/frontmatter-post).
:::

## title

- Type: `string`

Blog title shown in blog-related views.

## description

- Type: `string`

Blog description shown on the blog home page.

## path

- Type: `string`
- Default: `/blog`

Base route for the blog section.

## postsPath

- Type: `string`
- Default: `/blog/posts`

Route prefix used for blog posts.

## authorsPath

- Type: `string`
- Default: `/blog/authors`

Route prefix used for author pages.

## tagsPath

- Type: `string`
- Default: `/blog/tags`

Page path used to render the tag list.

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

Fallback author name for posts without an explicit author.

## defaultCategory

- Type: `string`
- Default: `Article`

Fallback category name for posts without an explicit category.

## categoryIcons

- Type: `Record<string, string>`
- Default: `none`

Category icon mapping. See [Icons](./icons) for the icon format.

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

Tag icon mapping. See [Icons](./icons) for the icon format.

## dateConfig

- Type: `object`
- Default: `{ format: 'yyyy/MM/dd', locale: enUS }`

Date formatting options powered by [date-fns](https://date-fns.org/v2.16.1/docs/format).
