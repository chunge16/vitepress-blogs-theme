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

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
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

function resolveDemoContent(language) {
  const isZh = language === 'zh-CN';
  const now = new Date().toISOString();

  return {
    markdownExamplesMd: isZh ? `# Markdown 示例

这个页面展示 VitePress 内置 Markdown 扩展的常见用法。

## 代码高亮

\`\`\`js{2}
const message = 'Hello VitePress Blog'
console.log(message)
\`\`\`

## 自定义容器

::: tip
你可以用自定义容器突出提示、警告和补充说明。
:::

::: details
这里适合放折叠内容。
:::
` : `# Markdown Extension Examples

This page demonstrates common built-in Markdown extensions provided by VitePress.

## Syntax Highlighting

\`\`\`js{2}
const message = 'Hello VitePress Blog'
console.log(message)
\`\`\`

## Custom Containers

::: tip
Use custom containers to highlight tips, warnings, and extra notes.
:::

::: details
This is a good place for collapsible details.
:::
`,
    apiExamplesMd: isZh ? `---
outline: deep
---

# 运行时 API 示例

这个页面展示如何在 Markdown 中读取 VitePress 运行时数据。

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 当前页面

<pre>{{ page }}</pre>

## 站点配置

<pre>{{ site }}</pre>
` : `---
outline: deep
---

# Runtime API Examples

This page demonstrates how to read VitePress runtime data from Markdown.

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Current Page

<pre>{{ page }}</pre>

## Site Config

<pre>{{ site }}</pre>
`,
    post1Md: isZh ? `---
date: ${now}
title: '开始写第一篇博客'
author: 机器人编辑
category: Tutorial
tags:
  - vite
  - blog
comment: false
---

欢迎使用 VitePress Blog。你可以从这篇文章开始，熟悉文章 frontmatter、标签、分类和作者信息。

## 下一步

把这篇示例文章替换成你的第一篇正式内容，然后在 \`blog/posts\` 目录继续添加 Markdown 文件。
` : `---
date: ${now}
title: 'Start Your First Blog Post'
author: Robot Editor
category: Tutorial
tags:
  - vite
  - blog
comment: false
---

Welcome to VitePress Blog. Use this post to explore frontmatter, tags, categories, and author metadata.

## Next Step

Replace this sample with your first real post, then keep adding Markdown files under \`blog/posts\`.
`,
    post2Md: isZh ? `---
title: 第二篇文章
date: ${now}
tags: [vue, javascript]
author: AI 写作者
---

这是第二篇示例文章，用来展示多作者和多标签列表。
` : `---
title: Second Post
date: ${now}
tags: [vue, javascript]
author: AI Writer
---

This second sample post demonstrates multiple authors and tag lists.
`,
    aiWriterMd: isZh ? `---
name: AI 写作者
avatar: https://cdn-icons-png.flaticon.com/64/149/149071.png
---

## AI 写作者

这是一个示例作者页面。你可以在这里补充作者简介、头像和社交链接。
` : `---
name: AI Writer
avatar: https://cdn-icons-png.flaticon.com/64/149/149071.png
---

## AI Writer

This is a sample author page. Add a bio, avatar, and social links here.
`,
    robotEditorMd: isZh ? `---
name: 机器人编辑
gravatar: eca93da2c67aadafe35d477aa8f454b8
twitter: '@getanyword'
---

## 机器人编辑

这是另一个示例作者页面，用来展示 Gravatar 和社交账号字段。
` : `---
name: Robot Editor
gravatar: eca93da2c67aadafe35d477aa8f454b8
twitter: '@getanyword'
---

## Robot Editor

This second sample author demonstrates Gravatar and social profile fields.
`,
  };
}

