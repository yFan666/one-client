import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { baseRoutes } from "@/router/baseRoutes";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta:{ menuName: "首页" }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
    meta:{ menuName: "关于" }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes
})


export default router;
