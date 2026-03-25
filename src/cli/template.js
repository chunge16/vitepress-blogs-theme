import fs from 'fs/promises';
import path from 'path';

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function writeFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, 'utf-8');
}

function toLiteral(value) {
  return JSON.stringify(value);
}

function formatJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function resolveLocaleContent(language) {
  const isZh = language === 'zh-CN';

  return {
    homeText: isZh ? '首页' : 'Home',
    examplesText: isZh ? '示例' : 'Examples',
    markdownExamplesText: isZh ? 'Markdown 示例' : 'Markdown Examples',
    runtimeApiExamplesText: isZh ? '运行时 API 示例' : 'Runtime API Examples',
    blogText: 'Blog',
    blogHomeText: isZh ? '博客首页' : 'Blog Home',
    tagsText: isZh ? '标签' : 'Tags',
    archivesText: isZh ? '归档' : 'Archives',
    heroTagline: isZh ? '欢迎来到我的博客' : 'Welcome to my blog',
    featureA: isZh ? '开始写作' : 'Start Writing',
    featureADetails: isZh ? '使用 VitePress Blog 快速发布你的第一篇文章。' : 'Publish your first post quickly with VitePress Blog.',
    featureB: isZh ? '管理作者与标签' : 'Organize Authors and Tags',
    featureBDetails: isZh ? '通过作者页、标签页和归档页组织博客内容。' : 'Organize your content with author pages, tags, and archives.',
    featureC: isZh ? '自由扩展主题' : 'Extend the Theme',
    featureCDetails: isZh ? '保留 VitePress 的扩展能力，按需继续自定义。' : 'Keep the flexibility of VitePress and customize the theme as needed.',
  };
}

async function ensurePackageJson(addScripts) {
  if (!addScripts) return;

  const pkgPath = path.join(process.cwd(), 'package.json');
  const defaultPackageJson = {
    name: 'your-blog-name',
    type: 'module',
    version: '1.0.0',
    scripts: {
      'docs:dev': 'vitepress dev docs',
      'docs:build': 'vitepress build docs',
      'docs:preview': 'vitepress preview docs',
    },
    dependencies: {
      '@chunge16/vitepress-blogs-theme': 'latest',
      vue: 'latest',
      '@tailwindcss/vite': '^4.2.2',
      tailwindcss: '^4.2.2',
      '@iconify/tailwind4': '^1.2.1',
      vitepress: '^1.6.4',
    },
  };

  try {
    const existing = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));
    existing.scripts = {
      ...existing.scripts,
      'docs:dev': existing.scripts?.['docs:dev'] ?? 'vitepress dev docs',
      'docs:build': existing.scripts?.['docs:build'] ?? 'vitepress build docs',
      'docs:preview': existing.scripts?.['docs:preview'] ?? 'vitepress preview docs',
    };
    await writeFile(pkgPath, formatJson(existing));
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(pkgPath, formatJson(defaultPackageJson));
      return;
    }

    if (error instanceof SyntaxError) {
      throw new Error('Existing package.json is invalid JSON. Please fix it before running vitepress-blog-init.');
    }

    throw error;
  }
}

async function ensureGitignore(vitePressProjectRoot) {
  const gitignorePath = path.join(process.cwd(), '.gitignore');
  const entries = [
    `${vitePressProjectRoot}/.vitepress/cache`,
    `${vitePressProjectRoot}/.vitepress/dist`,
    'node_modules',
    '.DS_Store',
  ];

  try {
    const existing = await fs.readFile(gitignorePath, 'utf-8');
    const lines = existing.split(/\r?\n/);
    let updated = existing;

    for (const entry of entries) {
      if (!lines.includes(entry)) {
        updated = `${updated.replace(/\s*$/, '')}\n${entry}\n`;
      }
    }

    if (updated !== existing) {
      await writeFile(gitignorePath, updated);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(gitignorePath, `${entries.join('\n')}\n`);
      return;
    }

    throw error;
  }
}

