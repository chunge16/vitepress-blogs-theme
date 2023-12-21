# VPB 主题配置

本节将解释 VitePress 博客提供的配置选项。所有标准的 [VitePress 配置选项](https://vitepress.dev/reference/site-config)也可用

VPB 的主题配置可让您自定义主题。我们所有的配置选项都可以在标准 VitePress 配置的属性下使用：`themeConfig.blog`

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
  - repo: '你的仓库地址'
  - repoId: '你的仓库id'
  - categoryId: '你的分类id'
  - category: 'General'
  - mapping: 'pathname'
  - inputPosition: 'top'
  - lang: 'zh-CN'
  - lightTheme: 'light'
  - darkTheme: 'transparent_dark'
  - defaultEnable : true

评论区功能配置

`giscus` 参数获取方式请看：[Giscus 配置获取](https://giscus.app/)

::: tip defaultEnable

是否全部`post`启动评论区

- 默认为 true，表示启用，此参数可忽略； 如果为 false，表示不启用。
- 可以在 [post frontmatter](/guide/frontmatter-post) 使用 `comment: true` 单独启用


:::

## title

- Type: `string`
  您可以自定义此项以设置博客标题

## description

- Type: `string`

博客的描述，用作博客主页的副标题

## path

- Type: `string`
- Default: `/blog`

博客相对于站点的路径

## postsPath

- Type: `string`
- Default: `/blog/posts`

  相对于 `path` 的博客路径


## authorsPath

- Type: `string`
- Default: `/blog/authors`

相对于 `path` 的作者路径

## tagsPath

- Type: `string`
- Default: `/blog/tags`

用于显示标签的页面

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

在没有作者的博客上使用的默认作者的姓名

## defaultCategory

- Type: `string`
- Default: `Article`

在没有类别的博客上使用的默认的类别名称

## categoryIcons

- Type: `Record<string, string>`
- Default: `none`

类别图标，用于类别的类属性。- [More Details](./icons)

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

标签图标，用于标签的类属性 - [More Details](./icons)


## dateConfig :date:

- Type: `object`
- Default: `{ format: 'yyyy/MM/dd', locale: enUS }`

日期格式 - [More Details](https://date-fns.org/v2.16.1/docs/format)







