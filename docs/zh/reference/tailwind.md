# VPB Tailwind 配置

VitePress Blog 使用 [Tailwind CSS](https://tailwindcss.com).

一切都已配置完毕，随时可以使用我们的 [vitepress-blogs-theme-template](https://github.com/chunge16/vitepress-blogs-theme-template)

## Tailwind.config.js

`tailwind.config.js` 的配置非常简单:

```js
import { defineTailwindConfig } from '@chunge16/vitepress-blogs-theme/config'

module.exports = defineTailwindConfig()
```
这设置了所需的内容路径并包括 [icons](./icons) 图标插件


## defineTailwindConfig

如果你想进一步自定义 `tailwind.config.js`，你可以将 `config` 选项传递给defineTailwindConfig


```js
defineTailwindConfig(base = './docs', config={})
```

- base: `VitePress` 站点的项目根目录
  - 
- config: 标准的 Tailwind 配置对象

## defineTailwindContent

```js
defineTailwindContent((base = './docs'))
```

- base: `VitePress` 站点的项目根目录

此函数返回所需路径列表，以确保 `VitePress Blog` 的组件包含在 `Tailwind` 的处理范围中：


```js
return [
  './node_modules/@chunge16/vitepress-blogs-theme/config/src/**/*.{js,ts,vue}',
  path.join(base, '**/*.md'),
  path.join(base, '.vitepress/**/*.{js,ts,vue}'),
]
```

## 完全自定义

如果您想完全自定义您的 Tailwind 配置，请确保 `Tailwind.config.js` 包含以下内容：


```js
import icons from '@jcamp/tailwindcss-plugin-icons'
import { defineTailwindContent } from '@chunge16/vitepress-blogs-theme/config/config'

const base = './docs' 

return {
  darkMode: 'class',
  plugins: [icons()],
  content: defineTailwindContent(base),
}
```

## PostCSS
[Tailwind CSS 安装](https://tailwindcss.com/docs/installation/using-postcss) 为 `PostCSS` 插件

`package.json` 添加postcss的配置内容

```json
// package.json
{
  "postcss":{
    "plugins": {
      "tailwindcss": {},
      "autoprefixer": {}
    }
  }
}


```

