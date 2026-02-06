<template>
  <SnapPage>
    <!-- Dashboard contínuo com todos os iframes -->
    <section class="dashboard-section">
      <!-- iFrame superior com filtro -->
      <div class="top-iframe-container">
        <iframe 
          class="top-iframe" 
          src="https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=KWNtww&theme=card&opt=ctxmenu,currsel" 
          title="Filtro"
          loading="lazy"
        ></iframe>
      </div>

      <!-- Grid com 3 iFrames -->
      <div class="grid-container">
        <div class="grid-item">
          <iframe 
            src="https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=rwAyU&theme=card&opt=ctxmenu" 
            title="Frame 1"
            loading="lazy"
          ></iframe>
        </div>
        <div class="grid-item">
          <iframe 
            src="https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=FdEZjMW&theme=card&opt=ctxmenu" 
            title="Frame 2"
            loading="lazy"
          ></iframe>
        </div>
        <div class="grid-item">
          <iframe 
            src="https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=yqjQC&theme=card&opt=ctxmenu" 
            title="Frame 3"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </SnapPage>
</template>

<script setup lang="ts">
import SnapPage from '../components/SnapPage.vue';
</script>

<style scoped>
/* Seção principal do dashboard - comportamento similar ao DashboardFrame */
.dashboard-section {
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
  position: relative;
  z-index: 20;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  gap: 1rem;
}

.top-iframe-container {
  width: 100%;
  height: 5vh;
  border: 1px solid #ccc;
  overflow: hidden;
}

.top-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  flex: 1;
}

.grid-item {
  border: 1px solid #ccc;
  overflow: hidden;
}

.grid-item iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsivo: em telas menores, 1 coluna */
@media (max-width: 768px) {
  .dashboard-section {
    height: 300vh;
    gap: 1rem;
  }

  .top-iframe-container {
    height: 30vh;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .grid-item {
    height: 100vh;
  }
}

/* Responsivo: tablets */
@media (min-width: 769px) and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
