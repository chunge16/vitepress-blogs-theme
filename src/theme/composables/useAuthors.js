import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as authors } from './authors.data';
import { resolveAdjacentEntries } from './shared.js';

export function useAuthors() {
  const route = useRoute();
  const path = computed(() => route.path);

  function findByName(name) {
    return authors.find((entry) => entry?.name === name) ?? null;
  }

  const adjacentAuthors = computed(() => resolveAdjacentEntries(authors, route.path));
  const author = computed(() => adjacentAuthors.value.current);
  const nextAuthor = computed(() => adjacentAuthors.value.next);
  const prevAuthor = computed(() => adjacentAuthors.value.prev);

  return { authors, author, nextAuthor, prevAuthor, findByName, path };
}
