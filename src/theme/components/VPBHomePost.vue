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
  <article class="vpb-card flex h-full flex-col rounded-[1.75rem] p-6 sm:p-8">
    <div class="vpb-meta mb-6 flex items-center justify-between gap-4">
      <span class="vpb-pill rounded-full px-3 py-2">
        <VPBPostCategory :category="post?.category">
          <span>{{ post.date.since }}</span>
        </VPBPostCategory>
      </span>
      <span class="font-['Avenir_Next_Condensed','Franklin_Gothic_Medium',sans-serif] text-[0.8rem] font-semibold uppercase tracking-[0.22em]">
        {{ post.date.raw }}
      </span>
    </div>
    <h2 class="mb-4 font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--vpb-text-strong)]">
      <a :href="withBase(post.url)" class="vpb-link">{{ post.title }}</a>
    </h2>
    <div class="vpb-prose mb-8 text-[1.02rem]" v-html="post.excerpt"></div>
    <div class="mt-auto flex items-center justify-between gap-4 border-t border-[color:var(--vpb-grid-line)] pt-5">
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
