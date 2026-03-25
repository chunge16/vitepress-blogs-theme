import { data as posts } from './posts.data';

const postsByTag = posts.reduce((accumulator, post) => {
  if (!Array.isArray(post.tags)) {
    return accumulator;
  }

  post.tags.forEach((tag) => {
    if (!accumulator[tag]) {
      accumulator[tag] = [];
    }
    accumulator[tag].push(post);
  });

  return accumulator;
}, {});

export function useTags() {
  return { postsByTag };
}
