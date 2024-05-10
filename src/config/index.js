import path from 'node:path';
import icons from "@jcamp/tailwindcss-plugin-icons";


export async function processData(
    pageData,
    ctx,
    aside = 'left',
    sidebar = false
) {
    const config = ctx?.siteConfig?.site?.themeConfig;
    const postsPattern = config.blog?.postsPath ?? 'blog/posts';
    const authorsPattern = config.blog?.authorsPath ?? 'blog/authors';

    if (pageData.relativePath.includes(postsPattern)) {
        pageData.frontmatter.blog = 'post';
        pageData.frontmatter.aside = aside;
        pageData.frontmatter.sidebar = sidebar;
        pageData.frontmatter.prev = false;
        pageData.frontmatter.next = false;
    }
    if (pageData.relativePath.includes(authorsPattern)) {
        pageData.frontmatter.blog = 'author';
        pageData.frontmatter.aside = aside;
        pageData.frontmatter.sidebar = sidebar;
        pageData.frontmatter.prev = false;
        pageData.frontmatter.next = false;
    }
}

export const tailwindThemeContent =
    './node_modules/@chunge16/vitepress-blogs-theme/src/theme/**/*.{js,ts,vue}';

export function defineTailwindContent(base = './docs') {
    return [
        tailwindThemeContent,
        path.join(base, '**/*.md'),
        path.join(base, '.vitepress/**/*.{js,ts,vue}'),
    ];
}

export function defineTailwindConfig(base = './docs', config) {
    if (base === null || base === undefined) {
        base = './docs';
    }
    return {
        darkMode: 'class',
        // @ts-expect-error icons works once transpiled
        plugins: [icons()],
        content: defineTailwindContent(base),
        ...config,
    };
}
