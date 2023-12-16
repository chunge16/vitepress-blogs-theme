

<template>
  <div v-if="isShowGiscus" class="giuscus-wrap">
    <Giscus
        :id="defaultProps.id"
        :repo="giscus?.repo"
        :repoId="giscus?.repoId"
        :categoryId="giscus?.categoryId"
        :category="giscus?.category ?? defaultProps.category"
        :mapping="giscus?.mapping ?? defaultProps.mapping"
        :term=" giscus?.term ?? defaultProps.term"
        :reactionsEnabled="giscus?.reactionsEnabled ?? defaultProps.reactionsEnabled"
        :emitMetadata="giscus?.emitMetadata ?? defaultProps.emitMetadata"
        :inputPosition="giscus?.inputPosition ?? defaultProps.inputPosition"
        :theme="defaultProps.theme"
        :lang="giscus?.lang ?? defaultProps.lang"
        :loading="giscus?.loading ?? defaultProps.loading"
    />
  </div>
</template>

<script setup lang="jsx">
import {ref, watch, computed} from "vue"
import { useData } from 'vitepress';
import Giscus from "@giscus/vue";

const {
  theme,
  isDark,
  frontmatter,
} = useData();
const giscus  = theme.value.blog.giscus;
const lightTheme = giscus?.lightTheme || 'light';
const darkTheme = giscus?.darkTheme || 'transparent_dark';

// Giscus default props value
const defaultProps = ref({
  id: 'comments',
  category: 'General',
  mapping: 'pathname',
  term: 'Welcome to giscus!',
  reactionsEnabled: '1',
  inputPosition: 'top',
  lang: 'zh-CN',
  loading: 'lazy',
  emitMetadata: '0',
  theme: isDark.value ? darkTheme : lightTheme,
});

// Whether to activate the comment area on all posts.
// The default is true, which means enabled, this parameter can be ignored;
// If it is false, it means it is not enabled.
// You can use `comment: true` preface to enable it separately on the page.
const isShowGiscus = computed(() => {
  // Whether to activate the comment area on all posts. default is true
  const defaultEnable = typeof giscus.defaultEnable === 'boolean' ? giscus.defaultEnable : true;
  // You can use `comment: true` preface to enable it separately on the page.
  const comment = frontmatter.value.comment;

  if(typeof comment == 'boolean') {
    return comment
  } else {
    return defaultEnable
  }

});

watch(isDark, () => {
  defaultProps.value.theme = isDark.value ? darkTheme : lightTheme;
});

</script>

<style scoped>
.giuscus-wrap {
  width: 100%;
  height: auto;
  margin-top: 40px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 20px;
}

</style>
