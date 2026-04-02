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
  <article class="vpb-card flex h-full flex-col rounded-[1.75rem] p-5 sm:p-8">
    <div class="vpb-meta mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div class="flex flex-col items-start gap-2">
        <span class="vpb-pill rounded-full px-3 py-2">
          <VPBPostCategory :category="post?.category" />
        </span>
        <span class="font-['Avenir_Next_Condensed','Franklin_Gothic_Medium',sans-serif] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--vpb-text-soft)] sm:text-[0.76rem] sm:tracking-[0.2em]">
          {{ post.date.since }}
        </span>
      </div>
      <span class="font-['Avenir_Next_Condensed','Franklin_Gothic_Medium',sans-serif] text-[0.76rem] font-semibold uppercase tracking-[0.2em] sm:pt-1 sm:text-[0.8rem] sm:tracking-[0.22em]">
        {{ post.date.raw }}
      </span>
    </div>
    <h2 class="mb-4 font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[color:var(--vpb-text-strong)] sm:text-3xl">
      <a :href="withBase(post.url)" class="vpb-link">{{ post.title }}</a>
    </h2>
    <div class="vpb-prose mb-7 text-[0.98rem] sm:mb-8 sm:text-[1.02rem]" v-html="post.excerpt"></div>
    <div class="mt-auto flex flex-col items-start gap-4 border-t border-[color:var(--vpb-grid-line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
      <VPBHomeAuthor :name="post.author" />
      <a :href="withBase(post.url)" class="vpb-accent-link">
        Read more
        <div class="i-[carbon--arrow-right] ml-2" />
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
