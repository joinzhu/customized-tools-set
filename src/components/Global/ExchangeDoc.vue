<template>
  <div class="exchangeDoc" @click="handleClick">
    <span class="txt">UI</span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ExchangeDoc'
}
</script>
<script setup lang="ts">
const handleClick = (e: MouseEvent) => {
  location.href = 'https://joinzhu.github.io/customized-element-ui/WBase'
}
</script>

<style lang="scss" scoped>
.exchangeDoc {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffa8ba;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .txt {
    color: #00473e;
    font-size: 30px;
    font-weight: 600;
  }
}
</style>
