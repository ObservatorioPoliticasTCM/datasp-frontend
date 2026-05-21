<template>
  <ThemePage :dashboards="dashboards" />
</template>

<script setup lang="ts">
import ThemePage from '@/components/ThemePage.vue'
import type { DashboardConfig } from '@/types/dashboard'

const dashboards: DashboardConfig[] = [
  {
    title: 'Variação do Orçamento por Função de Governo (2024)',
    methodologyLink: '/infos/notas/orcamento/notas_metodologicas_orcamento.pdf',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '1',
    desktopAppId: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
    desktopSheetId: 'UMJqywF',
    gridCols: 12,
    gridRows: 6,
    filter: {
      appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
      sheet: '8f1f009a-ae21-4ec5-bf87-92d762221a63',
      showSelections: true
    },
    charts: [
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: '64a913f9-018c-40bd-b9b2-1ac5a2ce3ee0',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0,
        skeletonType: 'kpi'
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: '2c47bf92-79df-48ae-8d20-c861df1c2e98',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: '06e2f64c-1081-4d9f-a193-bbc9ca6ec9b4',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: 'd72b5d40-54c1-47e3-adc0-4de1e27799ce',
        colSpan: 3,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: 'e0db7a30-329e-4aee-827d-2c8590feb084',
        colSpan: 4,
        rowSpan: 5,
        mobileOrder: 4,
        skeletonType: 'bar'
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: '09dd83db-e9f2-49a4-902e-3bfb90477e08',
        colSpan: 4,
        rowSpan: 5,
        mobileOrder: 5,
        skeletonType: 'bar'
      },
      {
        appid: '01ec34f7-4862-43f5-bd71-0413d71dbe97',
        sheet: 'b16bbf15-8c58-4e3d-b6e1-0f33b257370f',
        colSpan: 4,
        rowSpan: 5,
        mobileOrder: 6,
        skeletonType: 'bar'
      }
    ]
  },
  {
    title: 'Variação detalhada do Orçamento por Função de Governo (2024)',
    methodologyLink: '/infos/notas/orcamento/notas_metodologicas_orcamento.pdf',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '2',
    desktopAppId: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
    desktopSheetId: 'bd2c8bf9-d161-43ed-a967-b96342558630',
    gridCols: 16,
    gridRows: 7,
    filterOpen: true,
    filter: {
      appid: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
      sheet: '2195998b-a1dd-48fd-af56-7d3c20a80e4d',
      showSelections: true
    },
    charts: [
      {
        appid: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
        sheet: 'dd764d5d-b820-443a-a4af-22faae1692d2',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
        sheet: '812f510d-2113-443c-b782-1058e59cb021',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
        sheet: '9611b4b0-5de3-44d9-80fc-ec8624498fd7',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
        sheet: '0a1f5b36-706d-47ef-9e37-30334ec27b84',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
        sheet: '2f1592cc-903c-4582-aa6c-9a60c851e26e',
        colSpan: 6,
        rowSpan: 5,
        mobileOrder: 5,
        skeletonType: 'bar'
      },
      {
        appid: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
        sheet: '048afe27-0abb-4bd7-9eef-ae1f4fe1049f',
        colSpan: 5,
        rowSpan: 5,
        mobileOrder: 6,
        skeletonType: 'bar'
      },
      {
        appid: '6c0cd072-faf6-4bc4-9251-7ef5479ff6af',
        sheet: '27712c63-00b7-459e-aac0-2f49f82274fb',
        colSpan: 5,
        rowSpan: 5,
        mobileOrder: 7,
        skeletonType: 'bar'
      }
    ]
  },
  {
    title: 'Variação detalhada do Orçamento por Órgão (2024)',
    methodologyLink: '/infos/notas/orcamento/notas_metodologicas_orcamento.pdf',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '3',
    desktopAppId: 'daf572a6-2fda-44c6-b100-77dd018de06f',
    desktopSheetId: '826cc7f9-9f5d-498f-aba1-af1bd4aca5ba',
    gridCols: 16,
    gridRows: 7,
    filterOpen: true,
    filter: {
      appid: 'daf572a6-2fda-44c6-b100-77dd018de06f',
      sheet: '38a81cf9-832a-4a7f-a231-8c8b2941ce1f',
      showSelections: true
    },
    charts: [
      {
        appid: 'daf572a6-2fda-44c6-b100-77dd018de06f',
        sheet: '0110c6b0-be05-4d44-9304-52eb9644d244',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'daf572a6-2fda-44c6-b100-77dd018de06f',
        sheet: '143ad749-85a6-404d-bade-129fce434ca9',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: 'daf572a6-2fda-44c6-b100-77dd018de06f',
        sheet: '31a45cad-2b85-471c-8b79-6303d7eb3969',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: 'daf572a6-2fda-44c6-b100-77dd018de06f',
        sheet: '5291e810-0fb5-4bd2-9d9c-c95f933af159',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: 'daf572a6-2fda-44c6-b100-77dd018de06f',
        sheet: 'a1c3099e-c5b4-4457-8a89-be90f5df808f',
        colSpan: 6,
        rowSpan: 5,
        mobileOrder: 5,
        skeletonType: 'bar'
      },
      {
        appid: 'daf572a6-2fda-44c6-b100-77dd018de06f',
        sheet: 'e911271b-823f-4f81-886d-7da28e162e3b',
        colSpan: 5,
        rowSpan: 5,
        mobileOrder: 6,
        skeletonType: 'bar'
      },
      {
        appid: 'daf572a6-2fda-44c6-b100-77dd018de06f',
        sheet: 'fd799e32-ad2b-4682-8718-932257371526',
        colSpan: 5,
        rowSpan: 5,
        mobileOrder: 7,
        skeletonType: 'bar'
      }
    ]
  },
  {
    title: 'Comparação do Orçamento por Projeto/Atividade (2024)',
    methodologyLink: '/infos/notas/orcamento/notas_metodologicas_orcamento.pdf',
    downloadLink: '/dados/orcamento/basedadosexecucao_1224.csv',
    identity: '4',
    desktopAppId: 'db89e6fd-00c8-4542-ba80-787563d26598',
    desktopSheetId: 'bd2c8bf9-d161-43ed-a967-b96342558630',
    gridCols: 16,
    gridRows: 7,
    filterOpen: true,
    filter: {
      appid: 'db89e6fd-00c8-4542-ba80-787563d26598',
      sheet: '8f9aff06-0450-4f98-8921-03fd5287dc3e',
      showSelections: true
    },
    charts: [
      {
        appid: 'db89e6fd-00c8-4542-ba80-787563d26598',
        sheet: 'aca59608-41d2-4de4-bb3b-546a0781fd1c',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'db89e6fd-00c8-4542-ba80-787563d26598',
        sheet: '347d926f-8c70-42d9-bb12-fdb34ae721c2',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: 'db89e6fd-00c8-4542-ba80-787563d26598',
        sheet: '88be25b8-de89-49bf-b4df-b2b88c071db9',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: 'db89e6fd-00c8-4542-ba80-787563d26598',
        sheet: '74118dea-7989-48e9-85ce-1751048df9fd',
        colSpan: 4,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: 'db89e6fd-00c8-4542-ba80-787563d26598',
        sheet: 'de23963f-7ddb-4042-b52b-a6f675ce470a',
        colSpan: 16,
        rowSpan: 5,
        mobileOrder: 5,
        skeletonType: 'bar'
      }
    ]
  }
]
</script>

<style scoped></style>
