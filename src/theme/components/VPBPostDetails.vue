<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { usePosts } from '../composables/usePosts';
import VPBPostCategory from './VPBPostCategory.vue';
import VPBPostAuthor from './VPBPostAuthor.vue';

defineProps({
  insideDoc: Boolean
});

const { post } = usePosts();
const { frontmatter } = useData();
const category = computed(() => post.value?.category ?? frontmatter.value?.category);
</script>

<template>
  <div
    v-if="category"
    class="mb-6 flex justify-center sm:space-x-12 xl:mb-0 xl:block xl:space-x-0 xl:space-y-8"
    :class="{ 'xs:show xl:hidden': insideDoc }"
  >
    <span class="vpb-pill rounded-full px-4 py-1.5">
      <VPBPostCategory :category="category" />
    </span>
  </div>
  <VPBPostAuthor inside-doc />
</template>

<style>
@reference "../style.css";
</style>
