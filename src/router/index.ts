import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import { baseRoutes } from "@/router/baseRoutes";
import Layout from "@/layouts/index.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Test",
    component: Layout,
    meta: { title: "试一试" },
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        meta: {
          title: "首页~",
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "about",
        name: "About",
        meta: {
          title: "关于~",
        },
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
