<template>
  <ThemePage :dashboards="dashboards" theme-id="educacao" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ThemePage from '@/components/ThemePage.vue'
import { usePreview } from '@/composables/preview'
import { educacaoPrevious } from '@/data/dashboards/educacaoPrevious'
import { educacaoCurrent } from '@/data/dashboards/educacaoCurrent'

const { showUpdateContent } = usePreview()

const dashboards = computed(() =>
  showUpdateContent.value && educacaoCurrent.length > 0
    ? educacaoCurrent
    : educacaoPrevious
)
</script>
