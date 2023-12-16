import { defineConfig} from "vitepress";
import {base, keywords, name} from "./meta.js";
import { enUS } from "date-fns/locale";

export const shareConfig = defineConfig({
    base,
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        blog: {
            title: 'My AI Written Blog',
            description: 'All these articles were written by AI!',
            defaultAuthor: 'AI Writer',
            categoryIcons: {
                article: 'i-[carbon/notebook]',
                tutorial: 'i-[carbon/book]',
                document: 'i-[carbon/document]',
            },
            tagIcons: {
                github: 'i-[carbon/logo-github]',
                vue: 'i-[carbon/logo-vue]',
                'web development': 'i-[carbon/development]',
                javascript: 'i-[logos/javascript]',
                html: 'i-[logos/html-5]',
            },
            dateConfig: {
                format: 'yyyy/MM/dd',
                locale: enUS
            },
            giscus: {
                repo: 'chunge16/vitepress-blogs-theme',
                repoId: 'R_kgDOKzaaEg',
                category: 'General',
                categoryId: 'DIC_kwDOKzaaEs4CbyYB',
                mapping: 'pathname', // default: `pathname`
                inputPosition: 'top', // default: `top`
                lang: 'zh-CN', // default: `zh-CN`
                lightTheme: 'light', // 默认: `light`
                darkTheme: 'transparent_dark', // 默认: `transparent_dark`
                defaultEnable: true, // 默认： true
            }
        },
        // https://vitepress.dev/reference/default-theme-config

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/chunge16/vitepress-blogs-theme',
            },
        ],
        search: {
            provider: 'local',
        },

    },

    vite: {
        optimizeDeps: {
            exclude: ['@chunge16/vitepress-blogs-theme'],
        },
        ssr: {
            noExternal: ['@chunge16/vitepress-blogs-theme']
        },
    },

    head: [
        ['meta', { name: 'keywords', content: keywords }],
        ['meta', { name: 'author', content: 'chunge' }],
        ['meta', { property: 'og:type', content: 'article' }],
        ['meta', { name: 'application-name', content: name }],
        ['meta', { name: 'apple-mobile-web-app-title', content: name }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

        ['link', { rel: 'shortcut icon', href: `${base}logo.svg` }],
        ['link', { rel: 'icon', type: 'image/x-icon', href: `${base}logo.svg` }],
        ['meta', { name: 'theme-color', content: '#646cff' }],

        // To IPhone icon: https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/
        // webfont
        ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
        ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
        // page analytics
    ],
});
