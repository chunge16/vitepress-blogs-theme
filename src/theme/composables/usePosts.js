import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as posts } from './posts.data';
import { resolveAdjacentEntries } from './shared.js';

export function usePosts() {
  const route = useRoute();
  const path = computed(() => route.path);
  const adjacentPosts = computed(() => resolveAdjacentEntries(posts, route.path));
  const post = computed(() => adjacentPosts.value.current);
  const nextPost = computed(() => adjacentPosts.value.next);
  const prevPost = computed(() => adjacentPosts.value.prev);

  return { posts, post, nextPost, prevPost, path };
}
