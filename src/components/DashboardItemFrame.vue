<template>
  <div class="frame-wrapper">
    <div class="frame-content">
      <DashboardItemSkeleton :type="skeletonType" :active="!loadIframe" :transition-duration="5" />
      <iframe :src="iframeSrc" :title="label ?? `Dashboard item – ${sheet}`" frameborder="0"
        class="dashboard-item-frame" ref="iframe"></iframe>
    </div>

    <div v-if="legendItems.length" class="frame-legend" aria-label="Legenda do gráfico">
      <div v-for="(item, index) in legendItems" :key="`${item.text}-${index}`" class="legend-item">
        <span class="legend-icon" :class="`legend-icon--${item.iconType ?? 'line'}`" :style="{ '--legend-color': item.color }"
          aria-hidden="true"></span>
        <span class="legend-text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, toRefs, unref, onBeforeUnmount, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import DashboardItemSkeleton, { type SkeletonType } from './DashboardItemSkeleton.vue'
import { buildQlikUrl } from '@/utils/qlik'

export type LegendIconType = 'line' | 'dot' | 'square' | 'triangle'

export interface DashboardLegendItem {
  text: string
  color: string
  iconType?: LegendIconType
}

interface DashboardItemFrameProps {
  appid: string
  sheet: string
  identity?: string
  select?: string
  showSelections?: boolean
  label?: string
  mobileOrder?: number
  mobileHeight?: number
  skeletonType?: SkeletonType
  legendItems?: DashboardLegendItem[]
}

const props = withDefaults(defineProps<DashboardItemFrameProps>(), {
  showSelections: false,
  mobileOrder: 0,
  mobileHeight: 8,
  skeletonType: 'column',
  legendItems: () => []
})

const { appid, sheet, select, showSelections, mobileOrder, mobileHeight, legendItems } = toRefs(props)
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

let obs: IntersectionObserver | null = null

onMounted(() => {
  if (!iframe.value) return

  const scrollContainer = iframe.value.closest('.snap-container')

  obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      loadIframe.value = true
    } else {
      destroyIframe()
    }
  }, {
    root: scrollContainer,
    rootMargin: '100% 0px  100% 0px'
  })

  obs.observe(iframe.value)
})

function destroyIframe() {
  const iframeElement = iframe.value
  if (!iframeElement) return

  try {
    iframeElement.src = 'about:blank'

    // if (iframeElement.contentWindow) {
    //   iframeElement.contentWindow.document.write('')
    //   iframeElement.contentWindow.close()
      
    // }
  } catch (error) {
    console.warn("Não foi possível limpar a memória")
  }

  loadIframe.value = false
}

onBeforeUnmount(() => {
  if(obs != null){
    obs.disconnect()
  }
  destroyIframe()
})
</script>

<style scoped>
.frame-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 0;
  width: 100%;
  height: 100%;
}

.frame-content {
  position: relative;
  min-height: 0;
  width: 100%;
  flex: 1 1 auto;
}

.dashboard-item-frame {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}

.frame-legend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1.25rem;
  font-size: 0.95rem;
  color: #4f4f4f;
  background-color: #fff;
  border-radius: 0.25rem;
  margin: 0;
  margin-top: -0.25rem;
  padding: 0.5rem 1rem;
}

.legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.legend-icon {
  display: inline-block;
  flex-shrink: 0;
}

.legend-icon--line {
  width: 1rem;
  height: 0.16rem;
  border-radius: 99px;
  background-color: var(--legend-color);
}

.legend-icon--dot {
  width: 0.62rem;
  height: 0.62rem;
  border-radius: 50%;
  background-color: var(--legend-color);
}

.legend-icon--square {
  width: 0.62rem;
  height: 0.62rem;
  border-radius: 0.14rem;
  background-color: var(--legend-color);
}

.legend-icon--triangle {
  width: 0;
  height: 0;
  border-left: 0.35rem solid transparent;
  border-right: 0.35rem solid transparent;
  border-bottom: 0.62rem solid var(--legend-color);
}

@media (max-width: 900px),
(orientation: portrait) {

  .frame-wrapper {
    order: v-bind(mobileOrder);
    height: calc(v-bind(mobileHeight) * 12vh);
  }
}
</style>
