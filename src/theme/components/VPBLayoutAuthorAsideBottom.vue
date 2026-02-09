<script setup>
import { useData, withBase } from 'vitepress'

const { site } = useData()

const theme = site.value.themeConfig
const path = withBase(theme.blog?.path ?? '/blog/')
</script>

<template>
  <footer
    class="mb-24 divide-y divide-gray-200 text-sm font-medium leading-5 dark:divide-slate-200/5"
  >
    <div class="pt-3">
      <a class="link" :href="path">← Back to the blog</a>
    </div>
  </footer>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
<style>
@reference "../style.css";
</style>
