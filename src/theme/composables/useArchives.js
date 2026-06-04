import { data as posts } from './posts.data';
import { groupPostsByYear } from './archive-utils.js';

const postsByYear = groupPostsByYear(posts);

export function useArchives() {
  return { postsByYear };
}
