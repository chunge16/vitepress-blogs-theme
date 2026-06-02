# 文章 Frontmatter

每篇博客文章都可以在 Markdown 文件顶部定义 frontmatter。你依然可以使用标准的 [VitePress frontmatter](https://vitepress.dev/reference/frontmatter-config)，这里重点说明的是 `VitePress Blog` 会实际处理的这些字段。

## 示例

```yaml
---
date: 2022-12-01
title: 'Markdown: The Language of the Web'
author: Robot Editor
category: Tutorial
comment: true
top: true
sticky: 10
tags:
  - vue
  - web development
---
```

## 可用字段

### date

文章的发布日期。

- 格式：`yyyy-mm-dd`
- 示例：`2024-01-26`

这个值会同时用于页面展示和文章排序。

### title

文章标题。

如果不填写，主题会尝试根据页面路径生成一个兜底标题。

### author

文章作者名。

- 类型：`string`
- 示例：`Robot Editor`

如果你希望文章自动关联到作者资料页，这里的值应当与某个 [作者 frontmatter](./frontmatter-author) 文件里的 `name` 保持一致。如果不填写，主题会使用配置中的默认作者。

### category

文章分类。

- 类型：`string`
- 示例：`Tutorial`

每篇文章只支持一个分类。如果不填写，主题会使用配置中的默认分类。

### tags

标签用于归类和关联文章。

你可以使用 YAML 数组：

```yaml
---
tags:
  - vue
  - web development
---
```

也可以使用逗号分隔的字符串：

```yaml
---
tags: vue, 'web development'
---
```

### comment

控制当前文章是否显示评论区。

如果你已经在主题配置里默认开启评论，可以对单篇文章关闭：

```md
---
comment: false
---
```

如果你在主题配置里默认关闭评论，也可以对单篇文章单独开启：

```md
---
comment: true
---
```

### top

将文章标记为置顶。

```md
---
top: true
---
```

置顶文章会排在普通文章前面。

### sticky

控制置顶文章之间的排序优先级。

```md
---
top: true
sticky: 10
---
```

通常 `sticky` 值越大，置顶优先级越高。对于没有置顶的文章，仍然会按照默认的日期顺序排序。
