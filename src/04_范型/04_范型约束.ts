/**
 * T 范型约束
 * 直接对一个泛型参数取 length 属性，会报错，因为这个泛型根本就不知道它有这个属性
 */

(() => {

  // function getLen<T>(x: T): number {
  // 	return x.length  // 报错 类型“T”上不存在属性“length”。
  // }


	// 定义一个接口约束
	interface ILength {
		length: number
	}

	function getLength<T extends ILength>(x: T): number {
	  return x.length
	}

	console.log(getLength<string>('123456'))

})()
