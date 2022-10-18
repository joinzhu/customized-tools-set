<template>
  <div class="flex">
    <div class="w-full">
      <ul>
        <li v-for="(fn, i) in fnList" :key="i" class="plant">
          <a :name="fn.name" class="title">{{ fn.name }}</a>
          <template v-if="fn.name === 'ruleCreator'">
            <RuleCreator></RuleCreator>
          </template>
          <component :is="fn.doc"></component>
        </li>
      </ul>
    </div>

    <MapArea :list="fnNameList"></MapArea>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MapArea from '../../components/Global/MapArea.vue'
import Doc from './doc/doc.md'
const fnList = [
  {
    name: 'tryCatch',
    doc: Doc
  }
]
const fnNameList = computed(() => {
  return fnList.map(v => v.name)
})
</script>

<style scoped></style>
