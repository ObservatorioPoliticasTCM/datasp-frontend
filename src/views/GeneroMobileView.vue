<template>
  <ThemePage :dashboards="dashboards" theme-id="genero" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ThemePage from '@/components/ThemePage.vue'
import { usePreview } from '@/composables/preview';
import { generoPrevious } from '@/data/dashboards/generoPrevious'; 
import { generoCurrent } from '@/data/dashboards/generoCurrent';

const { showUpdateContent } = usePreview()

const dashboards = computed(() =>
  showUpdateContent.value && generoCurrent.length > 0
    ? generoCurrent
    : generoPrevious
)
</script>


