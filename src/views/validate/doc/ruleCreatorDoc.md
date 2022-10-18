```
<template>
  <el-form :model="query" :rules="rules">
    <el-form-item prop="name">
      <el-input type="text" v-model="query.name">
    </el-form-item>
  </el-form>
</template>
<script>
import { ruleCreator } from '@wise/tools'
export default {
  data(){
    return {
      query: {
        name: ''
      },
      rules: {
        name: {
          validator: ruleCreator(['小写字母','大写字母','数字'])
        }
      }
    }
  }
}
</script>


```