export async function generateTemplate(answers) {
  const {
    vitePressProjectRoot,
    siteTitle,
    siteDescription,
    siteUrl,
    language,
    enableGiscus,
    giscusRepo,
    giscusRepoId,
    giscusCategoryId,
    defaultAuthor,
    dateLocale,
    dateFormat,
    addScripts,
  } = answers;

  const base = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;
  const locale = resolveLocaleContent(language);

  const vitepressConfig = `import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';
import { processData } from '@chunge16/vitepress-blogs-theme/config';
import { enUS, zhCN } from 'date-fns/locale';

export default defineConfig({
  base: ${toLiteral(base)},
  title: ${toLiteral(siteTitle)},
  description: ${toLiteral(siteDescription)},
  lang: ${toLiteral(language)},
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: ${toLiteral(locale.homeText)}, link: '/' },
      { text: ${toLiteral(locale.examplesText)}, link: '/markdown-examples' },
      {
        text: ${toLiteral(locale.blogText)},
        activeMatch: '/blog/',
        items: [
          {
            text: ${toLiteral(locale.blogHomeText)},
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: ${toLiteral(locale.tagsText)},
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: ${toLiteral(locale.archivesText)},
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          // {
            // text: 'RSS Feed',
            // link: '/blog/feed.rss',
          // },
        ],
      },
    ],

    sidebar: [
      {
        text: ${toLiteral(locale.examplesText)},
        items: [
          { text: ${toLiteral(locale.markdownExamplesText)}, link: '/markdown-examples' },
          { text: ${toLiteral(locale.runtimeApiExamplesText)}, link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    blog: {
      title: ${toLiteral(siteTitle)},
      description: ${toLiteral(siteDescription)},
      defaultAuthor: ${toLiteral(defaultAuthor)},
      categoryIcons: {
          article: 'i-[carbon--notebook]',
          tutorial: 'i-[carbon--book]',
          document: 'i-[carbon--document]',
      },
      tagIcons: {
        github: 'i-[carbon--logo-github]',
        vue: 'i-[logos--vue]',
        javascript: 'i-[logos--javascript]',
        'web development': 'i-[carbon--development]',
        html: 'i-[logos--html-5]',
        git: 'i-[logos--git-icon]',
        vite: 'i-[logos--vitejs]',
        locked: 'i-[carbon--locked]',
        react: 'i-[logos--react]',
        blog: 'i-[carbon--blog]',
        comment: 'i-[carbon--add-comment]',
      },
      dateConfig: {
        format: ${toLiteral(dateFormat)},
        locale: ${dateLocale === 'zh-CN' ? 'zhCN' : 'enUS'}
      }${enableGiscus ? `,
      giscus: {
        repo: ${toLiteral(giscusRepo)},
        repoId: ${toLiteral(giscusRepoId)},
        category: 'General',
        categoryId: ${toLiteral(giscusCategoryId)},
        mapping: 'pathname',
        inputPosition: 'top',
        lang: ${toLiteral(language === 'zh-CN' ? 'zh-CN' : 'en')},
        lightTheme: 'light',
        darkTheme: 'transparent_dark',
        defaultEnable: true,
      }` : ''}
    },
    
    search: {
      provider: 'local',
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },

  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});
`;

  const themeConfig = `import { VPBTheme } from '@chunge16/vitepress-blogs-theme';

export default {
  extends: VPBTheme,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
};
`;

  const themeStyle = `
/**
 * Customize default theme styling by overriding CSS variables:
 * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css
 */

/**
 * Colors
 * -------------------------------------------------------------------------- */

 :root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
  --vp-c-brand-lighter: #9499ff;
  --vp-c-brand-lightest: #bcc0ff;
  --vp-c-brand-dark: #535bf2;
  --vp-c-brand-darker: #454ce1;
  --vp-c-brand-dimm: rgba(100, 108, 255, 0.08);
}

/**
 * Component: Button
 * -------------------------------------------------------------------------- */

:root {
  --vp-button-brand-border: var(--vp-c-brand-light);
  --vp-button-brand-text: var(--vp-c-white);
  --vp-button-brand-bg: var(--vp-c-brand);
  --vp-button-brand-hover-border: var(--vp-c-brand-light);
  --vp-button-brand-hover-text: var(--vp-c-white);
  --vp-button-brand-hover-bg: var(--vp-c-brand-light);
  --vp-button-brand-active-border: var(--vp-c-brand-light);
  --vp-button-brand-active-text: var(--vp-c-white);
  --vp-button-brand-active-bg: var(--vp-button-brand-bg);
}

/**
 * Component: Home
 * -------------------------------------------------------------------------- */

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    120deg,
    #bd34fe 30%,
    #41d1ff
  );

  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #bd34fe 50%,
    #47caff 50%
  );
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}

/**
 * Component: Custom Block
 * -------------------------------------------------------------------------- */

:root {
  --vp-custom-block-tip-border: var(--vp-c-brand);
  --vp-custom-block-tip-text: var(--vp-c-brand-darker);
  --vp-custom-block-tip-bg: var(--vp-c-brand-dimm);
}

.dark {
  --vp-custom-block-tip-border: var(--vp-c-brand);
  --vp-custom-block-tip-text: var(--vp-c-brand-lightest);
  --vp-custom-block-tip-bg: var(--vp-c-brand-dimm);
}

/**
 * Component: Algolia
 * -------------------------------------------------------------------------- */

.DocSearch {
  --docsearch-primary-color: var(--vp-c-brand) !important;
}
`;

const indexMd = `---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: ${toLiteral(siteTitle)}
  text: ${toLiteral(siteDescription)}
  tagline: ${toLiteral(locale.heroTagline)}
  actions:
    - theme: brand
      text: ${locale.markdownExamplesText}
      link: /markdown-examples
    - theme: alt
      text: ${locale.runtimeApiExamplesText}
      link: /api-examples

features:
  - title: ${locale.featureA}
    details: ${locale.featureADetails}
  - title: ${locale.featureB}
    details: ${locale.featureBDetails}
  - title: ${locale.featureC}
    details: ${locale.featureCDetails}
---
`;

  const markdownExamplesMd = `# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

\`\`\`\`
\`\`\`js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
\`\`\`
\`\`\`\`

**Output**

\`\`\`js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
\`\`\`

## Custom Containers

**Input**

\`\`\`md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
\`\`\`

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
`;

  const apiExamplesMd = `---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main \`useData()\` API can be used to access site, theme, and page data for the current page. It works in both \`.md\` and \`.vue\` files:

\`\`\`md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
\`\`\`

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
`;

const blogIndexMd = `---
layout: home
---

<VPBHome />
`;

const post1Md = `---
date: ${new Date().toISOString()}
title: 'Markdown: The Language of the Web'
author: Robot Editor
category: Tutorial
tags:
  - vue
  - web development
comment: false
---

Are you a web developer or content creator looking to make your life easier? Then Markdown is the language for you! Markdown is a plain text formatting syntax that allows you to create documents for the web quickly and easily. This blog post will teach you the basics of Markdown so you can start using it right away. Whether you're a beginner or an experienced user, you'll be able to pick up the syntax quickly and start creating beautiful web content with ease. Let's dive into the world of Markdown!

---

## What is Markdown?

Markdown is a lightweight markup language created by John Gruber in 2004 as a way to write formatted text for the web. It is designed to be easy to read and write, even for those who are not tech savvy. Markdown utilizes symbols, punctuation, and other special characters to format text, making it both easier and faster to create content.
Markdown is commonly used in websites such as GitHub, Reddit, and Stack Overflow, but it can also be used to create blog posts, websites, and even email. With Markdown, it’s easy to create simple, clean HTML without having to write code.
Markdown has become an industry standard for writing formatted text on the web. It’s been embraced by developers and non-developers alike as a way to quickly and easily create content that looks professional. Markdown is especially useful for those who don’t have a lot of coding experience but want to create clean and presentable HTML code.

## What are the benefits of using Markdown?

Markdown is a lightweight markup language that makes it easy to format text for the web. It is often used for writing articles, blog posts, and documentation for software projects.
One of the main benefits of using Markdown is that it is quick and simple to learn. Most people can become proficient with the language in a matter of hours. This means you don’t need to take time out of your day to learn complex coding languages.
Using Markdown also has the benefit of streamlining workflow. You can write content quickly and easily, then convert it into HTML to post on your blog or website. The process is faster than writing HTML code from scratch and ensures that your code is up to standard.
Markdown also allows for more flexibility than other languages, allowing you to customize the look and feel of your content without having to learn HTML or CSS. This means you can create documents with bold, italic, and other formatting without having to manually enter any code.
Finally, Markdown documents are easy to read. Unlike HTML documents, Markdown documents can be read without any extra effort or knowledge. This means it’s easy for collaborators or editors to understand the structure of your documents and make changes when needed.
All in all, Markdown is an incredibly useful language that is fast becoming the go-to choice for web writers and developers alike. Its simplicity and flexibility make it an ideal choice for anyone looking to quickly create well-formatted content for the web.

## How do I get started with Markdown?

Getting started with Markdown is a relatively simple process. To begin, you'll need to get familiar with the basic syntax of the language.
Markdown was designed to be as intuitive and user-friendly as possible. Most of its syntax is self-explanatory and easy to learn. Some basic symbols like "#" for headings, "\*" for italics, and ">" for blockquotes are easy to remember. There are also more specific elements like tables, images, and lists.
To start using Markdown, you'll need a text editor or an online platform that supports it. Popular choices include Ulysses, iA Writer, Texts, Typora, and Dillinger. Most popular blogging platforms like WordPress and Medium also support Markdown.
When it comes to writing, the best way to learn Markdown is by example. Check out some of the existing posts written in Markdown to get a better understanding of the syntax and how it's used. You can also use an online tool such as Markdown Guide to help you get up to speed quickly.
Once you have a good handle on the basics of Markdown, you can start writing your own content. Keep in mind that Markdown is flexible and you don't have to follow the same formatting style each time. Feel free to experiment and create your own unique style.

## Tips and Tricks for Using Markdown

Markdown is a versatile language that can be used for many different purposes. There are a few tips and tricks you can use to make the most of your Markdown experience:

1. Use Headings – The best way to organize your content is to use headings. This will break up your text into sections that are easier to read and understand. To create a heading in Markdown, you simply type a hash (“#”) followed by the title of the section. For example, “# Introduction” will create an introduction section.
2. Use Lists – To create lists in Markdown, use either hyphens (“-”) or asterisks (“\*”). This is great for breaking down ideas into an organized structure that’s easy to read and follow.
3. Use Inline HTML – If you’re looking for more control over the look and feel of your document, you can use inline HTML tags to customize it further. This is great if you want to add styling elements such as color, font size, or even images.
4. Format Your Text – To make your text more readable, you can use formatting tools like bold, italics, and underlines. Just type two asterisks before and after the words you want to emphasize to make them bold. Similarly, for italics, type one asterisk before and after the words you want to italicize. Lastly, for underlining text, use two underscores on either side of the word you want to underline.
5. Use Emojis – Emojis are great for adding visual interest to your content. Simply type a colon followed by the emoji name (e.g., “:smile:”).
   By using these tips and tricks, you’ll be able to get the most out of the Markdown language. With some practice and experimentation, you’ll be creating beautiful documents in no time!

## References

- https://guides.github.com/features/mastering-markdown/
`;

const post2Md = `---
title: Post 2
date: ${new Date().toISOString()}
tags: [vue, javascript, web development]
author: AI Writer
---

This is the second post in our series.
`;

const aiWriterMd = `---
name: AI Writer
avatar: https://cdn-icons-png.flaticon.com/64/149/149071.png
---

## AI Writer

An AI writer is a revolutionary machine-learning system that produces flawless writing pieces, quickly and accurately. This computer-based writer uses natural language processing to break down the topic, identify key themes and ideas, and generate human-readable articles with speed and precision. It has a vast library of synonyms and references, enabling it to create articles without plagiarism. By utilizing an AI writer, you can generate error-free articles within minutes, as well as optimizing articles for search engine rankings and targeted readership. In addition, this AI technology allows users to have full control over their content with its customization capabilities. All of these factors make the AI writer an invaluable asset for any type of content production.
`

const robotEditorMd = `---
name: Robot Editor
gravatar: eca93da2c67aadafe35d477aa8f454b8
twitter: '@getanyword'
---

## Robot Editor

A robot editor is a sophisticated software tool that automates the process of editing and formatting text. It uses advanced algorithms to identify and correct grammar, spelling, and punctuation errors, as well as to optimize the layout and structure of the document. This AI-powered editor can save hours of manual work and ensure that your writing is of the highest quality. Whether you're a student, writer, or professional, a robot editor is an invaluable asset for any type of content production.
`;



const archivesMd = `---
layout: home
---

<VPBArchives />
`;

const tagsMd = `---
layout: home
---

<VPBTags />
`;

  try {
    await ensureDir(path.join(vitePressProjectRoot, '.vitepress'));
    await ensureDir(path.join(vitePressProjectRoot, '.vitepress/theme'));
    await ensureDir(path.join(vitePressProjectRoot, 'blog/posts'));
    await ensureDir(path.join(vitePressProjectRoot, 'blog/authors'));

    if (addScripts) {
      await ensurePackageJson(addScripts);
      await ensureGitignore(vitePressProjectRoot);
    }

    await writeFile(path.join(vitePressProjectRoot, '.vitepress/config.js'), vitepressConfig);
    await writeFile(path.join(vitePressProjectRoot, '.vitepress/theme/index.js'), themeConfig);
    await writeFile(path.join(vitePressProjectRoot, '.vitepress/theme/style.css'), themeStyle);

    await writeFile(path.join(vitePressProjectRoot, 'index.md'), indexMd);
    await writeFile(path.join(vitePressProjectRoot, 'markdown-examples.md'), markdownExamplesMd);
    await writeFile(path.join(vitePressProjectRoot, 'api-examples.md'), apiExamplesMd);
    await writeFile(path.join(vitePressProjectRoot, 'blog/index.md'), blogIndexMd);
    await writeFile(path.join(vitePressProjectRoot, 'blog/archives.md'), archivesMd);
    await writeFile(path.join(vitePressProjectRoot, 'blog/tags.md'), tagsMd);
    await writeFile(path.join(vitePressProjectRoot, 'blog/posts/post1.md'), post1Md);
    await writeFile(path.join(vitePressProjectRoot, 'blog/posts/post2.md'), post2Md);

    await writeFile(path.join(vitePressProjectRoot, 'blog/authors/ai-writer.md'), aiWriterMd);
    await writeFile(path.join(vitePressProjectRoot, 'blog/authors/robot-editor.md'), robotEditorMd);
  } catch (error) {
    console.error('\nError generating files:', error.message);
    throw error;
  }
}
