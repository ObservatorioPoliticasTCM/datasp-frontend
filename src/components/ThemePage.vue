<template>
  <SnapPage>
    <slot />
    <template v-for="dashboard in dashboards" :key="dashboard.title">
      <ComposedDashboard :title="dashboard.title" :subtitle="dashboard.subtitle" :download-link="dashboard.downloadLink"
        :methodology-link="dashboard.methodologyLink" :identity="dashboard.identity"
        :desktop-app-id="dashboard.desktopAppId" :desktop-sheet-id="dashboard.desktopSheetId"
        :filter-open="dashboard.filterOpen">
        <template #filter>
          <DashboardItemFrame :appid="dashboard.filter.appid" :sheet="dashboard.filter.sheet"
            :show-selections="dashboard.filter.showSelections" skeleton-type="filter" />
        </template>

        <template #charts>
          <DashboardItemFrame v-for="chart in dashboard.charts" :key="chart.sheet" :appid="chart.appid"
            :sheet="chart.sheet" :mobile-height="chart.mobileHeight"
            :mobile-order="chart.mobileOrder" :skeleton-type="chart.skeletonType" />
        </template>
      </ComposedDashboard>
    </template>
  </SnapPage>
</template>

<script setup lang="ts">
import ComposedDashboard from '@/components/ComposedDashboard.vue'
import DashboardItemFrame from '@/components/DashboardItemFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
import type { DashboardConfig } from '@/types/dashboard'

defineProps<{
  dashboards: DashboardConfig[]
}>()
</script>

<style scoped></style>
