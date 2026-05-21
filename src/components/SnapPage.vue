<template>
    <div class="snap-page">
        <SnapContainer >
            <AppHeader />
            <slot />
            <Sitemap />
            <Footer />
        </SnapContainer>
        <Background />
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import SnapContainer from './SnapContainer.vue';
import AppHeader from './AppHeader.vue';
import Footer from './Footer.vue';
import Background from './Background.vue';
import Sitemap from './Sitemap.vue'

interface MobileSectionInfoDetail {
  anchorId?: string
  metadataLink?: string
  methodologyLink?: string
  downloadLink?: string
}

const showFloatingInfo = ref(false)
const floatingMetadataLink = ref('')
const floatingMethodologyLink = ref('')
const floatingDownloadLink = ref('')

const onMobileSectionInfo = (event: Event) => {
  const detail = (event as CustomEvent<MobileSectionInfoDetail>).detail
  if (!detail) return
  showFloatingInfo.value = true
  floatingMetadataLink.value = detail.metadataLink ?? ''
  floatingMethodologyLink.value = detail.methodologyLink ?? ''
  floatingDownloadLink.value = detail.downloadLink ?? ''
}

onMounted(() => {
  document.addEventListener('mobile-section-info', onMobileSectionInfo as EventListener)
})

onBeforeUnmount(() => {
  document.removeEventListener('mobile-section-info', onMobileSectionInfo as EventListener)
})
</script>

<style scoped>
.snap-page {
    min-height: 100vh;
    overflow: hidden;
}

@media (max-width: 900px),
(orientation: portrait) {
    .snap-page {
        min-height: auto;
    }
}
</style>
