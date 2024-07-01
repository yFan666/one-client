<script setup lang="ts">
import { useUserStore } from "@/store/uesr";
// import { computed } from "vue";
// import { useRouter } from "vue-router";

import { baseRoutes } from "@/router/baseRoutes";
import { onMounted, reactive } from "vue";


console.log(useUserStore())

</script>

<template>
  <v-navigation-drawer :width="260">
    <v-virtual-scroll height="100%" :item-height="200" :items="[1]">
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <!-- <v-list-item
        :title="item.meta.title"
        link
      ></v-list-item> -->
    </v-virtual-scroll>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
