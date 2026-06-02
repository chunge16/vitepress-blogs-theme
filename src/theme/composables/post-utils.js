import { formatDistance, format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { normalizePath } from './shared.js';

const defaultDateFormat = 'yyyy/MM/dd';
const defaultDateLocale = enUS;

function deriveTitleFromUrl(url) {
  const normalizedUrl = normalizePath(url);
  const slug = normalizedUrl.split('/').filter(Boolean).pop() ?? 'untitled';

  warnContentIssue(url, 'Missing title frontmatter. Falling back to the post slug.');

  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function normalizeText(raw) {
  return typeof raw === 'string' && raw.trim() ? raw.trim() : null;
}

function formatTags(raw) {
  if (typeof raw === 'string') {
    return raw
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean);
  }

  if (Array.isArray(raw)) {
    return raw
      .filter((value) => typeof value === 'string')
      .map((value) => value.trim())
      .filter(Boolean);
  }

  return [];
}

function getDateConfig(config) {
  return config?.dateConfig ?? {
    format: defaultDateFormat,
    locale: defaultDateLocale,
  };
}

function formatDate(raw, dateConfig, url) {
  const formatStr = dateConfig?.format ?? defaultDateFormat;
  const locale = dateConfig?.locale ?? defaultDateLocale;
  const fallbackDate = new Date(0);
  const date = raw instanceof Date ? raw : new Date(raw ?? fallbackDate);

  if (Number.isNaN(date.getTime())) {
    warnContentIssue(url, `Invalid date "${String(raw)}". Falling back to 1970-01-01.`);
    return buildDateMeta(fallbackDate, formatStr, locale);
  }

  if (raw === undefined || raw === null || raw === '') {
    warnContentIssue(url, 'Missing date frontmatter. Falling back to 1970-01-01.');
    return buildDateMeta(fallbackDate, formatStr, locale);
  }

  return buildDateMeta(date, formatStr, locale);
}

function buildDateMeta(date, formatStr, locale) {
  return {
    raw: date.toISOString().split('T')[0],
    time: date.getTime(),
    formatted: format(date, formatStr, {
      locale,
    }),
    since: formatDistance(date, new Date(), {
      locale,
      addSuffix: true,
    }),
  };
}

function transformPosts(raw, config = {}) {
  const dateConfig = getDateConfig(config);

  return raw
    .map(({ url, frontmatter, excerpt }) => ({
      url,
      excerpt,
      title: normalizeText(frontmatter?.title) ?? deriveTitleFromUrl(url),
      author: normalizeText(frontmatter?.author) ?? config?.defaultAuthor ?? 'Unknown',
      tags: formatTags(frontmatter?.tags),
      category: normalizeText(frontmatter?.category) ?? config?.defaultCategory ?? 'Article',
      date: formatDate(frontmatter?.date, dateConfig, url),
      top: frontmatter?.top ?? false,
      sticky: Number(frontmatter?.sticky ?? 0),
    }))
    .sort((a, b) => {
      if (a.top && b.top) return b.sticky - a.sticky;
      if (a.top) return -1;
      if (b.top) return 1;
      return b.date.time - a.date.time;
    });
}

function warnContentIssue(url, message) {
  console.warn(`[vitepress-blogs-theme] ${message} (${url ?? 'unknown url'})`);
}

export {
  buildDateMeta,
  deriveTitleFromUrl,
  formatDate,
  formatTags,
  getDateConfig,
  normalizeText,
  transformPosts,
  warnContentIssue,
};
