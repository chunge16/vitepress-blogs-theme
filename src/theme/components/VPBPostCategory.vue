<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress'

const props = defineProps({
  category: String
})
const { theme } = useData()
const iconClass = computed(() => {
  const category = props.category?.toLowerCase();
  return category ? theme.value.blog?.categoryIcons?.[category] ?? null : null;
});
</script>

<template>
  <div class="flex items-center">
    <span
      v-if="iconClass"
      :class="iconClass"
      class="mr-2"
    />
    <span>{{ props.category }}</span>
  </div>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
<style>
@reference "../style.css";
</style>
