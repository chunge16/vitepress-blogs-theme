<script setup>
import { usePosts } from '../composables/usePosts';
import VPBPostDate from './VPBPostDate.vue';
import VPBPostDetails from './VPBPostDetails.vue';

const { post } = usePosts();
</script>

<template>
  <header class="vpb-page-header space-y-3 pt-6 text-center xl:pb-10">
    <p class="vpb-kicker">Feature</p>
    <VPBPostDate />
    <h1 class="vpb-page-title md:text-5xl">
      {{ post.title }}
    </h1>
  </header>
  <VPBPostDetails inside-doc />
</template>

<style>
@reference "../style.css";
</style>
