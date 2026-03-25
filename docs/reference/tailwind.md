# VPB Tailwind Configuration

VitePress Blog uses [Tailwind CSS](https://tailwindcss.com), version `>= 4.0.0`.

VPB Tailwind is processed with the official Vite plugin [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite).

For specific code, please refer to [vitepress-blogs-theme-template](https://github.com/chunge16/vitepress-blogs-theme-template).

## Add Tailwind to your VitePress config

Install the required packages:

```bash
pnpm add tailwindcss @tailwindcss/vite
```

Then register the Vite plugin in `.vitepress/config.js`:

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

Once the plugin is enabled, `@import "tailwindcss";` inside your theme stylesheet will be compiled automatically.
