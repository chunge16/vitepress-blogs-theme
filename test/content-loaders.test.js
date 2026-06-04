import test from 'node:test';
import assert from 'node:assert/strict';

import {
  deriveTitleFromUrl,
  formatDate,
  formatTags,
  normalizeText,
  transformPosts,
} from '../src/theme/composables/post-utils.js';
import {
  normalizeName,
  transformAuthors,
} from '../src/theme/composables/author-utils.js';
import { groupPostsByYear } from '../src/theme/composables/archive-utils.js';

test('formatTags handles strings, arrays, and invalid input', () => {
  assert.deepEqual(formatTags('vue, vitepress,  blog '), ['vue', 'vitepress', 'blog']);
  assert.deepEqual(formatTags(['vue', ' vitepress ', 1, null]), ['vue', 'vitepress']);
  assert.deepEqual(formatTags(undefined), []);
});

test('normalizeText and deriveTitleFromUrl provide stable fallbacks', () => {
  assert.equal(normalizeText('  Hello  '), 'Hello');
  assert.equal(normalizeText('   '), null);
  assert.equal(deriveTitleFromUrl('/blog/posts/hello-world/index.html'), 'Hello World');
});

test('formatDate falls back for missing or invalid dates', () => {
  const missingDate = formatDate(undefined, undefined, '/blog/posts/missing-date');
  const invalidDate = formatDate('not-a-date', undefined, '/blog/posts/bad-date');

  assert.equal(missingDate.raw, '1970-01-01');
  assert.equal(invalidDate.raw, '1970-01-01');
});

test('transformPosts applies defaults and preserves sticky/top sorting', () => {
  const posts = transformPosts([
    {
      url: '/blog/posts/older',
      excerpt: '<p>older</p>',
      frontmatter: {
        title: 'Older',
        date: '2024-01-01',
      },
    },
    {
      url: '/blog/posts/featured',
      excerpt: '<p>featured</p>',
      frontmatter: {
        date: '2020-01-01',
        top: true,
        sticky: 2,
      },
    },
    {
      url: '/blog/posts/featured-second',
      excerpt: '<p>featured second</p>',
      frontmatter: {
        title: 'Second',
        date: '2021-01-01',
        top: true,
        sticky: 1,
      },
    },
  ], {
    defaultAuthor: 'Default Author',
    defaultCategory: 'Article',
  });

  assert.equal(posts[0].title, 'Featured');
  assert.equal(posts[0].author, 'Default Author');
  assert.equal(posts[0].category, 'Article');
  assert.equal(posts[1].title, 'Second');
  assert.equal(posts[2].title, 'Older');
});

test('groupPostsByYear groups adjacent dated posts by year', () => {
  const posts = [
    { title: 'Latest', date: { raw: '2024-03-01' } },
    { title: 'Earlier', date: { raw: '2024-01-01' } },
    { title: 'Older', date: { raw: '2023-12-01' } },
    { title: 'Undated' },
  ];

  const groups = groupPostsByYear(posts);

  assert.deepEqual(groups.map((group) => group.map((post) => post.title)), [
    ['Latest', 'Earlier'],
    ['Older'],
  ]);
});

test('normalizeName and transformAuthors sort and fall back safely', () => {
  assert.equal(normalizeName('  Alice  ', '/blog/authors/alice'), 'Alice');
  assert.equal(normalizeName('', '/blog/authors/unknown'), 'Unknown Author');

  const authors = transformAuthors([
    {
      url: '/blog/authors/zeta',
      excerpt: '',
      frontmatter: {
        name: 'Zeta',
      },
    },
    {
      url: '/blog/authors/unknown',
      excerpt: '',
      frontmatter: {},
    },
    {
      url: '/blog/authors/alpha',
      excerpt: '',
      frontmatter: {
        name: 'Alpha',
      },
    },
  ]);

  assert.deepEqual(authors.map((author) => author.name), ['Alpha', 'Unknown Author', 'Zeta']);
});
