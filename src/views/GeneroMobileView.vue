<template>
  <SnapPage>
    <template v-for="dashboard in dashboards" :key="dashboard.title">
      <ComposedDashboard :title="dashboard.title" :subtitle="dashboard.subtitle" :download-link="dashboard.downloadLink"
        :methodology-link="dashboard.methodologyLink" :identity="dashboard.identity" :grid-cols="dashboard.gridCols"
        :grid-rows="dashboard.gridRows">
        <template #filter>
          <DashboardItemFrame :appid="dashboard.filter.appid" :sheet="dashboard.filter.sheet"
            :show-selections="dashboard.filter.showSelections" skeleton-type="filter" />
        </template>

        <template #charts>
          <DashboardItemFrame v-for="chart in dashboard.charts" :key="chart.sheet" :appid="chart.appid"
            :sheet="chart.sheet" :col-span="chart.colSpan" :row-span="chart.rowSpan" :mobile-height="chart.mobileHeight"
            :mobile-order="chart.mobileOrder" :skeleton-type="chart.skeletonType" />
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
    title: 'Visão geral de Gênero',
    identity: '0',
    gridCols: 4,
    gridRows: 12,
    filter: {
      appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
      sheet: '1b12cc1f-d8e9-4224-b990-4c8ed175bd13',
      showSelections: true
    },
    charts: [
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: '0af12cba-9930-410d-87be-b31bc956fa38',
        colSpan: 1,
        rowSpan: 5,
        mobileHeight: 3,
        mobileOrder: 0,
        skeletonType: 'column'
      },
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: 'b82d0e4a-b492-42e3-82d6-7064263af7a6',
        colSpan: 1,
        rowSpan: 5,
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: '5c23ce82-c60c-4fa5-9ea5-f6523836b019',
        colSpan: 2,
        rowSpan: 5,
        mobileHeight: 3,
        mobileOrder: 2,
        skeletonType: 'bar'
      },
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: '825db2ec-bb8b-4f99-82ac-1a8ecb433cc4',
        colSpan: 2,
        rowSpan: 7,
        mobileHeight: 3,
        mobileOrder: 3,
        skeletonType: 'bar'
      },
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: '4bcc6787-97d4-44fd-b530-8fc775299e6a',
        colSpan: 2,
        rowSpan: 7,
        mobileHeight: 3,
        mobileOrder: 4,
        skeletonType: 'bar'
      }
    ]  },
  {
    title: 'Despesas municipais sensíveis a gênero em projetos/atividades com foco exclusivo em políticas para as mulheres',
    identity: '1',
    methodologyLink: '/infos/notas/genero/DESPESAS MUNICIPAIS EM AÇÕES VOLTADAS EXCLUSIVAMENTE A POLÍTICAS DE PROMOÇÃO AOS DIREITOS DAS MULHERES 1.pdf',
    downloadLink: '/dados/genero/orçamento-exclusivo.csv',
    gridCols: 83,
    gridRows: 42,
    filter: {
      appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
      sheet: '6256951f-b119-4912-b829-1013928a370d',
      showSelections: true
    },
    charts: [
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '1f543cba-37cb-4642-98fb-dd38af0fc270',
        colSpan: 11,
        rowSpan: 9,
        mobileHeight: 2,
        mobileOrder: 0,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'c2de57b7-b88d-4fd5-997f-4be1ac0538fa',
        colSpan: 11,
        rowSpan: 9,
        mobileHeight: 2,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '12598022-505a-4921-8fdc-ba37caccd8e8',
        colSpan: 11,
        rowSpan: 9,
        mobileHeight: 2,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '1f809824-dd36-40eb-b985-648d1853b8cb',
        colSpan: 11,
        rowSpan: 9,
        mobileHeight: 2,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '1256fde4-93ef-492e-9a88-3860cd6b3cb8',
        colSpan: 11,
        rowSpan: 9,
        mobileHeight: 2,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'c4f32bda-183a-424d-9a64-3feee4ab6530',
        colSpan: 7,
        rowSpan: 3,
        mobileHeight: 1,
        mobileOrder: 5,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '6e46a4ae-7eb8-45bb-9aeb-78014a916d2e',
        colSpan: 7,
        rowSpan: 3,
        mobileHeight: 1,
        mobileOrder: 6,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'b1d2dfee-d282-4720-83f8-920b238ed691',
        colSpan: 7,
        rowSpan: 3,
        mobileHeight: 1,
        mobileOrder: 7,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'e3de6405-f6de-4fbb-99b2-be900f351859',
        colSpan: 7,
        rowSpan: 3,
        mobileHeight: 1,
        mobileOrder: 8,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'c2e51b8e-41af-4b68-9e8a-a3c13af76f28',
        colSpan: 14,
        rowSpan: 6,
        mobileHeight: 2,
        mobileOrder: 9,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '156dd22f-808f-4f56-b0f8-63ab268b6b9e',
        colSpan: 14,
        rowSpan: 6,
        mobileHeight: 2,
        mobileOrder: 10,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '4649951b-d21c-408c-a5ce-838244aec99c',
        colSpan: 21,
        rowSpan: 14,
        mobileHeight: 6,
        mobileOrder: 11,
        skeletonType: 'treemap'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '227df07b-70d8-4666-968e-e1096b923b07',
        colSpan: 20,
        rowSpan: 14,
        mobileHeight: 2,
        mobileOrder: 12,
        skeletonType: 'pie'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '4951634e-6711-4e8a-8cfd-e5b8d29968ad',
        colSpan: 42,
        rowSpan: 32,
        mobileHeight: 4,
        mobileOrder: 13,
        skeletonType: 'line'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'e5253baf-734f-40e8-bf0e-5eb816a52acf',
        colSpan: 41,
        rowSpan: 18,
        mobileHeight: 4,
        mobileOrder: 14,
        skeletonType: 'text'
      }
    ]  }
]
</script>

<style scoped></style>
