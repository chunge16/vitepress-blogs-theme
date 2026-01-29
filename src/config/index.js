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
