<template>
  <main class="home-view">
    <Background />
    <SnapContainer :show-navigation="true" :show-dots="false">
      <FrontCover class="snap-section" />
      <VideoFrame class="snap-section" video-id="atEtU4-OKSg" :muted="true" :closed-captions="true" />
      <CardGrid class="snap-section" />
      <Sitemap class="snap-section" />
      <Footer class="snap-section" />
    </SnapContainer>
  </main>
</template>

<script setup lang="ts">
import FrontCover from '../components/FrontCover.vue'
import CardGrid from '../components/CardGrid.vue'
import SnapContainer from '../components/SnapContainer.vue'
import Background from '../components/Background.vue'
import Footer from '../components/Footer.vue'
import Sitemap from '../components/Sitemap.vue'
import VideoFrame from '../components/VideoFrame.vue'
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  overflow: hidden;
  background-color: #121212; /* fundo escuro */
}
</style>
