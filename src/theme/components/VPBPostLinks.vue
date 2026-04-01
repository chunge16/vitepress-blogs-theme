<script setup>
import { useData, withBase } from 'vitepress';
import { usePosts } from '../composables/usePosts';

defineProps({
  insideDoc: Boolean
});

const { site } = useData();
const { nextPost, prevPost } = usePosts();

const theme = site.value.themeConfig;
const path = theme.blog?.path ?? '/blog/';
</script>

<template>
  <footer
    class="vpb-soft-panel mb-24 rounded-[1.75rem] px-5 py-4 text-sm font-medium leading-5"
    :class="{ 'xs:show lg:hidden': insideDoc }"
  >
    <div v-if="nextPost" class="border-b border-[color:var(--vpb-grid-line)] py-3">
      <h2 class="vpb-meta mb-2 font-['Avenir_Next_Condensed','Franklin_Gothic_Medium',sans-serif] text-xs uppercase tracking-[0.22em]">
        Next Article
      </h2>
      <div>
        <a
          class="vpb-link font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-xl tracking-[-0.02em] text-[color:var(--vpb-text-strong)]"
          :href="`${withBase(nextPost.url)}`"
        >
          {{ nextPost.title }}
        </a>
      </div>
    </div>
    <div v-if="prevPost" class="border-b border-[color:var(--vpb-grid-line)] py-3">
      <h2 class="vpb-meta mb-2 font-['Avenir_Next_Condensed','Franklin_Gothic_Medium',sans-serif] text-xs uppercase tracking-[0.22em]">
        Previous Article
      </h2>
      <div>
        <a
          class="vpb-link font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-xl tracking-[-0.02em] text-[color:var(--vpb-text-strong)]"
          :href="`${withBase(prevPost.url)}`"
        >
          {{ prevPost.title }}
        </a>
      </div>
    </div>
    <div class="pt-3">
      <a class="vpb-accent-link" :href="withBase(path)">← Back to the blog</a>
    </div>
  </footer>
</template>

<style>
@reference "../style.css";
</style>
