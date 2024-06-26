<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()

console.log(route)
console.log(router)
</script>

<template>
  <v-navigation-drawer :width="260">
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
