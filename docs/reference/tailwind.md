# VPB Tailwind Configuration

VitePress Blog uses [Tailwind CSS](https://tailwindcss.com), version `v4.1`.

VPB Tailwind is processed using the PostCSS plugin [tailwindcss](https://tailwindcss.com/docs/installation/using-postcss).

For specific code, please refer to [vitepress-blogs-theme-template](https://github.com/chunge16/vitepress-blogs-theme-template).

## Add Tailwind to your PostCSS configuration

There are 2 ways to add Tailwind to your PostCSS configuration.

### Option 1: postcss.config.mjs configuration

Add the tailwindcss plugin to your PostCSS configuration, as shown below:

::: info postcss.config.mjs
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```
:::

### Option 2: package.json configuration

Add the `postcss` configuration to your `package.json`, as shown below:

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
