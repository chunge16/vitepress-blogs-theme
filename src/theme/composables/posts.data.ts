import { type SiteConfig, createContentLoader} from 'vitepress'
import { formatDistance, format } from 'date-fns';
import { enUS } from 'date-fns/locale'

const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG
const blogConfig = config.site.themeConfig.blog
const pattern = `${blogConfig?.postsPath ?? 'blog/posts'}/**/*.md`
const defaultDateFormat = 'yyyy/MM/dd';
const defaultDateLocale = enUS;
export default createContentLoader(pattern, {
    excerpt: true,
    transform(raw) {
        const dateConfig = blogConfig?.dateConfig ?? {
            format: defaultDateFormat,
            locale: defaultDateLocale
        };
        return raw
            .map(({ url, frontmatter, excerpt }) => ({
                url,
                excerpt,
                title: frontmatter.title,
                author: frontmatter.author ?? blogConfig?.defaultAuthor ?? 'Unknown',
                tags: formatTags(frontmatter?.tags),
                category: frontmatter?.category ?? blogConfig?.defaultCategory ?? 'Article',
                date: formatDate(frontmatter?.date, dateConfig),
                top: frontmatter?.top ?? false,
                sticky: frontmatter?.sticky ?? 0,
            }))
            .sort((a, b) => {
                if (a.top && b.top) return b.sticky - a.sticky;
                if (a.top) return -1;
                if (b.top) return 1;
                return b.date.time - a.date.time;
            })
    },
})


function formatTags(raw: string | string[] | undefined) {
    if (typeof raw === 'string') {
        // @ts-ignore
        if (raw.includes(',')) {
            return raw.split(',').map((value) => value.trim())
        }
        return [raw]
    }
    if (Array.isArray(raw)) {
        return raw
    }
    return []
}


function formatDate(raw: string | number | Date, dateConfig?: { format?: string; locale?: Locale }) {
    const date = new Date(raw)
    const formatStr = dateConfig?.format ?? defaultDateFormat;
    const locale = dateConfig?.locale ?? defaultDateLocale

    return {
        raw: date.toISOString().split('T')[0],
        time: +date,
        formatted: format(date, formatStr, {
            locale,
        }),
        since: formatDistance(date, new Date(), {
            locale,
            addSuffix: true
        }),
    }
}


