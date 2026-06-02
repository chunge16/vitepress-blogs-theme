import { createContentLoader } from 'vitepress';
import { getBlogConfig } from './shared.js';
import { transformAuthors } from './author-utils.js';

const blogConfig = getBlogConfig();
const pattern = `${blogConfig?.authorsPath ?? 'blog/authors'}/**/*.md`;

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return transformAuthors(raw);
  },
});
