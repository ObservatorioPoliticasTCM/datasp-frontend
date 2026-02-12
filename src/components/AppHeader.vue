<template>
  <header class="header" :class="{ mobile: isMobileView, desktop: !isMobileView }">
    <template v-if="isMobileView">
      <div class="scroll-backdrop" :class="{ active: !isAtStart }" aria-hidden="true"></div>

      <router-link
        to="/"
        class="datasp-logo-link"
        :class="{ compact: !isAtStart }"
        title="Voltar para o in�cio"
        @click="closeMenu"
      >
        <span class="datasp-logo-stack">
          <img
            src="@/assets/logo.svg"
            alt="Logo DataSP"
            class="datasp-logo datasp-logo-dark"
            :class="{ faded: !isAtStart }"
          />
          <img
            src="@/assets/logo-white.svg"
            alt=""
            aria-hidden="true"
            class="datasp-logo datasp-logo-light"
            :class="{ shown: !isAtStart }"
          />
        </span>
      </router-link>

      <div class="menu-container" ref="menuRoot">
        <button
          type="button"
          class="menu-button"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="main-menu"
          aria-label="Abrir menu principal"
          @click="toggleMenu"
        >
          <span class="menu-icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span class="menu-label">Menu</span>
        </button>

        <transition name="menu-fade">
          <nav
            v-if="menuOpen"
            id="main-menu"
            class="menu-panel"
            aria-label="Menu principal"
          >
            <template v-for="item in menuItems" :key="item.label">
              <router-link
                v-if="item.route"
                :to="item.route"
                class="menu-item"
                @click="closeMenu"
              >
                {{ item.label }}
              </router-link>
              <a
                v-else-if="item.href"
                :href="item.href"
                class="menu-item"
                target="_blank"
                rel="noopener noreferrer"
                @click="closeMenu"
              >
                {{ item.label }}
              </a>
            </template>
          </nav>
        </transition>
      </div>
    </template>

    <template v-else>
      <div class="gradient-overlay"></div>
      <div class="header-inner">
        <div class="logo-container">
          <router-link to="/" title="Voltar para o in�cio">
            <img src="@/assets/logo.svg" alt="Logo DataSP" class="logo logo-left" />
          </router-link>
          <a
            href="https://observatorio.tcm.sp.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            title="Acessar o portal do Observat�rio de Pol�ticas P�blicas"
          >
            <img src="@/assets/logo-opp.svg" alt="Logo OPP" class="logo logo-right" />
          </a>
        </div>

        <nav class="nav" aria-label="Menu principal">
          <div v-for="(item, index) in menuItems" :key="item.label" class="nav-item">
            <router-link v-if="item.route" :to="item.route">{{ item.label }}</router-link>
            <a
              v-else-if="item.href"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.label }}
            </a>
            <a v-else href="#">{{ item.label }}</a>

            <div v-if="index < menuItems.length - 1" class="separator">
              <div v-for="n in 10" :key="n" class="dot" />
            </div>
          </div>
        </nav>
      </div>
    </template>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const MOBILE_BREAKPOINT = 1024

const menuItems = [
  { label: 'Apresentação', route: '/apresentacao' },
  { label: 'Educação', route: '/educacao' },
  { label: 'Gênero', route: '/genero' },
  { label: 'Saúde', route: '/saude' },
  { label: 'Urbanismo', route: '/urbanismo' },
  { label: 'Orçamento', route: '/orcamento' },
  { label: 'Guia técnico', route: '/guia-tecnico' },
  { label: 'Glossário', route: '/glossario' },
  { label: 'Contato', href: 'https://observatorio.tcm.sp.gov.br/ObservatorioItem/156570' }
]

const menuOpen = ref(false)
const isAtStart = ref(true)
const isMobileView = ref(false)
const menuRoot = ref<HTMLElement | null>(null)
let scrollRoot: HTMLElement | null = null

