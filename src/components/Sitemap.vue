<template>
  <div class="sitemap-container">
    <div class="sitemap">
      <h3 class="sitemap-title">Mapa do site</h3>

      <div class="sitemap-lists">
        <div class="sitemap-column">
          <ul>
            <li><router-link to="/apresentacao">Apresenta&#231;&#227;o</router-link></li>
            <li><router-link to="/glossario">Gloss&#225;rio</router-link></li>
            <li>
              <a href="/infos/metadados-datasp.xlsx" target="_blank" rel="noopener noreferrer">
                Metadados
              </a>
            </li>
            <li><router-link to="/guia-tecnico">Guia t&#233;cnico</router-link></li>
            <li><router-link to="/fichatecnica">Ficha t&#233;cnica</router-link></li>
            <li>
              <a
                href="https://observatorio.tcm.sp.gov.br/ObservatorioItem/156570"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contatos
              </a>
            </li>
          </ul>
        </div>

        <div class="sitemap-column">
          <ul>
            <li><router-link to="/educacao">Educa&#231;&#227;o</router-link></li>
            <li><router-link to="/genero">G&#234;nero</router-link></li>
            <li><router-link to="/saude">Sa&#250;de</router-link></li>
            <li><router-link to="/urbanismo">Urbanismo</router-link></li>
            <li><router-link to="/orcamento">Or&#231;amento</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.sitemap-container {
  position: relative;
  z-index: 30;
  width: 100%;
  background-color: #d6d6d6;
}

.sitemap {
  width: 85%;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1rem;
}

.sitemap-title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.2;
  margin: 0;
  text-align: left;
}

.sitemap-lists {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  column-gap: 0.75rem;
  row-gap: 0;
}

.sitemap-column {
  padding: 0 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}

.sitemap-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sitemap-column li {
  margin-bottom: 0.4rem;
}

.sitemap-column a {
  color: black;
  text-decoration: none;
  font-weight: 400;
}

@media (max-width: 1024px) {
  .sitemap {
    width: 100%;
    padding: 1.5rem 1rem;
  }

  .sitemap-lists {
    column-gap: 0.35rem;
  }

  .sitemap-column {
    padding: 0;
  }
}
</style>
