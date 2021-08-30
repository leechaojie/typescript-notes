/**
 * 函数
 */

(() => {
	// --------js---------
	// // 函数声明，命名函数
	// function add(x, y) {
	//     return x + y
	// }


	// // 函数表达式，匿名函数
	// const add2 = function (x, y) {
	//     return x + y
	// }

	// --------ts---------
	// 函数声明，命名函数
	function add(x: string, y: string): string {
		return x + y
	}
	const result: string = add('1', '2')


	// 函数表达式，匿名函数
	const add2 = function (x: number, y: number): number {
		return x + y
	}
	const result2: number = add2(1, 2)

	// 函数的完整写法
	// add3 函数名
	// (x: number, y: number) => number 当前函数的类型
	// function (x: number, y: number): number { return x + y } 符合函数类型的函数
	const add3: (x: number, y: number) => number = function (x: number, y: number): number {
		return x + y
	}
	const result3: number = add3(1, 2)
	console.log(result3);

})()