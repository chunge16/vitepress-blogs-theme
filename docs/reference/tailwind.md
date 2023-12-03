# VPB Tailwind Configuration

VitePress Blog uses [Tailwind CSS](https://tailwindcss.com).

Everything is configured and ready to go for you with our [starter template](https://github.com/jcamp-code/starter-vitepress-blog)

### Tailwind.config.js

The `tailwind.config.js` is very simple:

```js
import { defineTailwindConfig } from '@chunge16/vitepress-blogs-theme/config'

module.exports = defineTailwindConfig()
```

This sets the needed content paths and includes the tailwind css [icons](./icons) plugin

### defineTailwindConfig

If you want to customize `tailwind.config.js` further, you can pass options to `defineTailwindConfig`

```ts
defineTailwindConfig(base = './src', config: Partial<Config>)
```

- base: the path your vitepress source is
- config: standard Tailwind config object.

### defineTailwindContent

```ts
defineTailwindContent((base = './src'))
```

- base: the path your vitepress source is

This function returns a list of needed paths to ensure VitePress Blog's components are included in Tailwind's processing:

```js
return [
  './node_modules/@chunge16/vitepress-blogs-theme/config/src/**/*.{js,ts,vue}',
  path.join(base, '**/*.md'),
  path.join(base, '.vitepress/**/*.{js,ts,vue}'),
]
```

### Full customization

If you want to completely, customize your Tailwind config, please be sure the following are included:

```js
import icons from '@jcamp/tailwindcss-plugin-icons'
import { defineTailwindContent } from '@chunge16/vitepress-blogs-theme/config/config'

return {
  darkMode: 'class',
  // @ts-expect-error icons works once transpiled
  plugins: [icons()],
  content: defineTailwindContent(base),
}
```
