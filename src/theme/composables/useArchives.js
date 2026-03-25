import { data as posts } from './posts.data';

const postsByYear = posts.reduce((accumulator, post) => {
  const year = post.date?.raw?.split('-')[0];
  if (!year) {
    return accumulator;
  }

  const currentGroup = accumulator[accumulator.length - 1];
  if (currentGroup?.[0]?.date?.raw?.startsWith(year)) {
    currentGroup.push(post);
    return accumulator;
  }

  accumulator.push([post]);
  return accumulator;
}, []);

export function useArchives() {
  return { postsByYear };
}
