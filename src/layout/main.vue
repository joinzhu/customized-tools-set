<script lang="ts">
export default {
  name: 'LayoutMain'
}
</script>
<script setup lang="ts">
import Menu from '../components/Global/Menu.vue'
</script>

<template>
  <div class="flex">
    <div class="menuBox">
      <Menu></Menu>
    </div>
    <div class="contentBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menuBox {
  width: 230px;
  min-width: 230px;
  min-height: 100vh;
  border-right: 3px solid #000;
  background-color: #00473e;
}
.contentBox {
  width: 100%;
  min-height: 100vh;
  background-color: #abd1c6;
}
</style>
