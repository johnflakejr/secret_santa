import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    component: () => import('../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router