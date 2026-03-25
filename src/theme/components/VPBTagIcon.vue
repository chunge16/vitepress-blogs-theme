<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

const props = defineProps({
  tag: String,
});

const { theme } = useData();
const iconClass = computed(() => {
  const tag = props.tag?.toLowerCase();
  return tag ? theme.value.blog?.tagIcons?.[tag] ?? null : null;
});

</script>

<template>
  <span
    v-if="iconClass"
    :class="iconClass"
    class="mr-2"
  ></span>
</template>
<style>
@reference "../style.css";
</style>
