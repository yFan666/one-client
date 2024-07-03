<script setup lang="ts">
import navigationDrawer from "@/layouts/components/navigation-drawer/index.vue"
import AppBar from '@/layouts/components/app-bar/index.vue'
import MainContainer from '@/layouts/components/main-container/index.vue'
</script>

<template>
  <app-bar />
  <div class="main">
    <navigation-drawer />
    <main-container />
  </div>
</template>

<style lang="scss" scoped>

</style>
