<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menuRoutes = ref<any[]>([]);

onMounted(() => {
  initMenuRoutes()
});

const initMenuRoutes = () => {
  const arr = router.options.routes;
  console.log(arr)
  // 表头 - children不为0
  arr.forEach((item: any) => {
    const menuArr: any[] = []
    if (item.children.length > 0) {
      // 含子路由
      menuArr.push({ type: "subheader", ...item })

      item.children.forEach((child: any) => {
        menuArr.push({...child})
      })
    } else {
      // 无子路由
      menuArr.push({ type: "subheader", ...item })
      menuArr.push({...item})
    }
    menuRoutes.value.push(menuArr)
  })

  console.log("menuRoutes.value", menuRoutes.value)

}

</script>

<template>
  <v-navigation-drawer :width="222" v-model="">
    <v-list-item title="Youli~" subtitle="one-client" height="64" />
    <v-divider />
    <v-card
      class="mx-auto"
      max-width="300"
      v-for="(menu, menuIdx) in menuRoutes"
      :key="menuIdx"
    >
      <v-list
        v-for="(item, idx) in menu"
        :key="idx"
      >
        <v-list-item
          :type="item?.type ?? ''"
          :title="item.meta.title"
          :value="idx"
        />
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<style scoped></style>
