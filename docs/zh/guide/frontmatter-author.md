# 作者 Frontmatter

作者资料页也可以在 Markdown 文件顶部定义 frontmatter。你当然仍然可以使用标准的 VitePress frontmatter，不过下面这些字段是 `VitePress Blog` 会实际用到的部分。

## 示例

```yaml
---
name: Robot Editor
avatar: /authors/robot-editor.png
gravatar: gravatarid
twitter: '@twitter'
---
```

## 可用字段

### name

作者显示名称。

这个值也会用于把文章和作者资料页关联起来，所以最好与 [文章 frontmatter](./frontmatter-post) 里的 `author` 字段保持一致。

### avatar

作者头像图片地址。

- 类型：`string`
- 示例：`/authors/robot-editor.png`

如果你希望自己控制作者头像展示，直接使用这个字段即可。

### gravatar

作者的 Gravatar 标识。

如果你更希望使用 Gravatar，而不是本地或站内图片，可以在这里填写对应的 Gravatar ID。

### twitter

作者的 X 或 Twitter 账号。

- 示例：`@chunge16`

这个字段通常用于在作者页生成社交链接。

### tags

与作者关联的标签。

写法和 [文章标签](./frontmatter-post) 一样，可以是数组，也可以是逗号分隔的字符串。它适合用来描述作者关注的话题或擅长的领域。
