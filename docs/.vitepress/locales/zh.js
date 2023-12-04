import { descriptionZH } from "../meta.js";
import pkg from "../../../package.json";
export default {
    title: 'VitePress Blog',
    description: descriptionZH,
    themeConfig: {
        nav: [
            {
                text: '指南',
                link: 'zh/guide/what-is-vitepress-blog',
                activeMatch: 'zh/guide/',
            },
            {
                text: '配置',
                link: 'zh/reference/config',
                activeMatch: 'zh/reference/',
            },
            {
                text: '示例',
                items: [
                    {
                        text: 'Markdown',
                        link: '/markdown-examples',
                    },
                    {
                        text: 'api-examples',
                        link: '/api-examples',
                    },
                    {
                        text: 'Theme Test',
                        link: '/theme-test',
                    },
                ],
            },
            {
                text: '博客',
                activeMatch: 'zh/blog/',
                items: [
                    {
                        text: '博客首页',
                        link: 'zh/blog/',
                        activeMatch: 'zh/blog/$',
                    },
                    {
                        text: '标签',
                        link: 'zh/blog/tags',
                        activeMatch: 'zh/blog/tags',
                    },
                    {
                        text: '归档',
                        link: 'zh/blog/archives',
                        activeMatch: 'zh/blog/archives',
                    },
                    // {
                    //   text: 'RSS Feed',
                    //   link: '/blog/feed.rss',
                    // },
                ],
            },
            {
                text: pkg.version,
                items: [
                    {
                        text: '更新日志',
                        link: 'https://github.com/chunge16/vitepress-blogs-theme/blob/main/CHANGELOG.md',
                    },
                ],
            },
        ],
        sidebar: {
            '/guide/': sidebarGuide(),
            '/reference/': sidebarReference(),
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        returnToTopLabel: '返回顶部',
        outlineTitle: '导航栏',
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '归档',
        lastUpdatedText: '更新于',
    },
};


function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                {
                    text: 'What is VitePress Blog?',
                    link: 'zh/guide/what-is-vitepress-blog',
                },
                { text: 'Getting Started', link: 'zh/guide/getting-started' },
                { text: 'Roadmap', link: 'zh/guide/roadmap' },
                { text: 'Credits', link: 'zh/guide/credits' },
            ],
        },
        {
            text: 'Front Matter',
            collapsed: false,
            items: [
                { text: 'Post Front Matter', link: 'zh/guide/frontmatter-post' },
                { text: 'Author Front Matter', link: 'zh/guide/frontmatter-author' },
            ],
        },
        {
            text: 'Config & API Reference',
            link: 'zh/reference/config',
        },
    ];
}

function sidebarReference() {
    return [
        {
            text: 'Reference',
            items: [
                { text: 'Site Config', link: 'zh/reference/config' },
                { text: 'Tailwind', link: 'zh/reference/tailwind' },
                { text: 'Icons', link: 'zh/reference/icons' },
            ],
        },
    ];
}
