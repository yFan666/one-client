<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store';
import {onMounted} from "vue";

const counterStore = useCounterStore();

onMounted(() => {
  counterStore.increment()
})
</script>
