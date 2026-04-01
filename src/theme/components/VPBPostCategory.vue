<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

const props = defineProps({
  category: String
});

const { theme } = useData();
const iconClass = computed(() => {
  const category = props.category?.toLowerCase();
  return category ? theme.value.blog?.categoryIcons?.[category] ?? null : null;
});
</script>

<template>
  <div class="flex items-center gap-2">
    <span
      v-if="iconClass"
      :class="iconClass"
      class="text-[0.95em]"
    />
    <span>{{ props.category }}</span>
    <slot />
  </div>
</template>

<style>
@reference "../style.css";
</style>
