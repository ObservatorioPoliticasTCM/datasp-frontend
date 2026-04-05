<template>

  <header v-if="isCompactView" class="header compact">
    <div class="route-mobile-backdrop" aria-hidden="true"></div>

    <transition name="menu-fade">
      <div v-if="menuOpen" class="menu-overlay" @click="closeMenu" @wheel="closeMenu" @touchmove="closeMenu" />
    </transition>

    <router-link
      to="/"
      class="route-mobile-logo-link"
      title="Voltar para o início"
      @click="closeMenu"
    >
      <img src="@/assets/logo-white-datasp.svg" alt="Logo DataSP" class="route-mobile-logo" />
    </router-link>

    <div class="route-mobile-menu-container">
      <button
        type="button"
        class="menu-button route-mobile-menu-button"
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
          class="menu-panel route-mobile-menu-panel"
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
  </header>

  <header v-else class="header">
    <div class="gradient-overlay"></div>
    <div class="header-inner">
      <div class="logo-container">
        <router-link to="/" title="Voltar para o início">
          <img src="@/assets/logo.svg" alt="Logo DataSP" class="logo logo-left" />
        </router-link>
        <a
          href="https://observatorio.tcm.sp.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
          title="Acessar o portal do Observatório de Políticas Públicas"
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
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const MOBILE_BREAKPOINT = 1024

const route = useRoute()

const isCompactView = ref(false)

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
  if (!isCompactView.value) {
    closeMenu()
    return
  }

  if (readScrollTop() > 12 && menuOpen.value) closeMenu()
}

const onScroll = () => {
  syncHeaderState()
}

const evaluateViewport = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  isCompactView.value = height > width || width < MOBILE_BREAKPOINT
  syncHeaderState()
}

const onResize = () => {
  evaluateViewport()
}

const onDocumentKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isCompactView.value) closeMenu()
}

onMounted(() => {
  scrollRoot = document.querySelector('.snap-container') as HTMLElement | null
  const scrollTarget = scrollRoot || window
  scrollTarget.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  document.addEventListener('keydown', onDocumentKeydown)
  evaluateViewport()
})

watch(
  () => route.fullPath,
  () => {
    closeMenu()
    evaluateViewport()
  }
)

onBeforeUnmount(() => {
  const scrollTarget = scrollRoot || window
  scrollTarget.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('keydown', onDocumentKeydown)
})
</script>

<style scoped>
.route-mobile-backdrop {
  position: absolute;
  inset: 0;
  z-index: 261;
  background: rgba(15, 23, 42, 0.75);
}

.route-mobile-logo-link {
  position: absolute;
  top: 40%;
  left: 0.5rem;
  transform: translateY(-50%);
  z-index: 262;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.route-mobile-logo {
  display: block;
  height: clamp(4.2rem, 9.2vh, 5rem);
  width: auto;
  object-fit: contain;
  object-position: center;
}

.route-mobile-menu-container {
  position: absolute;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
  z-index: 263;
  pointer-events: auto;
}

.route-mobile-menu-panel {
  top: calc(100% + 0.6rem);
}

.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 262;
  background: transparent;
  pointer-events: auto;
}

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

.header.compact {
  z-index: 260;
  pointer-events: none;
}

.menu-button {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  /* border: 1px solid rgba(255, 255, 255, 0.28); */
  border-radius: 10px;
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
  .header.compact {
  height: clamp(4rem, 10vh, 5.5rem);
  padding: 0;
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