function normalizeProjectRoot(projectRoot) {
  return String(projectRoot ?? '')
    .trim()
    .replace(/\\/g, '/')
    .replace(/\/+$/, '')
    .replace(/^\.\//, '');
}

function quoteCommandPath(projectRoot) {
  if (/^[\w./-]+$/.test(projectRoot)) return projectRoot;

  return JSON.stringify(projectRoot);
}

function resolveScriptNames(projectRoot) {
  const normalizedRoot = normalizeProjectRoot(projectRoot);
  const scriptPrefix = normalizedRoot === 'docs' ? 'docs' : normalizedRoot.replace(/[^\w:-]+/g, '-');

  return {
    dev: `${scriptPrefix}:dev`,
    build: `${scriptPrefix}:build`,
    preview: `${scriptPrefix}:preview`,
  };
}

function resolveScriptCommands(projectRoot) {
  const commandRoot = quoteCommandPath(normalizeProjectRoot(projectRoot));

  return {
    dev: `vitepress dev ${commandRoot}`,
    build: `vitepress build ${commandRoot}`,
    preview: `vitepress preview ${commandRoot}`,
  };
}

function hasPackageDependency(pkg, dependencyName) {
  return Boolean(
    pkg.dependencies?.[dependencyName]
    || pkg.devDependencies?.[dependencyName]
    || pkg.peerDependencies?.[dependencyName]
    || pkg.optionalDependencies?.[dependencyName]
  );
}

function ensureDependency(pkg, dependencyName, version) {
  if (hasPackageDependency(pkg, dependencyName)) return;

  pkg.dependencies = {
    ...pkg.dependencies,
    [dependencyName]: version,
  };
}

async function ensurePackageJson({ addScripts, vitePressProjectRoot }) {
  if (!addScripts) return;

  const pkgPath = path.join(process.cwd(), 'package.json');
  const scriptNames = resolveScriptNames(vitePressProjectRoot);
  const scriptCommands = resolveScriptCommands(vitePressProjectRoot);
  const defaultPackageJson = {
    name: 'your-blog-name',
    type: 'module',
    version: '1.0.0',
    scripts: {
      [scriptNames.dev]: scriptCommands.dev,
      [scriptNames.build]: scriptCommands.build,
      [scriptNames.preview]: scriptCommands.preview,
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
      [scriptNames.dev]: existing.scripts?.[scriptNames.dev] ?? scriptCommands.dev,
      [scriptNames.build]: existing.scripts?.[scriptNames.build] ?? scriptCommands.build,
      [scriptNames.preview]: existing.scripts?.[scriptNames.preview] ?? scriptCommands.preview,
    };
    ensureDependency(existing, '@chunge16/vitepress-blogs-theme', 'latest');
    ensureDependency(existing, 'vue', 'latest');
    ensureDependency(existing, '@tailwindcss/vite', '^4.2.2');
    ensureDependency(existing, 'tailwindcss', '^4.2.2');
    ensureDependency(existing, '@iconify/tailwind4', '^1.2.1');
    ensureDependency(existing, 'vitepress', '^1.6.4');
    await writeFile(pkgPath, formatJson(existing));
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(pkgPath, formatJson(defaultPackageJson));
      return;
    }

    if (error instanceof SyntaxError) {
      throw new Error('Existing package.json is invalid JSON. Please fix it before running vitepress-blog-init.', {
        cause: error,
      });
    }

    throw error;
  }
}

