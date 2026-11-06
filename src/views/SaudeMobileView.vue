<template>
  <ThemePage :dashboards="dashboards" theme-id="saude">
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
  </ThemePage>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ThemePage from '@/components/ThemePage.vue'
import { usePreview } from '@/composables/preview'
import { saudePrevious } from '@/data/dashboards/saudePrevious'
import { saudeCurrent } from '@/data/dashboards/saudeCurrent'
import IntroPanel from '@/components/IntroPanel.vue'

const { showUpdateContent } = usePreview()

const dashboards = computed(() =>
  showUpdateContent.value && saudeCurrent.length > 0
    ? saudeCurrent
    : saudePrevious
)
</script>
