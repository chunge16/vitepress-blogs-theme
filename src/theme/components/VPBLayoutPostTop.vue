<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { usePosts } from '../composables/usePosts';
import VPBPostDate from './VPBPostDate.vue';
import VPBPostDetails from './VPBPostDetails.vue';

const { post } = usePosts();
const { frontmatter } = useData();
const postTitle = computed(() => post.value?.title ?? frontmatter.value?.title);
</script>

<template>
  <header v-if="postTitle" class="vpb-page-header space-y-3 pt-8 text-center xl:pb-10">
    <p class="vpb-kicker">Feature</p>
    <VPBPostDate />
    <h1 class="vpb-page-title md:text-5xl">
      {{ postTitle }}
    </h1>
  </header>
  <VPBPostDetails inside-doc />
</template>

<style>
@reference "../style.css";
</style>
