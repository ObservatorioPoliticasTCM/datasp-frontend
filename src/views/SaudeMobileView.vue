<template>
  <SnapPage>
    <IntroPanel
        title="Visão geral dos dashboards de Saúde"
        subtitle=""
        :full-height="false"
        :use-placeholder="false"
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
    <ComposedDashboard
      title="Número de consultas (2024)"
      subtitle="Inclui as unidades municipais, estaduais e federais"
      download-link="/dados/saude/consultas.zip"
      :grid-cols="42"
      :grid-rows="21">
        <template #filter>
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="CmsPL"
                :show-selections="true"
            />
        </template>
        <template #charts>
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="57b6bce0-3c86-49d7-87c0-2e2690420f8a"
                :col-span="14"
                :row-span="21"
                :mobile-order="0"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="3bacdabc-915f-4f33-ab7f-92e10addfe6a"
                :col-span="12"
                :row-span="4"
                :mobileHeight="1"
                :mobile-order="1"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="3b487c3e-46bb-49bb-b6d1-f07bc78bc34c"
                :col-span="16"
                :row-span="12"
                :mobileHeight="4"
                :mobile-order="4"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="76b4690d-f536-4788-b99e-b89eae1c540e"
                :col-span="12"
                :row-span="8"
                :mobileHeight="4"
                :mobile-order="2"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="60c5c2ae-6a1e-4986-bee9-6afa7f02e128"
                :col-span="28"
                :row-span="6"
                :mobile-order="3"
            />
            <DashboardItemFrame
                appid="641d52d4-8c27-49ec-a4c4-46954bc9fe1c"
                sheet="06e488a7-e8f7-43e4-9d4c-90bddc114dd3"
                :col-span="28"
                :row-span="3"
                :mobileHeight="1"
                :mobile-order="5"
            />
        </template>
    </ComposedDashboard>
  </SnapPage>
</template>

<script setup lang="ts">
import ComposedDashboard from '@/components/ComposedDashboard.vue';
import DashboardItemFrame from '@/components/DashboardItemFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
import IntroPanel from '@/components/IntroPanel.vue'
</script>

<style scoped></style>