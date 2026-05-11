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

      <!-- Map (choropleth) — subprefeituras de São Paulo -->
      <template v-else-if="type === 'map'">
        <g transform="translate(17.4, 0) scale(0.652, 1)">
        <path d="M 40.22,48.23 L 42.99,48.50 L 42.01,51.25 L 46.19,54.12 L 42.04,56.50 L 38.11,57.33 L 37.50,56.20 L 34.99,55.08 L 34.29,53.35 L 31.20,52.70 L 34.61,50.77 L 34.91,48.33 L 32.73,47.39 L 32.32,45.66 L 33.92,44.15 L 36.53,47.12 L 40.22,48.23 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 7.01,52.40 L 8.55,51.98 L 8.52,50.61 L 10.60,51.07 L 11.83,49.24 L 13.29,50.00 L 16.60,45.06 L 15.43,44.84 L 17.80,43.72 L 22.29,44.29 L 23.79,46.16 L 22.11,48.31 L 23.59,54.06 L 21.85,56.32 L 21.89,58.09 L 20.64,59.19 L 14.57,58.69 L 13.22,61.57 L 12.75,60.82 L 9.02,59.85 L 6.95,57.64 L 8.38,55.77 L 8.43,53.62 L 6.36,52.62 L 7.01,52.40 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 43.91,27.27 L 43.76,24.98 L 44.99,24.89 L 50.89,26.54 L 58.26,25.44 L 60.47,27.26 L 58.35,27.59 L 59.26,30.50 L 56.46,30.01 L 55.87,30.60 L 59.34,32.40 L 58.52,34.28 L 55.37,34.08 L 53.39,33.12 L 51.51,34.50 L 50.03,34.44 L 47.13,30.36 L 43.88,30.18 L 43.27,28.34 L 43.91,27.27 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 46.30,34.51 L 45.44,33.81 L 46.78,32.47 L 48.53,32.27 L 50.52,35.13 L 53.94,37.97 L 53.16,43.55 L 48.86,45.84 L 44.00,46.43 L 43.06,48.39 L 42.30,45.43 L 44.25,44.76 L 43.64,43.20 L 43.04,43.26 L 43.46,38.81 L 46.30,34.51 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 17.46,31.21 L 15.63,30.75 L 14.58,29.24 L 14.62,26.77 L 17.46,25.34 L 16.15,25.26 L 13.74,23.23 L 15.51,21.46 L 16.60,23.23 L 20.84,23.56 L 21.92,24.44 L 23.63,23.43 L 28.33,23.36 L 37.59,24.64 L 36.39,25.50 L 35.00,28.92 L 32.94,30.08 L 24.56,27.58 L 22.08,27.95 L 20.25,29.22 L 20.88,29.58 L 20.50,30.37 L 17.46,31.21 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 38.44,43.37 L 39.26,41.97 L 43.13,41.81 L 43.04,43.26 L 43.64,43.20 L 44.25,44.76 L 42.30,45.43 L 42.99,48.50 L 36.72,47.21 L 34.75,45.50 L 34.05,44.25 L 36.15,43.18 L 36.86,43.91 L 38.44,43.37 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 87.46,27.74 L 85.50,25.75 L 86.18,24.71 L 91.16,26.14 L 95.33,24.90 L 96.03,25.32 L 93.46,26.42 L 95.16,28.84 L 93.62,29.47 L 94.95,31.03 L 97.18,31.13 L 95.30,32.66 L 90.50,31.23 L 87.44,31.51 L 86.74,31.06 L 87.46,27.74 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 30.71,41.43 L 32.97,38.66 L 39.25,42.02 L 38.39,43.42 L 36.86,43.91 L 36.15,43.18 L 32.34,45.51 L 32.73,47.39 L 34.91,48.33 L 34.61,50.77 L 31.20,52.70 L 22.28,44.60 L 24.98,41.81 L 27.62,40.50 L 30.71,41.43 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 66.17,39.27 L 66.03,37.82 L 63.21,36.65 L 64.04,35.34 L 63.55,34.73 L 66.49,34.80 L 70.53,36.55 L 72.09,36.41 L 71.38,38.70 L 74.17,38.20 L 74.73,40.35 L 69.78,41.08 L 66.17,39.27 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 82.77,25.72 L 83.02,23.83 L 76.00,24.40 L 75.58,22.84 L 77.83,21.62 L 77.40,18.88 L 84.31,18.64 L 86.53,17.44 L 89.17,17.78 L 89.77,17.17 L 91.44,18.35 L 91.14,19.57 L 95.07,18.90 L 95.24,17.81 L 96.24,17.39 L 97.04,18.47 L 93.08,20.72 L 84.67,20.42 L 86.34,21.43 L 85.48,23.16 L 85.88,25.43 L 82.77,25.72 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 46.11,16.19 L 43.15,16.49 L 41.84,15.80 L 40.87,14.05 L 42.21,12.76 L 41.70,11.07 L 44.30,10.15 L 44.01,9.26 L 46.36,9.35 L 46.14,7.41 L 49.07,5.97 L 48.75,4.96 L 53.12,2.58 L 55.53,2.93 L 59.71,0.00 L 62.64,1.02 L 60.76,2.96 L 60.67,4.61 L 57.79,6.53 L 58.57,7.08 L 58.37,8.10 L 56.14,9.12 L 55.84,11.60 L 56.58,12.76 L 55.42,15.37 L 57.42,17.78 L 57.57,19.97 L 55.24,17.70 L 52.71,18.60 L 51.21,17.10 L 46.11,16.19 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 33.24,19.02 L 33.91,17.17 L 32.74,14.51 L 34.09,12.14 L 35.28,11.60 L 34.02,11.34 L 32.20,9.13 L 37.95,11.73 L 37.32,13.63 L 39.20,17.38 L 37.99,17.66 L 38.14,18.84 L 37.19,19.27 L 40.32,22.80 L 38.45,23.25 L 38.47,24.44 L 37.59,24.64 L 29.82,23.51 L 30.77,20.57 L 33.24,19.02 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 17.36,40.13 L 23.82,39.22 L 27.55,40.62 L 25.33,41.55 L 22.29,44.29 L 17.82,43.71 L 15.54,44.74 L 16.60,45.06 L 13.29,50.00 L 11.83,49.24 L 10.60,51.07 L 8.52,50.61 L 8.55,51.98 L 6.98,52.40 L 6.19,50.79 L 7.96,44.82 L 15.33,39.51 L 16.69,38.87 L 17.36,40.13 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 91.12,26.12 L 88.30,24.82 L 86.19,24.71 L 85.88,25.43 L 85.48,23.16 L 86.34,21.43 L 84.67,20.42 L 92.99,20.73 L 97.08,18.87 L 100.00,22.23 L 99.73,23.50 L 98.17,23.43 L 95.65,24.96 L 91.12,26.12 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 15.20,30.05 L 15.69,30.78 L 18.20,31.17 L 20.88,29.58 L 26.54,31.66 L 29.65,35.37 L 27.62,40.50 L 23.80,39.21 L 17.15,40.15 L 16.63,38.61 L 17.27,38.20 L 14.72,36.77 L 11.55,38.06 L 4.53,39.04 L 4.75,35.16 L 6.66,35.11 L 12.00,32.96 L 15.20,30.05 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 35.59,27.69 L 36.39,25.50 L 37.59,24.64 L 43.76,24.98 L 43.27,28.34 L 43.88,30.18 L 47.13,30.36 L 48.53,32.27 L 46.77,32.48 L 45.51,34.10 L 42.38,34.05 L 35.78,30.66 L 32.94,30.08 L 34.99,28.93 L 35.59,27.69 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 85.53,25.76 L 87.54,27.76 L 86.74,31.06 L 88.31,31.58 L 87.50,32.77 L 89.20,33.82 L 88.75,35.89 L 83.86,35.70 L 79.58,36.74 L 70.92,33.66 L 67.28,30.25 L 69.70,29.29 L 75.35,29.94 L 76.65,27.86 L 76.01,24.39 L 83.02,23.83 L 82.65,25.68 L 85.53,25.76 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 74.61,40.72 L 74.37,38.37 L 71.38,38.70 L 72.09,36.41 L 69.58,36.15 L 70.63,33.48 L 79.62,36.74 L 83.83,35.71 L 88.61,35.83 L 93.33,39.16 L 92.52,40.39 L 91.21,40.70 L 91.22,41.88 L 87.76,43.86 L 86.26,42.59 L 85.72,43.41 L 83.47,43.77 L 77.13,43.02 L 76.02,41.06 L 74.61,40.72 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 25.57,9.40 L 25.42,10.13 L 22.60,11.08 L 22.22,10.40 L 19.22,10.06 L 17.16,10.74 L 17.01,11.67 L 14.05,11.82 L 13.16,14.12 L 11.16,15.22 L 10.89,16.95 L 7.54,16.44 L 6.15,17.81 L 4.68,16.61 L 3.00,12.42 L 0.79,10.94 L 1.46,9.81 L 0.00,8.42 L 0.68,7.22 L 5.01,6.23 L 5.80,7.46 L 7.00,6.96 L 9.26,7.63 L 9.22,6.80 L 11.95,6.58 L 12.07,5.25 L 13.39,4.65 L 15.99,5.44 L 19.59,5.10 L 22.61,6.30 L 23.46,7.88 L 25.07,7.87 L 25.57,9.40 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 93.25,39.34 L 88.75,35.89 L 89.20,33.82 L 87.50,32.77 L 88.60,31.26 L 97.32,33.07 L 96.14,33.85 L 97.55,35.35 L 96.45,35.64 L 96.07,37.05 L 92.86,37.93 L 93.79,38.77 L 93.25,39.34 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 39.47,42.23 L 37.64,40.59 L 32.97,38.66 L 34.28,34.98 L 38.79,32.43 L 42.38,34.05 L 46.38,34.54 L 43.48,38.74 L 43.13,41.81 L 39.47,42.23 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 53.91,37.94 L 50.03,34.44 L 51.56,34.49 L 53.39,33.12 L 56.82,34.37 L 58.52,34.28 L 58.66,33.46 L 62.30,34.06 L 64.03,35.30 L 63.21,36.65 L 66.36,38.12 L 65.72,38.84 L 66.18,39.28 L 64.36,39.42 L 61.00,38.07 L 58.71,39.06 L 53.87,37.13 L 53.91,37.94 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 30.67,41.41 L 27.62,40.50 L 29.63,35.58 L 28.51,33.84 L 26.37,31.53 L 20.25,29.22 L 22.23,27.90 L 25.34,27.63 L 35.77,30.66 L 38.79,32.43 L 34.28,34.98 L 32.64,39.38 L 30.67,41.41 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 13.81,61.15 L 14.57,58.69 L 18.79,59.44 L 21.27,58.83 L 22.15,59.59 L 22.33,61.33 L 23.01,61.48 L 22.71,62.75 L 25.75,63.25 L 28.22,69.06 L 27.83,70.86 L 30.39,75.92 L 33.10,74.99 L 38.26,75.48 L 42.52,72.72 L 43.14,75.78 L 46.66,77.49 L 46.47,81.37 L 47.78,85.27 L 48.57,85.57 L 48.32,87.34 L 46.82,87.88 L 47.09,88.77 L 48.86,89.13 L 48.78,90.54 L 48.05,90.87 L 49.05,91.87 L 47.93,93.81 L 46.61,93.49 L 42.80,95.05 L 44.19,97.10 L 39.72,98.78 L 37.16,96.76 L 33.16,96.98 L 30.47,96.10 L 29.49,97.13 L 27.51,97.11 L 26.63,97.96 L 19.75,97.43 L 14.33,99.93 L 13.00,99.48 L 17.11,94.56 L 16.03,94.67 L 15.41,93.20 L 13.11,92.63 L 12.91,91.18 L 11.40,91.04 L 10.24,89.89 L 5.85,89.50 L 4.56,85.09 L 6.15,82.71 L 5.52,81.46 L 7.17,82.55 L 12.15,82.37 L 12.16,76.69 L 11.21,74.41 L 14.63,74.65 L 14.97,72.34 L 12.49,70.86 L 6.43,69.32 L 9.03,66.60 L 9.19,64.34 L 12.77,62.82 L 13.81,61.15 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 11.17,16.58 L 11.16,15.22 L 13.16,14.12 L 13.36,12.47 L 17.01,11.67 L 18.00,10.20 L 22.22,10.40 L 22.43,11.10 L 25.42,10.13 L 25.67,9.35 L 27.24,10.11 L 26.58,10.34 L 26.71,12.72 L 24.86,13.08 L 26.00,14.49 L 24.11,16.02 L 25.92,18.83 L 25.17,20.14 L 26.39,23.49 L 23.52,23.46 L 21.92,24.44 L 20.84,23.56 L 16.60,23.23 L 15.58,21.51 L 13.24,20.95 L 12.34,19.74 L 12.50,18.37 L 11.30,17.97 L 11.14,17.12 L 12.34,15.80 L 11.17,16.58 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 29.54,23.48 L 26.39,23.49 L 25.17,20.14 L 25.92,18.83 L 24.11,16.01 L 26.00,14.49 L 24.86,13.08 L 26.71,12.72 L 26.59,10.32 L 30.25,10.93 L 30.48,9.89 L 32.20,9.13 L 34.02,11.34 L 35.28,11.61 L 34.09,12.14 L 32.74,14.51 L 33.94,18.22 L 30.81,20.53 L 30.85,21.70 L 29.54,23.48 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 70.75,18.36 L 71.45,19.37 L 69.63,20.06 L 71.14,20.53 L 72.04,22.85 L 66.31,24.03 L 71.78,25.08 L 73.10,26.06 L 76.28,25.44 L 76.62,28.04 L 75.33,29.96 L 69.70,29.29 L 67.28,30.25 L 60.90,27.67 L 58.26,25.44 L 59.13,23.19 L 66.76,19.15 L 70.75,18.36 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 59.29,30.34 L 58.35,27.59 L 60.62,27.27 L 67.03,29.97 L 70.00,32.27 L 70.64,34.05 L 69.57,35.61 L 58.66,33.46 L 59.34,32.40 L 55.87,30.60 L 56.46,30.01 L 59.29,30.34 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 43.80,24.98 L 37.59,24.64 L 38.47,24.44 L 38.45,23.25 L 40.32,22.80 L 37.19,19.27 L 38.14,18.84 L 37.99,17.66 L 39.20,17.38 L 37.32,13.63 L 37.97,11.78 L 37.19,11.45 L 41.70,11.07 L 42.21,12.76 L 40.87,14.05 L 41.84,15.80 L 43.15,16.49 L 48.94,16.45 L 51.22,17.10 L 52.71,18.60 L 49.49,20.70 L 46.69,20.87 L 45.90,23.26 L 44.65,23.78 L 45.16,24.89 L 43.80,24.98 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 49.49,20.70 L 51.28,19.19 L 55.24,17.70 L 57.79,20.22 L 57.38,21.91 L 58.85,23.44 L 58.82,25.00 L 51.03,26.54 L 45.16,24.89 L 44.65,23.78 L 45.90,23.26 L 46.69,20.87 L 49.49,20.70 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 75.65,23.01 L 76.28,25.44 L 73.15,26.05 L 71.78,25.08 L 66.31,24.03 L 72.04,22.85 L 71.14,20.53 L 69.63,20.06 L 71.45,19.37 L 70.79,18.31 L 77.40,18.88 L 77.83,21.62 L 75.65,23.01 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        <path d="M 22.96,52.83 L 22.11,48.31 L 23.79,46.16 L 30.52,52.37 L 34.29,53.35 L 34.99,55.08 L 37.50,56.20 L 39.30,58.54 L 39.90,61.14 L 45.30,65.55 L 44.90,70.07 L 43.98,71.42 L 38.26,75.48 L 33.10,74.99 L 30.86,76.02 L 29.86,75.58 L 27.81,70.79 L 28.21,69.02 L 25.75,63.25 L 22.71,62.75 L 22.56,60.06 L 21.27,58.83 L 21.85,56.32 L 23.59,54.06 L 22.96,52.83 Z" :fill="`url(#${gradId})`" stroke="#f0f0f0" stroke-width="0.3" />
        </g>
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
