<template>
  <section class="mobile-dashboard-section snap-section" ref="rootEl">
    <div class="frame-header">
      <h1>
        <span class="title-anchor-wrapper">
          <a
            :id="anchorId"
            :href="'#' + anchorId"
            class="title-anchor"
            title="Copiar o link para este dashboard"
            @click="copyDashboardLink"
          >
            {{ title }}
            <img src="@/assets/copy-icon.svg" class="copy-icon" alt="Copiar link" />
          </a>
          <transition name="fade">
            <span v-if="showCopied" class="copy-popup">Link copiado</span>
          </transition>
        </span>
      </h1>
    </div>

    <div class="top-iframe-container">
      <iframe
        class="top-iframe"
        :src="resolvedFilterSrc"
        :title="`Filtro - ${title}`"
        loading="lazy"
      ></iframe>
    </div>

    <div class="grid-container">
      <div v-for="(src, index) in resolvedChartSrcs" :key="`${anchorId}-chart-${index}`" class="grid-item">
        <iframe
          :src="src"
          :title="`Dashboard ${index + 1} - ${title}`"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, toRefs } from 'vue'

const fullyVisibleEvent = 'fully-visible'
const sectionInfoEvent = 'mobile-section-info'

interface MobileDashboardSectionProps {
  title: string
  filterSrc: string
  chartSrcs: string[]
  identity?: string
  metadataLink?: string
  methodologyLink?: string
  downloadLink?: string
}

const props = defineProps<MobileDashboardSectionProps>()
const { title, filterSrc, chartSrcs, identity, metadataLink, methodologyLink, downloadLink } = toRefs(props)
const emit = defineEmits<{ (e: 'fully-visible', anchorId: string): void }>()

const rootEl = ref<HTMLElement | null>(null)
const showCopied = ref(false)
let scrollRoot: HTMLElement | null = null
let scrollListenerAttached = false
let ticking = false
let copyToastTimeout: number | null = null

const anchorId = computed(() => title.value
  .toLowerCase()
  .replace(/\n/g, ' ')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9 ]/g, '')
  .trim()
  .replace(/\s+/g, '-')
)

const withIdentity = (src: string): string => {
  const cleaned = src.trim()
  if (!cleaned || !identity.value?.trim()) return cleaned

  try {
    const parsed = new URL(cleaned)
    parsed.searchParams.set('identity', identity.value.trim())
    return parsed.toString()
  } catch {
    const separator = cleaned.includes('?') ? '&' : '?'
    return `${cleaned}${separator}identity=${encodeURIComponent(identity.value.trim())}`
  }
}

const resolvedFilterSrc = computed(() => withIdentity(filterSrc.value))
const resolvedChartSrcs = computed(() => chartSrcs.value.map((src) => withIdentity(src)))

const publishSectionInfo = () => {
  if (!rootEl.value) return
  rootEl.value.dispatchEvent(new CustomEvent(sectionInfoEvent, {
    bubbles: true,
    detail: {
      anchorId: anchorId.value,
      metadataLink: metadataLink.value ?? '',
      methodologyLink: methodologyLink.value ?? '',
      downloadLink: downloadLink.value ?? ''
    }
  }))
}

const fullyVisible = (): boolean => {
  if (!rootEl.value) return false
  const elRect = rootEl.value.getBoundingClientRect()
  const rootRect = (scrollRoot
    ? scrollRoot.getBoundingClientRect()
    : { top: 0, bottom: window.innerHeight }) as DOMRect | { top: number; bottom: number }
  const elTop = Math.round(elRect.top)
  const elBottom = Math.round(elRect.bottom)
  const rootTop = Math.round(rootRect.top)
  const rootBottom = Math.round(rootRect.bottom)
  const elHeight = elBottom - elTop
  const rootHeight = rootBottom - rootTop
  if (elHeight > rootHeight) {
    const margin = Math.min(180, Math.round(rootHeight * 0.35))
    return elTop >= rootTop && elTop <= rootBottom - margin
  }
  return elTop >= rootTop && elBottom <= rootBottom && (elBottom - elTop) > 0
}

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const visible = fullyVisible()
    if (visible) {
      emit(fullyVisibleEvent, anchorId.value)
      if (rootEl.value) {
        rootEl.value.dispatchEvent(new CustomEvent(fullyVisibleEvent, { bubbles: true, detail: { anchorId: anchorId.value } }))
      }
      publishSectionInfo()
    }
    ticking = false
  })
}

const copyDashboardLink = async () => {
  const fullUrl = `${window.location.origin}${window.location.pathname}#${anchorId.value}`

  try {
    await navigator.clipboard.writeText(fullUrl)
  } catch {
    const temp = document.createElement('textarea')
    temp.value = fullUrl
    temp.style.position = 'fixed'
    temp.style.opacity = '0'
    document.body.appendChild(temp)
    temp.select()
    try {
      document.execCommand('copy')
    } catch {
      // Ignore fallback copy errors.
    }
    document.body.removeChild(temp)
  }

  showCopied.value = false
  void nextTick(() => {
    showCopied.value = true
    if (copyToastTimeout) clearTimeout(copyToastTimeout)
    copyToastTimeout = window.setTimeout(() => { showCopied.value = false }, 1800)
  })
}

onMounted(() => {
  scrollRoot = document.querySelector('.snap-container') as HTMLElement | null
  const targetScrollEl = scrollRoot || window
  if (!scrollListenerAttached) {
    targetScrollEl.addEventListener('scroll', onScroll, { passive: true })
    scrollListenerAttached = true
  }
  const visible = fullyVisible()
  if (visible) {
    emit(fullyVisibleEvent, anchorId.value)
    if (rootEl.value) {
      rootEl.value.dispatchEvent(new CustomEvent(fullyVisibleEvent, { bubbles: true, detail: { anchorId: anchorId.value } }))
    }
    publishSectionInfo()
  }
})

onBeforeUnmount(() => {
  const targetScrollEl = scrollRoot || window
  if (scrollListenerAttached) {
    targetScrollEl.removeEventListener('scroll', onScroll)
    scrollListenerAttached = false
  }
  if (copyToastTimeout) clearTimeout(copyToastTimeout)
})
</script>

<style scoped>
.mobile-dashboard-section {
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: calc(100vw - 12vh);
  padding: 6vh;
  position: relative;
  z-index: 20;
  gap: 1rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.frame-header {
  font-size: 0.6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
}

.frame-header h1 {
  margin: 0;
  text-transform: uppercase;
  text-align: left;
  font-weight: normal;
  white-space: pre-line;
}

.copy-icon {
  width: 1em;
  height: 1em;
  vertical-align: top;
}

.title-anchor {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.title-anchor:hover {
  text-decoration: underline;
}

.title-anchor-wrapper {
  position: relative;
  display: inline-block;
}

.copy-popup {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0.6rem);
  background: #242424;
  color: #ffffff;
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.7em;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.top-iframe-container {
  width: 100%;
  height: auto;
  min-height: 5vh;
  border: 1px solid #cccccc;
}

.top-iframe {
  width: 100%;
  height: 5vh;
  display: block;
  border: none;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  flex: 1;
}

.grid-item {
  border: 1px solid #cccccc;
  overflow: hidden;
}

.grid-item iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 1024px) {
  .mobile-dashboard-section {
    height: auto;
  }

  .top-iframe-container {
    min-height: 30vh;
  }

  .top-iframe {
    height: 30vh;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }

  .grid-item {
    height: 80vh;
  }

  .title-anchor {
    font-size: 0.6em;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
