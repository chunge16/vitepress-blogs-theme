# Post Front Matter

Each blog post can define frontmatter at the top of its Markdown file. You can still use any standard [VitePress frontmatter](https://vitepress.dev/reference/frontmatter-config); this page only covers the fields used by `VitePress Blog`.

## Example

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

## Available Fields

### date

The publish date of the post.

- Format: `yyyy-mm-dd`
- Example: `2024-01-26`

This value is used for display and sorting.

### title

The title of the post.

If omitted, the theme will fall back to a title derived from the page path.

### author

The author name for the post.

- Type: `string`
- Example: `Robot Editor`

This should match the `name` field in one of your [author frontmatter](./frontmatter-author) files if you want the post to link to a full author profile. If omitted, the theme uses the configured default author.

### category

The category for the post.

- Type: `string`
- Example: `Tutorial`

Only one category is supported per post. If omitted, the theme uses the configured default category.

### tags

Tags help group related posts.

You can define them as a YAML array:

```yaml
---
tags:
  - vue
  - web development
---
```

Or as a comma-separated string:

```yaml
---
tags: vue, 'web development'
---
```

### comment

Controls whether the comment section appears on the current post.

If comments are enabled globally in theme config, you can turn them off for one post:

```md
---
comment: false
---
```

If comments are disabled globally, you can still turn them on for one post:

```md
---
comment: true
---
```

### top

Marks the post as pinned.

```md
---
top: true
---
```

Pinned posts appear before normal posts.

### sticky

Controls the order of pinned posts.

```md
---
top: true
sticky: 10
---
```

Higher-priority pinned posts can be given a larger `sticky` value. For non-pinned posts, normal date-based sorting still applies.
