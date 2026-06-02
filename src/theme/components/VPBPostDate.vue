<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { usePosts } from '../composables/usePosts';

const { post } = usePosts();
const { frontmatter } = useData();
const dateMeta = computed(() => {
  if (post.value?.date) {
    return post.value.date;
  }

  if (!frontmatter.value?.date) {
    return null;
  }

  const date = new Date(frontmatter.value.date);
  const raw = Number.isNaN(date.getTime())
    ? String(frontmatter.value.date)
    : date.toISOString().split('T')[0];

  return {
    formatted: raw.replace(/-/g, '/'),
    time: Number.isNaN(date.getTime()) ? Date.now() : date.getTime(),
  };
});

function getDateTime() {
  return dateMeta.value ? new Date(dateMeta.value.time).toISOString() : '';
}
</script>

<template>
  <dl v-if="dateMeta">
    <dt class="sr-only">Published on</dt>
    <dd class="vpb-meta font-['Avenir_Next_Condensed','Franklin_Gothic_Medium',sans-serif] text-sm font-semibold uppercase tracking-[0.24em]">
      <time :datetime="getDateTime()">{{ dateMeta.formatted }}</time>
    </dd>
  </dl>
</template>

<style>
@reference "../style.css";
</style>
