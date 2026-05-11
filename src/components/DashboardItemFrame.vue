<template>
  <div class="frame-wrapper">
    <div class="skeleton" :class="{ 'skeleton--inactive': loadIframe }" />
    <iframe :src="iframeSrc" :title="label ?? `Dashboard item – ${sheet}`" loading="lazy" frameborder="0"
      class="dashboard-item-frame" ref="iframe"></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, toRefs, unref, onMounted, ref } from 'vue'
import type { Ref } from 'vue'

interface DashboardItemFrameProps {
  appid: string
  sheet: string
  identity?: string
  select?: string
  showSelections?: boolean
  label?: string
  colSpan?: number
  rowSpan?: number
  mobileOrder?: number
  mobileHeight?: number
}

const props = withDefaults(defineProps<DashboardItemFrameProps>(), {
  colSpan: 1,
  rowSpan: 1,
  showSelections: false,
  mobileOrder: 0,
  mobileHeight: 8
})

const { appid, sheet, select, showSelections, mobileOrder, mobileHeight } = toRefs(props)
const iframe = ref<HTMLIFrameElement | null>(null)
const loadIframe = ref(false)

// Resolved identity: own prop wins; falls back to parent ComposedDashboard's provided identity
const injectedIdentity = inject<Ref<string | undefined> | string | undefined>('composedIdentity', undefined)
const resolvedIdentity = computed(() => props.identity?.trim() || (unref(injectedIdentity)?.trim() ?? ''))

const baseUrl = 'https://qlik.tcm.sp.gov.br/jwt/single/'
const iframeSrc = computed(() => {
  let url = `${baseUrl}?appid=${appid.value}&sheet=${sheet.value}&theme=card&opt=ctxmenu`
  if (showSelections.value) url += `,currsel`
  if (resolvedIdentity.value) url += `&identity=${encodeURIComponent(resolvedIdentity.value)}`
  if (select.value) url += `&secret=${encodeURIComponent(select.value)}`
  return loadIframe.value ? url : ''
})

const obs = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    loadIframe.value = true
    obs.disconnect()
  }
}, { rootMargin: '0px 0px 20% 0px' })

onMounted(() => {
  if (iframe.value) obs.observe(iframe.value)
})
</script>

<style scoped>
.frame-wrapper {
  position: relative;
  min-height: 0;
  grid-column: span v-bind(colSpan);
  grid-row: span v-bind(rowSpan);
}

.dashboard-item-frame {
  width: 100%;
  height: 100%;
  border: none;
}

.skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  transition: opacity 2s linear;
}

.skeleton--inactive {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 3s, opacity 3s linear;
}

@media (max-width: 1024px),
(orientation: portrait) {

  .frame-wrapper {
    grid-column: 1 / -1;
    grid-row: auto;
    order: v-bind(mobileOrder);
    height: calc(v-bind(mobileHeight) * 12vh);
  }
}
</style>
