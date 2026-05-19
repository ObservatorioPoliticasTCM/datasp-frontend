<template>
  <div class="desktop-frame-wrapper" ref="wrapperEl">
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
import { buildQlikUrl } from '@/utils/qlik'

interface DesktopDashboardFrameProps {
  appid: string
  sheet: string
}

const props = defineProps<DesktopDashboardFrameProps>()

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
  width: 100%;
  height: 100%;
}

.desktop-dashboard-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