const closeMenu = () => {
  menuOpen.value = false
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const readScrollTop = (): number => {
  if (scrollRoot) return scrollRoot.scrollTop
  return window.scrollY || document.documentElement.scrollTop || 0
}

const syncHeaderState = () => {
  if (!isMobileView.value) {
    isAtStart.value = true
    closeMenu()
    return
  }

  const atStart = readScrollTop() <= 12
  isAtStart.value = atStart
  if (!atStart && menuOpen.value) closeMenu()
}

const onScroll = () => {
  syncHeaderState()
}

const evaluateViewport = () => {
  isMobileView.value = window.innerWidth < MOBILE_BREAKPOINT
  syncHeaderState()
}

const onResize = () => {
  evaluateViewport()
}

const onDocumentClick = (event: MouseEvent) => {
  if (!isMobileView.value || !menuOpen.value || !menuRoot.value) return
  const target = event.target as Node | null
  if (target && !menuRoot.value.contains(target)) closeMenu()
}

const onDocumentKeydown = (event: KeyboardEvent) => {
  if (isMobileView.value && event.key === 'Escape') closeMenu()
}

onMounted(() => {
  scrollRoot = document.querySelector('.snap-container') as HTMLElement | null
  const scrollTarget = scrollRoot || window
  scrollTarget.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onDocumentKeydown)
  evaluateViewport()
})

onBeforeUnmount(() => {
  const scrollTarget = scrollRoot || window
  scrollTarget.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onDocumentKeydown)
})
</script>

<style scoped>
.header {
  position: relative;
  z-index: 20;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  color: white;
  user-select: none;
  width: 100%;
  height: 16vh;
  overflow: visible;
  align-items: center;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(0, 0, 0, 0.3) 42%,
    rgba(0, 0, 0, 0.1) 62%,
    rgba(0, 0, 0, 0) 72%
  );
}

.header-inner {
  overflow: visible;
  position: relative;
  z-index: 1;
}

.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 10vh;
}

.nav {
  position: relative;
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  text-transform: uppercase;
  font-size: 1.2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  z-index: 1;
}

.nav-item a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.separator {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}

.dot {
  width: 0.125rem;
  height: 0.125rem;
  background-color: white;
  margin: 0.0625rem 0;
  border-radius: 0.0625rem;
}

.header.mobile {
  z-index: 260;
  pointer-events: none;
}

.scroll-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: clamp(4rem, 10vh, 5.5rem);
  z-index: 261;
  background: rgba(15, 23, 42, 0.75);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.scroll-backdrop.active {
  opacity: 1;
}

.datasp-logo-link {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 262;
  transform: none;
  pointer-events: auto;
  transition: left 0.25s ease, right 0.25s ease, transform 0.25s ease;
}

.datasp-logo-link.compact {
  left: 1rem;
  right: auto;
  transform: none;
}

.datasp-logo {
  display: block;
  height: clamp(2.5rem, 7vh, 4.5rem);
  transition: height 0.25s ease, opacity 0.25s ease;
}

.datasp-logo-link.compact .datasp-logo {
  height: clamp(2.1rem, 6.6vh, 3.4rem);
}

.datasp-logo-stack {
  position: relative;
  display: inline-block;
}

.datasp-logo-light {
  position: absolute;
  inset: 0 auto auto 0;
  opacity: 0;
  pointer-events: none;
}

.datasp-logo-dark.faded {
  opacity: 0;
}

.datasp-logo-light.shown {
  opacity: 1;
}

.menu-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 263;
  pointer-events: auto;
}

.menu-button {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  padding: 0.52rem 0.86rem;
  background: rgba(15, 23, 42, 0.88);
  color: #ffffff;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}

.menu-icon {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.15rem;
}

.menu-icon span {
  width: 0.95rem;
  height: 0.11rem;
  border-radius: 999px;
  background: currentColor;
}

.menu-label {
  font-weight: 600;
  line-height: 1;
}

.menu-panel {
  position: absolute;
  top: calc(100% + 0.55rem);
  right: 0;
  margin-top: 0;
  min-width: 13.5rem;
  max-height: 70vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0.75rem;
  background: rgba(15, 23, 42, 0.95);
  box-shadow: 0 0.75rem 2rem rgba(15, 23, 42, 0.35);
  display: flex;
  flex-direction: column;
  padding: 0.35rem;
  gap: 0.18rem;
}

.menu-item {
  display: block;
  text-align: left;
  color: #f8fafc;
  text-decoration: none;
  font-size: 0.72rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-radius: 0.48rem;
  padding: 0.48rem 0.58rem;
  transition: background 0.2s ease;
}

.menu-item:hover,
.menu-item.router-link-active {
  background: rgba(148, 163, 184, 0.22);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.16s ease, transform 0.16s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-0.25rem);
}

@media (max-width: 63.9375rem) {
  .header.mobile {
    height: 12vh;
  }

  .menu-button {
    padding: 0.52rem 0.62rem;
  }

  .menu-label {
    display: none;
  }

  .menu-panel {
    min-width: 12.2rem;
  }
}
</style>
