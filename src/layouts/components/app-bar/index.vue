<script setup lang="ts">
import { useConfigStore } from '@/store/config';
const configStore = useConfigStore()

const onClick = () => {
  configStore.toggleTheme()
}
</script>

<template>
  <v-app-bar
    class="px-3"
    title="App bar"
  >
    <v-spacer></v-spacer>
    <v-btn
      :prepend-icon="configStore.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      text="Toggle Theme"
      slim
      @click="onClick"
    ></v-btn>
  </v-app-bar>
</template>

<style scoped>

</style>
