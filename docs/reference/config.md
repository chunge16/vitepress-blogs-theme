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

## At a Glance

These options usually matter first when setting up a site:

- `title` and `description` shape the blog landing page
- `path`, `postsPath`, `authorsPath`, and `tagsPath` control blog routes
- `defaultAuthor` and `defaultCategory` provide fallbacks for incomplete frontmatter
- `categoryIcons` and `tagIcons` improve scanning and visual grouping
- `dateConfig` controls how dates are displayed
- `giscus` enables and configures the built-in comments area

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

The title shown across blog-related pages.

## description

- Type: `string`

The description shown on the main blog page.

## path

- Type: `string`
- Default: `/blog`

The base route for the blog section.

## postsPath

- Type: `string`
- Default: `/blog/posts`

The route prefix used for blog post pages.

## authorsPath

- Type: `string`
- Default: `/blog/authors`

The route prefix used for author profile pages.

## tagsPath

- Type: `string`
- Default: `/blog/tags`

The page path used to render the tag list.

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

The fallback author name used when a post does not declare an explicit author.

## defaultCategory

- Type: `string`
- Default: `Article`

The fallback category used when a post does not declare one.

## categoryIcons

- Type: `Record<string, string>`
- Default: `none`

Maps category names to icons. This is useful when you want category badges or labels to be easier to scan. See [Icons](./icons) for the icon format.

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

Maps tag names to icons. See [Icons](./icons) for the icon format.

## dateConfig

- Type: `object`
- Default: `{ format: 'yyyy/MM/dd', locale: enUS }`

Controls date formatting with [date-fns](https://date-fns.org/v2.16.1/docs/format).

Typical use cases:

- change the display format, such as `MMM d, yyyy`
- switch locale for month names and formatting conventions
