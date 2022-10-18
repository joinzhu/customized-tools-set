<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    @select="handleSelect"
  >
    <Submenu :items="menuItems"></Submenu>
  </el-menu>
</template>

<script lang="ts">
export default {
  name: 'GolbalMenu'
}
</script>

<script setup lang="ts">
import Submenu from './Submenu.vue'
import { menuItems } from '../../router/items'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const defaultActive = ref<string>('')
const { name } = useRoute() as { name: string }
const router = useRouter()

onMounted(() => {
  defaultActive.value = name
})

const handleSelect = (index: string) => {
  router.push({ name: index })
}
</script>

<style scoped></style>
