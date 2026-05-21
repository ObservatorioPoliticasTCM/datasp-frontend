<template>
  <div class="snap-shell">
    <div class="snap-container" :class="{ 'no-snap': isSnapDisabled }" ref="container">
      <slot></slot>
    </div>
    <div
      v-if="dashboardEls.length && showNavigation && showDots"
      class="snap-dots"
      aria-label="Navegacao entre secoes"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        type="button"
        class="nav-dot nav-home nav-icon"
        :class="{ active: topVisible }"
        @click="scrollToHome"
        aria-label="Ir para a barra de navegacao"
        :aria-selected="topVisible"
        role="tab"
      >
        <span class="nav-dot-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 11 12 3l9 8" />
            <path d="M5 10v11h14V10" />
            <path d="M9 21v-6h6v6" />
          </svg>
        </span>
      </button>
      <button
        v-for="(_, index) in dashboardEls"
        :key="`dot-${index}`"
        type="button"
        class="nav-dot"
        :class="{ active: !topVisible && !bottomVisible && index === activeDashboard }"
        @click="scrollToDashboard(index)"
        :aria-label="`Ir para ${dashboardLabel(index)}`"
        :aria-selected="!topVisible && !bottomVisible && index === activeDashboard"
        role="tab"
      >
        <span class="nav-dot-tooltip" aria-hidden="true">
          {{ dashboardLabel(index) }}
        </span>
      </button>
      <button
        type="button"
        class="nav-dot nav-end nav-icon"
        :class="{ active: bottomVisible }"
        @click="scrollToFooter"
        aria-label="Ir para o rodape"
        :aria-selected="bottomVisible"
        role="tab"
      >
        <span class="nav-dot-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 7h10l-5 7z" fill="currentColor" stroke="none" />
            <path d="M7 7h10l-5 7z" />
            <path d="M6 18h12" />
          </svg>
        </span>
      </button>
    </div>
    <div
      v-if="dashboardEls.length && showNavigation && showArrows"
      class="snap-arrows"
      aria-hidden="false"
    >
      <button
        type="button"
        class="nav-arrow up"
        :disabled="topVisible"
        @click="goPrev"
        aria-label="Ir para o dashboard anterior"
      ></button>
      <button
        type="button"
        class="nav-arrow down"
        :disabled="bottomVisible"
        @click="goNext"
        aria-label="Ir para o proximo dashboard"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, provide, nextTick, computed, watch } from 'vue'

interface Props {
  showNavigation?: boolean
  showDots?: boolean
  showArrows?: boolean
  disableSnap?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showNavigation: true,
  showDots: true,
  showArrows: true,
  disableSnap: false
})

const MOBILE_BREAKPOINT = 900
const isPortrait = ref(false)
const isMobileView = ref(false)

// Combina a prop com as condições de viewport
const isSnapDisabled = computed(() => 
  props.disableSnap || isPortrait.value || isMobileView.value
)

const topVisible = ref(false)
const bottomVisible = ref(false)
let topObserver: IntersectionObserver | null = null
let bottomObserver: IntersectionObserver | null = null
let mutationObserver: MutationObserver | null = null

interface SectionState {
  onTop: boolean
  onUpperCenter: boolean
  onLowerCenter: boolean
  onBottom: boolean
}
const sectionStateMap = new Map<HTMLElement, SectionState>()
const sectionObserversMap = new Map<HTMLElement, IntersectionObserver[]>()
const activeElement = ref<HTMLElement | null>(null)

const firstEl = ref<HTMLElement | null>(null)
const lastEl = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
const dashboardEls = ref<HTMLElement[]>([])
const dashboardLabels = ref<string[]>([])
const activeDashboard = computed(() => activeElement.value ? dashboardEls.value.indexOf(activeElement.value) : -1)
const activeDashboardAnchor = computed(() => activeElement.value?.dataset.anchorId ?? '')

const totalDashboards = computed(() => dashboardEls.value.length)

const checkSectionActive = (el: HTMLElement) => {
  const state = sectionStateMap.get(el)
  if (!state) return
  const count = [state.onTop, state.onUpperCenter, state.onLowerCenter, state.onBottom].filter(v => v).length
  if (count >= 3) {
    if (activeElement.value && activeElement.value !== el) delete activeElement.value.dataset.active
    activeElement.value = el
    el.dataset.active = 'true'
  } else if (activeElement.value === el) {
    delete el.dataset.active
    activeElement.value = null
  }
}

