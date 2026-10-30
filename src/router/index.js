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
        component: HomeView
    },
    {
        path: '/o-psihoterapiji',
        name: 'about_psychotherapy',
        component: AboutPsychotherapyView
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
