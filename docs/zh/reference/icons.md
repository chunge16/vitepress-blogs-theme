# VPB Icons 配置

`VitePress Blog` 使用 [@iconify/tailwind4](https://iconify.design/docs/usage/css/tailwind/tailwind4/)，因此你可以在 Markdown 和 Vue 组件中直接使用 Iconify 图标。

你可以使用 [Iconify](https://iconify.design) 提供的任意图标。

图标类名格式与 `i-[carbon--book]` 一致，通常由“图标集名 + 图标名”组成。

## 使用示例

- `carbon--book` <span class="i-[carbon--book] c-[24px]"></span>
- `logos--react` <span class="i-[logos--react]"></span>

```html
<span class="i-[carbon--book]"></span>
<span class="i-[logos--react]"></span>
```

::: tip 内置图标集
主题默认内置以下 Iconify 图标集：

- [@iconify-json/carbon](https://icon-sets.iconify.design/carbon/)
- [@iconify-json/logos](https://icon-sets.iconify.design/logos/vue/)
:::