const setupSectionObservers = (el: HTMLElement) => {
  const state: SectionState = { onTop: false, onUpperCenter: false, onLowerCenter: false, onBottom: false }
  sectionStateMap.set(el, state)

  const topObs = new IntersectionObserver(([entry]) => {
    state.onTop = entry.isIntersecting
    checkSectionActive(el)
  }, { rootMargin: '0px 0px -99% 0px' })

  const upperCenterObs = new IntersectionObserver(([entry]) => {
    state.onUpperCenter = entry.isIntersecting
    checkSectionActive(el)
  }, { rootMargin: '-25% 0px -50% 0px' })

  const lowerCenterObs = new IntersectionObserver(([entry]) => {
    state.onLowerCenter = entry.isIntersecting
    checkSectionActive(el)
  }, { rootMargin: '-50% 0px -25% 0px' })

  const bottomObs = new IntersectionObserver(([entry]) => {
    state.onBottom = entry.isIntersecting
    checkSectionActive(el)
  }, { rootMargin: '-99% 0px 0px 0px' })

  topObs.observe(el)
  upperCenterObs.observe(el)
  lowerCenterObs.observe(el)
  bottomObs.observe(el)

  sectionObserversMap.set(el, [topObs, upperCenterObs, lowerCenterObs, bottomObs])
}

const teardownSectionObservers = (el: HTMLElement) => {
  const observers = sectionObserversMap.get(el)
  if (observers) {
    observers.forEach(obs => obs.disconnect())
    sectionObserversMap.delete(el)
  }
  sectionStateMap.delete(el)
  if (activeElement.value === el) {
    delete el.dataset.active
    activeElement.value = null
  }
}

const teardownAllSectionObservers = () => {
  for (const el of [...sectionObserversMap.keys()]) {
    teardownSectionObservers(el)
  }
}

const clearHash = () => {
  history.replaceState(history.state, '', window.location.pathname + window.location.search)
}

const sectionVisible = (id: string) => {
  if (topVisible.value || bottomVisible.value) return
  if (location.hash === `#${id}`) return
  history.replaceState(history.state, '', `#${id}`)
}

const evaluateViewport = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  isPortrait.value = height > width
  isMobileView.value = width < MOBILE_BREAKPOINT
}

const onResize = () => {
  evaluateViewport()
}

provide('sectionVisible', sectionVisible)

const normalizeLabel = (value?: string | null) => value ? value.replace(/\s+/g, ' ').trim() : ''
const fallbackLabel = (index: number) => `Dashboard ${index + 1}`
const extractDashboardLabel = (element: HTMLElement, index: number) => {
  const anchor = element.querySelector<HTMLElement>('.title-anchor')
  const heading = element.querySelector<HTMLElement>('h1, h2, h3')
  const label = normalizeLabel(anchor?.textContent ?? heading?.textContent ?? '')
  return label || fallbackLabel(index)
}
const dashboardLabel = (index: number) => dashboardLabels.value[index] ?? fallbackLabel(index)

const updateDashboardRefs = (children: HTMLElement[]) => {
  dashboardEls.value = children.filter(child => child.classList.contains('snap-section'))
  dashboardLabels.value = dashboardEls.value.map((el, idx) => extractDashboardLabel(el, idx))
}

const disconnectIOs = () => {
  topObserver?.disconnect(); bottomObserver?.disconnect()
  topObserver = null; bottomObserver = null
}

const setupObservers = () => {
  if (!container.value) return
  const children = Array.from(container.value.children) as HTMLElement[]
  if (!children.length) {
    dashboardEls.value = []
    return
  }
  firstEl.value = children[0]
  lastEl.value = children[children.length - 1]
  updateDashboardRefs(children)
  disconnectIOs()
  topObserver = new IntersectionObserver(([e]) => {
    topVisible.value = e.isIntersecting
    if (topVisible.value) clearHash()
  }, { threshold: 0.6 })
  bottomObserver = new IntersectionObserver(([e]) => {
    bottomVisible.value = e.isIntersecting
    if (bottomVisible.value) clearHash()
  }, { threshold: 0.4 })
  if (firstEl.value) topObserver.observe(firstEl.value)
  if (lastEl.value && lastEl.value !== firstEl.value) bottomObserver.observe(lastEl.value)

  // Tear down and recreate per-section observers
  teardownAllSectionObservers()
  children.filter(child => child.classList.contains('snap-section')).forEach(el => setupSectionObservers(el))
}

watch([topVisible, bottomVisible, activeDashboardAnchor], ([, , anchor]) => {
  sectionVisible(anchor)
})

