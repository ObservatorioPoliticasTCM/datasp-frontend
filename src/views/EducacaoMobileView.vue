<template>
  <SnapPage>
    <ComposedDashboard
      title="Alunos estrangeiros na rede municipal (2024)"
      identity="alunos-estrangeiros"
      methodology-link="/infos/notas/educacao/7_notas_metodologicas_alunos_estrangeiros_ok.pdf"
      download-link="/dados/educacao/educandos-estrangeiros.csv"
      :grid-cols="3"
      :grid-rows="2"
      >
      <template #filter>
        <DashboardItemFrame
          appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8"
          sheet="KWNtww"
          type="filter"
        />
      </template>
      <template #charts>
        <DashboardItemFrame
          appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8"
          sheet="rwAyU"
          :row-span="2"
        />
        <DashboardItemFrame
          appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8"
          sheet="FdEZjMW"
        />
        <DashboardItemFrame
          appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8"
          sheet="yqjQC"
        />
        <DashboardItemFrame
          appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8"
          sheet="FdEZjMW"
        />
        <DashboardItemFrame
          appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8"
          sheet="yqjQC"
        />
      </template>
    </ComposedDashboard>
    <ComposedDashboard
      title="Alunos estrangeiros na rede municipal (2024)"
      methodology-link="/infos/notas/educacao/7_notas_metodologicas_alunos_estrangeiros_ok.pdf"
      download-link="/dados/educacao/educandos-estrangeiros.csv"
      :grid-cols="3"
      :grid-rows="1"
    >
      <template #filter>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="KWNtww" />
      </template>
      <template #charts>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="rwAyU" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="FdEZjMW" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="yqjQC" />
      </template>
    </ComposedDashboard>

    <ComposedDashboard
      title="Perfil dos alunos da rede municipal (2024)"
      identity="educacao-mobile-perfil-alunos"
      methodology-link="/infos/notas/educacao/5_notas_metodologicas_alunos_ok.pdf"
      download-link="/dados/educacao/perfil-dos-educandos.csv"
      :grid-cols="3"
      :grid-rows="1"
    >
      <template #filter>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="KWNtww" />
      </template>
      <template #charts>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="rwAyU" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="FdEZjMW" />
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="yqjQC" />
      </template>
    </ComposedDashboard>

    <ComposedDashboard
      title="Numero de escolas da rede municipal (2024)"
      identity="educacao-mobile-numero-escolas"
      methodology-link="/infos/notas/educacao/3_notas_metodologicas_escolas_ok.pdf"
      download-link="/dados/educacao/escolas-municipais.csv"
      :grid-cols="3"
      :grid-rows="1"
    >
      <template #filter>
        <DashboardItemFrame appid="f4120b83-cc71-4949-93d1-2d6c3aa7afe8" sheet="KWNtww" />
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
