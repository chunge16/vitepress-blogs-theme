<script setup>
import { inBrowser, useData, withBase } from 'vitepress';
import { ref } from 'vue';
import { useTags } from '../composables/useTags.js';
import VPBTagIcon from './VPBTagIcon.vue';

const { postsByTag } = useTags();
const { theme } = useData();
const selectedTag = ref('');

function toggleTag(tag) {
  selectedTag.value = selectedTag.value === tag ? '' : tag;
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

        <div class="vpb-chip-strip mb-12">
          <div class="flex flex-wrap justify-center gap-3.5 sm:gap-4">
            <button
              v-for="(posts, tagName) in postsByTag"
              :key="tagName"
              type="button"
              class="vpb-chip cursor-pointer rounded-full pl-3 pr-4.5 py-2 text-sm font-semibold sm:pl-4.5 sm:pr-6 sm:py-2.5"
              :class="{ 'is-active': selectedTag === tagName }"
              :aria-pressed="selectedTag === tagName"
              @click="toggleTag(tagName)"
            >
              <span class="vpb-chip-icon shrink-0">
                <VPBTagIcon :tag="tagName" />
              </span>
              <span class="pr-0.5 leading-none sm:leading-tight">{{ tagName }}</span>
              <span class="vpb-chip-count inline-flex px-2 py-1 text-[0.7rem] leading-none sm:text-[0.74rem]">
                {{ posts.length }}
              </span>
            </button>
          </div>
        </div>

        <section
          v-if="selectedTag"
          class="vpb-results-panel mt-12 rounded-[2rem] px-6 py-6 sm:mt-14 sm:px-10 sm:py-9"
        >
          <div class="vpb-results-head mb-7 sm:mb-9 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div class="vpb-results-summary">
              <p class="vpb-results-kicker">Selected tag</p>
              <h3 class="vpb-results-title">
                {{ selectedTag }}
              </h3>
              <p class="vpb-results-copy">
                Posts grouped under this topic, ordered like a clean archive index for quick scanning.
              </p>
            </div>
            <div class="flex flex-col items-start gap-3 sm:items-end">
              <span class="vpb-pill max-w-full rounded-full px-3 py-2">
                <VPBTagIcon :tag="selectedTag" />
                {{ selectedTag }}
              </span>
              <span class="vpb-results-stat">
                {{ postsByTag[selectedTag].length }} posts
              </span>
            </div>
          </div>
          <div class="vpb-results-list">
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
          </div>
        </section>

        <section
          v-else
          class="vpb-soft-panel mx-auto mt-8 max-w-2xl rounded-[1.75rem] px-5 py-8 text-center sm:mt-10 sm:px-6 sm:py-10"
        >
          <p class="vpb-kicker">Browse</p>
          <p class="mt-4 font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-2xl leading-tight text-[color:var(--vpb-text-strong)]">
            Pick a tag to open a curated slice of the archive.
          </p>
          <p class="mt-4 text-sm leading-7 text-[color:var(--vpb-text-soft)]">
            The tag list behaves more like an index panel, making it easier to scan topics instead of browsing a loose cloud of buttons.
          </p>
        </section>
      </div>
    </section>
  </ClientOnly>
</template>

<style>
@reference "../style.css";
</style>
