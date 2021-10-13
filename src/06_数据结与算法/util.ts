/**
 * 工具函数
 */

/**
 * 比较两个 JavaScript 对象或值是否相等
 * @param a
 * @param b
 * @returns
 */
export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b
}

/**
 * 将传入的元素转化为字符串
 * @param item 传入的元素
 * @returns
 */
export function defaultToString(item: any): string {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
