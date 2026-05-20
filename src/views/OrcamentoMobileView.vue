<template>
  <SnapPage>
    <template v-for="dashboard in dashboards" :key="dashboard.title">
      <ComposedDashboard :title="dashboard.title" :subtitle="dashboard.subtitle" :download-link="dashboard.downloadLink"
        :methodology-link="dashboard.methodologyLink" :identity="dashboard.identity" :grid-cols="dashboard.gridCols"
        :grid-rows="dashboard.gridRows">
        <template #filter>
          <DashboardItemFrame :appid="dashboard.filter.appid" :sheet="dashboard.filter.sheet"
            :show-selections="dashboard.filter.showSelections" :mobile-height="0.45" />
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
    title: 'Variação do Orçamento por Função de Governo (2024)',
    methodologyLink: '/infos/notas/orcamento/notas_metodologicas_orcamento.pdf',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '1',
    gridCols: 12,
    gridRows: 6,
    filter: {
      appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
      sheet: 'UMJqywF',
      showSelections: true
    },
    charts: [
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: '64a913f9-018c-40bd-b9b2-1ac5a2ce3ee0',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: '2c47bf92-79df-48ae-8d20-c861df1c2e98',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: '06e2f64c-1081-4d9f-a193-bbc9ca6ec9b4',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: 'd72b5d40-54c1-47e3-adc0-4de1e27799ce',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 3
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: 'e0db7a30-329e-4aee-827d-2c8590feb084',
        colSpan: 4,
        rowSpan: 5,
        mobileOrder: 4
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: '09dd83db-e9f2-49a4-902e-3bfb90477e08',
        colSpan: 4,
        rowSpan: 5,
        mobileOrder: 5
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: 'b16bbf15-8c58-4e3d-b6e1-0f33b257370f',
        colSpan: 4,
        rowSpan: 5,
        mobileOrder: 6
      }
    ]
  },
  {
    title: 'Variação detalhada do Orçamento por Função de Governo (2024)',
    methodologyLink: '/infos/notas/orcamento/notas_metodologicas_orcamento.pdf',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '2',
    gridCols: 16,
    gridRows: 7,
    filter: {
      appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
      sheet: '525af6c4-46d9-40a2-86e7-5dc87c26aa62',
      showSelections: true
    },
    charts: [
      {
        appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
        sheet: 'd885530f-03b0-4dd9-a18f-768512375fb4',
        colSpan: 16,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
        sheet: 'dd764d5d-b820-443a-a4af-22faae1692d2',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
        sheet: '812f510d-2113-443c-b782-1058e59cb021',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2
      },
      {
        appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
        sheet: '9611b4b0-5de3-44d9-80fc-ec8624498fd7',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 3
      },
      {
        appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
        sheet: '0a1f5b36-706d-47ef-9e37-30334ec27b84',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 4
      },
      {
        appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
        sheet: '2f1592cc-903c-4582-aa6c-9a60c851e26e',
        colSpan: 6,
        rowSpan: 5,
        mobileOrder: 5
      },
      {
        appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
        sheet: '048afe27-0abb-4bd7-9eef-ae1f4fe1049f',
        colSpan: 5,
        rowSpan: 5,
        mobileOrder: 6
      },
      {
        appid: '862fa037-1cfd-4ddb-b30d-3e36eadc85fb',
        sheet: '27712c63-00b7-459e-aac0-2f49f82274fb',
        colSpan: 5,
        rowSpan: 5,
        mobileOrder: 7
      }
    ]
  },
  {
    title: 'Variação detalhada do Orçamento por Órgão (2024)',
    methodologyLink: '/infos/notas/orcamento/notas_metodologicas_orcamento.pdf',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '3',
    gridCols: 16,
    gridRows: 7,
    filter: {
      appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
      sheet: 'f8912068-43ca-44f9-866c-302baa830c87',
      showSelections: true
    },
    charts: [
      {
        appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
        sheet: '7df1afe2-c8df-48b5-8a4a-49df4e564592',
        colSpan: 16,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
        sheet: '0110c6b0-be05-4d44-9304-52eb9644d244',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
        sheet: '143ad749-85a6-404d-bade-129fce434ca9',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2
      },
      {
        appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
        sheet: '31a45cad-2b85-471c-8b79-6303d7eb3969',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 3
      },
      {
        appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
        sheet: '5291e810-0fb5-4bd2-9d9c-c95f933af159',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 4
      },
      {
        appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
        sheet: 'a1c3099e-c5b4-4457-8a89-be90f5df808f',
        colSpan: 6,
        rowSpan: 5,
        mobileOrder: 5
      },
      {
        appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
        sheet: 'e911271b-823f-4f81-886d-7da28e162e3b',
        colSpan: 5,
        rowSpan: 5,
        mobileOrder: 6
      },
      {
        appid: '630848b5-bb1f-4947-b9e4-ca0d5d372efd',
        sheet: 'fd799e32-ad2b-4682-8718-932257371526',
        colSpan: 5,
        rowSpan: 5,
        mobileOrder: 7
      }
    ]
  },
  {
    title: 'Comparação do Orçamento por Projeto/Atividade (2024)',
    methodologyLink: '/infos/notas/orcamento/notas_metodologicas_orcamento.pdf',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '4',
    gridCols: 16,
    gridRows: 7,
    filter: {
      appid: '0f0ca236-f16b-4544-8a3a-aba783813019',
      sheet: 'b01f8cae-257a-4361-b56d-4657ba7a27c6',
      showSelections: true
    },
    charts: [
      {
        appid: '0f0ca236-f16b-4544-8a3a-aba783813019',
        sheet: 'f8376c1c-0d13-4eac-a92f-f69120c51c4a',
        colSpan: 16,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: '0f0ca236-f16b-4544-8a3a-aba783813019',
        sheet: 'aca59608-41d2-4de4-bb3b-546a0781fd1c',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: '0f0ca236-f16b-4544-8a3a-aba783813019',
        sheet: '347d926f-8c70-42d9-bb12-fdb34ae721c2',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2
      },
      {
        appid: '0f0ca236-f16b-4544-8a3a-aba783813019',
        sheet: '88be25b8-de89-49bf-b4df-b2b88c071db9',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 3
      },
      {
        appid: '0f0ca236-f16b-4544-8a3a-aba783813019',
        sheet: '74118dea-7989-48e9-85ce-1751048df9fd',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 4
      },
      {
        appid: '0f0ca236-f16b-4544-8a3a-aba783813019',
        sheet: 'de23963f-7ddb-4042-b52b-a6f675ce470a',
        colSpan: 16,
        rowSpan: 5,
        mobileOrder: 5
      }
    ]
  }
]
</script>

<style scoped></style>
