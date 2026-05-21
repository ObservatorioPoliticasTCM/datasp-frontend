<template>
  <footer>
    <div class="footer-container">
      <div class="footer-left">
        <a href="https://portal.tcm.sp.gov.br/" target="_blank" rel="noopener noreferrer" title="Acessar o portal do Tribunal de Contas do Município de São Paulo">
          <img src="@/assets/logo-tcm.png" alt="Logo TCM" class="logo-tcm" />
        </a>
        <a href="https://escoladecontas.tcm.sp.gov.br/" target="_blank" rel="noopener noreferrer" title="Acessar o portal da Escola Superior de Gestão e Contas Públicas">
          <img src="@/assets/logo-egc.svg" alt="Logo EGC" class="logo-egc" />
        </a>
      </div>
      <div class="footer-center">
        <div class="footer-license">
          <p>
          <img src="@/assets/cc-icons.svg#cc-logo" alt="CC Logo" class="cc-logo" />
          <img src="@/assets/cc-icons.svg#cc-by" alt="CC BY" class="cc-logo" />
          Todo o conteúdo do OPP neste site está disponível sob a licença <a href='https://creativecommons.org/licenses/by/4.0/' target="_blank" rel="noopener noreferrer">Creative Commons Atribuição 4.0 Internacional <img src="@/assets/external-link.svg" alt="external link" class="ext-icon" aria-hidden="true" /></a>, exceto quando especificada outra licença.
            <br>O código-fonte da plataforma e dos tratamentos dos dados estão disponíveis no <a href="https://github.com/ObservatorioPoliticasTCM" target="_blank" rel="noopener noreferrer">GitHub <img src="@/assets/external-link.svg" alt="external link" class="ext-icon" aria-hidden="true" /></a> sob a licença MIT.</p>
        </div>
        <div class="footer-version">
          <p>Versão {{ pkg.version }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import pkg from '../../package.json'
</script>

<style scoped>
footer {
  font-size: 0.7em;
  text-align: center;
  background-color: #d6d6d6;
  position: relative;
  z-index: 10;
  margin-top: auto;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-left{
  flex: 1;
}
.footer-center {
  flex: 2;
  text-align: left;
  font-size: 1.4em;
}

.footer-left a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.footer-left img {
  margin: 0 1rem;
  width: 11.2rem;
  object-fit: contain;
}

.footer-license {
  display: flex;
  align-items: center;
  font-size: 0.9em;
}

.ext-icon {
  height: 0.75em;
  vertical-align: super;
  margin-bottom: -0.15em;
}

.cc-logo {
  height: 1em;
  vertical-align: middle;
  margin-right: 0.3em;
}

.footer-version {
  font-size: 0.7em;
}

.footer-left {
  flex: 1;
  display: flex; /* force images side by side */
  gap: 0.5rem; /* optional: add spacing between images */
}

/* Tablet / large portrait: logos side by side on top, license + version stacked below */
@media (max-width: 900px), (orientation: portrait) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  .footer-left {
    justify-content: space-between;
    width: 100%;
  }

  .footer-left img {
    width: 42vw;
  }

  .logo-tcm {
    margin-left: -0.9rem !important;
  }

  .logo-egc {
    margin-right: 0 !important;
  }

  .footer-center {
    font-size: clamp(0.85rem, 2.5vw, 1rem);
  }

  .footer-license {
    justify-content: center;
  }
 }
</style>
