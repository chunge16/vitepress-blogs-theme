<script setup>
defineProps({
    tag: String,
});
import { useData } from 'vitepress';

const { theme } = useData();

console.log("theme", theme?.blog);

</script>

<template>
  <span
    v-if="theme.blog?.tagIcons && theme.blog?.tagIcons[tag.toLowerCase()]"
    :class="theme.blog?.tagIcons[tag.toLowerCase()]"
    class="mr-2"
  ></span>
</template>
<style>
@reference "../style.css";
</style>
