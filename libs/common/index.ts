/**
 * @description: try catch
 * @param {function} 需要执行逻辑的函数
 * @param {any} 执行函数的参数
 * @return: array: array[0]: 错误 array[1]: 结果
 */
export async function tryCatch(): Promise<[Error | null, any]> {
  const args = Array.from(arguments)
  const asyncFunc = args.shift()
  try {
    const res = await asyncFunc(...args)
    return [null, res]
  } catch (e) {
    return [e as Error, null]
  }
}