async function ensureGitignore(vitePressProjectRoot) {
  const gitignorePath = path.join(process.cwd(), '.gitignore');
  const normalizedRoot = normalizeProjectRoot(vitePressProjectRoot);
  const entries = [
    `${normalizedRoot}/.vitepress/cache`,
    `${normalizedRoot}/.vitepress/dist`,
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

async function assertNoFileConflicts(files, overwriteExisting) {
  if (overwriteExisting) return;

  const conflicts = [];

  for (const filePath of files) {
    if (await pathExists(filePath)) {
      conflicts.push(path.relative(process.cwd(), filePath));
    }
  }

  if (conflicts.length) {
    throw new Error(
      `The following files already exist:\n${conflicts.map((file) => `  - ${file}`).join('\n')}\n\nRun vitepress-blog-init again and choose overwrite if you want to replace them.`
    );
  }
}

export async function generateTemplate(answers) {
  const {
    vitePressProjectRoot,
    siteTitle,
    siteDescription,
    siteUrl,
    language,
    starterTemplate = 'demo',
    enableGiscus,
    giscusRepo,
    giscusRepoId,
    giscusCategoryId,
    defaultAuthor,
    dateLocale,
    dateFormat,
    addScripts,
    updateGitignore,
    overwriteExisting,
  } = answers;

  const base = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;
  const locale = resolveLocaleContent(language);
  const includeDemo = starterTemplate !== 'minimal';
  const demoContent = resolveDemoContent(language);
  const normalizedProjectRoot = normalizeProjectRoot(vitePressProjectRoot);
  const outputRoot = path.join(process.cwd(), normalizedProjectRoot);
  const scripts = resolveScriptNames(normalizedProjectRoot);
  const exampleNavItem = includeDemo ? `
      { text: ${toLiteral(locale.examplesText)}, link: '/markdown-examples' },` : '';
  const sidebarConfig = includeDemo ? `sidebar: [
      {
        text: ${toLiteral(locale.examplesText)},
        items: [
          { text: ${toLiteral(locale.markdownExamplesText)}, link: '/markdown-examples' },
          { text: ${toLiteral(locale.runtimeApiExamplesText)}, link: '/api-examples' }
        ]
      }
    ],` : 'sidebar: [],';
  const homeActions = includeDemo ? `    - theme: brand
      text: ${locale.markdownExamplesText}
      link: /markdown-examples
    - theme: alt
      text: ${locale.runtimeApiExamplesText}
      link: /api-examples` : `    - theme: brand
      text: ${locale.blogText}
      link: /blog/`;

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
      { text: ${toLiteral(locale.homeText)}, link: '/' },${exampleNavItem}
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

    ${sidebarConfig}

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
import './style.css';

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
${homeActions}

features:
  - title: ${locale.featureA}
    details: ${locale.featureADetails}
  - title: ${locale.featureB}
    details: ${locale.featureBDetails}
  - title: ${locale.featureC}
    details: ${locale.featureCDetails}
---
`;

const blogIndexMd = `---
layout: home
---

<VPBHome />
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

  const generatedFiles = [
      ['.vitepress/config.js', vitepressConfig],
      ['.vitepress/theme/index.js', themeConfig],
      ['.vitepress/theme/style.css', themeStyle],
      ['index.md', indexMd],
      ['blog/index.md', blogIndexMd],
      ['blog/archives.md', archivesMd],
      ['blog/tags.md', tagsMd],
      ...(includeDemo ? [
        ['markdown-examples.md', demoContent.markdownExamplesMd],
        ['api-examples.md', demoContent.apiExamplesMd],
        ['blog/posts/post1.md', demoContent.post1Md],
        ['blog/posts/post2.md', demoContent.post2Md],
        ['blog/authors/ai-writer.md', demoContent.aiWriterMd],
        ['blog/authors/robot-editor.md', demoContent.robotEditorMd],
      ] : []),
  ].map(([filePath, content]) => [path.join(outputRoot, filePath), content]);

  await assertNoFileConflicts(
    generatedFiles.map(([filePath]) => filePath),
    overwriteExisting
  );

  await ensureDir(path.join(outputRoot, '.vitepress'));
  await ensureDir(path.join(outputRoot, '.vitepress/theme'));
  await ensureDir(path.join(outputRoot, 'blog/posts'));
  await ensureDir(path.join(outputRoot, 'blog/authors'));
  await ensureDir(path.join(outputRoot, 'public'));

  if (addScripts) {
    await ensurePackageJson({ addScripts, vitePressProjectRoot: normalizedProjectRoot });
  }

  if (updateGitignore) {
    await ensureGitignore(normalizedProjectRoot);
  }

  for (const [filePath, content] of generatedFiles) {
    await writeFile(filePath, content);
  }

  return { scripts };
}
