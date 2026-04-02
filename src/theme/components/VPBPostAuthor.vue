<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { usePosts } from '../composables/usePosts';
import { useAuthors } from '../composables/useAuthors';

defineProps<{
  insideDoc?: boolean
}>();

const { findByName } = useAuthors();
const { post } = usePosts();

const author = computed(() => {
  return findByName(post.value.author);
});
</script>

<template>
  <dl
    class="pb-10 pt-6 xl:pt-8"
    :class="{ 'xs:show xl:hidden': insideDoc }"
  >
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul class="flex justify-center sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
        <li
          v-if="author"
          class="vpb-soft-panel flex items-center gap-3 rounded-[1.5rem] px-4 py-4"
        >
          <img
            v-if="author?.gravatar"
            :src="`https://gravatar.com/avatar/${author?.gravatar}`"
            alt="author image"
            class="h-12 w-12 rounded-full border border-[color:var(--vpb-panel-border)] object-cover"
          />
          <img
            v-else-if="author?.avatar"
            :src="withBase(author?.avatar)"
            alt="author image"
            class="h-12 w-12 rounded-full border border-[color:var(--vpb-panel-border)] object-cover"
          />
          <dl class="min-w-0 text-sm font-medium leading-5">
            <dt class="sr-only">Name</dt>
            <dd class="text-[color:var(--vpb-text-strong)]">
              <a
                :href="withBase(author.url)"
                class="vpb-link font-[Iowan_Old_Style,Palatino,'Palatino_Linotype','Book_Antiqua',Georgia,serif] text-xl tracking-[-0.02em]"
              >
                {{ author?.name }}
              </a>
            </dd>
            <dt v-if="author?.twitter" class="sr-only">Twitter</dt>
            <dd v-if="author?.twitter">
              <a
                :href="`https://twitter.com/${author?.twitter}`"
                target="_blank"
                rel="noopener noreferrer"
                class="vpb-link text-xs uppercase tracking-[0.2em] text-[color:var(--vpb-text-soft)]"
              >
                @{{ author.twitter }}
              </a>
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<style>
@reference "../style.css";
</style>
