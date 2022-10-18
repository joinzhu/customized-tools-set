<template>
  <div v-for="v in items" :key="v.name">
    <el-sub-menu v-if="v.children && v.children.length > 0" :index="v.name">
      <template #title>{{ v.meta.menuTitle }}</template>
      <template v-for="j in v.children" :key="j.name">
        <GolbalSubMenu v-if="j.children" :items="j.children"></GolbalSubMenu>
        <el-menu-item v-else :index="j.name">{{
          j.meta.menuTitle
        }}</el-menu-item>
      </template>

      <!-- <Submenu v-if="props.name"></Submenu> -->
    </el-sub-menu>
    <el-menu-item v-else :index="v.name">{{ v.meta.menuTitle }}</el-menu-item>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GolbalSubMenu'
}
</script>

<script lang="ts" setup name="Submenu">
interface Props {
  items: any[]
}
const props = withDefaults(defineProps<Props>(), { items: () => [] })
</script>

<style scoped></style>
