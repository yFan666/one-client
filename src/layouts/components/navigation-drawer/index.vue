<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menuRoutes = ref();

onMounted(() => {
  menuRoutes.value = router.options.routes;
  console.log(menuRoutes.value)
});

const open = ref(['Users'])

const admins = ref([
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
])

const cruds = ref([
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete'],
])

</script>

<template>
  <v-navigation-drawer :width="300">
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-card
      class="mx-auto"
      width="300"
    >
      <v-list v-model:opened="open">
        <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

        <v-list-group
          v-for="item in menuRoutes"
          :key="item.path"
          :value="item.name"
        >
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              :title="item.meta.title"
            />
            <v-list-item
              v-for="child in item.children"
              :key="child.path"
              :title="child.meta.title"
              :value="child.name"
            />
          </template>

          <v-list-group value="Admin">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Admin"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              :prepend-icon="icon"
              :title="title"
              :value="title"
            ></v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>

  </v-navigation-drawer>
</template>

<style scoped></style>
