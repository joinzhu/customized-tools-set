<template>
  <div>
    <el-form :model="query" label-width="120px" :rules="formRules" inline>
      <el-form-item label="校验规则">
        <el-select
          multiple
          placeholder="请选择校验规则（多选）"
          clearable
          v-model="query.rules"
        >
          <el-option
            v-for="v in opts"
            :key="v.value"
            :label="v.label"
            :value="v.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="检验的值" prop="value">
        <el-input v-model="query.value" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleValidate">校验</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RuleCreator'
}
</script>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { ruleCreator, ZHKEY_UNIT } from '@libs/index'

let query = reactive({
  value: '',
  rules: []
})

let opts: Array<any> = []

for (const key in ZHKEY_UNIT) {
  opts.push({ label: key, value: key })
}

const formRules = computed(() => {
  if (query.rules.length < 1) return {}
  return {
    value: [
      {
        validator: ruleCreator({ rules: query.rules }),
        trigger: 'change'
      }
    ]
  }
})

const handleValidate = () => {
  console.log(ruleCreator({ rules: query.rules }))
}
</script>

<style lang="scss" scoped></style>