const scrollToElement = (element: HTMLElement | null) => {
  if (!element) return
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const scrollToHome = () => {
  scrollToElement(firstEl.value)
}

const scrollToFooter = () => {
  if (!lastEl.value || lastEl.value === firstEl.value) return
  scrollToElement(lastEl.value)
}

const scrollToDashboard = (index: number) => {
  if (!container.value) return
  const target = dashboardEls.value[index]
  if (!target) return
  scrollToElement(target)
}

const goPrev = () => {
  if (bottomVisible.value && totalDashboards.value) {
    scrollToDashboard(totalDashboards.value - 1)
    return
  }
  if (activeDashboard.value > 0) {
    scrollToDashboard(activeDashboard.value - 1)
    return
  }
  if (!topVisible.value) scrollToHome()
}

const goNext = () => {
  if (topVisible.value && totalDashboards.value) {
    scrollToDashboard(0)
    return
  }
  if (activeDashboard.value < totalDashboards.value - 1) {
    scrollToDashboard(activeDashboard.value + 1)
    return
  }
  if (!bottomVisible.value) scrollToFooter()
}

onMounted(async () => {
  evaluateViewport()
  window.addEventListener('resize', onResize)

  if (container.value) {
    await nextTick()
    setupObservers()
    mutationObserver = new MutationObserver(() => {
      setupObservers()
    })
    mutationObserver.observe(container.value, { childList: true })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  disconnectIOs()
  teardownAllSectionObservers()
  mutationObserver?.disconnect()
})
</script>

<style scoped>
.snap-shell {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
.snap-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.snap-container.no-snap {
  scroll-snap-type: none;
}
.snap-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.snap-container > :slotted(*) {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
.snap-container.no-snap > :slotted(*) {
  scroll-snap-align: none;
  scroll-snap-stop: normal;
}
.snap-dots,
.snap-arrows {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
  gap: 0.5rem;
}
.snap-dots {
  left: 1rem;
}
.snap-arrows {
  right: 1.82rem;
  gap: 0.6rem;
}
.nav-arrow {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  border: none;
  padding: 0;
  box-sizing: border-box;
  background: rgba(33, 53, 71, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;
}
.nav-arrow::before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-left: 0.28rem solid transparent;
  border-right: 0.28rem solid transparent;
}
.nav-arrow.up::before {
  border-bottom: 0.48rem solid #ffffff;
}
.nav-arrow.down::before {
  border-top: 0.48rem solid #ffffff;
}
.nav-arrow:not(:disabled):hover {
  background: #213547;
}
.nav-arrow:disabled {
  opacity: 0.35;
  cursor: default;
}
.nav-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: rgba(33, 53, 71, 0.25);
  border: 1px solid transparent;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #213547;
  position: relative;
}
.nav-dot:hover {
  background: rgba(33, 53, 71, 0.55);
}
.nav-dot.active {
  background: #213547;
  border-color: #213547;
  transform: scale(1.15);
  color: #ffffff;
}
.nav-dot.nav-icon {
  width: 1.4rem;
  height: 1.4rem;
  padding: 0;
  border-radius: 50%;
  background: rgba(33, 53, 71, 0.12);
  border: 1px solid rgba(33, 53, 71, 0.2);
  color: #213547;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}
.nav-dot.nav-icon:hover {
  background: rgba(33, 53, 71, 0.24);
  border-color: rgba(33, 53, 71, 0.45);
}
.nav-dot.nav-icon.active {
  background: #213547;
  border-color: #213547;
  color: #ffffff;
  transform: scale(1.05);
}
.nav-dot-icon {
  width: 0.3rem;
  height: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.nav-dot.nav-icon .nav-dot-icon {
  width: 0.85rem;
  height: 0.85rem;
}
.nav-dot-icon svg {
  width: 100%;
  height: 100%;
}
.nav-dot-tooltip {
  position: absolute;
  left: calc(100% + 0.5rem);
  top: 50%;
  transform: translate(0.2rem, -50%);
  background: rgba(33, 53, 71, 0.92);
  color: #ffffff;
  padding: 0.15rem 0.45rem;
  border-radius: 0.35rem;
  font-size: 0.65rem;
  line-height: 1.2;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}
.nav-dot:hover .nav-dot-tooltip,
.nav-dot:focus-visible .nav-dot-tooltip {
  opacity: 1;
  transform: translate(0.35rem, -50%);
}

@media (max-width: 1366px), (orientation: portrait) {
  .snap-dots {
    left: 1rem;
  }
  .snap-arrows {
    right: 1rem;
  }
}
</style>

