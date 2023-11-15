import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Game1View from '../views/Game1View.vue'
import Game2View from '../views/Game2View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game/1',
    name: 'game1',
    component: Game1View,
  },
  {
    path: '/game/2',
    name: 'game2',
    component: Game2View,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
