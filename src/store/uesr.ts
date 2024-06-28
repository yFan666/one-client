import { defineStore } from "pinia";
import { baseRoutes } from "@/router/baseRoutes";
import { MenuItem } from "@/types/Layout";

const convertRoutesToMenuItems = ( routes: any ): MenuItem[] => {
  return routes.map((route: any) => ({
    name: route.name,
    path: route.path,
    component: route.component,
    meta: route.meta,
    children: route.children? convertRoutesToMenuItems(route.children) : null
  }))
}

export const useUserStore = defineStore('user', {
  state: () => ({
    menuList: [] as MenuItem[],
  }),

  actions: {
    loadingMenu () {
      this.menuList = convertRoutesToMenuItems(baseRoutes)
    }
  }
})
