# VPB Tailwind 配置

VitePress Blog 使用 [Tailwind CSS](https://tailwindcss.com)，版本为 `v4.1`。

VPB Tailwind 使用官方 Vite 插件 [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) 进行处理。

具体代码可以参考 [vitepress-blogs-theme-template](https://github.com/chunge16/vitepress-blogs-theme-template)。

## 在 VitePress 配置中接入 Tailwind

先安装依赖：

```bash
pnpm add tailwindcss @tailwindcss/vite
```

然后在 `.vitepress/config.js` 中注册 Vite 插件：

::: info .vitepress/config.js
```js
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
})
```
:::

启用插件后，主题样式文件中的 `@import "tailwindcss";` 会自动由 Vite 完成编译。
