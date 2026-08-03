<template>
    <div class="composed-dashboard snap-section"
        :class="{ 'composed-dashboard--filter-open': active && filterOpen }"
        ref="rootEl" :data-anchor-id="anchorId"
        :style="{ '--filter-sidebar-top': `${filterSidebarTop}px` }">
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
            <DesktopDashboardFrame v-if="desktopAppId && desktopSheetId && isDesktop" :appid="desktopAppId"
                :sheet="desktopSheetId" />
            <template v-else>
                <div class="filter-section">
                    <button v-show="active" class="filter-toggle" :class="{ 'filter-toggle--open': filterOpen }" type="button"
                        :aria-expanded="filterOpen" @click="filterOpen = !filterOpen">
                        <img src="@/assets/filter-icon-white.svg" alt="Ícone de filtro" aria-hidden="true"
                            class="filter-toggle-icon" v-show="!filterOpen" />
                        <img src="@/assets/filter-icon.svg" alt="Ícone de filtro" aria-hidden="true"
                            class="filter-toggle-icon" v-show="filterOpen" />
                    </button>
                    <div v-show="active && filterOpen" class="filter-backdrop" aria-hidden="true"
                        @click="closeFilter" />
                    <div class="filter-iframe-wrapper"
                        :class="{ 'filter-iframe-wrapper--open': active && filterOpen }">
                        <div class="filter-sidebar-header">
                            <span>Filtros</span>
                            <button type="button" class="filter-close" aria-label="Fechar filtros"
                                @click="closeFilter">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div class="filter-scroll-content">
                            <slot name="filter" />
                        </div>
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
    desktopAppId?: string
    desktopSheetId?: string
    filterOpen?: boolean
}

const props = withDefaults(defineProps<DashboardFrameProps>(), {
    title: '',
    subtitle: '',
    filterOpen: false
})
const emit = defineEmits<{ (e: 'fully-visible', anchorId: string): void }>()

const { identity, title, subtitle } = toRefs(props)
const { metadataLink, methodologyLink, downloadLink } = toRefs(props)
const { desktopAppId, desktopSheetId } = toRefs(props)

const rootEl = ref<HTMLElement | null>(null)
const showCopied = ref(false)
let copyToastTimeout: number | null = null
const active = ref(false)
const filterOpen = ref(props.filterOpen)
const filterSidebarTop = ref(0)
let attrObserver: MutationObserver | null = null
let scrollRoot: HTMLElement | null = null
let trackingSidebarPosition = false

const desktopMql = window.matchMedia('(min-width: 901px) and (orientation: landscape)')
const isDesktop = ref(desktopMql.matches)
const onMqlChange = (e: MediaQueryListEvent) => { isDesktop.value = e.matches }

provide('composedIdentity', identity)

const displayTitle = computed(() => title.value.replace(/\n/g, '\n'))
const closeFilter = () => { filterOpen.value = false }

const updateFilterSidebarTop = () => {
    const header = document.querySelector<HTMLElement>('.header.compact')
    if (!header) {
        filterSidebarTop.value = 0
        return
    }

    const headerBottom = header.getBoundingClientRect().bottom
    filterSidebarTop.value = Math.max(0, Math.min(window.innerHeight, headerBottom))
}

const startTrackingSidebarPosition = () => {
    if (trackingSidebarPosition) return
    updateFilterSidebarTop()
    scrollRoot?.addEventListener('scroll', updateFilterSidebarTop, { passive: true })
    window.addEventListener('resize', updateFilterSidebarTop)
    trackingSidebarPosition = true
}

const stopTrackingSidebarPosition = () => {
    if (!trackingSidebarPosition) return
    scrollRoot?.removeEventListener('scroll', updateFilterSidebarTop)
    window.removeEventListener('resize', updateFilterSidebarTop)
    trackingSidebarPosition = false
}

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
    if (isActive) {
        startTrackingSidebarPosition()
    }
    if (!isActive) {
        filterOpen.value = false
        stopTrackingSidebarPosition()
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

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && filterOpen.value) closeFilter()
}

onMounted(() => {
    desktopMql.addEventListener('change', onMqlChange)
    window.addEventListener('keydown', onKeydown)
    scrollRoot = document.querySelector<HTMLElement>('.snap-container')

    if (rootEl.value) {
        active.value = rootEl.value.dataset.active === 'true'
        if (active.value) startTrackingSidebarPosition()
        attrObserver = new MutationObserver(() => {
            active.value = rootEl.value?.dataset.active === 'true'
        })
        attrObserver.observe(rootEl.value, { attributes: true, attributeFilter: ['data-active'] })
    }
})

onBeforeUnmount(() => {
    desktopMql.removeEventListener('change', onMqlChange)
    window.removeEventListener('keydown', onKeydown)
    stopTrackingSidebarPosition()
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
    flex: 1;
    min-width: 0;
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
    flex-shrink: 0;
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

.filter-backdrop,
.filter-sidebar-header {
    display: none;
}

.charts-section {
    display: grid;
    flex: 1;
    gap: 1rem;
    min-height: 0;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
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

    .composed-dashboard--filter-open {
        z-index: 300;
    }

    .frame-header h1 {
        font-size: 2em;
        text-align: center;
        margin-bottom: 0;
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
        position: fixed;

        right: 0.3rem;
        bottom: 4.9rem;

        width: 2rem;
        height: 2rem;

        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 999px;
        background: #fafafa;
        cursor: pointer;

        font-size: 0rem;
        background-color: #213547;
        border: 1px solid rgba(255, 255, 255, 0.24);

        z-index: 1000;
    }

    .filter-arrow.expanded {
        transform: rotate(-180deg);
        color: #fff;
    }

    .filter-toggle--open {
        background: #FFFFFF;
        color: #fff;

    }

    .filter-toggle-icon {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
    }
    
    .filter-iframe-wrapper {
        position: fixed;
        top: var(--filter-sidebar-top);                  
        right: 0;

        width: min(70vw, 22rem);
        height: calc(100dvh - var(--filter-sidebar-top));

        box-sizing: border-box;

        background-color: #fff;
        box-shadow: -0.5rem 0 1.5rem rgba(15, 23, 42, 0.3);
        display: flex;
        flex-direction: column;
        overflow: hidden;

        transform: translateX(100%);
        transition:
            transform 0.5s ease-in-out,
            visibility 0s linear 0.8s;

        visibility: hidden;
        pointer-events: none;

        z-index: 1002;
    }

    .filter-iframe-wrapper--open {
        transform: translateX(0);

        visibility: visible;
        pointer-events: auto;

        transition:
            transform 0.3s ease-out,
            visibility 0s;
    }

    .filter-backdrop {
        display: block;
        position: fixed;
        top: var(--filter-sidebar-top);
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(15, 23, 42, 0.45);
        z-index: 1001;
    }

    .filter-sidebar-header {
        min-height: 3.5rem;
        padding: 0.75rem 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(33, 53, 71, 0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        color: #213547;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .filter-close {
        width: 2rem;
        height: 2rem;
        padding: 0;
        border: 0;
        border-radius: 999px;
        background: #213547;
        position: relative;
        cursor: pointer;
    }

    .filter-close span::before,
    .filter-close span::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.9rem;
        height: 0.12rem;
        border-radius: 999px;
        background: #fff;
    }

    .filter-close span::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .filter-close span::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    .filter-scroll-content {
        width: 100%;
        flex: 1;
        min-height: 0;

        box-sizing: border-box;
        padding-block: 1rem;
        padding-inline: 0.5rem;

        overflow-y: auto;
        overflow-x: hidden;
    }

}
</style>
