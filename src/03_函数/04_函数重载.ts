/**
 * 函数重载
 * 函数名字相同，函数的参数及个数不同
 */

(() => {
  // 函数重载声明
  function add(x: number, y: number): number
  function add(x: string, y: string): string

  // 函数声明
  function add(x: number | string, y: number | string): number | string {
    if (x as string && y as string) {
      return (x as string) + (y as string)
    } else if (x as number && y as number) {
      return (x as number) + (y as number)
    } else {
      return 'err'
    }
  }
  console.log(add('1', '2'));
  console.log(add(1, 2));
  // console.log(add('1', 2)); // 报错 没有与此调用匹配的重载。


})()