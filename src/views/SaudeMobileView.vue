<template>
  <SnapPage>
    <IntroPanel title="Visão geral dos dashboards de Saúde" subtitle="" :full-height="false" :use-placeholder="false"
      :snap="true">
      <p>
        O Observatório de Políticas Públicas do Tribunal de Contas do Município de São Paulo (OPP-TCMSP)
        iniciou a criação do Portal DATA SP – Mapa de Dados da Cidade, reunindo informações e estatísticas com o
        objetivo de avaliar a eficiência do gasto público municipal em saúde, permitindo comparações entre
        diferentes territórios da cidade e, assim, avaliar a eficiência da execução orçamentária.
      </p>
      <p>
        O Grupo de Trabalho Saúde (GT Saúde – OPP) elegeu a publicação de 2022 do consórcio Ipea/Conass/OPAS,
        intitulada "SUS: Avaliação da Eficiência do Gasto Público em Saúde", em especial o capítulo 7 —
        "Eficiência nas Macrorregiões de Saúde no Sistema Único de Saúde: uma abordagem comparativa 2008-2017",
        que apresenta metodologia comparativa de eficiência do gasto entre macrorregiões do Brasil.
      </p>
      <p>
        Tal referência propõe metodologia comparativa bem fundamentada na literatura científica para o contexto
        das macrorregiões do país. Assumimos o desafio de adaptar essa metodologia ao contexto das subprefeituras
        do Município de São Paulo. Foram adotados na íntegra os 14 indicadores propostos pelo estudo seminal.
      </p>
      <p>
        A adaptação necessária para transpor a metodologia do cenário nacional ao intramunicipal enfrentou
        dificuldades devidas à ausência de alguns dados não computados pela Secretaria Municipal da Saúde,
        contornada parcialmente pela adoção de parâmetros da Organização para a Cooperação e Desenvolvimento
        Econômico (OCDE). Outros dados vieram de fontes oficiais (SMS-SP, CNES, ANS, IBGE) ou foram estimados
        quando indisponíveis por subprefeitura.
      </p>
      <p>
        Os dashboards da saúde foram organizados no DataSP conforme os 14 indicadores da referência nacional.
        Após as adaptações ao contexto municipal, as variáveis escolhidas se mostraram adequadas para avaliar a
        eficiência do gasto público em saúde, sem impedir que novos aperfeiçoamentos sejam incorporados.
      </p>
      <p>
        Esse conjunto compõe o Painel Saúde do Portal DATA SP, oferecendo base estruturada para análise e
        comparação dos investimentos públicos em saúde no Município de São Paulo, lembrando que alguns dashboards
        apresentam apenas dados e não indicadores — ponto que tratamos como oportunidade de aprimoramento
        contínuo para o DataSP.
      </p>
    </IntroPanel>
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
import IntroPanel from '@/components/IntroPanel.vue'
import type { DashboardConfig } from '@/types/dashboard'

