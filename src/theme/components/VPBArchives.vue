<script setup>
import { useData, withBase } from 'vitepress';
import { useArchives } from '../composables/useArchives';

const { postsByYear } = useArchives();
const { theme } = useData();
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

      <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div class="space-y-8">
          <section
            v-for="(year, yearIndex) in postsByYear"
            :key="yearIndex"
            class="vpb-card vpb-card--static rounded-[1.5rem] px-4 py-4 sm:px-7 sm:py-6"
          >
            <h3 class="vpb-divider-title">
              {{ year[0].date.raw.split('-')[0] }}
            </h3>
            <div class="mt-3">
              <a
                v-for="(post, index) in year"
                :key="index"
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
        </div>
        <aside class="vpb-soft-panel rounded-[1.5rem] p-5 sm:p-6">
          <p class="vpb-kicker">Timeline</p>
          <p class="mt-4 font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-2xl leading-tight text-[color:var(--vpb-text-strong)]">
            A year-by-year map of every published note.
          </p>
          <p class="mt-4 text-sm leading-7 text-[color:var(--vpb-text-soft)]">
            快速按时间回看内容，适合做知识回溯，也让归档页本身更像一本可翻阅的目录。
          </p>
        </aside>
      </div>
    </div>
  </section>
</template>

<style>
@reference "../style.css";
</style>
