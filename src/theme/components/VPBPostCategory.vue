<script setup>
import { useData } from 'vitepress'

defineProps({
  category: String
})
const { theme } = useData()
</script>

<template>
  <div class="flex items-center">
    <span
      v-if="
        theme?.blog?.categoryIcons &&
        theme?.blog?.categoryIcons[category.toLowerCase()]
      "
      :class="theme?.blog?.categoryIcons[category.toLowerCase()]"
      class="mr-2"
    />
    <span>{{ category }}</span>
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
