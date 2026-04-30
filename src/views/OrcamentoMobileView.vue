<template>
  <SnapPage>
    <ComposedDashboard
      title="Variação do Orçamento por Função de Governo (2024)"
      methodology-link="/infos/notas/orcamento/notas_metodologicas_orcamento.pdf"
      download-link="/dados/orcamento/basedadosexecucao_1224.csv"
      :grid-cols="3"
      :grid-rows="1"
    >
      <template #filter>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="KWNtww" :show-selections="true" />
      </template>
      <template #charts>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="rwAyU" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="FdEZjMW" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="yqjQC" />
      </template>
    </ComposedDashboard>
    <ComposedDashboard
      title="Variação detalhada do Orçamento por Função de Governo (2024)"
      identity="orcamento-funcao"
      methodology-link="/infos/notas/orcamento/notas_metodologicas_orcamento.pdf"
      download-link="/dados/orcamento/basedadosexecucao_1224.csv"
      :grid-cols="3"
      :grid-rows="24"
      >
      <template #filter>
        <DashboardItemFrame
          appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
          sheet="KWNtww"
          :show-selections="true"
        />
      </template>
      <template #charts>
        <DashboardItemFrame
          appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
          sheet="rwAyU"
          :row-span="24"
          :mobile-order="0"
        />
        <DashboardItemFrame
          appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
          sheet="3ec67207-65c9-4d3d-a8ab-b725497d19e6"
          :row-span="12"
          :mobile-order="1"
        />
        <DashboardItemFrame
          appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
          sheet="71ec6681-a441-452a-8c6d-412656c7fda0"
          :row-span="5"
          :mobile-height="1"
          :mobile-order="3"
        />
        <DashboardItemFrame
          appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
          sheet="95a9620b-be85-4472-96f0-022ea700c2f2"
          :row-span="19"
          :mobile-order="4"
        />
        <DashboardItemFrame
          appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
          sheet="388980d7-91ce-4038-90a0-9ebaa4564821"
          :row-span="12"
          :mobile-order="2"
        />
      </template>
    </ComposedDashboard>

    <ComposedDashboard
      title="Variação detalhada do Orçamento por Órgão (2024)"
      identity="orcamento-mobile-orgao"
      methodology-link="/infos/notas/orcamento/notas_metodologicas_orcamento.pdf"
      download-link="/dados/orcamento/basedadosexecucao_1224.csv"
      :grid-cols="3"
      :grid-rows="1"
    >
      <template #filter>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="KWNtww" :show-selections="true" />
      </template>
      <template #charts>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="rwAyU" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="FdEZjMW" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="yqjQC" />
      </template>
    </ComposedDashboard>

    <ComposedDashboard
      title="Comparação do Orçamento por Projeto/Atividade (2024)"
      identity="orcamento-mobile-projeto"
      methodology-link="/infos/notas/orcamento/notas_metodologicas_orcamento.pdf"
      download-link="/dados/orcamento/basedadosexecucao_1224.csv"
      :grid-cols="3"
      :grid-rows="1"
    >
      <template #filter>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="KWNtww" :show-selections="true" />
      </template>
      <template #charts>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="rwAyU" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="FdEZjMW" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="yqjQC" />
      </template>
    </ComposedDashboard>
  </SnapPage>
</template>

<script setup lang="ts">
import ComposedDashboard from '@/components/ComposedDashboard.vue';
import DashboardItemFrame from '@/components/DashboardItemFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
</script>

<style scoped></style>