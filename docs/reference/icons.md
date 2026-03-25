# VPB Icons Configuration

`VitePress Blog` uses [@iconify/tailwind4](https://iconify.design/docs/usage/css/tailwind/tailwind4/) so you can use Iconify icons directly in Markdown and Vue components.

Any icon published on [Iconify](https://iconify.design) can be used.

The class format follows examples like `i-[carbon--book]`, where the class name combines an icon collection with an icon name.

## Usage Examples

- `carbon--book` <span class="i-[carbon--book] c-[24px]"></span>
- `logos--react` <span class="i-[logos--react]"></span>

```html
<span class="i-[carbon--book]"></span>
<span class="i-[logos--react]"></span>
```

::: tip Included icon sets
The theme ships with these Iconify collections by default:

- [@iconify-json/carbon](https://icon-sets.iconify.design/carbon/)
- [@iconify-json/logos](https://icon-sets.iconify.design/logos/vue/)
:::
