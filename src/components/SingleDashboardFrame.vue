<template>
  <div class="visual-frame">
    <div v-if="title" class="visual-header">
      <h2>{{ title }}</h2>
    </div>
    <div class="iframe-wrapper" :style="wrapperStyle">
      <iframe
        :src="iframeSrc"
        frameborder="0"
        style="border:none;width:100%;height:100%;"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

interface SingleDashboardFrameProps {
  appid: string
  sheet: string
  identity?: string
  select?: string
  title?: string
  height?: string | number
  css?: string | string[]
  theme?: string
}

const props = withDefaults(defineProps<SingleDashboardFrameProps>(), {
  title: '',
  height: '28rem',
  theme: 'card',
  css: () => []
})

const { appid, sheet, identity, select, title, height, css, theme } = toRefs(props)

const baseUrl = 'https://qlik.tcm.sp.gov.br/jwt/single/'
const iframeSrc = computed(() => {
  let url = `${baseUrl}?appid=${appid.value}&sheet=${sheet.value}&theme=${theme.value}&opt=ctxmenu,currsel`
  if (identity?.value) url += `&identity=${identity.value}`
  if (select?.value) url += `&secret=${select.value}`

  const cssList = Array.isArray(css?.value) ? css?.value : (css?.value ? [css?.value] : [])
  cssList.filter(Boolean).forEach(file => {
    url += `&css=${encodeURIComponent(file)}`
  })
  return url
})

const wrapperStyle = computed(() => {
  if (!height?.value) return {}
  const h = typeof height.value === 'number' ? `${height.value}px` : height.value
  return { minHeight: h }
})
</script>

<style scoped>
.visual-frame {
  width: 100%;
  position: relative;
  z-index: 20;
}

.visual-header {
  margin: 0 0 0.75rem 0;
}

.visual-header h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
}

.iframe-wrapper {
  width: 100%;
  min-height: 18rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0.625rem 1.75rem rgba(0, 0, 0, 0.16);
  background: #f5f5f5;
}

.iframe-wrapper iframe {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
