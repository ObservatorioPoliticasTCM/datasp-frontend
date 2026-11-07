<template>
  <ThemePage :dashboards="dashboards">
    <IntroPanel title="Segurança Alimentar e Nutricional no DataSP" subtitle=""
      :full-height="false" :use-placeholder="false" :snap="true">
      <p>
        A construção de um Sistema Municipal de Vigilância em Segurança Alimentar e Nutricional (VigiSAN) é fundamental
        para identificar desigualdades, orientar políticas públicas e monitorar a garantia do Direito Humano à
        Alimentação Adequada. O II Panorama de Segurança Alimentar e Nutricional (SAN), de 2025, e o I Inquérito sobre a
        Situação Alimentar do Município de São Paulo evidenciam a magnitude da insegurança alimentar e sua distribuição
        desigual no território.
      </p>
      <p>
        Realizado em 2024, o I Inquérito estimou que 5,8 milhões de pessoas (50,5% da população paulistana) viviam em
        domicílios com algum grau de insegurança alimentar. Desse total, aproximadamente 1,4 milhão (12,5%) enfrentava
        insegurança alimentar grave, caracterizada pela fome; 1,5 milhão (13,5%), insegurança moderada; e 2,8 milhões
        (24,5%), insegurança leve. O estudo também revelou desigualdades territoriais e interseccionalidades
        relacionadas a gênero, raça/cor e condições socioeconômicas. Entre os domicílios com crianças menores de cinco
        anos, 60,8% apresentavam algum grau de insegurança alimentar, evidenciando a relevância de acompanhar as
        condições de vida e nutrição na primeira infância.
      </p>
      <p>
        Nesse contexto, a parceria entre o Observatório de Segurança Alimentar e Nutricional da cidade de São Paulo
        (ObSANPA), vinculado ao COMUSAN-SP, e o OPP representa um
        avanço na integração de informações para o monitoramento das políticas públicas, com a inclusão de indicadores de
        vigilância nutricional no DataSP constituindo um primeiro passo nessa direção. Com apoio da CEINFO, foram selecionados dados da Saúde relativos à saúde nutricional materno-infantil: baixo
        peso ao nascer, desnutrição crônica (baixa estatura para a idade), desnutrição aguda (magreza) e excesso de peso
        em menores de cinco anos.
      </p>
      <p>
        Esses indicadores permitem acompanhar condições relevantes para o desenvolvimento infantil e sua análise pode contribuir para o reconhecimento de desigualdades sociais e territoriais, de condições de vida e de acesso à alimentação
        adequada. Embora não esgote a complexidade da SAN, essa iniciativa inaugura uma agenda de integração de dados e
        articulação intersetorial, fortalecendo a vigilância, o planejamento e a avaliação das políticas públicas e
        contribuindo para a construção de um VigiSAN municipal orientado pela equidade e pela garantia do direito à
        alimentação adequada.
      </p>
    </IntroPanel>
  </ThemePage>
</template>

<script setup lang="ts">
import ThemePage from '@/components/ThemePage.vue'
import IntroPanel from '@/components/IntroPanel.vue'
import { segurancaAlimentarDashboards as dashboards } from '@/data/dashboards/segurancaAlimentar'

</script>
