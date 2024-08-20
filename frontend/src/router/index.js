import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Report from '../views/ReportView.vue'
import Faq from '../views/FaqView.vue'
import Book from '../views/BookView.vue'

const routes = [
  {
    path: '/',
    name: 'Поиск конференц-зала',
    component: HomeView,
    meta: {layout: 'auth'}
  },
  {
    path: '/report',
    name: 'Отчеты',
    component: Report,
    meta: {layout: 'auth'}
  },
  {
    path: '/book',
    name: 'Забронировать',
    component: Book,
    meta: {layout: 'auth'}
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: Faq,
    meta: {layout: 'auth'}
  },
  {
    path: '/login',
    name: 'Вход',
    component: Login,
    meta: {layout: 'main'}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
