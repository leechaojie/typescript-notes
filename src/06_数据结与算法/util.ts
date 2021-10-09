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
