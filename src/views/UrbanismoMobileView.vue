<template>
  <ThemePage :dashboards="dashboards" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ThemePage from '@/components/ThemePage.vue'
import { usePreview } from '@/composables/preview'
import { urbanismoPrevious } from '@/data/dashboards/urbanismoPrevious'
import { urbanismoCurrent } from '@/data/dashboards/urbanismoCurrent'

const { showUpdateContent } = usePreview()

const dashboards = computed(() =>
  showUpdateContent.value && urbanismoCurrent.length > 0
    ? urbanismoCurrent
    : urbanismoPrevious
)
</script>
