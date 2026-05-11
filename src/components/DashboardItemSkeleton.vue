<template>
  <div class="skeleton-root">
    <div v-if="type === 'filter'" class="filter-skeleton">
      <div class="filter-icon-pill shimmer-bg">
        <svg viewBox="0 0 64 64" class="icon-svg" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
          <line x1="50.69" y1="32" x2="56.32" y2="32"/>
          <line x1="7.68"  y1="32" x2="38.69" y2="32"/>
          <line x1="26.54" y1="15.97" x2="56.32" y2="15.97"/>
          <line x1="7.68"  y1="15.97" x2="14.56" y2="15.97"/>
          <line x1="35"    y1="48.03" x2="56.32" y2="48.03"/>
          <line x1="7.68"  y1="48.03" x2="23"    y2="48.03"/>
          <circle cx="20.55" cy="15.66" r="6"/>
          <circle cx="44.69" cy="32"    r="6"/>
          <circle cx="29"    cy="48.03" r="6"/>
        </svg>
      </div>
      <div class="filter-chips">
        <div class="chip shimmer-bg" />
        <div class="chip chip--wide shimmer-bg" />
        <div class="chip shimmer-bg" />
      </div>
    </div>

    <svg
      v-else
      class="chart-svg"
      viewBox="0 0 100 100"
      :preserveAspectRatio="['pie', 'map', 'kpi'].includes(type) ? 'xMidYMid meet' : 'none'"
      aria-hidden="true"
    >
      <defs>
        <linearGradient :id="gradId" gradientUnits="userSpaceOnUse" x1="-100" y1="0" x2="0" y2="0">
          <stop offset="0%"   stop-color="#d4d4d4" />
          <stop offset="50%"  stop-color="#ebebeb" />
          <stop offset="100%" stop-color="#d4d4d4" />
          <animate attributeName="x1" values="-100;100" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="x2" values="0;200"    dur="1.5s" repeatCount="indefinite" />
        </linearGradient>
      </defs>

      <!-- Column chart -->
      <template v-if="type === 'column'">
        <rect x="5"  y="94" width="90"  height="1.5" :fill="`url(#${gradId})`" />
        <rect x="5"  y="5"  width="1.5" height="89"  :fill="`url(#${gradId})`" />
        <rect x="11" y="54" width="11"  height="40"   :fill="`url(#${gradId})`" />
        <rect x="26" y="29" width="11"  height="65"   :fill="`url(#${gradId})`" />
        <rect x="41" y="64" width="11"  height="30"   :fill="`url(#${gradId})`" />
        <rect x="56" y="19" width="11"  height="75"   :fill="`url(#${gradId})`" />
        <rect x="71" y="44" width="11"  height="50"   :fill="`url(#${gradId})`" />
        <rect x="86" y="34" width="9"   height="60"   :fill="`url(#${gradId})`" />
      </template>

      <!-- Line chart -->
      <template v-else-if="type === 'line'">
        <rect x="8" y="94" width="87"  height="1.5" :fill="`url(#${gradId})`" />
        <rect x="8" y="5"  width="1.5" height="89"  :fill="`url(#${gradId})`" />
        <rect x="8" y="25" width="87"  height="0.8"  :fill="`url(#${gradId})`" opacity="0.5" />
        <rect x="8" y="50" width="87"  height="0.8"  :fill="`url(#${gradId})`" opacity="0.5" />
        <rect x="8" y="75" width="87"  height="0.8"  :fill="`url(#${gradId})`" opacity="0.5" />
        <polyline
          points="13,80 28,52 43,67 58,32 73,47 88,18 95,38"
          fill="none"
          :stroke="`url(#${gradId})`"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="13" cy="80" r="2.5" :fill="`url(#${gradId})`" />
        <circle cx="28" cy="52" r="2.5" :fill="`url(#${gradId})`" />
        <circle cx="43" cy="67" r="2.5" :fill="`url(#${gradId})`" />
        <circle cx="58" cy="32" r="2.5" :fill="`url(#${gradId})`" />
        <circle cx="73" cy="47" r="2.5" :fill="`url(#${gradId})`" />
        <circle cx="88" cy="18" r="2.5" :fill="`url(#${gradId})`" />
        <circle cx="95" cy="38" r="2.5" :fill="`url(#${gradId})`" />
      </template>

      <!-- Pie chart: 3 sectors (40% / 35% / 25%) -->
      <template v-else-if="type === 'pie'">
        <path d="M 50 50 L 90 50 A 40 40 0 0 1 17.6 73.5 Z" :fill="`url(#${gradId})`" opacity="1" />
        <path d="M 50 50 L 17.6 73.5 A 40 40 0 0 1 50 10 Z"  :fill="`url(#${gradId})`" opacity="0.6" />
        <path d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z"       :fill="`url(#${gradId})`" opacity="0.35" />
      </template>

      <!-- Treemap -->
      <template v-else-if="type === 'treemap'">
        <rect x="1"  y="2"  width="58" height="96" rx="1" :fill="`url(#${gradId})`" />
        <rect x="60" y="2"  width="39" height="62" rx="1" :fill="`url(#${gradId})`" />
        <rect x="60" y="66" width="29" height="32" rx="1" :fill="`url(#${gradId})`" />
        <rect x="90" y="66" width="9"  height="32" rx="1" :fill="`url(#${gradId})`" />
      </template>

      <!-- Map (choropleth) -->
      <template v-else-if="type === 'map'">
        <polygon points="2,2  44,3  42,34  2,33"    :fill="`url(#${gradId})`" />
        <polygon points="46,3  72,2  73,34  44,34"  :fill="`url(#${gradId})`" />
        <polygon points="74,2  98,3  98,33  75,32"  :fill="`url(#${gradId})`" />
        <polygon points="2,35  40,34  38,65  2,63"  :fill="`url(#${gradId})`" />
        <polygon points="42,34 75,32  76,64  40,64" :fill="`url(#${gradId})`" />
        <polygon points="77,32 98,33  98,65  78,64" :fill="`url(#${gradId})`" />
        <polygon points="2,65  36,64  35,88  2,88"  :fill="`url(#${gradId})`" />
        <polygon points="38,64 58,62  57,92  33,93" :fill="`url(#${gradId})`" />
        <polygon points="60,62 78,63  79,92  59,93" :fill="`url(#${gradId})`" />
        <polygon points="80,63 98,65  98,92  81,91" :fill="`url(#${gradId})`" />
      </template>

      <!-- Horizontal bar -->
      <template v-else-if="type === 'bar'">
        <rect x="5"  y="5"  width="1.5" height="90" :fill="`url(#${gradId})`" />
        <rect x="5"  y="94" width="90"  height="1.5" :fill="`url(#${gradId})`" />
        <rect x="7"  y="8"  width="65"  height="11" :fill="`url(#${gradId})`" />
        <rect x="7"  y="22" width="40"  height="11" :fill="`url(#${gradId})`" />
        <rect x="7"  y="36" width="75"  height="11" :fill="`url(#${gradId})`" />
        <rect x="7"  y="50" width="52"  height="11" :fill="`url(#${gradId})`" />
        <rect x="7"  y="64" width="30"  height="11" :fill="`url(#${gradId})`" />
        <rect x="7"  y="78" width="58"  height="11" :fill="`url(#${gradId})`" />
      </template>

      <!-- KPI -->
      <template v-else-if="type === 'kpi'">
        <rect x="-150" y="8" width="400" height="14" rx="2" :fill="`url(#${gradId})`" />
        <rect x="-30" y="30" width="160" height="43" rx="2" :fill="`url(#${gradId})`" />
        <rect x="30" y="81" width="40" height="7"  rx="1" :fill="`url(#${gradId})`" />
      </template>

      <!-- Text -->
      <template v-else-if="type === 'text'">
        <rect x="5"  y="12"  width="92" height="34" rx="1" :fill="`url(#${gradId})`" />
        <rect x="5"  y="60" width="74" height="26" rx="1" :fill="`url(#${gradId})`" />
      </template>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

export type SkeletonType = 'filter' | 'map' | 'column' | 'line' | 'pie' | 'treemap' | 'bar' | 'kpi' | 'text'

defineProps<{ type: SkeletonType }>()

const uid = getCurrentInstance()?.uid ?? Math.random().toString(36).slice(2)
const gradId = `skeleton-shimmer-${uid}`
</script>

<style scoped>
.skeleton-root {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: #f0f0f0;
}

.chart-svg {
  width: 100%;
  height: 100%;
}

@keyframes shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}

.shimmer-bg {
  background: linear-gradient(90deg, #d4d4d4 25%, #ebebeb 50%, #d4d4d4 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

.filter-skeleton {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 0.75rem;
  padding: 0 0.75rem;
}

.filter-icon-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 70%;
  border-radius: 0.4rem;
  flex-shrink: 0;
}

.icon-svg {
  width: 55%;
  height: 55%;
  color: rgba(0, 0, 0, 0.35);
}

.filter-chips {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 100%;
}

.chip {
  height: 55%;
  width: 5rem;
  border-radius: 999px;
}

.chip--wide {
  width: 8rem;
}
</style>
