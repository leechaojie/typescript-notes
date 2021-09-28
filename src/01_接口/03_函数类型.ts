/**
 * 函数类型
 * 接口可以描述函数类型(参数的类型与返回的类型)
 */

// 定义一个接口，用来作为某个函数的类型使用
interface ISearchFunc {
    // 定义一个调用签名
    (source: string, substring: string): boolean
}

// 定义一个函数，该类型就是上面的接口
const searchString: ISearchFunc = (source, substring) => {
  // a.search(b) 字符串a查找有没有b，有则返回 索引，没有则返回 -1，也可以用 includes, 有返回true，没有返回false
  return source.search(substring) > -1
}

// 调用函数
const st = searchString('hello world', 'world')
console.log(st)
