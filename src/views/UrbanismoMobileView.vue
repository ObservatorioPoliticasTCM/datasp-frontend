<template>
  <ThemePage :dashboards="dashboards" />
</template>

<script setup lang="ts">
import ThemePage from '@/components/ThemePage.vue'
import type { DashboardConfig } from '@/types/dashboard'

const dashboards: DashboardConfig[] = [
  {
    title: 'População em risco geológico e hidrológico (ago/2025)',
    identity: '1',
    desktopAppId: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
    desktopSheetId: 'e9731105-32d5-45a6-a2ac-972df82b3d6b',
    methodologyLink: '/infos/notas/urbanismo/população-em-risco-geológico-e-hidrológico-ago2025.pdf',
    downloadLink: '/dados/urbanismo/populacao-em-risco-geologico-e-hidrologico.zip',
    filter: {
      appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
      sheet: '3855132f-c221-41c0-ae97-6e2fca20f942',
      showSelections: true
    },
    charts: [
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: 'c1d9281c-f2d2-43ff-9d07-5ce8efa2da13',
        mobileOrder: 4,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: '024c766c-1e13-4ab4-8df7-a2c3ee462cb3',
        mobileOrder: 6,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: 'ecfbb01a-7c5c-46e6-9003-fc491aa9aeeb',
        mobileOrder: 7,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: 'cd579bcd-5dab-47c6-b592-541ecfa130e6',
        mobileOrder: 8,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: '91605da7-54dd-4439-a6d6-e3b69f7b8f8c',
        mobileOrder: 0,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: 'dd3e7d20-56e1-464d-8844-103f8878c5ad',
        mobileOrder: 1,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: 'd9d03446-91da-4eb3-8f22-8a559d422a04',
        mobileOrder: 2,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: '388c874c-612f-447a-88a4-16a6499c1ed8',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: 'ae6af572-20d7-4971-87ca-c472c0bde58a',
        sheet: 'c3580a7a-eb1c-4774-90d0-f9fd7aaf2206',
        mobileOrder: 3,
        mobileHeight: 4,
        skeletonType: 'treemap'
      }
    ]
  },
  {
    title: 'Despesas em Gestão dos Riscos e Promoção da Resiliência a Desastres e Eventos Críticos (2024)',
    identity: '2',
    desktopAppId: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
    desktopSheetId: '5de719a0-3b7d-4000-a4ec-64c9e35d9ad4',
    downloadLink: '/dados/urbanismo/despesas-em-gestao-dos-riscos-e-promocao-da-resiliencia-a-desastres-e-eventos-criticos.zip',
    filter: {
      appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
      sheet: '5bfcbcc2-e2fb-4021-8096-07cf82b7750b',
      showSelections: true
    },
    charts: [
      {
        appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
        sheet: '130c652e-c860-42a5-8256-7404dd46b968',
        mobileOrder: 6,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
        sheet: 'e4001e27-b505-480e-ba46-bebcb8b5199e',
        mobileOrder: 4,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
        sheet: '1e31ddd1-7a0d-4138-b5c5-607c64d92b47',
        mobileOrder: 0,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
        sheet: '35dbb813-68fd-4460-94f9-2e353516f830',
        mobileOrder: 1,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
        sheet: '6f1be004-1dfb-480c-9434-29d893efd464',
        mobileOrder: 2,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
        sheet: 'c4e8244f-cc90-4553-bb8e-1a0dc5e2a05f',
        mobileOrder: 3,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
        sheet: '54f8821f-6237-4309-91ba-4d062eadd639',
        mobileOrder: 7,
        mobileHeight: 4,
        skeletonType: 'column'
      },
      {
        appid: '14f47000-5a08-4b2a-b198-d7ae6b6d55b2',
        sheet: 'af996f0f-a146-40b3-9489-7b80135f7142',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'kpi'
      }
    ]
  },
  {
    title: 'Área de parques municipais e estaduais (2024)',
    identity: '3',
    desktopAppId: 'b4ec6f8c-40e8-473f-b130-359e44df750e',
    desktopSheetId: 'QMPruE',
    downloadLink: '/dados/urbanismo/area-de-parques-municipais-e-estaduais.zip',
    filter: {
      appid: 'b4ec6f8c-40e8-473f-b130-359e44df750e',
      sheet: '9cde9237-bc1a-4eec-aabb-94a65716a38f',
      showSelections: true
    },
    charts: [
      {
        appid: 'b4ec6f8c-40e8-473f-b130-359e44df750e',
        sheet: '2eade903-d962-4b44-ab0e-f5833b139aa6',
        mobileOrder: 1,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: 'b4ec6f8c-40e8-473f-b130-359e44df750e',
        sheet: 'c3bb122d-aecf-4c71-8b47-ab47418eca9e',
        mobileOrder: 0,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'b4ec6f8c-40e8-473f-b130-359e44df750e',
        sheet: '6a036866-6097-4ef1-baba-b544a7b989c6',
        mobileOrder: 2,
        mobileHeight: 4,
        skeletonType: 'bar'
      }
    ]
  },
  {
    title: 'Parques novos e requalificados, áreas permeáveis e despesas liquidadas com parques (2024)',
    identity: '4',
    desktopAppId: '22a261d9-7064-4232-956f-232f78547e51',
    desktopSheetId: '1f71d49e-422e-4314-aa8b-259b8f948658',
    methodologyLink: '/infos/notas/urbanismo/parques-novos-e-requalificados,-áreas-permeáveis-e-despesas-liquidadas-com-parques-2024.pdf',
    downloadLink: '/dados/urbanismo/parques-novos-e-requalificados-areas-permeaveis-e-despesas-liquidadas-com-parques.zip',
    filter: {
      appid: '22a261d9-7064-4232-956f-232f78547e51',
      sheet: '3ed03c68-c5fa-4e0a-ac5e-86424d0e5c90',
      showSelections: true
    },
    charts: [
      {
        appid: '22a261d9-7064-4232-956f-232f78547e51',
        sheet: '952c57f5-c3aa-44ed-a118-d30aced03e3e',
        mobileOrder: 0,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: '22a261d9-7064-4232-956f-232f78547e51',
        sheet: '74a76790-422e-4eea-9409-fdd76097ee1e',
        mobileOrder: 1,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '22a261d9-7064-4232-956f-232f78547e51',
        sheet: '1431e0ee-fba3-49c3-b402-2014df779d49',
        mobileOrder: 2,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '22a261d9-7064-4232-956f-232f78547e51',
        sheet: 'd7eb6977-355f-4292-a229-8d9e6b0b9bc1',
        mobileOrder: 3,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '22a261d9-7064-4232-956f-232f78547e51',
        sheet: '88e58954-ea2d-4ab8-898f-e3d2736aaed4',
        mobileOrder: 4,
        mobileHeight: 6,
        skeletonType: 'treemap'
      }
    ]
  },
  {
    title: 'Déficit habitacional, domicílios não ocupados e domicílios em favelas',
    identity: '5',
    desktopAppId: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
    desktopSheetId: 'da5e8886-a388-4a4d-9835-8990c3744f2a',
    downloadLink: '/dados/urbanismo/deficit-habitacional-domicilios-nao-ocupados-e-domicilios-em-favelas.zip',
    filter: {
      appid: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
      sheet: '24de766d-67e4-4531-90c2-6b978a9b60a2',
      showSelections: true
    },
    charts: [
      {
        appid: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
        sheet: 'b0a3ba13-3983-4c3a-aa81-219d4274e238',
        mobileOrder: 3,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
        sheet: 'f4855b9c-5311-4af2-b12e-6c3d2678f6aa',
        mobileOrder: 0,
        mobileHeight: 2,
        skeletonType: 'bar'
      },
      {
        appid: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
        sheet: 'c1889b0a-1add-4f8e-b9b4-4975db8cbdce',
        mobileOrder: 2,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
        sheet: 'e414560e-d86b-4464-aa8a-5a392127bd87',
        mobileOrder: 4,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
        sheet: 'ce032caf-ade0-4c6c-b925-cd229f298a18',
        mobileOrder: 1,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
        sheet: 'c41cff39-da64-4863-98f8-fe95facaa885',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '5894c40c-193a-4bfc-8b05-0cec25c9a09c',
        sheet: '0d9d32d0-36ef-4b14-9455-ac7be50829c0',
        mobileOrder: 6,
        mobileHeight: 4,
        skeletonType: 'column'
      }
    ]
  },
  {
    title: 'Unidades habitacionais entregues ou contratadas (2024)',
    identity: '6',
    desktopAppId: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
    desktopSheetId: 'hJfCYXg',
    downloadLink: '/dados/urbanismo/unidades-habitacionais-entregues-ou-contratadas.zip',
    filter: {
      appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
      sheet: 'de9ebe1d-41b6-4e01-8c66-9abb42256c71',
      showSelections: true
    },
    charts: [
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: 'ec5a07b0-6acd-40d1-a604-9203ed680272',
        mobileOrder: 3,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: '9ceda391-7cef-429a-aa9a-587350cdae0a',
        mobileOrder: 2,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: '5a0b82b0-3ecb-4442-904d-870fae9f8fe8',
        mobileOrder: 0,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: '15529f3f-4b97-4ded-85aa-07f363fd7330',
        mobileOrder: 7,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: 'a2e06756-5010-475e-95bf-67e5bcdcd0ab',
        mobileOrder: 1,
        mobileHeight: 3,
        skeletonType: 'bar'
      },
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: 'cf2b2427-37ae-4633-9c24-8e9dd9d694f0',
        mobileOrder: 4,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: 'f2796047-4682-4097-9d08-bee3540af63e',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: 'a58e3f7a-f161-4787-bb92-6a21d3ce8716',
        mobileOrder: 8,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '97daaa3e-d91e-4eaf-aa6b-1cb4772239bb',
        sheet: 'ee624aea-5b51-48b9-a39a-e617beeafc63',
        mobileOrder: 6,
        mobileHeight: 3,
        skeletonType: 'bar'
      }
    ]
  },
  {
    title: 'Famílias beneficiadas por regularização fundiária e obras em assentamentos precários (2024)',
    identity: '7',
    desktopAppId: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
    desktopSheetId: 'NAtPM',
    downloadLink: '/dados/urbanismo/familias-beneficiadas-por-regularizacao-fundiaria-e-obras-em-assentamentos-precarios.zip',
    filter: {
      appid: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
      sheet: '9954c2ea-72ef-4000-ac9f-3d009eaae3a6',
      showSelections: true
    },
    charts: [
      {
        appid: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
        sheet: '26e442d6-a859-4721-a8b0-e62a37676016',
        mobileOrder: 3,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
        sheet: 'd4232d9d-4d40-41ad-b9ee-f879b1a15ba2',
        mobileOrder: 2,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
        sheet: '47f06ef9-a52c-4751-89a6-b79a58be9f1c',
        mobileOrder: 0,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
        sheet: 'a2e032c7-6723-478f-a742-3208b8b984cb',
        mobileOrder: 1,
        mobileHeight: 4,
        skeletonType: 'bar'
      },
      {
        appid: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
        sheet: 'd49177d4-3130-4745-8364-657acdf7c276',
        mobileOrder: 4,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
        sheet: '98d7e577-24fc-42b9-9b58-08d98495680c',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '2be0f077-d541-4b52-a2bf-7b05c1b72400',
        sheet: '6ae6e14b-6b84-4ef9-8699-71e7c7ad9308',
        mobileOrder: 6,
        mobileHeight: 4,
        skeletonType: 'bar'
      }
    ]
  },
  {
    title: 'Famílias beneficiárias do programa de Auxílio Aluguel (dez/2024)',
    identity: '8',
    desktopAppId: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
    desktopSheetId: '6fe6d2e2-43de-4c67-8aba-6bd99ad3ba74',
    downloadLink: '/dados/urbanismo/familias-beneficiarias-do-programa-de-auxilio-aluguel.zip',
    filter: {
      appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
      sheet: '5b53226b-17c1-4ad7-bec0-c4a1b9ca3eed',
      showSelections: true
    },
    charts: [
      {
        appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
        sheet: 'cd103e90-fe57-40be-9f93-9a640740e584',
        mobileOrder: 3,
        mobileHeight: 6,
        skeletonType: 'map'
      },
      {
        appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
        sheet: '20eb5710-d61c-4519-b33b-a23bd7ac8d22',
        mobileOrder: 2,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
        sheet: '8e2fcb96-9223-4c5a-864c-24d5c84463ef',
        mobileOrder: 0,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
        sheet: '8ece2afe-72ee-41a6-a310-d5c26ecf6a45',
        mobileOrder: 1,
        mobileHeight: 4,
        skeletonType: 'bar'
      },
      {
        appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
        sheet: 'd67e6ce0-8338-4daf-989c-d8c52276255c',
        mobileOrder: 4,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
        sheet: 'ad84a6e1-e298-4377-91fd-911cd05531ac',
        mobileOrder: 5,
        mobileHeight: 1,
        skeletonType: 'text'
      },
      {
        appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
        sheet: 'e92605d9-d1ff-48f3-8f2b-3171c5b55bd3',
        mobileOrder: 6,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '58f8b63f-5302-4e4b-9260-dc74b69c57f9',
        sheet: '60467768-5986-4b83-bfc8-ccd281c3659e',
        mobileOrder: 7,
        mobileHeight: 4,
        skeletonType: 'bar'
      }
    ]
  },
  {
    title: 'Realização Financeira em políticas de Acesso à Moradia Adequada \u2014 Plano Plurianual 2022-2025',
    identity: '10',
    desktopAppId: 'f571d56a-108d-4a83-b865-45255c72b23d',
    desktopSheetId: '5548d5e2-5953-4beb-aaea-1345aae8f5d1',
    downloadLink: '/dados/urbanismo/Quadro 7 - Relatório de Função Habitação.xlsx',
    filter: {
      appid: 'f571d56a-108d-4a83-b865-45255c72b23d',
      sheet: 'f8b237a3-22bd-4b04-9d55-32c708bea204',
      showSelections: true
    },
    charts: [
      {
        appid: 'f571d56a-108d-4a83-b865-45255c72b23d',
        sheet: 'c151eb71-687b-4040-823b-1a144ad882b6',
        mobileOrder: 0,
        mobileHeight: 4,
        skeletonType: 'treemap'
      },
      {
        appid: 'f571d56a-108d-4a83-b865-45255c72b23d',
        sheet: 'f4622841-478e-4e4f-8d89-a72254a7d5bd',
        mobileOrder: 1,
        mobileHeight: 4,
        skeletonType: 'column'
      },
      {
        appid: 'f571d56a-108d-4a83-b865-45255c72b23d',
        sheet: '782940b6-6938-46c1-8460-1c6b75ad15c0',
        mobileOrder: 2,
        mobileHeight: 4,
        skeletonType: 'column'
      }
    ]
  },
  {
    title: 'Despesas liquidadas em toda a função Habitação (2024)',
    identity: '11',
    desktopAppId: '18956ab0-d917-475f-8c94-aba437c955fc',
    desktopSheetId: 'SHsCbm',
    downloadLink: '/dados/urbanismo/orcamento-habitacao.csv',
    filter: {
      appid: '18956ab0-d917-475f-8c94-aba437c955fc',
      sheet: '15447374-7e2c-48ba-98fd-27afec521d18',
      showSelections: true
    },
    charts: [
      {
        appid: '18956ab0-d917-475f-8c94-aba437c955fc',
        sheet: 'fe774ed6-3d13-4cd1-a5c9-c307f4182048',
        mobileOrder: 0,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '18956ab0-d917-475f-8c94-aba437c955fc',
        sheet: 'ece1412f-2b87-4b44-a8f0-3ebce47c3fee',
        mobileOrder: 3,
        mobileHeight: 4,
        skeletonType: 'pie'
      },
      {
        appid: '18956ab0-d917-475f-8c94-aba437c955fc',
        sheet: '043c135e-8628-4143-b43e-565530fac0fe',
        mobileOrder: 4,
        mobileHeight: 4,
        skeletonType: 'treemap'
      },
      {
        appid: '18956ab0-d917-475f-8c94-aba437c955fc',
        sheet: '1c128047-fd5b-46dd-9f47-0e140a10ee7b',
        mobileOrder: 5,
        mobileHeight: 4,
        skeletonType: 'treemap'
      },
      {
        appid: '18956ab0-d917-475f-8c94-aba437c955fc',
        sheet: 'de563c82-5ee6-4d38-b4d1-daaed1366d99',
        mobileOrder: 1,
        mobileHeight: 1,
        skeletonType: 'kpi'
      },
      {
        appid: '18956ab0-d917-475f-8c94-aba437c955fc',
        sheet: 'd71713bc-5640-4333-82d8-30185dbf31bf',
        mobileOrder: 2,
        mobileHeight: 6,
        skeletonType: 'map'
      }
    ]
  }
]
</script>

<style scoped></style>
