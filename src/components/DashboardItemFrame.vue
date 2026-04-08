<template>
  <div
    class="dashboard-item-frame"
    :class="[`dashboard-${type}`]"
    :style="itemStyle"
  >
    <iframe
      :src="iframeSrc"
      :title="label ?? `Dashboard item – ${sheet}`"
      loading="lazy"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, toRefs, unref } from 'vue'
import type { Ref } from 'vue'

interface DashboardItemFrameProps {
  appid: string
  sheet: string
  identity?: string
  select?: string
  type?: 'chart' | 'filter'
  label?: string
  colSpan?: number
  rowSpan?: number
}

const props = withDefaults(defineProps<DashboardItemFrameProps>(), {
  type: 'chart',
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

const itemStyle = computed(() => ({
  gridColumn: props.colSpan > 1 ? `span ${props.colSpan}` : undefined,
  gridRow: props.rowSpan > 1 ? `span ${props.rowSpan}` : undefined
}))
</script>

<style scoped>
.dashboard-item-frame {
  flex-grow: 1;
  flex-shrink: 1;
  /* flex-basis and min-width/height are set via inline style */
  overflow: hidden;
}

.dashboard-item-frame iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.dashboard-filter {
  min-height: 8vh;
  min-width: 100%;
}

</style>
