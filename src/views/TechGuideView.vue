<template>
  <SnapPage>
    <div class="guide">
      <h1 class="title" v-if="!isMobile">Guia técnico &mdash; {{ featured?.title }}</h1>
      <div class="media-layout">
        <div class="feature-video" v-if="!isMobile">
          <VideoFrame :video-id="selectedId" :autoplay="autoplay" :muted="muted" :closed-captions="closedCaptions" />
        </div>

        <div class="thumb-grid">
          <template v-for="video in videos" :key="video.id">
            <h1 class="title mobile-title" v-if="isMobile && video.id === selectedId">Guia técnico <br> {{ featured?.title }}</h1>
            <VideoThumbnail
              :video="video"
              :is-active="video.id === selectedId"
              @select="select"
            >
              <template #default v-if="isMobile && video.id === selectedId">
                <VideoFrame :video-id="video.id" :autoplay="autoplay" :muted="muted" :closed-captions="closedCaptions" />
              </template>
            </VideoThumbnail>
          </template>
        </div>
      </div>
    </div>
  </SnapPage>
</template>

<script setup lang="ts">
import { computed, reactive, ref, onMounted, onUnmounted } from 'vue'
import SnapPage from '@/components/SnapPage.vue'
import VideoFrame from '@/components/VideoFrame.vue'
import VideoThumbnail from '@/components/VideoThumbnail.vue'

type Video = { id: string; title: string }

const videos = reactive<Video[]>([
  { id: 'atEtU4-OKSg', title: 'Introdução e navegação' },
  { id: 'vDKwTIejJ2M', title: 'Políticas Públicas' },
  { id: 'KZ8QHUkkjSY', title: 'Orçamento Público' },
  { id: 'Z6jvCsYf9Lw', title: 'Execução Orçamentária' }
])

const selectedId = ref(videos[0].id)
const autoplay = ref(false)
const muted = ref(true)
const closedCaptions = ref(true)
const featured = computed(() => videos.find(video => video.id === selectedId.value) ?? videos[0])

const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < 1024 || window.innerHeight > window.innerWidth
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

function select(id: string) {
  selectedId.value = id
  autoplay.value = true
  muted.value = false
  closedCaptions.value = false
}
</script>

<style scoped>
.guide {
  height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
  color: #000000;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
  z-index: 30;
  min-height: 0;
}

.title {
  width: 100%;
  max-width: 100%;
  margin: 0;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
  text-align: center;
  font-size: 3.7vw;
}

.media-layout {
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.feature-video {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 0px);
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.625rem 1.75rem rgba(0, 0, 0, 0.32);
}

.feature-video :deep(.snap-section) {
  position: absolute;
  inset: 0;
  padding: 0;
}

.feature-video :deep(iframe) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.thumb-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 1rem 1rem 1rem 2rem;
  flex: 0 0 15rem;
  justify-content: space-between;
  box-sizing: border-box;
}

@media (max-width: 900px) {
  .guide {
    --feature-max: 27.5rem;
    gap: 1rem;
    height: auto;
  }
  
  .media-layout {
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
  }

  .thumb-grid {
    flex: none;
    width: 100%;
    max-width: 100%;
    padding: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    max-height: none;
    overflow: visible;
  }

  .mobile-title {
    font-size: 6vw;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }

  .thumb-grid :deep(.thumb-slot-wrapper) {
    width: 100%;
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.625rem 1.75rem rgba(0, 0, 0, 0.32);
    background: #000;
  }
  
  .thumb-grid :deep(.snap-section) {
    position: absolute;
    inset: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
  }

  .thumb-grid :deep(.iframe-wrapper) {
    border-radius: 0;
    box-shadow: none;
  }

  .thumb-grid :deep(.iframe-wrapper iframe) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
