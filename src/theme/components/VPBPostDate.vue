<script setup>
import { usePosts } from '../composables/usePosts';

const { post } = usePosts();

function getDateTime() {
  return new Date(post.value.date.time).toISOString();
}
</script>

<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd class="vpb-meta font-['Avenir_Next_Condensed','Franklin_Gothic_Medium',sans-serif] text-sm font-semibold uppercase tracking-[0.24em]">
      <time :datetime="getDateTime()">{{ post.date.formatted }}</time>
    </dd>
  </dl>
</template>

<style>
@reference "../style.css";
</style>
