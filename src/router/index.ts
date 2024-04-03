import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Login.vue'
import HomeView from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    { path: '/', name: 'home', component: HomeView }
  ]
})

export default router
