import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as authors } from './authors.data';

function normalizePath(path) {
  return decodeURI(path ?? '').replace(/\/$/, '');
}

export function useAuthors() {
  const route = useRoute();
  const path = computed(() => route.path);
  const currentPath = computed(() => normalizePath(route.path));

  function findByName(name) {
    return authors.find((entry) => entry?.name === name) ?? null;
  }

  const currentIndex = computed(() =>
    authors.findIndex((entry) => currentPath.value.includes(normalizePath(entry?.url)))
  );
  const author = computed(() =>
    currentIndex.value >= 0 ? authors[currentIndex.value] : null
  );
  const nextAuthor = computed(() =>
    currentIndex.value > 0 ? authors[currentIndex.value - 1] : null
  );
  const prevAuthor = computed(() =>
    currentIndex.value >= 0 ? authors[currentIndex.value + 1] ?? null : null
  );

  return { authors, author, nextAuthor, prevAuthor, findByName, path };
}
