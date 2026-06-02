import test from 'node:test';
import assert from 'node:assert/strict';

import { processData } from '../src/config/index.js';

test('processData marks blog posts with blog layout metadata', async () => {
  const pageData = {
    relativePath: 'blog/posts/2024/hello.md',
    frontmatter: {},
  };
  const ctx = {
    siteConfig: {
      site: {
        themeConfig: {
          blog: {},
        },
      },
    },
  };

  await processData(pageData, ctx, 'right', true);

  assert.deepEqual(pageData.frontmatter, {
    blog: 'post',
    aside: 'right',
    sidebar: true,
    prev: false,
    next: false,
  });
});

test('processData marks author pages and ignores similar-looking directories', async () => {
  const authorPage = {
    relativePath: 'blog/authors/ai-writer.md',
    frontmatter: {},
  };
  const archivePage = {
    relativePath: 'blog/authors-archive/ai-writer.md',
    frontmatter: {},
  };
  const ctx = {
    siteConfig: {
      site: {
        themeConfig: {
          blog: {},
        },
      },
    },
  };

  await processData(authorPage, ctx);
  await processData(archivePage, ctx);

  assert.equal(authorPage.frontmatter.blog, 'author');
  assert.equal(archivePage.frontmatter.blog, undefined);
});
