<script setup>
import { useData, withBase } from 'vitepress';
import { usePosts } from '../composables/usePosts';
import VPBPostAuthor from './VPBPostAuthor.vue';
import VPBPostCategory from './VPBPostCategory.vue';
import VPBTagIcon from './VPBTagIcon.vue';

const { site } = useData();
const { post } = usePosts();
const theme = site.value.themeConfig;
const path = theme.blog?.tagsPath ?? '/blog/tags';
</script>

<template>
  <span class="vpb-pill max-w-full rounded-full px-4 py-2">
    <VPBPostCategory :category="post.category" />
  </span>
  <div class="vpb-soft-panel mt-4 rounded-[1.5rem] p-4">
    <div class="mb-3 font-['Avenir_Next_Condensed','Franklin_Gothic_Medium',sans-serif] text-xs uppercase tracking-[0.22em] text-[color:var(--vpb-text-soft)]">
      Tagged in
    </div>
    <div class="flex flex-wrap gap-1.5 sm:gap-2">
      <a
        v-for="tagName in post.tags"
        :key="tagName"
        class="vpb-chip rounded-full px-2.5 py-1 text-[0.72rem] font-semibold no-underline sm:px-3 sm:py-1.5 sm:text-xs"
        :href="`${withBase(path)}?init=${tagName}`"
      >
        <VPBTagIcon :tag="tagName" />
        {{ tagName }}
      </a>
    </div>
  </div>
  <VPBPostAuthor />
</template>

<style>
@reference "../style.css";
</style>
