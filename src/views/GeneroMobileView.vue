<template>
  <ThemePage :dashboards="dashboards" />
</template>

<script setup lang="ts">
import ThemePage from '@/components/ThemePage.vue'
import type { DashboardConfig } from '@/types/dashboard'

const dashboards: DashboardConfig[] = [
  {
    title: 'Visão geral de Gênero',
    identity: '0',
    desktopAppId: 'd73227fb-7244-4216-980d-8e2b08f23f05',
    desktopSheetId: 'XUzXjdp',
    filter: {
      appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
      sheet: '1b12cc1f-d8e9-4224-b990-4c8ed175bd13',
      showSelections: true
    },
    charts: [
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: '0af12cba-9930-410d-87be-b31bc956fa38',
        mobileHeight: 3,
        mobileOrder: 0,
        skeletonType: 'column'
      },
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: 'b82d0e4a-b492-42e3-82d6-7064263af7a6',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: '5c23ce82-c60c-4fa5-9ea5-f6523836b019',
        mobileHeight: 3,
        mobileOrder: 2,
        skeletonType: 'bar'
      },
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: '825db2ec-bb8b-4f99-82ac-1a8ecb433cc4',
        mobileHeight: 3,
        mobileOrder: 3,
        skeletonType: 'bar'
      },
      {
        appid: 'd73227fb-7244-4216-980d-8e2b08f23f05',
        sheet: '4bcc6787-97d4-44fd-b530-8fc775299e6a',
        mobileHeight: 3,
        mobileOrder: 4,
        skeletonType: 'bar'
      }
    ]  },
  {
    title: 'Despesas municipais sensíveis a gênero em projetos/atividades com foco exclusivo em políticas para as mulheres',
    identity: '1',
    desktopAppId: 'ceb7f846-e814-4852-8237-706b0bb21d13',
    desktopSheetId: 'c609507f-709a-434f-8430-5f1f74121740',
    methodologyLink: '/infos/notas/genero/DESPESAS MUNICIPAIS EM AÇÕES VOLTADAS EXCLUSIVAMENTE A POLÍTICAS DE PROMOÇÃO AOS DIREITOS DAS MULHERES 1.pdf',
    downloadLink: '/dados/genero/orçamento-exclusivo.csv',
    filter: {
      appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
      sheet: '6256951f-b119-4912-b829-1013928a370d',
      showSelections: true
    },
    charts: [
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: 'e822c1ad-2bd1-404b-907e-dbba6e569425',
        mobileHeight: 2,
        mobileOrder: 0,
        skeletonType: 'kpi'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: '1f543cba-37cb-4642-98fb-dd38af0fc270',
        mobileHeight: 3,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: 'c2de57b7-b88d-4fd5-997f-4be1ac0538fa',
        mobileHeight: 3,
        mobileOrder: 5,
        skeletonType: 'kpi'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: '12598022-505a-4921-8fdc-ba37caccd8e8',
        mobileHeight: 3,
        mobileOrder: 6,
        skeletonType: 'kpi'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: '1f809824-dd36-40eb-b985-648d1853b8cb',
        mobileHeight: 3,
        mobileOrder: 7,
        skeletonType: 'kpi'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: '1256fde4-93ef-492e-9a88-3860cd6b3cb8',
        mobileHeight: 3,
        mobileOrder: 8,
        skeletonType: 'kpi'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: 'c2e51b8e-41af-4b68-9e8a-a3c13af76f28',
        mobileHeight: 1,
        mobileOrder: 9,
        skeletonType: 'kpi'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: '156dd22f-808f-4f56-b0f8-63ab268b6b9e',
        mobileHeight: 1,
        mobileOrder: 10,
        skeletonType: 'kpi'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: '4649951b-d21c-408c-a5ce-838244aec99c',
        mobileHeight: 6,
        mobileOrder: 11,
        skeletonType: 'treemap'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: '227df07b-70d8-4666-968e-e1096b923b07',
        mobileHeight: 2,
        mobileOrder: 12,
        skeletonType: 'pie'
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: '4951634e-6711-4e8a-8cfd-e5b8d29968ad',
        mobileHeight: 4,
        mobileOrder: 13,
        skeletonType: 'line',
        legendItems: [
          {
            text: 'Orçado',
            color: '#a38c21'
          },
          {
            text: 'Liquidado',
            color: '#a32088'
          }
        ]
      },
      {
        appid: 'ceb7f846-e814-4852-8237-706b0bb21d13',
        sheet: 'e5253baf-734f-40e8-bf0e-5eb816a52acf',
        mobileHeight: 4,
        mobileOrder: 14,
        skeletonType: 'text'
      }
    ]
  },
  {
    title: 'Despesas municipais sensíveis a gênero em projetos/atividades sem foco exclusivo em políticas para mulheres (2023)',
    identity: '2',
    desktopAppId: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
    desktopSheetId: 'b5eaabe4-7475-4e0f-ab78-92f912214961',
    methodologyLink: '/infos/notas/genero/DESPESAS MUNICIPAIS EM AÇÕES PARCIALMENTE FOCALIZADAS POR INICIATIVA DISCRICIONÁRIA DA GESTÃO MUNICIPAL (2023).pdf',
    downloadLink: '/dados/genero/orçamento-não-exclusivo-2023.csv',
    filter: {
      appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
      sheet: '0e062a58-256e-4071-ad33-09c6e8715431',
      showSelections: true
    },
    charts: [
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: 'cc76268a-5e5a-49f7-94e7-902f6822ced0',
        mobileHeight: 3,
        mobileOrder: 0,
        skeletonType: 'kpi'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: '7cece033-dc07-4647-9c70-15bd4b4e5708',
        mobileHeight: 3,
        mobileOrder: 1,
        skeletonType: 'kpi'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: '5784977d-8725-4a8a-92f0-e16221b5f900',
        mobileHeight: 3,
        mobileOrder: 2,
        skeletonType: 'kpi'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: '3d0561d9-d0f0-4835-b08a-7e056e2fde19',
        mobileHeight: 3,
        mobileOrder: 3,
        skeletonType: 'kpi'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: 'e63a2fba-e98c-4ffe-b8a9-ad673b3073ef',
        mobileHeight: 3,
        mobileOrder: 4,
        skeletonType: 'kpi'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: '56d2ca00-4c09-4874-987e-3952b3c59297',
        mobileHeight: 3,
        mobileOrder: 5,
        skeletonType: 'kpi'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: 'fc6a3962-639d-4915-8ed0-bdcc61e00382',
        mobileHeight: 3,
        mobileOrder: 6,
        skeletonType: 'kpi'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: '94a42b74-826f-4f32-8320-656b1acd7bb6',
        mobileHeight: 3,
        mobileOrder: 7,
        skeletonType: 'treemap'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: 'd09047f5-9a22-432a-8459-1e8bfbfb4e1f',
        mobileHeight: 3,
        mobileOrder: 8,
        skeletonType: 'pie'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: 'aea58da9-47a5-4280-b47e-f854114b796d',
        mobileHeight: 4,
        mobileOrder: 9,
        skeletonType: 'column'
      },
      {
        appid: 'aa9f4f6c-2007-47d9-ab3a-588c87a4d50e',
        sheet: 'a2362dd0-3b99-468a-bd70-d3cebacc594a',
        mobileHeight: 5,
        mobileOrder: 10,
        skeletonType: 'bar'
      }
    ]
  },
  {
    title: 'Plano Municipal de Políticas para as Mulheres - Habitação',
    subtitle: 'Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)',
    identity: '3',
    desktopAppId: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
    desktopSheetId: '3d5ba550-f947-4ba8-a12e-31ee20c05521',
    methodologyLink: '/infos/notas/genero/DESPESAS MUNICIPAIS SEM FOCO EXCLUSIVO NAS MULHERES 1.pdf',
    downloadLink: '/dados/genero/orçamento-pmpm-habitação.csv',
    filter: {
      appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
      sheet: '81d5cd8a-2d94-4918-a4aa-5bfa25b588e2',
      showSelections: true
    },
    charts: [
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'a55b9d4b-a8d1-4a05-8cad-99b3da998f34',
        mobileHeight: 2,
        mobileOrder: 0,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'ad794e1d-26a2-42fd-8ccc-570577359ff9',
        mobileHeight: 3,
        mobileOrder: 5,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'f0b51038-338e-4c72-951e-feac926ff698',
        mobileHeight: 3,
        mobileOrder: 6,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '122bf985-6880-474a-9c15-dadf23ce6cfc',
        mobileHeight: 3,
        mobileOrder: 7,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '4ce42e44-ae1f-4d60-83bf-52a265221d1e',
        mobileHeight: 3,
        mobileOrder: 8,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'aee9c464-562d-4bd1-b958-1e4e83dbbe8b',
        mobileHeight: 3,
        mobileOrder: 9,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '378f2704-4d0d-4480-9c44-0a3df0e50786',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '612fc99e-02d8-42fc-9544-68aca472bbf3',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'ad3a0ed8-1396-4daf-a15e-30b1190404a2',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'a2da803f-3a6a-42a6-880e-742d1deb2dfb',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '4ed5621f-928b-4980-be86-2416c16e3b58',
        mobileHeight: 4,
        mobileOrder: 10,
        skeletonType: 'line'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '8d1011ab-b50c-47f6-896f-2d690de924a3',
        mobileHeight: 6,
        mobileOrder: 11,
        skeletonType: 'column'
      }
    ]
  },
  {
    title: 'Plano Municipal de Políticas para as Mulheres - Educação',
    subtitle: 'Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)',
    identity: '4',
    desktopAppId: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
    desktopSheetId: '62d5961d-3b5a-4872-adb5-0c79b489f70c',
    methodologyLink: '/infos/notas/genero/DESPESAS MUNICIPAIS SEM FOCO EXCLUSIVO NAS MULHERES 1.pdf',
    downloadLink: '/dados/genero/orçamento-pmpm-educação.csv',
    filter: {
      appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
      sheet: '087c2178-5f3a-4187-a922-26d87c96568d',
      showSelections: true
    },
    charts: [
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '158d1f06-9d2a-439a-8827-126290e908c9',
        mobileHeight: 2,
        mobileOrder: 0,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '506445fc-0b1d-47d1-bba8-600b03264d16',
        mobileHeight: 3,
        mobileOrder: 5,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '547ff5c4-6ba6-4d98-829f-e549fe6a200b',
        mobileHeight: 3,
        mobileOrder: 6,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'c495d57a-83da-4bd9-9bbc-72973c80e2ea',
        mobileHeight: 3,
        mobileOrder: 7,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '8909a083-b9ed-4015-924b-53eddd7cf528',
        mobileHeight: 3,
        mobileOrder: 8,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'e730b854-d53d-461f-8962-98a08dea3b87',
        mobileHeight: 3,
        mobileOrder: 9,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'd57bc78d-4562-4339-b39c-624c2b7e5447',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'c0ec8211-4df1-42c9-8e22-1ca6ab20728e',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '3ef67df4-2de6-45ea-a4f5-b3434f81ea9d',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '51af6ded-fb44-48ca-834c-768a7a2d2ffc',
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'f2dd5640-50fc-4a84-84ff-79c90b21c7fd',
        mobileHeight: 4,
        mobileOrder: 10,
        skeletonType: 'line'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'c72b9992-2192-471d-bca3-b53d5fc7b0c0',
        mobileHeight: 6,
        mobileOrder: 11,
        skeletonType: 'column'
      }
    ]
  },
  {
    title: 'Plano Municipal de Políticas para as Mulheres - Assistencia Social',
    subtitle: 'Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)',
    identity: '5',
    desktopAppId: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
    desktopSheetId: 'fde5eb98-c713-45ad-b134-fc6d58a188e5',
    methodologyLink: '/infos/notas/genero/DESPESAS MUNICIPAIS SEM FOCO EXCLUSIVO NAS MULHERES 1.pdf',
    downloadLink: '/dados/genero/orçamento-pmpm-assistência-social.csv',
    filter: {
      appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
      sheet: 'e1d6796b-9dc5-4bbf-9e82-d41867258d13',
      showSelections: true
    },
    charts: [
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '7abe496a-c18c-451e-b2d3-79977e6aea6b',
        mobileHeight: 2,
        mobileOrder: 0,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'c7a86a7c-a275-49f1-937d-e38df07873c9',
        mobileHeight: 3,
        mobileOrder: 5,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'e9cb31d3-749a-4795-8093-37c221d014f1',
        mobileHeight: 3,
        mobileOrder: 6,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'c38b39bd-609d-43ce-b164-2f76e6a59ac0',
        mobileHeight: 3,
        mobileOrder: 7,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '943d7771-74b9-43ba-84a6-4ebc799fffd6',
        mobileHeight: 3,
        mobileOrder: 8,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'e90876bd-14c4-445a-96ab-f89167a1ef44',
        mobileHeight: 3,
        mobileOrder: 9,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '214af26a-f271-4f79-8ecf-166116527ecc',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '0b3cf4d7-ab41-48a3-a325-995e6a4edc8d',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '2215b017-7a5f-43b7-8df6-33c4260f457c',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'e6c2ce99-7c4c-4398-86b5-0b0f75ff5d96',
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'b0bab8c0-9808-4e8a-b67f-861bbd6d285f',
        mobileHeight: 4,
        mobileOrder: 10,
        skeletonType: 'line'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'bfae5073-158c-4aea-a0d3-8993db44c16f',
        mobileHeight: 6,
        mobileOrder: 11,
        skeletonType: 'column'
      }
    ]
  },
  {
    title: 'Plano Municipal de Políticas para as Mulheres - Direitos Humanos',
    subtitle: 'Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)',
    identity: '6',
    desktopAppId: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
    desktopSheetId: '7931a494-f4b5-4f34-a3e2-c57f08b8d53a',
    methodologyLink: '/infos/notas/genero/DESPESAS MUNICIPAIS SEM FOCO EXCLUSIVO NAS MULHERES 1.pdf',
    downloadLink: '/dados/genero/orçamento-pmpm-direitos-humanos.csv',
    filter: {
      appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
      sheet: '388cfce4-6095-49a5-a0ef-282d4eaad783',
      showSelections: true
    },
    charts: [
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '69d34ab2-4367-40e9-b152-da71d2a8ffa3',
        mobileHeight: 3,
        mobileOrder: 0,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '6d8c6153-c787-4067-b26c-0d5eeb925b2c',
        mobileHeight: 3,
        mobileOrder: 5,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '507bd87d-06db-4351-9322-f33f0c98a39c',
        mobileHeight: 3,
        mobileOrder: 6,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '91184b99-afdc-465b-95d5-ef6a46728c45',
        mobileHeight: 3,
        mobileOrder: 7,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'b368d4a2-d262-4703-8efe-2d1cf60cc719',
        mobileHeight: 3,
        mobileOrder: 8,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '6501d19a-3892-4d58-a07b-d46ce7fb143b',
        mobileHeight: 3,
        mobileOrder: 9,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '4be4c689-944e-4888-98e1-2014a36e266e',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'b582b021-45c1-47a7-9f19-d3bc641c4d27',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '427011c8-1175-49df-b2e8-eead799b0ac1',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'd6650337-5365-4a5f-a59e-e0d1803dd017',
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '6ec3fce4-c2d1-426f-bef1-18d97528d103',
        mobileHeight: 4,
        mobileOrder: 10,
        skeletonType: 'line'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '1f5834e6-2f23-4b96-9b47-a962f9f54e11',
        mobileHeight: 6,
        mobileOrder: 11,
        skeletonType: 'column'
      }
    ]
  },
  {
    title: 'Plano Municipal de Políticas para as Mulheres - Trabalho',
    subtitle: 'Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)',
    identity: '7',
    desktopAppId: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
    desktopSheetId: '49e484ce-2ad7-41a1-b727-0680f3a9036b',
    methodologyLink: '/infos/notas/genero/DESPESAS MUNICIPAIS SEM FOCO EXCLUSIVO NAS MULHERES 1.pdf',
    downloadLink: '/dados/genero/orçamento-pmpm-trabalho.csv',
    filter: {
      appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
      sheet: '101fc4d0-7413-4cc8-aa99-52d349c635c0',
      showSelections: true
    },
    charts: [
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'a692b646-5c91-444a-a0ba-e41485b2d0da',
        mobileHeight: 2,
        mobileOrder: 0,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '7c4c2d09-ae5c-4f78-9fa1-3b719a17fee0',
        mobileHeight: 3,
        mobileOrder: 5,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '328daf53-1a29-4d7c-a70c-85f807cd72e9',
        mobileHeight: 3,
        mobileOrder: 6,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'a8a58e2f-d734-4370-bcba-26407eb0660e',
        mobileHeight: 3,
        mobileOrder: 7,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'f29ea5e9-fb8d-48a1-8381-ade8b203e7af',
        mobileHeight: 3,
        mobileOrder: 8,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '851a26ea-2ed1-452a-8607-9b71e507bed1',
        mobileHeight: 3,
        mobileOrder: 9,
        skeletonType: 'kpi'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'fbb0ed27-32d0-4ac8-941e-bb68d92f8991',
        mobileHeight: 1,
        mobileOrder: 1,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'e8abfcea-14fe-4696-94c4-a6f586a07ee2',
        mobileHeight: 1,
        mobileOrder: 2,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'a54f7ce5-40f8-4ff1-a04c-a6866d7c3870',
        mobileHeight: 1,
        mobileOrder: 3,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'b0a93c2d-5862-4aab-8f99-9475a08eab4d',
        mobileHeight: 1,
        mobileOrder: 4,
        skeletonType: 'text'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: '757b5e7a-3401-4590-b018-36c5f0c04051',
        mobileHeight: 4,
        mobileOrder: 10,
        skeletonType: 'line'
      },
      {
        appid: 'e808b4ea-ded0-41c6-b5b0-8845934d8369',
        sheet: 'd6d5273e-f011-42de-96c6-085ceb9e71cd',
        mobileHeight: 6,
        mobileOrder: 11,
        skeletonType: 'column'
      }
    ]
  }
]
</script>

<style scoped></style>
