import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('../views/HomePage.vue');
const Login = () => import('../views/auth/Login.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
