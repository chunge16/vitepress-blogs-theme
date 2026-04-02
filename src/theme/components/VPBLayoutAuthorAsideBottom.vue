<script setup>
import { useData, withBase } from 'vitepress';

const { site } = useData();

const theme = site.value.themeConfig;
const path = withBase(theme.blog?.path ?? '/blog/');
</script>

<template>
  <footer class="vpb-soft-panel mb-24 rounded-[1.75rem] px-5 py-4 text-sm font-medium leading-5">
    <div class="pt-3">
      <a class="vpb-accent-link" :href="path">← Back to the blog</a>
    </div>
  </footer>
</template>

<style>
@reference "../style.css";
</style>
