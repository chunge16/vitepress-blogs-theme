# VPB Tailwind Configuration

VitePress Blog uses [Tailwind CSS](https://tailwindcss.com).

Everything is configured and ready to go for you with our [vitepress-blogs-theme-template](https://github.com/chunge16/vitepress-blogs-theme-template)

## Tailwind.config.js

The `tailwind.config.js` is very simple:

```js
import { defineTailwindConfig } from '@chunge16/vitepress-blogs-theme/config'

module.exports = defineTailwindConfig()
```

This sets the needed content paths and includes the tailwind css [icons](./icons) plugin

## defineTailwindConfig

If you want to customize `tailwind.config.js` further, you can pass options to `defineTailwindConfig`

```js

defineTailwindConfig(base = './docs', config={})
```

- base: the path your `vitepress` source is
- config: standard Tailwind config object.

## defineTailwindContent

```js
defineTailwindContent((base = './docs'))
```

- base: the path your vitepress source is

This function returns a list of needed paths to ensure `VitePress Blog's` components are included in `Tailwind's` processing:

```js
return [
  './node_modules/@chunge16/vitepress-blogs-theme/config/src/**/*.{js,ts,vue}',
  path.join(base, '**/*.md'),
  path.join(base, '.vitepress/**/*.{js,ts,vue}'),
]
```

## Full customization

If you want to fully customize your Tailwind configuration, make sure `Tailwind.config.js` contains the following:

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
[Tailwind CSS installation](https://tailwindcss.com/docs/installation/using-postcss) is a PostCSS plugin.

Add the configuration content for postcss in `package.json`

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
