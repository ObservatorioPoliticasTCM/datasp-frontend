<template>
    <iframe
      :src="iframeSrc"
      :title="label ?? `Dashboard item – ${sheet}`"
      loading="lazy"
      frameborder="0"
      class="dashboard-item-frame"
    ></iframe>
</template>

<script setup lang="ts">
import { computed, inject, toRefs, unref } from 'vue'
import type { Ref } from 'vue'

interface DashboardItemFrameProps {
  appid: string
  sheet: string
  identity?: string
  select?: string
  label?: string
  colSpan?: number
  rowSpan?: number
}

const props = withDefaults(defineProps<DashboardItemFrameProps>(), {
  colSpan: 1,
  rowSpan: 1
})

const { appid, sheet, select } = toRefs(props)

// Resolved identity: own prop wins; falls back to parent ComposedDashboard's provided identity
const injectedIdentity = inject<Ref<string | undefined> | string | undefined>('composedIdentity', undefined)
const resolvedIdentity = computed(() => props.identity?.trim() || (unref(injectedIdentity)?.trim() ?? ''))

const baseUrl = 'https://qlik.tcm.sp.gov.br/jwt/single/'
const iframeSrc = computed(() => {
  let url = `${baseUrl}?appid=${appid.value}&sheet=${sheet.value}&theme=card&opt=ctxmenu,currsel`
  if (resolvedIdentity.value) url += `&identity=${encodeURIComponent(resolvedIdentity.value)}`
  if (select.value) url += `&secret=${encodeURIComponent(select.value)}`
  return url
})
</script>

<style scoped>
.dashboard-item-frame {
  width: 100%;
  height: 100%;
  border: none;
  grid-column: span v-bind(colSpan);
  grid-row: span v-bind(rowSpan);
}
</style>
