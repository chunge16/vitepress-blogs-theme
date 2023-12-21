# VPB Theme Config

This section will explain the configuration options provided by VitePress Blog. All of the standard [VitePress configuration options](https://vitepress.dev/reference/site-config) are available as well.

VPB's Theme config lets you customize your theme. All of our config options are available under the `themeConfig.blog` property of the standard VitePress config:

```js

import {defineConfig} from 'vitepress';
import {processData} from '@chunge16/vitepress-blogs-theme/config';
import { enUS } from "date-fns/locale";

export default defineConfig({
    // ...vitepress other config
    themeConfig: {
        blog: {
            title: 'Blog',
            description: 'All these articles were written by AI Writer',
            defaultAuthor: 'AI Writer',
            categoryIcons: {
                article: 'i-[carbon/notebook]',
                tutorial: 'i-[carbon/book]',
                document: 'i-[carbon/document]',
            },
            tagIcons: {
                github: 'i-[carbon/logo-github]',
                vue: 'i-[logos/vue]',
                javascript: 'i-[logos/javascript]',
            },
            dateConfig: {
                format: 'yyyy/MM/dd',
                locale: enUS
            },
            giscus: {
                repo: 'your github repository',
                repoId: 'your repository id',
                categoryId: 'your category id',
                category: 'your category', // default: `General`
                mapping: 'pathname', // default: `pathname`
                inputPosition: 'top', // default: `top`
                lang: 'en', // default: `zh-CN`
                lightTheme: 'light', // default: `light`
                darkTheme: 'transparent_dark', // default: `transparent_dark`
            },
            
        },
    },
    vite: {
        // https://cn.vitejs.dev/config/dep-optimization-options.html#optimizedeps-exclude
        optimizeDeps: {
            exclude: ['@chunge16/vitepress-blogs-theme'],
        },
        // https://cn.vitejs.dev/config/ssr-options.html
        ssr: {
            noExternal: ['@chunge16/vitepress-blogs-theme']
        },
    },
    // https://vitepress.dev/reference/site-config#transformpagedata
    async transformPageData(pageData, ctx) {
        await processData(pageData, ctx);
    },
})
```


##  giscus  :tada:

- Type: `object`
- Default
  - repo: 'your github repository'
  - repoId: 'your repository id'
  - categoryId: 'your category id'
  - category: 'General'
  - mapping: 'pathname'
  - inputPosition: 'top'
  - lang: 'zh-CN'
  - lightTheme: 'light'
  - darkTheme: 'transparent_dark'
  - defaultEnable : true

Comment section functionality configuration

For the parameter acquisition method of `giscus`, please refer to：[giscus configuration](https://giscus.app/)

::: tip defaultEnable

Whether all 'post' start the comment section

- The default is true, which means enabled, this parameter can be ignored;If it is false, it means it is not enabled.
- It can be enabled separately with 'comment: true' in [post frontmatter](/guide/frontmatter-post)


:::


## title

- Type: `string`

You can customize this item to set the blog title.

## description

- Type: `string`

The description of the blog, used as a subtitle on the blog's home page

## path

- Type: `string`
- Default: `/blog`

The blog's path relative to the site

## postsPath

- Type: `string`
- Default: `/blog/posts`

The posts path relative to the site

## authorsPath

- Type: `string`
- Default: `/blog/authors`

The authors path relative to the site

## tagsPath

- Type: `string`
- Default: `/blog/tags`

The page to use to show the tags

```md
<!--- /blog/tags.md --->

---
layout: home
---

<VPBTags />


```

## defaultAuthor

- Type: `string`
- Default: `Unknown`

The default author name to use on posts without an author

## defaultCategory

- Type: `string`
- Default: `Article`

The default category name to use on posts without a category

## categoryIcons

- Type: `Record<string, string>`
- Default: `none`

Category icons, used in category's class attribute - [More Details](./icons)

```
{
  article: 'i-[carbon/notebook]',
  tutorial: 'i-[carbon/book]',
  document: 'i-[carbon/document]',
}
```

## tagIcons

- Type: `Record<string, string>`
- Default: `none`

Tag icons, used in tag's class attribute - [More Details](./icons)


## dateConfig :date:

- Type: `object`
- Default: `{ format: 'yyyy/MM/dd', locale: enUS }`

Date  formatting options - [More Details](https://date-fns.org/v2.16.1/docs/format)


