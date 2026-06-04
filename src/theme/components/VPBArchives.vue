<script setup>
import { useData, withBase } from 'vitepress';
import { computed, ref } from 'vue';
import { groupPostsByYear } from '../composables/archive-utils';
import { useArchives } from '../composables/useArchives';

const { postsByYear } = useArchives();
const { theme } = useData();
const searchQuery = ref('');

const normalizedQuery = computed(() => searchQuery.value.trim().toLowerCase());
const allPosts = computed(() => postsByYear.flat());
const filteredPosts = computed(() => {
  if (!normalizedQuery.value) {
    return allPosts.value;
  }

  return allPosts.value.filter((post) => {
    const searchableText = [
      post.title,
      post.author,
      post.category,
      post.date?.raw,
      ...(post.tags ?? []),
      stripHtml(post.excerpt),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery.value);
  });
});
const visiblePostsByYear = computed(() => groupPostsByYear(filteredPosts.value));
const totalPostCount = computed(() => allPosts.value.length);

function stripHtml(raw) {
  return typeof raw === 'string' ? raw.replace(/<[^>]*>/g, ' ') : '';
}

function clearSearch() {
  searchQuery.value = '';
}
</script>

<template>
  <section class="vpb-shell mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-10 lg:py-16">
      <div class="vpb-page rounded-[2rem] px-5 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
      <div class="vpb-page-header mx-auto max-w-3xl text-center">
        <p class="vpb-kicker">Archive</p>
        <h2 class="vpb-display-title">
          {{ theme.blog?.title }} Archives
        </h2>
        <p class="vpb-lead">
          {{ theme.blog?.description }}
        </p>
      </div>

      <div class="vpb-search mx-auto mb-10 max-w-2xl">
        <label class="sr-only" for="vpb-archive-search">Search archives</label>
        <span class="i-[carbon--search] vpb-search__icon" aria-hidden="true"></span>
        <input
          id="vpb-archive-search"
          v-model="searchQuery"
          class="vpb-search__input"
          type="search"
          autocomplete="off"
          placeholder="Search archives"
        />
        <button
          v-if="searchQuery"
          type="button"
          class="vpb-search__clear"
          aria-label="Clear search"
          @click="clearSearch"
        >
          <span class="i-[carbon--close]" aria-hidden="true"></span>
        </button>
      </div>

      <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div class="space-y-8">
          <section
            v-for="year in visiblePostsByYear"
            :key="year[0].date.raw.split('-')[0]"
            class="vpb-card vpb-card--static rounded-[1.5rem] px-4 py-4 sm:px-7 sm:py-6"
          >
            <h3 class="vpb-divider-title">
              {{ year[0].date.raw.split('-')[0] }}
            </h3>
            <div class="mt-3">
              <a
                v-for="post in year"
                :key="post.url"
                :href="withBase(post.url)"
                class="vpb-list-link"
              >
                <div class="vpb-list-link__title">{{ post.title }}</div>
                <div class="vpb-list-link__meta">
                  {{ post.date.raw.slice(5) }}
                </div>
              </a>
            </div>
          </section>

          <section
            v-if="!visiblePostsByYear.length"
            class="vpb-soft-panel rounded-[1.5rem] px-5 py-10 text-center sm:px-7"
          >
            <p class="vpb-kicker justify-center">No Results</p>
            <p class="mt-4 font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-2xl leading-tight text-[color:var(--vpb-text-strong)]">
              Nothing matched "{{ searchQuery }}".
            </p>
          </section>
        </div>
        <aside class="vpb-soft-panel rounded-[1.5rem] p-5 sm:p-6">
          <p class="vpb-kicker">Timeline</p>
          <p class="mt-4 font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-2xl leading-tight text-[color:var(--vpb-text-strong)]">
            {{ filteredPosts.length }} of {{ totalPostCount }} notes.
          </p>
          <p class="mt-4 text-sm leading-7 text-[color:var(--vpb-text-soft)]">
            快速按时间回看内容，适合做知识回溯，也让归档页本身更像一本可翻阅的目录。
          </p>
          <button
            v-if="searchQuery"
            type="button"
            class="vpb-accent-link mt-5"
            @click="clearSearch"
          >
            Clear search
            <span class="i-[carbon--close] ml-1"></span>
          </button>
        </aside>
      </div>
    </div>
  </section>
</template>

<style>
@reference "../style.css";
</style>
