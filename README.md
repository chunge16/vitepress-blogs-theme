

## vitepress自定义主题说明

`@chunge16/vitepress-blogs-theme` 是[VitePress](https://vitepress.dev/)的博客主题。它增加了 VitePress 中令人难以置信的功能，使您可以轻松地将简单的博客添加到标准 VitePress 站点。您的内容可以用Markdown编写，并在开头添加一些有用的 frontmatter

## 使用主题

### 使用前提
本主题基于`vitepress`，所以建议先[初始化vitepress](https://vitepress.dev/guide/getting-started)项目

:::code-group

```sh[npm]
npx vitepress init

```

```sh[pnpm]
pnpm dlx vitepress init
```

:::


该主题是参考[@jcamp/vitepress-blog-theme](https://vitepressblog.dev/)，
但配置方式优化为[vitepress官方自定义主题的配置](https://vitepress.dev/guide/custom-theme#distributing-a-custom-theme)来设置的

::: code-group
```sh [npm]
$ npm install -D @chunge16/vitepress-blogs-theme
```

```sh [pnpm]
$ pnpm add -D @chunge16/vitepress-blogs-theme
```

```sh [yarn]
$ yarn add -D @chunge16/vitepress-blogs-theme
```
:::

使用该主题，请从[自定义主题](https://vitepress.dev/guide/custom-theme)导入并重新导出它

```javascript
// .vitepress/theme/index.js
import { VPBTheme } from '@chunge16/vitepress-blogs-theme'

export default VPBTheme

```

如果主题需要扩展：

```javascript
// .vitepress/theme/index.js
import { VPBTheme } from '@chunge16/vitepress-blogs-theme'

export default {
  extends: Theme,
  enhanceApp(ctx) {
    // ...
  }
}
```

::: tip
> 特殊提示，需要添加vite配置，为`@chunge16/vitepress-blogs-theme`跳过不必要的pre-bundled阶段，使用optimizeDeps.exclude，否则会提示导出错误

```javascript
// .vitepress/config.js 

export default {
    vite: {
        optimizeDeps: {
            exclude: ['@chunge16/vitepress-blogs-theme']
        }
    }
}
```

:::




## 主题配置

因为本主题集参考了[@jcamp/vitepress-blog-theme](https://vitepressblog.dev/reference/config)，所以主题配置基本可参考该主题的配置说明

### [站点配置](https://vitepressblog.dev/reference/config)
站点配置基本可以参考[config](https://vitepressblog.dev/reference/config)

### [Tailwind 配置](https://vitepressblog.dev/reference/tailwind)

#### Tailwind.config.js

Tailwind基本配置可以使用主题提供的默认配置

```javascript
import { defineTailwindConfig } from '@chunge16/vitepress-blogs-theme/config'

module.exports = defineTailwindConfig()
```

#### 定义TailwindConfig
如果您想tailwind.config.js进一步自定义，您可以将选项传递给defineTailwindConfig

```ts
defineTailwindConfig(base = './docs', config: Partial<Config>)
```
- base：你的vitepress源的路径
- config：标准Tailwind配置对象。

### [icons 配置](https://vitepressblog.dev/reference/icons)

VitePress 博客使用[tailwind-css-icons](https://github.com/jcamp-code/tailwindcss-plugin-icons)允许您在 Markdown 或组件中包含任何您想要的图标。

[iconify](https://iconify.design/)中的所有图标均可用。

> 格式为i=[library/icon name]

```html
// 例子
<span class="i-[carbon/logo-vue]">

```

## 说明 :bug:

::: danger

[@jcamp/vitepress-blog-theme](https://vitepressblog.dev/)主题有个bug，`.vitepress/config.js`中设置`base`地址，会导致博客跳转地址错误，导致404

后面看源码发现，是因为作者在组件跳转地址加上 [withBase](https://vitepress.dev/reference/runtime-api#withbase) 函数，会导致`base`值URL重复，所以找不到地址

:::


## 参考
[@jcamp/vitepress-blog-theme](https://vitepressblog.dev/)
