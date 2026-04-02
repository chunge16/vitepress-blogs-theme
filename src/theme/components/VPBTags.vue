<script setup>
import { inBrowser, useData, withBase } from 'vitepress';
import { ref } from 'vue';
import { useTags } from '../composables/useTags.js';
import VPBTagIcon from './VPBTagIcon.vue';

const { postsByTag } = useTags();
const { theme } = useData();
const selectedTag = ref('');

function toggleTag(tag) {
  selectedTag.value = tag;
}

if (inBrowser) {
  const params = new URLSearchParams(window.location.search);
  const init = params.get('init');
  if (init) {
    toggleTag(init);
  }
}
</script>

<template>
  <ClientOnly>
    <section class="vpb-shell mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-10 lg:py-16">
      <div class="vpb-page rounded-[2rem] px-5 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
        <div class="vpb-page-header mx-auto max-w-3xl text-center">
          <p class="vpb-kicker">Index</p>
          <h2 class="vpb-display-title">
            {{ theme.blog?.title }} Tags
          </h2>
          <p class="vpb-lead">
            {{ theme.blog?.description }}
          </p>
        </div>

        <div class="mb-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          <button
            v-for="(posts, tagName) in postsByTag"
            :key="tagName"
            type="button"
            class="vpb-chip cursor-pointer rounded-full px-2.5 py-1.5 text-sm font-semibold sm:px-4 sm:py-2"
            :class="{ 'is-active': selectedTag === tagName }"
            @click="toggleTag(tagName)"
          >
            <span class="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--vpb-panel-border)] bg-[color:var(--vpb-bg-strong)] sm:h-8 sm:w-8">
              <VPBTagIcon :tag="tagName" />
            </span>
            <span class="leading-none sm:leading-tight">{{ tagName }}</span>
            <span class="rounded-full bg-[color:var(--vp-c-brand-dimm)] px-2.5 py-1 text-[0.72rem] leading-none sm:text-xs">
              {{ posts.length }}
            </span>
          </button>
        </div>

        <section
          v-if="selectedTag"
          class="vpb-card vpb-card--static mx-auto max-w-4xl rounded-[1.75rem] px-4 py-5 sm:px-8 sm:py-7"
        >
          <div class="mb-5 flex flex-col items-start gap-1.5 sm:mb-4 sm:flex-row sm:items-center sm:gap-3">
            <span class="vpb-pill max-w-full rounded-full px-3 py-2">
              <VPBTagIcon :tag="selectedTag" />
              {{ selectedTag }}
            </span>
            <span class="vpb-meta pl-1 sm:pl-0">
              {{ postsByTag[selectedTag].length }} posts
            </span>
          </div>
          <a
            v-for="(post, index) in postsByTag[selectedTag]"
            :key="index"
            :href="withBase(post.url)"
            class="vpb-list-link"
          >
            <div class="vpb-list-link__title">{{ post.title }}</div>
            <div class="vpb-list-link__meta">
              {{ post.date.raw }}
            </div>
          </a>
        </section>

        <section
          v-else
          class="vpb-soft-panel mx-auto max-w-2xl rounded-[1.75rem] px-5 py-8 text-center sm:px-6 sm:py-10"
        >
          <p class="vpb-kicker">Browse</p>
          <p class="mt-4 font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-2xl leading-tight text-[color:var(--vpb-text-strong)]">
            Pick a tag to open a curated slice of the archive.
          </p>
          <p class="mt-4 text-sm leading-7 text-[color:var(--vpb-text-soft)]">
            标签列表现在更像索引面板，适合快速筛选主题，而不是一堆松散按钮。
          </p>
        </section>
      </div>
    </section>
  </ClientOnly>
</template>

<style>
@reference "../style.css";
</style>
