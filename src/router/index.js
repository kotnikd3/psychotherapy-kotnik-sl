import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutPsychotherapyView from '@/views/AboutPsychotherapyView.vue'


export default function createAppRouter(history = createWebHistory(import.meta.env.BASE_URL)) {
  return createRouter({
  history,
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          englishPath: '/',
          title: 'Psihoterapija Denis Kotnik',
          description: 'Nudim psihodinamsko psihoterapijo v varnem prostoru, kjer lahko raziskujemo nezavedne vzorce in osebno stisko ter razvijamo globlje razumevanje sebe.',
        }
    },
    {
        path: '/o-psihoterapiji',
        name: 'about_psychotherapy',
        component: AboutPsychotherapyView,
        meta: {
          englishPath: '/about-psychotherapy',
          title: 'O psihoterapiji | Psihoterapija Denis Kotnik',
          description: 'Spoznajte psihodinamsko psihoterapijo: kako poteka, kako dolgo traja in kako pomaga pri raziskovanju nezavednih vzorcev, občutkov in odnosov.',
        }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on every navigation
    if (savedPosition) {
        return savedPosition; // This handles browser back/forward
    } else {
        return { top: 0 }; // Scroll to top of the page
    }
  }
  })
}
