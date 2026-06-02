<script setup>
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { useAuthors } from '../composables/useAuthors';

const props = defineProps({
  name: String
});

const { findByName } = useAuthors();
const author = computed(() => {
  return findByName(props?.name);
});
</script>

<template>
  <div v-if="author" class="flex items-center gap-3">
    <img
      v-if="author?.avatar"
      class="h-10 w-10 rounded-full border border-[color:var(--vpb-panel-border)] object-cover"
      :src="withBase(author?.avatar)"
      :alt="author?.name"
    />
    <img
      v-else-if="author?.gravatar"
      class="h-10 w-10 rounded-full border border-[color:var(--vpb-panel-border)] object-cover"
      :src="`https://gravatar.com/avatar/${author?.gravatar}`"
      :alt="author?.name"
    />
    <a
      :href="withBase(author.url)"
      class="vpb-link inline-flex items-center text-[0.95rem] font-semibold tracking-[0.01em] text-[color:var(--vpb-text-strong)]"
    >
      <span>{{ author?.name }}</span>
    </a>
  </div>
  <div v-else></div>
</template>

<style>
@reference "../style.css";
</style>
