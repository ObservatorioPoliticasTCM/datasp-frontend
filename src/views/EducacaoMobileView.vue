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
  },
  {
    title: 'Perfil dos professores da rede pública municipal (2024)',
    methodologyLink: '/infos/notas/educacao/4_notas_metodologicas_educ_professores_ok.pdf',
    downloadLink: '/dados/educacao/servidores-perfil.csv',
    identity: '4',
    gridCols: 6,
    gridRows: 7,
    filter: {
      appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
      sheet: 'b43475d3-3e19-4c51-8660-d31333f3cb10',
      showSelections: true
    },
    charts: [
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'c6088c5f-bfcd-45c0-8b23-eb3abbb897ae',
        colSpan: 2,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'd0a87990-4cff-4dbe-a7ee-837239022871',
        colSpan: 2,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '7cfe1840-7c1f-46b9-b375-50d13df1bdcb',
        colSpan: 2,
        rowSpan: 1,
        mobileHeight: 1,
        mobileOrder: 2
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '774e627b-f2cb-4efa-b595-c0003d8c21ac',
        colSpan: 2,
        rowSpan: 6,
        mobileOrder: 3
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '92e85a98-e8c3-453a-9f38-58c01cf5d8b5',
        colSpan: 1,
        rowSpan: 3,
        mobileOrder: 4
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'ba3e47f6-fe4f-4639-9b9c-d642a265d7df',
        colSpan: 1,
        rowSpan: 3,
        mobileOrder: 5
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'f6787d09-a776-40cb-8f81-ba9116fcfb4e',
        colSpan: 2,
        rowSpan: 3,
        mobileOrder: 6
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '7145d227-270f-491a-a543-9d4e37221c0b',
        colSpan: 2,
        rowSpan: 3,
        mobileOrder: 7
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'bbb97967-0fd3-4c9a-ad0d-713d6e4c9563',
        colSpan: 2,
        rowSpan: 3,
        mobileHeight: 5,
        mobileOrder: 8
      }
    ]
  },
  {
    title: 'Perfil dos alunos da rede municipal (2024)',
    methodologyLink: '/infos/notas/educacao/5_notas_metodologicas_alunos_ok.pdf',
    downloadLink: '/dados/educacao/perfil-dos-educandos.csv',
    identity: '5',
    gridCols: 21,
    gridRows: 21,
    filter: {
      appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
      sheet: '0bdaa3a1-d526-4f59-b613-8649fbef4bc1',
      showSelections: true
    },
    charts: [
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '92f201f1-321d-4329-be76-3406481975e2',
        colSpan: 7,
        rowSpan: 11,
        mobileOrder: 2
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'b441a4df-dc71-4bf2-b61e-41f01d78baa3',
        colSpan: 6,
        rowSpan: 11,
        mobileOrder: 3
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'df30379a-ab8d-479e-8c8c-a7a38f666aa0',
        colSpan: 8,
        rowSpan: 4,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '5469c3cb-0cee-4a6f-bc90-04c5f2157a36',
        colSpan: 8,
        rowSpan: 17,
        mobileOrder: 1
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '5828ad54-e4d2-4560-a4bd-48efe9babe7b',
        colSpan: 5,
        rowSpan: 10,
        mobileOrder: 4
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'c64bef4e-2a40-4e38-a7db-fa42daec36c6',
        colSpan: 8,
        rowSpan: 10,
        mobileOrder: 5
      }
    ]
  },
  {
    title: 'Alunos da rede municipal beneficiários do Bolsa Família (2024)',
    methodologyLink: '/infos/notas/educacao/6_notas_metodologicas_bolsa_familia_ok.pdf',
    downloadLink: '/dados/educacao/beneficiarios-pbf.csv',
    identity: '6',
    gridCols: 6,
    gridRows: 14,
    filter: {
      appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
      sheet: 'd667d239-2e2f-4d31-8009-15863259a513',
      showSelections: true
    },
    charts: [
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '1216993d-41bc-463f-b4e6-08dbb476b7f5',
        colSpan: 2,
        rowSpan: 14,
        mobileOrder: 2
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'd2377d1e-793d-4688-b686-f2ac358fa130',
        colSpan: 2,
        rowSpan: 7,
        mobileOrder: 3
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '04aad9f6-c885-44f6-8eaf-bd7dcdfd8757',
        colSpan: 1,
        rowSpan: 2,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: 'fbeb92af-8aeb-495c-890d-cc1f5fccbc42',
        colSpan: 1,
        rowSpan: 2,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '33bf64be-fa88-483a-bca1-f7b6324a779a',
        colSpan: 2,
        rowSpan: 12,
        mobileOrder: 5
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '9106493c-b034-4032-afb2-651db097823d',
        colSpan: 2,
        rowSpan: 7,
        mobileHeight: 5,
        mobileOrder: 4
      }
    ]
  },
  {
    title: 'Alunos estrangeiros na rede municipal (2024)',
    methodologyLink: '/infos/notas/educacao/7_notas_metodologicas_alunos_estrangeiros_ok.pdf',
    downloadLink: '/dados/educacao/educandos-estrangeiros.csv',
    identity: '7',
    gridCols: 3,
    gridRows: 14,
    filter: {
      appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
      sheet: '179f5abd-495c-4d56-82cc-49662f7a5cd7',
      showSelections: true
    },
    charts: [
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '340230df-e45e-4700-b3c6-7883dfd2bcd8',
        colSpan: 1,
        rowSpan: 14,
        mobileOrder: 1
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '8593cfe5-864e-4756-89a9-49f59d718638',
        colSpan: 1,
        rowSpan: 7,
        mobileOrder: 3
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '39e1d1dc-def1-43f8-9db2-22e1531c2088',
        colSpan: 1,
        rowSpan: 2,
        mobileHeight: 1,
        mobileOrder: 0
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '4507a7b8-384e-4232-8a6e-a473734c2bbd',
        colSpan: 1,
        rowSpan: 12,
        mobileOrder: 4
      },
      {
        appid: 'ee3bc48f-da4d-403a-a4fe-4da01cb29ee9',
        sheet: '81907fe7-a7c6-4eb4-86f7-74104bdc0369',
        colSpan: 1,
        rowSpan: 7,
        mobileOrder: 2
      }
    ]
  }
]
</script>

<style scoped></style>
