/**
 * 实例化对象，实现面向对象的思想
 */

// 立即执行函数是为了防止多个相同的class名重复，报错
(() => {
	interface IPerson {
		name: string,
		age: number,
		gender: string
	}
	class Person {
		_name: string
		_age: number
		_gender: string
		constructor({
			name,
			age,
			gender
		}: IPerson) {
			this._name = name
			this._age = age
			this._gender = gender
		}
		// 定义实例方法
		seyHi(str: string) {
			const hi = `hello, 我是${this._name},我今年${this._age},我的性别是${this._gender}, ${str}`
			console.log(hi);
		}
	}

	class Student extends Person {
		constructor({
			name,
			age,
			gender
		}: IPerson) {
			// 调用父类构造函数
			super({
				name,
				age,
				gender
			})
		}
		seyHi(str: string) {
			// 调用父类中的方法
			super.seyHi(str)
		}
	}
	const person = new Person({
		name: 'lee',
		age: 16,
		gender: '男'
	})
	person.seyHi('ok')

	const student = new Student({
		name: 'lucy',
		age: 16,
		gender: '女'
	})
	student.seyHi('OK')
})()