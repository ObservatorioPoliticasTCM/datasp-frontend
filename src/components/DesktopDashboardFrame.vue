<template>
  <div class="desktop-frame-wrapper" ref="wrapperEl">
    <DashboardItemSkeleton :type="skeletonType" class="skeleton-overlay" :class="{ 'skeleton--inactive': loaded }" />
    <iframe
      :src="iframeSrc"
      :title="`Dashboard – ${sheet}`"
      frameborder="0"
      class="desktop-dashboard-iframe"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref, unref } from 'vue'
import type { Ref } from 'vue'
import DashboardItemSkeleton, { type SkeletonType } from './DashboardItemSkeleton.vue'
import { buildQlikUrl } from '@/utils/qlik'

interface DesktopDashboardFrameProps {
  appid: string
  sheet: string
  skeletonType?: SkeletonType
}

const props = withDefaults(defineProps<DesktopDashboardFrameProps>(), {
  skeletonType: 'column'
})

const wrapperEl = ref<HTMLElement | null>(null)
const loaded = ref(false)

const injectedIdentity = inject<Ref<string | undefined> | string | undefined>('composedIdentity', undefined)
const resolvedIdentity = computed(() => unref(injectedIdentity)?.trim() ?? '')

const iframeSrc = computed(() => {
  if (!loaded.value) return ''
  return buildQlikUrl(props.appid, props.sheet, {
    identity: resolvedIdentity.value || undefined,
    showSelections: true,
  })
})

const obs = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    loaded.value = true
    obs.disconnect()
  }
}, { rootMargin: '0px 0px 20% 0px' })

onMounted(() => {
  if (wrapperEl.value) obs.observe(wrapperEl.value)
})

onBeforeUnmount(() => {
  obs.disconnect()
})
</script>

<style scoped>
.desktop-frame-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  min-height: 0;
}

.desktop-dashboard-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: linear-gradient(90deg, #d4d4d4 25%, #ebebeb 50%, #d4d4d4 75%);
}

.skeleton-overlay {
  transition: opacity 3s linear;
}

.skeleton--inactive {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 3s, opacity 3s linear;
}
</style>
