<template>
  <v-responsive class="border rounded container">
    <v-app :theme="configStore.theme">
      <layouts />
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import Layouts from '@/layouts/index.vue'
import { useCounterStore } from '@/store';
import { useConfigStore } from '@/store/config';
import {onMounted} from "vue";

const counterStore = useCounterStore();
const configStore = useConfigStore();

onMounted(() => {
  counterStore.increment()
})
</script>

<style>
.container {
  height: 100vh;
}
</style>
