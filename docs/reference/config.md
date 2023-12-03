# VPB Theme Config

This section will explain the configuration options provided by VitePress Blog. All of the standard [VitePress configuration options](https://vitepress.dev/reference/site-config) are available as well.

VPB's Theme config lets you customize your theme. All of our config options are available under the `themeConfig.blog` property of the standard VitePress config:

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
  article: 'i-[heroicons-outline/book-open]',
  tutorial: 'i-[heroicons-outline/academic-cap]',
  document: 'i-[heroicons-outline/document]',
}
```

## tagIcons

- Type: `Record<string, string>`
- Default: `none`

Tag icons, used in tag's class attribute - [More Details](./icons)

[//]: # (## feed &#40;TODO&#41;)

[//]: # ()
[//]: # (Config options related to the blog's generated RSS feed)

[//]: # ()
[//]: # (This is a separate object with the following options:)

[//]: # ()
[//]: # (```ts)

[//]: # (export interface VPBFeedConfig {)

[//]: # (  /**)

[//]: # (   * baseUrl)

[//]: # (   *)

[//]: # (   * @example 'https://vitepress.site/blog')

[//]: # (   * @default 'localhost/blog'  Feed won't have accurate links)

[//]: # (   */)

[//]: # (  baseUrl?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The output path for the generated feed file)

[//]: # (   *)

[//]: # (   * @example '/blog/feed.rss')

[//]: # (   * @default '/feed.rss')

[//]: # (   */)

[//]: # (  outputPath?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The title of the feed)

[//]: # (   *)

[//]: # (   * @example 'My Blog Feed')

[//]: # (   * @default blog.title)

[//]: # (   */)

[//]: # (  title?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The description of the feed)

[//]: # (   *)

[//]: # (   * @example 'My Blog Feeds Description')

[//]: # (   * @default blog.description)

[//]: # (   */)

[//]: # (  description?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The id of the feed)

[//]: # (   *)

[//]: # (   * @default baseUrl)

[//]: # (   */)

[//]: # (  id?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The link of the feed)

[//]: # (   *)

[//]: # (   * @default baseUrl)

[//]: # (   */)

[//]: # (  link?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The language of the feed)

[//]: # (   *)

[//]: # (   * @default 'en')

[//]: # (   */)

[//]: # (  language?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The image of the feed)

[//]: # (   *)

[//]: # (   * @default '')

[//]: # (   */)

[//]: # (  image?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The favicon used in the RSS feed, added to the baseUrl)

[//]: # (   *)

[//]: # (   * @example '/feedfavicon.ico')

[//]: # (   * @default '/favicon.ico')

[//]: # (   */)

[//]: # (  favicon?: string)

[//]: # ()
[//]: # (  /**)

[//]: # (   * The copyright used in the RSS feed)

[//]: # (   *)

[//]: # (   * @example 'Copyright &#40;c&#41; 2023-present, Me and blog contributors')

[//]: # (   */)

[//]: # (  copyright?: string)

[//]: # (})

[//]: # (```)
