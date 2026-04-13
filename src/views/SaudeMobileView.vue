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
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="3bacdabc-915f-4f33-ab7f-92e10addfe6a"
                :col-span="12"
                :row-span="4"
                :mobileHeight="1"
                :mobile-order="1"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="3b487c3e-46bb-49bb-b6d1-f07bc78bc34c"
                :col-span="16"
                :row-span="12"
                :mobileHeight="4"
                :mobile-order="4"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="76b4690d-f536-4788-b99e-b89eae1c540e"
                :col-span="12"
                :row-span="8"
                :mobileHeight="4"
                :mobile-order="2"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="60c5c2ae-6a1e-4986-bee9-6afa7f02e128"
                :col-span="28"
                :row-span="6"
                :mobile-order="3"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="06e488a7-e8f7-43e4-9d4c-90bddc114dd3"
                :col-span="28"
                :row-span="3"
                :mobileHeight="1"
                :mobile-order="5"
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