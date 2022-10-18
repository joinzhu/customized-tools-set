<template>
  <div class="mapArea">
    <ul>
      <li v-for="(v, i) in props.list" :key="i">
        <a :href="`#${v}`">{{ v }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MapArea'
}
</script>
<script setup lang="ts">
const props = defineProps<{ list: string[] }>()
</script>

<style lang="scss" scoped>
.mapArea {
  width: 150px;
  min-width: 150px;
  min-height: 100vh;
  border-left: 3px solid #000;
  background-color: #abd1c6;
  li {
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #475d5b;
    a {
      display: block;
    }

    &:hover {
      background-color: #00473e;
      color: #f2f7f5;
    }
  }
}
</style>
