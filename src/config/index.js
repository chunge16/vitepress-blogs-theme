import { isPathWithinDirectory } from '../theme/composables/shared.js';

export async function processData(
    pageData,
    ctx,
    aside = 'left',
    sidebar = false
) {
    const config = ctx?.siteConfig?.site?.themeConfig;
    const postsPattern = config?.blog?.postsPath ?? 'blog/posts';
    const authorsPattern = config?.blog?.authorsPath ?? 'blog/authors';

    if (isPathWithinDirectory(pageData.relativePath, postsPattern)) {
        pageData.frontmatter.blog = 'post';
        pageData.frontmatter.aside = aside;
        pageData.frontmatter.sidebar = sidebar;
        pageData.frontmatter.prev = false;
        pageData.frontmatter.next = false;
    }
    if (isPathWithinDirectory(pageData.relativePath, authorsPattern)) {
        pageData.frontmatter.blog = 'author';
        pageData.frontmatter.aside = aside;
        pageData.frontmatter.sidebar = sidebar;
        pageData.frontmatter.prev = false;
        pageData.frontmatter.next = false;
    }
}
