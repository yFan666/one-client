import { defineStore } from "pinia";

export const useConfigStore = defineStore('config', {
  state: () => ({
    theme: 'light'
  }),
  actions: {
    // 这里不能使用箭头函数，因为箭头函数没有this指向
    toggleTheme () {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
});
