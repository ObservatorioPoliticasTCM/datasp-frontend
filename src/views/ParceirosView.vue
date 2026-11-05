<template>
  <ThemePage :dashboards="dashboards">
    <IntroPanel title="Parceiros do Observatório de Políticas Públicas" subtitle="" :full-height="false" :use-placeholder="false"
      :snap="true">
      <p>
      </p>
    </IntroPanel>
  </ThemePage>
</template>

<script setup lang="ts">
import ThemePage from '@/components/ThemePage.vue'
import IntroPanel from '@/components/IntroPanel.vue'
import { segurancaAlimentarDashboards as dashboards } from '@/data/dashboards/segurancaAlimentar'

</script>
