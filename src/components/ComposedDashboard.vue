<template>
    <div class="composed-dashboard snap-section" ref="rootEl">
        <div v-if="title" class="frame-header">
            <h1 v-if="title">
                <span class="title-anchor-wrapper">
                    <a :id="anchorId" :href="'#' + anchorId" class="title-anchor"
                        title="Copiar o link para este dashboard" @click="copyDashboardLink">
                        {{ displayTitle }}
                        <img src="@/assets/copy-icon.svg" class="copy-icon" alt="Copiar link" />
                    </a>
                    <transition name="fade">
                        <span v-if="showCopied" class="copy-popup">Link copiado</span>
                    </transition>
                </span>
            </h1>
            <div class="frame-actions">
                <AdditionalInfoMenu v-show="active" :metadata-link="metadataLink" :methodology-link="methodologyLink"
                    :download-link="downloadLink" />
            </div>
        </div>
        <div v-if="subtitle" class="frame-subtitle">
            <small v-if="subtitle">{{ subtitle }}</small>
        </div>
        <div class="dashboard-wrapper">
            <div class="filter-section">
                <slot name="filter" />
            </div>
            <div class="charts-section">
                <slot name="charts" />
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch, toRefs, nextTick, provide } from 'vue'
import AdditionalInfoMenu from './AdditionalInfoMenu.vue'

const fullyVisibleEvent = 'fully-visible'

interface DashboardFrameProps {
    identity?: string
    title?: string
    subtitle?: string
    metadataLink?: string
    methodologyLink?: string
    downloadLink?: string
    gridCols?: number
    gridRows?: number
}

const props = withDefaults(defineProps<DashboardFrameProps>(), {
    title: '',
    subtitle: '',
    gridCols: 12,
    gridRows: 9
})
const emit = defineEmits<{ (e: 'fully-visible', anchorId: string): void }>()

const { identity, title, subtitle } = toRefs(props)
const { metadataLink, methodologyLink, downloadLink } = toRefs(props)
const { gridCols, gridRows } = toRefs(props)
const active = ref(false)

provide('composedIdentity', identity)

const displayTitle = computed(() => title.value.replace(/\n/g, '\n'))

const anchorId = computed(() => title.value
    .toLowerCase()
    .replace(/\n/g, ' ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, '')
    .trim()
    .replace(/\s+/g, '-')
)

const rootEl = ref<HTMLElement | null>(null)
const showCopied = ref(false)
let copyToastTimeout: number | null = null

const dashboardOnTop = ref(false)
const dashboardOnUpperCenter = ref(false)
const dashboardOnLowerCenter = ref(false)
const dashboardOnBottom = ref(false)

const copyDashboardLink = () => {
    const fullUrl = `${window.location.origin}${window.location.pathname}#${anchorId.value}`
    const tryClipboard = async () => {
        try {
            await navigator.clipboard.writeText(fullUrl)
        } catch {
            const temp = document.createElement('textarea')
            temp.value = fullUrl
            temp.style.position = 'fixed'
            temp.style.opacity = '0'
            document.body.appendChild(temp)
            temp.select()
            try { document.execCommand('copy') } catch { /* ignore */ }
            document.body.removeChild(temp)
        }
        // mostrar toast
        showCopied.value = false
        void nextTick(() => { // garantir reinício de transição
            showCopied.value = true
            if (copyToastTimeout) clearTimeout(copyToastTimeout)
            copyToastTimeout = window.setTimeout(() => { showCopied.value = false }, 1800)
        })
    }
    tryClipboard()
}

const topObserver = new IntersectionObserver(([entry]) => {
    if (entry.target === rootEl.value) {
        dashboardOnTop.value = entry.isIntersecting
    }
}, { rootMargin: '0px 0px -99% 0px' })

const upperCenterObserver = new IntersectionObserver(([entry]) => {
    if (entry.target === rootEl.value) {
        dashboardOnUpperCenter.value = entry.isIntersecting
    }
}, { rootMargin: '-25% 0px -50% 0px' })

const lowerCenterObserver = new IntersectionObserver(([entry]) => {
    if (entry.target === rootEl.value) {
        dashboardOnLowerCenter.value = entry.isIntersecting
    }
}, { rootMargin: '-50% 0px -25% 0px' })

const bottomObserver = new IntersectionObserver(([entry]) => {
    if (entry.target === rootEl.value) {
        dashboardOnBottom.value = entry.isIntersecting
    }
}, { rootMargin: '-99% 0px 0px 0px' })

watch([dashboardOnTop, dashboardOnUpperCenter, dashboardOnLowerCenter, dashboardOnBottom], ([onTop, onUpperCenter, onLowerCenter, onBottom]) => {
    if ([onTop, onUpperCenter, onLowerCenter, onBottom].filter((v) => v===true).length >= 3) {
        active.value = true
        emit(fullyVisibleEvent, anchorId.value)
        if (rootEl.value) {
            rootEl.value.dispatchEvent(new CustomEvent(fullyVisibleEvent, { bubbles: true, detail: { anchorId: anchorId.value } }))
        }
    } else {
        active.value = false
    }
})

onMounted(() => {
    if (rootEl.value) {
        topObserver.observe(rootEl.value)
        upperCenterObserver.observe(rootEl.value)
        lowerCenterObserver.observe(rootEl.value)
        bottomObserver.observe(rootEl.value)
    }
})

onBeforeUnmount(() => {
    if (copyToastTimeout) clearTimeout(copyToastTimeout)
    if (rootEl.value) {
        topObserver.unobserve(rootEl.value)
        upperCenterObserver.unobserve(rootEl.value)
        lowerCenterObserver.unobserve(rootEl.value)
        bottomObserver.unobserve(rootEl.value)
    }
})

</script>

<style scoped>
.composed-dashboard {
    display: flex;
    flex-direction: column;
    height: 96vh;
    width: calc(100vw - 4vh);
    padding: 2vh;
    position: relative;
    z-index: 20;
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
    margin-bottom: 1rem;
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

.frame-subtitle {
    font-variant: small-caps;
    text-align: left;
    font-size: 1.3em;
}

.frame-actions {
    display: flex;
    gap: 1rem;
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
    color: #fff;
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

.dashboard-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
}

.filter-section {
    height: 4vh;
    width: 100%;
}

.charts-section {
    display: grid;
    flex: 1;
    gap: 1rem;
    grid-template-columns: repeat(v-bind(gridCols), 1fr);
    grid-template-rows: repeat(v-bind(gridRows), 1fr);
}

@media (max-width: 1366px) {
    .filter-section {
        height: 3vw;
    }
}

@media (max-width: 1024px),
(orientation: portrait) {
    .composed-dashboard {
        height: auto;
        width: calc(100vw - 12vh);
        padding: 2vh 6vh;
    }

    .frame-header h1 {
        font-size: 2em;
        text-align: center;
    }

    .frame-actions {
        position: fixed;
        right: 0.2rem;
        bottom: 2rem;
        z-index: 340;
        margin: 0;
        padding: 0;
    } 

    .filter-section {
        height: 40vh;
    }

    .charts-section {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

    .charts-section > :deep(.dashboard-item-frame) {
        grid-column: span 1;
        grid-row: span 1;
        height: 80vh;
    }
}
</style>
