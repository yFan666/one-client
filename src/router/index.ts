import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;
