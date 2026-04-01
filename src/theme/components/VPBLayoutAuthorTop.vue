<script setup>
import { withBase } from 'vitepress';
import { useAuthors } from '../composables/useAuthors';

const { author, prevAuthor, nextAuthor } = useAuthors();
</script>

<template>
  <header class="vpb-soft-panel mb-10 rounded-[2rem] px-6 py-7 sm:px-8">
    <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-4">
        <img
          v-if="author?.gravatar"
          :src="`https://gravatar.com/avatar/${author?.gravatar}`"
          alt="author image"
          class="h-20 w-20 rounded-full border border-[color:var(--vpb-panel-border)] object-cover"
        />
        <img
          v-else-if="author?.avatar"
          :src="withBase(author?.avatar)"
          alt="author image"
          class="h-20 w-20 rounded-full border border-[color:var(--vpb-panel-border)] object-cover"
        />
        <div>
          <p class="vpb-kicker !mb-2">Author</p>
          <span class="font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-4xl tracking-[-0.04em] text-[color:var(--vpb-text-strong)]">
            {{ author?.name }}
          </span>
        </div>
      </div>
      <p class="max-w-md text-sm leading-7 text-[color:var(--vpb-text-soft)]">
        A focused author profile with cleaner navigation and warmer editorial styling.
      </p>
    </div>
    <div class="mt-6 flex items-center justify-between gap-4 border-t border-[color:var(--vpb-grid-line)] pt-5 text-[color:var(--vpb-text-soft)]">
      <a
        v-if="prevAuthor"
        :href="withBase(prevAuthor.url)"
        class="vpb-accent-link"
      >
        <div class="i-[carbon--arrow-left] mr-2"></div>
        <span>Previous Author</span>
      </a>
      <div v-if="!prevAuthor"></div>
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
