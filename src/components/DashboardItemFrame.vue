<template>
  <div class="frame-wrapper">
    <DashboardItemSkeleton :type="skeletonType" class="skeleton-overlay" :class="{ 'skeleton--inactive': loadIframe }" />
    <iframe :src="iframeSrc" :title="label ?? `Dashboard item – ${sheet}`" loading="lazy" frameborder="0"
      class="dashboard-item-frame" ref="iframe"></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, toRefs, unref, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import DashboardItemSkeleton, { type SkeletonType } from './DashboardItemSkeleton.vue'
import { buildQlikUrl } from '@/utils/qlik'

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
  skeletonType?: SkeletonType
}

const props = withDefaults(defineProps<DashboardItemFrameProps>(), {
  colSpan: 1,
  rowSpan: 1,
  showSelections: false,
  mobileOrder: 0,
  mobileHeight: 8,
  skeletonType: 'column'
})

const { appid, sheet, select, showSelections, mobileOrder, mobileHeight } = toRefs(props)
const iframe = ref<HTMLIFrameElement | null>(null)
const loadIframe = ref(false)

// Resolved identity: own prop wins; falls back to parent ComposedDashboard's provided identity
const injectedIdentity = inject<Ref<string | undefined> | string | undefined>('composedIdentity', undefined)
const resolvedIdentity = computed(() => props.identity?.trim() || (unref(injectedIdentity)?.trim() ?? ''))

const iframeSrc = computed(() => {
  if (!loadIframe.value) return ''
  return buildQlikUrl(appid.value, sheet.value, {
    identity: resolvedIdentity.value || undefined,
    showSelections: showSelections.value,
    select: select.value,
  })
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
  width: 100%;
  height: 100%;
}

.dashboard-item-frame {
  width: 100%;
  height: 100%;
  border: none;
}

.skeleton-overlay {
  transition: opacity 5s linear;
}

.skeleton--inactive {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 5s, opacity 5s linear;
}

@media (max-width: 900px),
(orientation: portrait) {

  .frame-wrapper {
    grid-column: 1 / -1;
    grid-row: auto;
    order: v-bind(mobileOrder);
    height: calc(v-bind(mobileHeight) * 12vh);
  }
}
</style>
