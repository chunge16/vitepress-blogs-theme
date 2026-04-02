<script setup>
import { withBase } from 'vitepress';
import { useAuthors } from '../composables/useAuthors';

const { author, prevAuthor, nextAuthor } = useAuthors();
</script>

<template>
  <header class="vpb-soft-panel mb-10 rounded-[2rem] px-5 py-6 sm:px-8 sm:py-7">
    <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-4">
        <img
          v-if="author?.gravatar"
          :src="`https://gravatar.com/avatar/${author?.gravatar}`"
          alt="author image"
          class="h-16 w-16 rounded-full border border-[color:var(--vpb-panel-border)] object-cover sm:h-20 sm:w-20"
        />
        <img
          v-else-if="author?.avatar"
          :src="withBase(author?.avatar)"
          alt="author image"
          class="h-16 w-16 rounded-full border border-[color:var(--vpb-panel-border)] object-cover sm:h-20 sm:w-20"
        />
        <div class="min-w-0">
          <p class="vpb-kicker !mb-3">Author</p>
          <span class="block font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-[2.4rem] leading-none tracking-[-0.05em] text-[color:var(--vpb-text-strong)] sm:text-4xl">
            {{ author?.name }}
          </span>
        </div>
      </div>
      <p class="max-w-md text-sm leading-7 text-[color:var(--vpb-text-soft)] sm:pt-2">
        A focused author profile with cleaner navigation and warmer editorial styling.
      </p>
    </div>
    <div class="mt-6 flex flex-col items-start gap-3 border-t border-[color:var(--vpb-grid-line)] pt-5 text-[color:var(--vpb-text-soft)] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <a
        v-if="prevAuthor"
        :href="withBase(prevAuthor.url)"
        class="vpb-accent-link"
      >
        <div class="i-[carbon--arrow-left] mr-2"></div>
        <span>Previous Author</span>
      </a>
      <div v-if="!prevAuthor" class="hidden sm:block"></div>
      <a
        v-if="nextAuthor"
        :href="withBase(nextAuthor.url)"
        class="vpb-accent-link"
      >
        <span>Next Author</span>
        <div class="i-[carbon--arrow-right] ml-2"></div>
      </a>
    </div>
  </header>
</template>

<style>
@reference "../style.css";
</style>
