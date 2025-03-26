<script setup>
defineProps({
    tag: String,
});
import { useData } from 'vitepress';

const { theme } = useData();

console.log("theme", theme);

</script>

<template>
  <div
    v-if="theme.blog?.tagIcons && theme.blog.tagIcons[tag.toLowerCase()]"
    :class="theme.blog.tagIcons[tag.toLowerCase()]"
    class="mr-2 w-[1.2em] h-[1.2em] inline-block align-middle"
  ></div>
</template>
<style scoped>
</style>
