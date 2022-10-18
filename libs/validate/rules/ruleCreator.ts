import unitRulesJson from './unit'
import { ruleCreatorQuery, IJson } from './types'
// 如 EN_NUMBER: '\\u0030-\\u0039'
const UNIT_REG: IJson = {}
// 如 EN_NUMBER: '半角数字'
const UNIT_DESCRIBE: IJson = {}
// 如 数字： EN_NUMBER
export const ZHKEY_UNIT: IJson = {}

for (const key in unitRulesJson) {
  UNIT_REG[key] = unitRulesJson[key].reg as string
  UNIT_DESCRIBE[key] = unitRulesJson[key].describe
  ZHKEY_UNIT[unitRulesJson[key].zhkey] = key
}

const defaultQuery: ruleCreatorQuery = {
  label: '',
  rules: []
}

export const ruleCreator = (query: ruleCreatorQuery) => {
  const { label, rules } = Object.assign(defaultQuery, query)
  if (!Array.isArray(rules) || !rules.length) throw new Error('参数 rules 不对')
  let isRequire = false
  let regText = ''
  const errorMsg: string[] = []

  rules.forEach(v => {
    if (v === '必填') {
      return (isRequire = true)
    }
    regText += UNIT_REG[ZHKEY_UNIT[v]]
    errorMsg.push(UNIT_DESCRIBE[ZHKEY_UNIT[v]])
  })
  const reg = new RegExp(`^[${regText}]*$`)

  return (rule, value: string, callback): any => {
    if (!value) {
      return callback(isRequire ? new Error(`${label}必填`) : undefined)
    }
    if (!reg.test(value)) {
      return callback(new Error(`请输入${errorMsg}`))
    }
    callback()
  }
}
