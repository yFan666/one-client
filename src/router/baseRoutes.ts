import { RouteRecordRaw } from "vue-router"
import Layout from "@/layouts/index.vue"
export const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '大首页',
      hidden: false,
      icon: 'xxx'
    },
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
          icon: 'xx'
        }
      },
    ]
  },
  {
    path: '/404',
    name: '404',
    redirect: '/home',
    meta: {
      title: '大首页',
      hidden: false,
      icon: 'xxx'
    }
  }
]
