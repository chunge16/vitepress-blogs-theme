<script setup>
import { withBase } from 'vitepress';
import VPBHomeAuthor from './VPBHomeAuthor.vue';
import VPBPostCategory from './VPBPostCategory.vue';

defineProps({
  post: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <article class="vpb-card flex h-full flex-col rounded-[1.5rem] p-5 sm:p-7">
    <div class="vpb-meta mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div class="flex flex-col items-start gap-2">
        <span class="vpb-pill rounded-full px-3 py-1.5">
          <VPBPostCategory :category="post?.category" />
        </span>
        <span class="font-['Neue_Haas_Grotesk_Display_Pro','Avenir_Next',sans-serif] text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--vpb-text-soft)] sm:text-[0.75rem] sm:tracking-[0.18em]">
          {{ post.date.since }}
        </span>
      </div>
      <span class="font-['Neue_Haas_Grotesk_Display_Pro','Avenir_Next',sans-serif] text-[0.75rem] font-medium uppercase tracking-[0.16em] sm:pt-1 sm:text-[0.78rem] sm:tracking-[0.18em]">
        {{ post.date.raw }}
      </span>
    </div>
    <h2 class="mb-4 w-full font-['Iowan_Old_Style','Palatino_Linotype',Georgia,serif] text-[1.85rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[color:var(--vpb-text-strong)] sm:text-[2.15rem]">
      <a :href="withBase(post.url)" class="vpb-link">{{ post.title }}</a>
    </h2>
    <div class="vpb-prose vpb-post-excerpt mb-7 text-[0.97rem] sm:mb-8 sm:text-[1rem]" v-html="post.excerpt"></div>
    <div class="mt-auto flex flex-col items-start gap-4 border-t border-[color:var(--vpb-grid-line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
      <VPBHomeAuthor :name="post.author" />
      <a :href="withBase(post.url)" class="vpb-accent-link">
        Continue reading
        <div class="i-[carbon--arrow-right] ml-2"></div>
      </a>
    </div>
  </article>
</template>

<style scoped>
h2 {
  margin-top: 0;
}
</style>
<style>
@reference "../style.css";
</style>
