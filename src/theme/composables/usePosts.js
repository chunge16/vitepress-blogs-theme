import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as posts } from './posts.data';

function normalizePath(path) {
  return decodeURI(path ?? '').replace(/\/$/, '');
}

export function usePosts() {
  const route = useRoute();
  const path = computed(() => route.path);
  const currentPath = computed(() => normalizePath(route.path));
  const currentIndex = computed(() =>
    posts.findIndex((entry) => currentPath.value.includes(normalizePath(entry?.url)))
  );

  const post = computed(() =>
    currentIndex.value >= 0 ? posts[currentIndex.value] : null
  );
  const nextPost = computed(() =>
    currentIndex.value > 0 ? posts[currentIndex.value - 1] : null
  );
  const prevPost = computed(() =>
    currentIndex.value >= 0 ? posts[currentIndex.value + 1] ?? null : null
  );

  return { posts, post, nextPost, prevPost, path };
}
