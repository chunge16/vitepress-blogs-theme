# Author Front Matter

Author pages can also define frontmatter at the top of the Markdown file. You can still use standard VitePress frontmatter, but the fields below are the ones used by `VitePress Blog`.

## Example

```yaml
---
name: Robot Editor
avatar: /authors/robot-editor.png
gravatar: gravatarid
twitter: '@twitter'
---
```

## Available Fields

### name

The display name of the author.

This value is also used to match posts to the author profile, so it should stay consistent with the `author` field in your [post frontmatter](./frontmatter-post).

### avatar

The image shown for the author.

- Type: `string`
- Example: `/authors/robot-editor.png`

Use this when you want full control over the author image.

### gravatar

The Gravatar identifier for the author.

If you prefer using Gravatar instead of a local avatar image, provide the Gravatar ID here.

### twitter

The author's X or Twitter handle.

- Example: `@chunge16`

Use this to render a social profile link on the author page.

### tags

Tags associated with the author.

These can be written as a list or a comma-separated string, similar to [post tags](./frontmatter-post). They can be useful for describing expertise or topics the author writes about.
