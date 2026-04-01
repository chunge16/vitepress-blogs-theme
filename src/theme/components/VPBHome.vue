<script setup>
import { useData } from 'vitepress';
import { usePosts } from '../composables/usePosts';
import VPBHomePost from './VPBHomePost.vue';

const { posts } = usePosts();
const { theme } = useData();
</script>

<template>
  <section class="vpb-shell mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-10 lg:py-16">
    <div class="vpb-page rounded-[2rem] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
      <div class="vpb-page-header mx-auto max-w-3xl text-center">
        <p class="vpb-kicker">Journal</p>
        <h2 class="vpb-display-title">
          {{ theme.blog?.title }}
        </h2>
        <p class="vpb-lead">
          {{ theme.blog?.description }}
        </p>
      </div>
      <div class="grid gap-6 lg:grid-cols-2 xl:gap-8">
        <div v-for="post of posts" :key="post.url">
          <VPBHomePost :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@reference "../style.css";
</style>
