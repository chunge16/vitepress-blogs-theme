# Post 前置内容

每篇文章在其Markdown文件的顶部可以设置前置内容。你也可以使用VitePress提供的任何[frontmatter](https://vitepress.dev/reference/frontmatter-config)。这些都是VitePress博客会处理的`frontmatter`

```yaml
---
date: 2022-12-01
title: 'Markdown: The Language of the Web'
author: Robot Editor
category: Tutorial
next: false
tags:
  - vue
  - web development
---
```

## 日期

文章的日期，采用 yyyy-mm-dd 格式。

## 标题

文章的标题

## 作者
为文章指定作者。可以在作者文件中设置额外的详细信息。默认的作者可以在配置中设置。

这应该与 [author](./frontmatter-author) 文件中的一个名字相匹配，以确保显示额外的信息。


## 文章分类
为文章指定你想要的类别，限制为一个。默认的类别可以在配置中设置。

## 文章标签

为这篇文章设置标签，可以用逗号分隔列出，或者单独列出。


```yaml
---
tags:
  - vue
  - web development
    
---

or

---
tags: vue, 'web development'

---

```
