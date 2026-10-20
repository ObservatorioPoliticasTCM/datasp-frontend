<template>
  <ThemePage :dashboards="dashboards" />
</template>

<script setup lang="ts">
import ThemePage from '@/components/ThemePage.vue'
import { computed } from 'vue'
import { usePreview } from '@/composables/preview'
import { orcamentoPrevious } from '@/data/dashboards/orcamentoPrevious'
import { orcamentoCurrent } from '@/data/dashboards/orcamentoCurrent'

const { showUpdateContent } = usePreview()

const dashboards = computed(() =>
  showUpdateContent.value && orcamentoCurrent.length > 0
    ? orcamentoCurrent
    : orcamentoPrevious
)
</script>
