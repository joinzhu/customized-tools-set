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

<script lang="ts">
export default {
  name: 'ValidateView'
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
import MapArea from '../../components/Global/MapArea.vue'
import RuleCreator from './component/RuleCreator.vue'
import ruleCreatorDoc from './doc/ruleCreatorDoc.md'

const fnList = [
  {
    name: 'ruleCreator',
    doc: ruleCreatorDoc
  }
]

const fnNameList = computed(() => {
  return fnList.map(v => v.name)
})
</script>

<style lang="scss" scoped></style>
