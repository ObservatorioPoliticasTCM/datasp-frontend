import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EducacaoMobileView from '@/views/EducacaoMobileView.vue'
import SaudeMobileView from '@/views/SaudeMobileView.vue'
import GeneroMobileView from '@/views/GeneroMobileView.vue'
import UrbanismoMobileView from '@/views/UrbanismoMobileView.vue'
import OrcamentoMobileView from '@/views/OrcamentoMobileView.vue'
import GlossaryView from '@/views/GlossaryView.vue'
import NotFound from './views/NotFoundView.vue'
import ImprintPage from '@/views/ImprintPageView.vue'
import TechGuideView from '@/views/TechGuideView.vue'
import PresentationLetterView from './views/PresentationLetterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() { return { top: 0 } },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'DataSP – Mapa de Dados da Cidade' }
    },
    {
      path: '/apresentacao',
      name: 'apresentacao',
      component: PresentationLetterView,
      meta: { title: 'Carta de Apresentação – DataSP' }
    },
    {
      path: '/guia-tecnico',
      name: 'guia-tecnico',
      component: TechGuideView,
      meta: { title: 'Guia técnico – DataSP' }
    },
    {
      path: '/educacao',
      name: 'educacao',
      component: EducacaoMobileView,
      meta: { title: 'Educação – DataSP' }
    },
    {
      path: '/genero',
      name: 'genero',
      component: GeneroMobileView,
      meta: { title: 'Gênero – DataSP' }
    },
    {
      path: '/saude',
      name: 'saude',
      component: SaudeMobileView,
      meta: { title: 'Saúde – DataSP' }
    },
    {
      path: '/urbanismo',
      name: 'urbanismo',
      component: UrbanismoMobileView,
      meta: { title: 'Urbanismo – DataSP' }
    },
    {
      path: '/orcamento',
      name: 'orcamento',
      component: OrcamentoMobileView,
      meta: { title: 'Orçamento – DataSP' }
    },
    {
      path: '/glossario',
      name: 'glossario',
      component: GlossaryView,
      meta: { title: 'Glossário – DataSP' }
    },
    {
      path: '/fichatecnica',
      name: 'ficha-tecnica',
      component: ImprintPage,
      meta: { title: 'Ficha Técnica – DataSP' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: { title: 'Página Não Encontrada – DataSP' }
    }
  ]
})

// Adiciona um guarda de navegação para atualizar o título da página
router.afterEach((to) => {
  // Garante que a rota tem um título antes de tentar defini-lo
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    // Define um título padrão caso a rota não tenha um
    document.title = 'DataSP – Mapa de Dados da Cidade';
  }
});

export default router
