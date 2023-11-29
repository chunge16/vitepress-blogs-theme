import { type SiteConfig, createContentLoader} from 'vitepress'
import { formatDistance, format } from 'date-fns';
import { zhCN } from 'date-fns/locale'

const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG
const blogConfig = config.site.themeConfig.blog
const pattern = `${blogConfig?.postsPath ?? 'blog/posts'}/**/*.md`


export default createContentLoader(pattern, {
    excerpt: true,
    transform(raw) {
        return raw
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title,
                author: frontmatter.author ?? blogConfig?.defaultAuthor ?? 'Unknown',
                url,
                excerpt,
                tags: formatTags(frontmatter?.tags),
                category:
                    frontmatter?.category ?? blogConfig?.defaultCategory ?? 'Article',
                date: formatDate(frontmatter?.date),
            }))
            .sort((a, b) => b.date.time - a.date.time)
    },
})


function formatTags(raw) {
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


function formatDate(raw) {
    const date = new Date(raw)
    return {
        raw: date.toISOString().split('T')[0],
        time: +date,
        formatted: format(date, 'PPP', {
            locale: zhCN
        }),
        since: formatDistance(date, new Date(), { addSuffix: true }),
    }
}


