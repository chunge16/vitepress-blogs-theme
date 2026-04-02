<script setup>
import { usePosts } from '../composables/usePosts';
import VPBPostCategory from './VPBPostCategory.vue';
import VPBPostAuthor from './VPBPostAuthor.vue';

defineProps({
  insideDoc: Boolean
});

const { post } = usePosts();
</script>

<template>
  <div
    class="mb-6 flex justify-center sm:space-x-12 xl:mb-0 xl:block xl:space-x-0 xl:space-y-8"
    :class="{ 'xs:show xl:hidden': insideDoc }"
  >
    <span class="vpb-pill rounded-full px-4 py-2">
      <VPBPostCategory :category="post?.category" />
    </span>
  </div>
  <VPBPostAuthor inside-doc />
</template>

<style>
@reference "../style.css";
</style>
