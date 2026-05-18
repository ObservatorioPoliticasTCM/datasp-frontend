<template>
  <SnapPage>
    <template v-for="dashboard in dashboards" :key="dashboard.title">
      <ComposedDashboard :title="dashboard.title" :subtitle="dashboard.subtitle" :download-link="dashboard.downloadLink"
        :methodology-link="dashboard.methodologyLink" :identity="dashboard.identity" :grid-cols="dashboard.gridCols"
        :grid-rows="dashboard.gridRows">
        <template #filter>
          <DashboardItemFrame :appid="dashboard.filter.appid" :sheet="dashboard.filter.sheet"
            :show-selections="dashboard.filter.showSelections" />
        </template>

        <template #charts>
          <DashboardItemFrame v-for="chart in dashboard.charts" :key="chart.sheet" :appid="chart.appid"
            :sheet="chart.sheet" :col-span="chart.colSpan" :row-span="chart.rowSpan" :mobile-height="chart.mobileHeight"
            :mobile-order="chart.mobileOrder" />
        </template>
      </ComposedDashboard>
    </template>
  </SnapPage>
</template>

<script setup lang="ts">
import ComposedDashboard from '@/components/ComposedDashboard.vue';
import DashboardItemFrame from '@/components/DashboardItemFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
import type { DashboardConfig } from '@/types/dashboard'

const dashboards: DashboardConfig[] = [
  {
    title: 'Visão geral da educação (2024)',
    methodologyLink: '/infos/notas/educacao/1_notas_metodologicas_visao_geral_ok.pdf',
    identity: '1',
    gridCols: 6, // TODO: set grid columns
    gridRows: 6, // TODO: set grid rows
    filter: {
      appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
      sheet: '5304c285-d0b6-4e8b-9bc7-e5e01e9c516c',
      showSelections: true
    },
    charts: [
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'ac91b18e-be3e-4d6d-ae18-6b55ce6a917c',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'e70bc317-b060-421d-afe8-a933c84cf96d',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'be1903a5-b998-466c-9515-751273537f09',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '6a11b3c9-b813-4c51-8e9b-a73845f679eb',
        colSpan: 3,
        rowSpan: 5,
        mobileHeight: 1,
        mobileOrder: 3
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'aefe762e-d1d4-47b4-b489-c77ff2d5dcc1',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 4
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '27f399c4-bbda-4ab6-80ea-91c7378e6dfa',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 5
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '0980f982-6082-4739-af38-4a607fcdc50a',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 6
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '056f80fd-f32f-460f-8bbe-777b9e27aae6',
        colSpan: 1,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 7
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'd762c168-1b61-4fc2-8fdf-0cc15521211b',
        colSpan: 1,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 8
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'c3fac3b8-184c-4459-b7d4-ded025381961',
        colSpan: 1,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 9
      }
    ]
  },
  {
    title: 'Despesas liquidadas na Função Educação (2024)',
    methodologyLink: '/infos/notas/educacao/2_notas_metodologicas_despesas_ok.pdf',
    downloadLink: '/dados/educacao/orcamento.csv',
    identity: '3',
    gridCols: 16,
    gridRows: 6,
    filter: {
      appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
      sheet: '5cc4f2b6-43cb-4f95-a70f-7ce92844470b',
      showSelections: true
    },
    charts: [
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'fb8c916d-ff10-4f21-8386-d56dabd1de3c',
        colSpan: 6,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '3bc3697a-cb3b-4573-a56a-c59176b8f60e',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '960875a9-c6ae-4e01-9404-e163f90e8396',
        colSpan: 6,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'a767c711-958f-4275-85ba-4c74fe34c417',
        colSpan: 8,
        rowSpan: 5,
        mobileOrder: 3
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '47504b90-774f-45f9-9c85-8d115bc47052',
        colSpan: 8,
        rowSpan: 5,
        mobileOrder: 4
      }
    ]
  },
  {
    title: 'Número de escolas da rede municipal (2024)',
    methodologyLink: '/infos/notas/educacao/3_notas_metodologicas_escolas_ok.pdf',
    downloadLink: '/dados/educacao/escolas-municipais.csv',
    identity: '3',
    gridCols: 11,
    gridRows: 7,
    filter: {
      appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
      sheet: '3bd8e666-605b-45ce-a210-9f1a3fb7b3e8',
      showSelections: true
    },
    charts: [
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '967f4267-7fd9-4ce7-98bc-d9fb2fbbcb00',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '5ae292aa-bd37-4b66-9e8d-77dd6de7bb1e',
        colSpan: 7,
        rowSpan: 7,
        mobileOrder: 1
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'c786c115-ff4a-46f0-bd6e-86b21d41948b',
        colSpan: 4,
        rowSpan: 3,
        mobileOrder: 2
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '95ca38a2-ab45-417b-b23f-3f7b7d1aef17',
        colSpan: 4,
        rowSpan: 3,
        mobileOrder: 3
      }
    ]
  }
]
</script>

<style scoped></style>
