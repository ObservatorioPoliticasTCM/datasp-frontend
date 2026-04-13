<template>
  <SnapPage>
    <ComposedDashboard
      title="Número de consultas (2024)"
      subtitle="Inclui as unidades municipais, estaduais e federais"
      download-link="/dados/saude/consultas.zip"
      :grid-cols="42"
      :grid-rows="21">
        <template #filter>
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="CmsPL"
                :show-selections="true"
            />
        </template>
        <template #charts>
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="57b6bce0-3c86-49d7-87c0-2e2690420f8a"
                :col-span="14"
                :row-span="21"
                :mobile-order="0"
            />
        </template>
    </ComposedDashboard>
  </SnapPage>
</template>

<script setup lang="ts">
import ComposedDashboard from '@/components/ComposedDashboard.vue';
import DashboardItemFrame from '@/components/DashboardItemFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
</script>

<style scoped></style>