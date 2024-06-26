import { RouteRecordRaw } from "vue-router"
import Layout from "@/layouts/index.vue"
export const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: 'layout',
    component: Layout,
    meta:{
      title: '首页',
      hidden: false,
      icon: 'xxx'
    },
    redirect: '/user/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'xxx'
        }
      },
      {
        path: 'about',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: '测试',
          hidden: false,
          icon: 'xxx'
        }
      },
    ]
  },
]
