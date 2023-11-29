import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as authors } from './authors.data';

export function useAuthors() {
  const route = useRoute();

  const path = route.path;

  function findByName(name){
    return authors.find((p) => p?.name === name);
  }

  function findCurrentIndex() {
    const result = authors.findIndex((p) => route.path.includes(p?.url));
    if (result === -1) console.error(`author page missing: ${route.path}`);
    return result;
  }

  const author = computed(() => authors[findCurrentIndex()]);
  const nextAuthor = computed(() => authors[findCurrentIndex() - 1]);
  const prevAuthor = computed(() => authors[findCurrentIndex() + 1]);

  return { authors, author, nextAuthor, prevAuthor, findByName, path };
}
