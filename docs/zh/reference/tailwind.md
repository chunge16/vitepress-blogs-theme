# VPB Tailwind 配置

VitePress Blog 使用 [Tailwind CSS](https://tailwindcss.com)，版本为 `v4.1`

VPB Tailwind 是使用使用 PostCSS 插件 [tailwindcss](https://tailwindcss.com/docs/installation/using-postcss) 处理的

具体代码可以参考 [vitepress-blogs-theme-template](https://github.com/chunge16/vitepress-blogs-theme-template)



## 在你的PostCSS配置中添加Tailwind

在你的PostCSS配置中添加Tailwind，有 2 种方式

### 方式1：postcss.config.mjs配置

在你的PostCSS配置中添加tailwindcss插件，示例如下：

::: info postcss.config.mjs
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```
:::

### 方式2：package.json配置

在你的 `package.json` 中添加 `postcss` 配置，示例如下：

::: info package.json
```json
{
  "postcss": {
    "plugins": {
      "@tailwindcss/postcss": {}
    }
  }
}
```
:::
