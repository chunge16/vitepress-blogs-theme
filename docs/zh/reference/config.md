# VPB 主题配置

本节将解释 VitePress 博客提供的配置选项。所有标准的 [VitePress 配置选项](https://vitepress.dev/reference/site-config)也可用

VPB 的主题配置可让您自定义主题。我们所有的配置选项都可以在标准 VitePress 配置的属性下使用：`themeConfig.blog`

```js

import {defineConfig} from 'vitepress';
import {processData} from '@chunge16/vitepress-blogs-theme/config';

export default defineConfig({
    // ...vitepress config
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
        },
    },
    // fix vite 
    vite: {
        optimizeDeps: {
            exclude: ['@chunge16/vitepress-blogs-theme'],
        },
        ssr: {
            noExternal: ['@chunge16/vitepress-blogs-theme']
        },
    },

    async transformPageData(pageData, ctx) {
        await processData(pageData, ctx);
    },
})
```

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
  article: 'i-[heroicons-outline/book-open]',
  tutorial: 'i-[heroicons-outline/academic-cap]',
  document: 'i-[heroicons-outline/document]',
}
```

## tagIcons

- Type: `Record<string, string>`
- Default: `none`

标签图标，用于标签的类属性 - [More Details](./icons)
