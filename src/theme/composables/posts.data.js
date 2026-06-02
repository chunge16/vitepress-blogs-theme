import { createContentLoader } from 'vitepress';
import { getBlogConfig } from './shared.js';
import { transformPosts } from './post-utils.js';

const blogConfig = getBlogConfig();
const pattern = `${blogConfig?.postsPath ?? 'blog/posts'}/**/*.md`;

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return transformPosts(raw, blogConfig);
  },
});
