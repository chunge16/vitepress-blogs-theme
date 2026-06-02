import test from 'node:test';
import assert from 'node:assert/strict';

import {
  findEntryIndex,
  isPathWithinDirectory,
  normalizePath,
  normalizeRelativePath,
  resolveAdjacentEntries,
} from '../src/theme/composables/shared.js';

test('normalizePath trims trailing slash, .html, and /index', () => {
  assert.equal(normalizePath('/blog/posts/post-1/index.html'), '/blog/posts/post-1');
  assert.equal(normalizePath('/blog/posts/post-1/'), '/blog/posts/post-1');
  assert.equal(normalizePath('/'), '/');
});

test('normalizeRelativePath standardizes separators', () => {
  assert.equal(normalizeRelativePath('./blog\\posts/test/'), 'blog/posts/test');
});

test('isPathWithinDirectory matches only the intended directory tree', () => {
  assert.equal(isPathWithinDirectory('blog/posts/2024/post.md', 'blog/posts'), true);
  assert.equal(isPathWithinDirectory('blog/posts-archive/post.md', 'blog/posts'), false);
});

test('resolveAdjacentEntries finds the exact current item and neighbors', () => {
  const entries = [
    { url: '/blog/posts/third' },
    { url: '/blog/posts/second/' },
    { url: '/blog/posts/first/index.html' },
  ];

  const resolved = resolveAdjacentEntries(entries, '/blog/posts/second/index.html');

  assert.equal(findEntryIndex(entries, '/blog/posts/second/index.html'), 1);
  assert.deepEqual(resolved.current, entries[1]);
  assert.deepEqual(resolved.next, entries[0]);
  assert.deepEqual(resolved.prev, entries[2]);
});
