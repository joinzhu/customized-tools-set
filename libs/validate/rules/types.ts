export interface ruleCreatorQuery {
  label?: string // 字段名
  rules: Array<string> // 允许的规则
}

export interface IJson {
  [key: string]: string
}
