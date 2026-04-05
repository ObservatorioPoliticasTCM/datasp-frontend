<template>
  <SnapPage>
    <MobileDashboardSection
      title="Alunos estrangeiros na rede municipal (2024)"
      filter-src="https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=KWNtww&theme=card&opt=ctxmenu,currsel"
      :chart-srcs="[
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=rwAyU&theme=card&opt=ctxmenu',
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=FdEZjMW&theme=card&opt=ctxmenu',
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=yqjQC&theme=card&opt=ctxmenu'
      ]"
      methodology-link="/infos/notas/educacao/7_notas_metodologicas_alunos_estrangeiros_ok.pdf"
      download-link="/dados/educacao/educandos-estrangeiros.csv"
    />

    <MobileDashboardSection
      title="Perfil dos alunos da rede municipal (2024)"
      identity="educacao-mobile-perfil-alunos"
      filter-src="https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=KWNtww&theme=card&opt=ctxmenu,currsel"
      :chart-srcs="[
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=rwAyU&theme=card&opt=ctxmenu',
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=FdEZjMW&theme=card&opt=ctxmenu',
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=yqjQC&theme=card&opt=ctxmenu'
      ]"
      methodology-link="/infos/notas/educacao/5_notas_metodologicas_alunos_ok.pdf"
      download-link="/dados/educacao/perfil-dos-educandos.csv"
    />

    <MobileDashboardSection
      title="Numero de escolas da rede municipal (2024)"
      identity="educacao-mobile-numero-escolas"
      filter-src="https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=KWNtww&theme=card&opt=ctxmenu,currsel"
      :chart-srcs="[
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=rwAyU&theme=card&opt=ctxmenu',
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=FdEZjMW&theme=card&opt=ctxmenu',
        'https://qlik.tcm.sp.gov.br/jwt/single/?appid=f4120b83-cc71-4949-93d1-2d6c3aa7afe8&sheet=yqjQC&theme=card&opt=ctxmenu'
      ]"
      methodology-link="/infos/notas/educacao/3_notas_metodologicas_escolas_ok.pdf"
      download-link="/dados/educacao/escolas-municipais.csv"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import MobileDashboardSection from '@/components/MobileDashboardSection.vue'
import SnapPage from '@/components/SnapPage.vue'
</script>

<style scoped></style>
