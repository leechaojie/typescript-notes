/**
 * 示例化对象，实现面向对象的思想
 */

// 立即执行函数是为了防止多个相同的class名重复，报错
(() => {
	class Person {
		// 定义属性
		_name: string
		_age: number
		_gender: string
		constructor(
			name: string = 'lee', //给一个默认值
			age: number = 16,
			gender: string = 'IT'
		) {
			// 定义对象中属性的数据
			this._name = name
			this._age = age
			this._gender = gender
		}
		// 定义实例方法
		seyHi(str: string) {
			const hi = `hello, 我是${this._name},我今年${this._age},我的工作是${this._gender}, ${str}`
			console.log(hi);
		}
	}

	const person = new Person()
	person.seyHi('ok')
})()