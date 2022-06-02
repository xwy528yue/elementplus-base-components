import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../components/layouts/BaseContainer.vue'),
    children: [
      { 
        path: '/home',
        name: 'home',
        component: HomeView
      },
      { 
        path: '/form',
        name: 'form',
        component: () => import('../views/FormView.vue')
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
