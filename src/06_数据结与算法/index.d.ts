/**
 * 队列/栈 元素类型
 */
interface IItems<T> {
  [key: number]: T
}

interface IHotPotato<T> {
  eliminated: Array,
  winner: T | undefined
}

interface IEqualsFunction<T> {
  (a: T, b: T): boolean
}