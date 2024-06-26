import { defineStore } from "pinia";
import { baseRoutes } from "@/router/baseRoutes";

export const useUserStore = defineStore('user', {
  state: () => ({
    menuList: baseRoutes[0].children
  }),

  actions: {

  }
})
