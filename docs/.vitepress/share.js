import { defineConfig} from "vitepress";
import {base, keywords, name} from "./meta.js";

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
                article: 'i-[heroicons-outline/book-open]',
                tutorial: 'i-[heroicons-outline/academic-cap]',
                document: 'i-[heroicons-outline/annotation]',
            },
            tagIcons: {
                github: 'i-[carbon/logo-github]',
                vue: 'i-[carbon/logo-vue]',
            },
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
