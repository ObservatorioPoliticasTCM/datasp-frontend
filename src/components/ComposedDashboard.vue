<template>
    <div class="composed-dashboard snap-section" ref="rootEl" :data-anchor-id="anchorId">
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
            <div class="frame-actions" :class="{ 'frame-actions--inactive': !active }">
                <AdditionalInfoMenu :metadata-link="metadataLink" :methodology-link="methodologyLink"
                    :download-link="downloadLink" />
            </div>
        </div>
        <div v-if="subtitle" class="frame-subtitle">
            <small v-if="subtitle">{{ subtitle }}</small>
        </div>
        <div class="dashboard-wrapper">
            <DesktopDashboardFrame v-if="desktopAppId && desktopSheetId && isDesktop" :appid="desktopAppId" :sheet="desktopSheetId" />
            <template v-else>
                <div class="filter-section">
                    <button
                        class="filter-toggle"
                        :class="{ 'filter-toggle--open': filterOpen }"
                        type="button"
                        :aria-expanded="filterOpen"
                        @click="filterOpen = !filterOpen"
                    >
                        <span
                            class="filter-arrow"
                            :class="{ expanded: filterOpen }"
                        >&#9660;</span>
                        <span>Filtros</span>
                        <img src="@/assets/filter-icon.svg" alt="Ícone de filtro" aria-hidden="true" class="filter-toggle-icon" v-show="!filterOpen" />
                        <img src="@/assets/filter-icon-white.svg" alt="Ícone de filtro" aria-hidden="true" class="filter-toggle-icon" v-show="filterOpen" />
                    </button>
                    <div class="filter-iframe-wrapper" :class="{ 'filter-iframe-wrapper--open': filterOpen }">
                        <slot name="filter" />
                    </div>
                </div>
                <div class="charts-section">
                    <slot name="charts" />
                </div>
            </template>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch, toRefs, nextTick, provide } from 'vue'
import AdditionalInfoMenu from './AdditionalInfoMenu.vue'
import DesktopDashboardFrame from './DesktopDashboardFrame.vue'

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
    desktopAppId?: string
    desktopSheetId?: string
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
const { desktopAppId, desktopSheetId } = toRefs(props)

const rootEl = ref<HTMLElement | null>(null)
const showCopied = ref(false)
let copyToastTimeout: number | null = null
const active = ref(false)
const filterOpen = ref(false)
let attrObserver: MutationObserver | null = null

const desktopMql = window.matchMedia('(min-width: 901px) and (orientation: landscape)')
const isDesktop = ref(desktopMql.matches)
const onMqlChange = (e: MediaQueryListEvent) => { isDesktop.value = e.matches }

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

watch(active, (isActive, wasActive) => {
    if (isActive && !wasActive) {
        emit(fullyVisibleEvent, anchorId.value)
    }
})

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

onMounted(() => {
    desktopMql.addEventListener('change', onMqlChange)

    if (rootEl.value) {
        active.value = rootEl.value.dataset.active === 'true'
        attrObserver = new MutationObserver(() => {
            active.value = rootEl.value?.dataset.active === 'true'
        })
        attrObserver.observe(rootEl.value, { attributes: true, attributeFilter: ['data-active'] })
    }
})

onBeforeUnmount(() => {
    desktopMql.removeEventListener('change', onMqlChange)
    attrObserver?.disconnect()
    if (copyToastTimeout) clearTimeout(copyToastTimeout)
})

</script>

<style scoped>
.composed-dashboard {
    --padding-x: 2vh;
    --padding-y: 2vh;
    
    display: flex;
    flex-direction: column;
    padding: var(--padding-y) var(--padding-x);
    height: calc(100vh - 2 * var(--padding-y));
    width: calc(100vw - 2 * var(--padding-x));
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

.frame-actions--inactive {
    visibility: hidden;
    pointer-events: none;
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
    flex: 1;
    min-height: 0;
}

.filter-section {
    height: 4vh;
    width: 100%;
}

.filter-toggle {
    display: none;
}

.filter-iframe-wrapper {
    height: 100%;
    width: 100%;
}

.charts-section {
    display: grid;
    flex: 1;
    gap: 1rem;
    min-height: 0;
    grid-template-columns: repeat(v-bind(gridCols), 1fr);
    grid-template-rows: repeat(v-bind(gridRows), 1fr);
}

@media (max-width: 1366px) {
    .filter-section {
        height: 3vw;
    }
}

@media (max-width: 900px),
(orientation: portrait) {
    .composed-dashboard {
        --padding-x: 6vh;

        height: auto;
        width: calc(100vw - 2 * var(--padding-x));
        padding: var(--padding-y) var(--padding-x);
    }

    .frame-header h1 {
        font-size: 2em;
        text-align: center;
    }

    .frame-subtitle {
        font-size: 1em;
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
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .filter-toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        align-self: flex-start;
        background: #fafafa;
        border: 1px solid rgba(255, 255, 255, 0.28);
        color: #404040;
        padding: 0.5rem 0.85rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.2s ease, border-color 0.2s ease;
        width: 100%;
    }

    .filter-arrow {
        display: inline-block;
        transition: transform 1.2s;
    }

    .filter-arrow.expanded {
        transform: rotate(-180deg);
        color: #fff;
    }

    .filter-toggle--open {
        background: #213547;
        color: #fff;
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .filter-toggle-icon {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
    }

    .filter-iframe-wrapper {
        max-height: 0;
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .filter-iframe-wrapper--open {
        max-height: 400vh;
    }

    .charts-section {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
}
</style>
