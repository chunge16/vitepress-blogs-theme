import {
    descriptionEN
} from "../meta.js";
import pkg from "../../../package.json";
export default {
    title: 'VitePress Blog',
    description: descriptionEN,
    themeConfig: {
        nav: [
            {
                text: 'Guide',
                link: '/guide/what-is-vitepress-blog',
                activeMatch: '/guide/',
            },
            {
                text: 'Reference',
                link: '/reference/config',
                activeMatch: '/reference/',
            },
            {
                text: 'Examples',
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
                text: 'Blog',
                activeMatch: '/blog/',
                items: [
                    {
                        text: 'Blog Home',
                        link: '/blog/',
                        activeMatch: '/blog/$',
                    },
                    {
                        text: 'Tags',
                        link: '/blog/tags',
                        activeMatch: '/blog/tags',
                    },
                    {
                        text: 'Archives',
                        link: '/blog/archives',
                        activeMatch: '/blog/archives',
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
                        text: 'Changelog',
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
            prev: 'Previous page',
            next: 'Next page',
        },
        returnToTopLabel: 'Return to top',
        outlineTitle: 'On this page',
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        lastUpdatedText: 'Last updated',
        search: {
            provider: 'local',
        },
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
                    link: '/guide/what-is-vitepress-blog',
                },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Roadmap', link: '/guide/roadmap' },
                { text: 'Credits', link: '/guide/credits' },
            ],
        },
        {
            text: 'Front Matter',
            collapsed: false,
            items: [
                { text: 'Post Front Matter', link: '/guide/frontmatter-post' },
                { text: 'Author Front Matter', link: '/guide/frontmatter-author' },
            ],
        },
        {
            text: 'Config & API Reference',
            link: '/reference/config',
        },
    ];
}

function sidebarReference() {
    return [
        {
            text: 'Reference',
            items: [
                { text: 'Site Config', link: '/reference/config' },
                { text: 'Tailwind', link: '/reference/tailwind' },
                { text: 'Icons', link: '/reference/icons' },
            ],
        },
    ];
}
