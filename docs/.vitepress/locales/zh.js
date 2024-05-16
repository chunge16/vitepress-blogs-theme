import {
    descriptionZH,
    siteCN,
} from "../meta.js";
import pkg from "../../../package.json";
export default {
    title: 'VitePress Blog',
    description: descriptionZH,
    themeConfig: {
        nav: [
            {
                text: '指南',
                link: '/zh/guide/what-is-vitepress-blog',
                activeMatch: '/zh/guide/',
            },
            {
                text: '配置',
                link: '/zh/reference/config',
                activeMatch: '/zh/reference/',
            },
            {
                text: '示例',
                items: [
                    {
                        text: 'Markdown',
                        link: '/zh/markdown-examples',
                    },
                    {
                        text: 'api-examples',
                        link: '/zh/api-examples',
                    },
                    {
                        text: 'Theme Test',
                        link: '/zh/theme-test',
                    },
                ],
            },
            {
                text: '博客',
                activeMatch: '/zh/blog/',
                items: [
                    {
                        text: '博客首页',
                        link: '/zh/blog/',
                        activeMatch: '/zh/blog/$',
                    },
                    {
                        text: '标签',
                        link: '/zh/blog/tags',
                        activeMatch: '/zh/blog/tags',
                    },
                    {
                        text: '归档',
                        link: '/zh/blog/archives',
                        activeMatch: '/zh/blog/archives',
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
            '/zh/guide/': sidebarGuide(),
            '/zh/reference/': sidebarReference(),
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
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        footer: {
            message: '我只是尽力将工具做得更好，如果可以的话欢迎给一个 <a c-orange-5 target="_blank" href="https://github.com/chunge16/vitepress-blogs-theme">star ⭐</a>',
            copyright: `MIT Licensed | 版权所有 © 2023-${new Date().getFullYear()} <a target="_blank" href="https://github.com/chunge16">chunge16</a>`,
        },

    },
    head: [
        ['meta', { property: 'og:description', content: descriptionZH }],
        ['meta', { property: 'og:url', content: siteCN }],
        ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ],

};


function sidebarGuide() {
    return [
        {
            text: '介绍',
            collapsed: false,
            items: [
                {
                    text: '什么是 VitePress Blog?',
                    link: '/zh/guide/what-is-vitepress-blog',
                },
                { text: '快速开始', link: '/zh/guide/getting-started' },
                { text: '致谢', link: '/zh/guide/credits' },
            ],
        },
        {
            text: 'Frontmatter 配置',
            collapsed: false,
            items: [
                { text: '博客 Frontmatter', link: '/zh/guide/frontmatter-post' },
                { text: '作者 Frontmatter', link: '/zh/guide/frontmatter-author' },
            ],
        },
        {
            text: '配置和API参考',
            link: '/zh/reference/config',
        },
    ];
}

function sidebarReference() {
    return [
        {
            text: '参考',
            items: [
                { text: '站点配置', link: '/zh/reference/config' },
                { text: 'Tailwind', link: '/zh/reference/tailwind' },
                { text: 'Icons', link: '/zh/reference/icons' },
            ],
        },
    ];
}
