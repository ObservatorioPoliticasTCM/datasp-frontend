<template>
  <footer>
    <div class="footer-container">
      <div class="footer-left">
        <a href="https://portal.tcm.sp.gov.br/" target="_blank" rel="noopener noreferrer" title="Acessar o portal do Tribunal de Contas do Município de São Paulo">
          <img src="@/assets/logo-tcm.png" alt="Logo TCM" />
        </a>
        <a href="https://escoladecontas.tcm.sp.gov.br/" target="_blank" rel="noopener noreferrer" title="Acessar o portal da Escola Superior de Gestão e Contas Públicas">
          <img src="@/assets/logo-egc.svg" alt="Logo EGC" />
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
  gap: 1rem;
}
.footer-center {
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
  font-size: 1.4em;
}
.footer-license {
  display: block;
  width: 100%;
  min-width: 0;
  font-size: 0.9em;
}

.footer-license p {
  margin: 0;
  max-width: 100%;
  line-height: 1.45;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.footer-license a {
  overflow-wrap: anywhere;
  word-break: break-word;
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
  flex: 0 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  flex-wrap: nowrap;
}

.footer-left a {
  display: inline-flex;
  align-items: center;
}

.footer-left img {
  margin: 0;
  width: clamp(8.8rem, 13.5vw, 9.6rem);
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    gap:0.6rem;
  }

  .footer-left {
    width: 100%;
  }

  .footer-center {
    width: 100%;
    text-align: center;
    font-size: 1.15em;
  }

  .footer-license {
    font-size: 0.85em;
  }
}
</style>
