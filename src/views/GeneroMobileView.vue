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
    ]
  }
]
</script>

<style scoped></style>
