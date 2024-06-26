<script setup lang="ts">
import { useUserStore } from "@/store/uesr";
import { useRouter } from "vue-router";

const router = useRouter()

const goLink = item => {
  router.push({
    path: item.path,
  });
}

console.log(useUserStore())

</script>

<template>
  <v-navigation-drawer :width="260">
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item
      v-for="item in useUserStore().menuList"
      :title="item?.meta.title"
      link
      @click="goLink(item)"
    ></v-list-item>

  </v-navigation-drawer>
</template>

<style scoped>

</style>
