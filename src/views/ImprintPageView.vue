<template>
  <ScrollablePage>
    <div class="imprint-wrapper">
      <h1 class="imprint-title">Ficha Técnica</h1>

      <template v-if="selectedImprint">
        <div class="year-controls">
          <label for="imprint-year">Ano da Ficha Técnica</label>

          <select
            id="imprint-year"
            :value="selectedImprint.year"
            @change="changeYear"
          >
            <option
              v-for="imprint in sortedImprints"
              :key="imprint.year"
              :value="imprint.year"
            >
              {{ imprint.year }}
            </option>
          </select>
        </div>

        <p class="selected-year" aria-live="polite" aria-atomic="true">
          Versão de {{ selectedImprint.year }}
        </p>

        <div class="imprint-container">
          <div class="imprint-column">
            <div class="imprint-panel">
              <TechCoord
                :participants="selectedImprint.coordination"
              />
            </div>

            <div class="imprint-panel">
              <TechSupport
                :groups="selectedImprint.support"
              />
            </div>
          </div>

          <div class="imprint-column">
            <div class="imprint-panel">
              <TechTeam
                :groups="selectedImprint.technicalTeam"
                :working-groups="selectedImprint.workingGroups"
              />
            </div>

            <div class="imprint-panel">
              <Contributors
                :participants="selectedImprint.contributors"
              />
            </div>
          </div>

          <div class="imprint-column specialists-column">
            <div class="imprint-panel">
              <Specialists
                :participants="selectedImprint.specialists"
              />
            </div>
          </div>
        </div>
      </template>

      <p v-else>Nenhuma versão da Ficha Técnica está disponível.</p>
    </div>
  </ScrollablePage>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { annualImprints } from '@/data/technicalSpecifications'
import ScrollablePage from '@/components/ScrollablePage.vue'
import TechCoord from '@/components/TechCoord.vue'
import TechSupport from '@/components/TechSupport.vue'
import TechTeam from '@/components/TechTeam.vue'
import Specialists from '@/components/Specialists.vue'
import Contributors from '@/components/Contributors.vue'

const route = useRoute()
const router = useRouter()

const sortedImprints = [...annualImprints].sort(
  (first, second) => second.year - first.year
)

const latestImprint = sortedImprints[0]

const selectedImprint = computed(() => {
  const requestedYear = route.query.ano

  if (typeof requestedYear !== 'string') {
    return latestImprint
  }

  return (
    sortedImprints.find(
      imprint => String(imprint.year) === requestedYear
    ) ?? latestImprint
  )
})

function changeYear(event: Event) {
  const select = event.target as HTMLSelectElement
  const year = select.value

  if (!sortedImprints.some(imprint => String(imprint.year) === year)) {
    return
  }

  void router.push({
    path: route.path,
    query: {
      ...route.query,
      ano: year,
    },
    hash: route.hash,
  })
}

watch(
  () => route.query.ano,
  requestedYear => {
    if (requestedYear === undefined) {
      return
    }

    const isAvailableYear =
      typeof requestedYear === 'string' &&
      sortedImprints.some(
        imprint => String(imprint.year) === requestedYear
      )

    if (!isAvailableYear) {
      const query = { ...route.query }
      delete query.ano

      void router.replace({
        path: route.path,
        query,
        hash: route.hash,
      })
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.imprint-wrapper {
  padding: 1em 5vw;
  position: relative;
  z-index: 30;
}

.imprint-title {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 0 0.4em;
}

.year-controls {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.year-controls label {
  font-weight: 600;
}

.year-controls select {
  box-sizing: border-box;
  max-width: 100%;
  min-width: 7rem;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #111;
  font: inherit;
  cursor: pointer;
}

.year-controls select:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}

.selected-year {
  margin: 0.75rem 0 1.5rem;
  font-weight: 600;
}

.imprint-container {
  display: flex;
  gap: 2em;
  align-items: flex-start;
}

.imprint-column {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.specialists-column {
  min-height: 100%;
}

.imprint-panel {
  margin-bottom: 0;
  overflow-wrap: anywhere;
}

@media (max-width: 1366px) {
  .imprint-container {
    flex-wrap: wrap;
  }

  .imprint-column {
    flex: 1 1 calc(50% - 1em);
  }

  .specialists-column {
    flex: 1 1 100%;
  }
}

@media (max-width: 900px) {
  .imprint-container {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 480px) {
  .year-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .year-controls select {
    width: 100%;
  }
}
</style>