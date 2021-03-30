//Vanessa Gutierrez 03/30/2021
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import MiniItems from './views/MiniItems.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Account from './views/Account.vue'
import Cart from './views/Cart.vue'
import NotFound from './views/NotFound.vue'

import { isAuthenticated } from './helpers/useAuth'

const routes = [
  { path: '/', component: Home },
  { path: '/miniitems', component: MiniItems },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/account',
    component: Account,
    beforeEnter: (to, from) => {
      if (isAuthenticated.value) return true
      return '/login'
    },
  },
  {
    path: '/cart',
    component: Cart,
    beforeEnter: (to, from) => {
      if (isAuthenticated.value) return true
      return '/login'
    },
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