const dashboards: DashboardConfig[] = [
  {
    title: 'Número de consultas (2024)',
    subtitle: 'Inclui as unidades municipais, estaduais e federais',
    downloadLink: '/dados/saude/consultas.zip',
    methodologyLink: '',
    identity: '1',
    gridCols: 42,
    gridRows: 21,
    filter: {
      appid: '641d52d4-8c27-49ec-a4c4-46954bc9fe1c',
      sheet: 'CmsPL',
      showSelections: true
    },
    charts: [
      {
        appid: '641d52d4-8c27-49ec-a4c4-46954bc9fe1c',
        sheet: '57b6bce0-3c86-49d7-87c0-2e2690420f8a',
        colSpan: 14,
        rowSpan: 21,
        mobileOrder: 0
      },
      {
        appid: '641d52d4-8c27-49ec-a4c4-46954bc9fe1c',
        sheet: '3bacdabc-915f-4f33-ab7f-92e10addfe6a',
        colSpan: 12,
        rowSpan: 4,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: '641d52d4-8c27-49ec-a4c4-46954bc9fe1c',
        sheet: '3b487c3e-46bb-49bb-b6d1-f07bc78bc34c',
        colSpan: 16,
        rowSpan: 12,
        mobileHeight: 4,
        mobileOrder: 4
      },
      {
        appid: '641d52d4-8c27-49ec-a4c4-46954bc9fe1c',
        sheet: '76b4690d-f536-4788-b99e-b89eae1c540e',
        colSpan: 12,
        rowSpan: 8,
        mobileHeight: 4,
        mobileOrder: 2
      },
      {
        appid: '641d52d4-8c27-49ec-a4c4-46954bc9fe1c',
        sheet: '60c5c2ae-6a1e-4986-bee9-6afa7f02e128',
        colSpan: 28,
        rowSpan: 6,
        mobileOrder: 3
      },
      {
        appid: '641d52d4-8c27-49ec-a4c4-46954bc9fe1c',
        sheet: '06e488a7-e8f7-43e4-9d4c-90bddc114dd3',
        colSpan: 28,
        rowSpan: 3,
        mobileHeight: 1,
        mobileOrder: 5
      }
    ]
  },
  {
    title: 'Leitos (2024)',
    subtitle: 'Inclui leitos das unidades municipais, estaduais e federais',
    downloadLink: '/dados/saude/leitos-internacao-complementares.zip',
    identity: '2',
    gridCols: 42,
    gridRows: 21,
    filter: {
      appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
      sheet: 'b61ed3a1-544e-4be2-8c23-fe9063c63085',
      showSelections: true
    },
    charts: [
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '1bde1b53-2caa-425f-a3dc-da5ff27a1195',
        colSpan: 13,
        rowSpan: 4,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '3242a1b7-9c08-4a9b-a01b-a7132565ab85',
        colSpan: 16,
        rowSpan: 18,
        mobileOrder: 2
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '6e8a22bd-a038-4279-9775-900ca13c62eb',
        colSpan: 13,
        rowSpan: 21,
        mobileOrder: 4
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '327239ee-6dca-4256-813a-cf18b1cf85cf',
        colSpan: 13,
        rowSpan: 17,
        mobileOrder: 3
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: 'dcb974b6-95e1-4bc5-991d-d14951cd993c',
        colSpan: 16,
        rowSpan: 3,
        mobileOrder: 5,
        mobileHeight: 1
      }
    ]
  },
  {
    title: 'Taxa de Mortalidade (2024)',
    subtitle: 'Inclui óbitos de residentes do município de São Paulo',
    downloadLink: '/dados/saude/mortalidade.zip',
    methodologyLink: '/infos/notas/saude/taxa-de-mortalidade-2024.pdf',
    identity: '3',
    gridCols: 42,
    gridRows: 21,
    filter: {
      appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
      sheet: 'a4e288ed-0cc5-4f45-bae5-0f5afeee2113',
      showSelections: true
    },
    charts: [
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '9f22cdfc-2dfe-46fe-8aec-b94a7973211a',
        colSpan: 13,
        rowSpan: 4,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '1b9f6b3c-27a7-4d23-bd8e-edb7c0f617b2',
        colSpan: 16,
        rowSpan: 18,
        mobileOrder: 2
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '00cc9341-af08-4997-a3a8-ca48f5038396',
        colSpan: 13,
        rowSpan: 21,
        mobileOrder: 4
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: 'd90e1549-26d2-4907-a1e9-e899bc99cc9d',
        colSpan: 13,
        rowSpan: 17,
        mobileOrder: 3
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '1fbb3d8e-ee73-49e6-92e6-f36b5a3308c4',
        colSpan: 16,
        rowSpan: 3,
        mobileOrder: 5,
        mobileHeight: 1
      }
    ]
  },
  {
    title: 'Despesas em atenção Básica e especializada (2024)',
    subtitle: 'Inclui apenas despesas municipais',
    downloadLink: '/dados/saude/despesas.zip',
    identity: '4',
    gridCols: 3,
    gridRows: 21,
    filter: {
      appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
      sheet: 'a602802b-16f9-40e1-a864-df8be8567e30',
      showSelections: true
    },
    charts: [
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: 'fe47beea-a668-46bd-8fde-37e341f5379b',
        colSpan: 1,
        rowSpan: 4,
        mobileHeight: 1,
        mobileOrder: 1
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: 'c31c537c-dc17-47bd-98c2-ed49b4ae9af6',
        colSpan: 1,
        rowSpan: 5,
        mobileHeight: 2,
        mobileOrder: 4
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '9ef2adf8-328f-4020-80d4-e7ea0d3155e4',
        colSpan: 1,
        rowSpan: 4,
        mobileHeight: 1,
        mobileOrder: 2
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '657488d4-7aca-4c4f-8d82-0299686b7e21',
        colSpan: 1,
        rowSpan: 14,
        mobileOrder: 5
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: 'b17519e1-5931-4d69-a7be-0c6a9b4e3767',
        colSpan: 1,
        rowSpan: 17,
        mobileOrder: 3
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: 'ca956e69-7077-4cad-b097-7dd94bbf085e',
        colSpan: 1,
        rowSpan: 13,
        mobileOrder: 6
      },
      {
        appid: '585f0398-5876-4e29-98db-a53e3e013dc4',
        sheet: '26f1e2b4-2359-4857-afd1-f83f34a0957a',
        colSpan: 2,
        rowSpan: 3,
        mobileOrder: 7,
        mobileHeight: 1
      }
    ]
  }
]
</script>

<style scoped></style>