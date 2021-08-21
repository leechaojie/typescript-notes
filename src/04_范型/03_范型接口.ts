/**
 * T 范型接口
 * 在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型
 */

(() => {

	interface IBaseCRUD<T> {
		data: Array<T>
		add: (t: T) => T // => 表示函数返回类型
		getUserId: (id: number) => T
	}

	// 定义一个用户信息的类
	class User {
		id?: number
		name: string
		age: number
		constructor(name: string, age: number) {
			this.name = name
			this.age = age
		}
	}

	// 定义一个类，针对用户信息进行增删改查
	// CRUD---->create, Read , Update , Delete
	class UserCRUD implements IBaseCRUD<User> {
		// 保存多个User类型的用户信息对象
		public data: Array<User> = []
		// 存储用户信息对象
		add(user: User): User {
			// 产生id
			user.id = Date.now() + Math.random()
			// 用户信息对象添加到数组中
			this.data.push(user)
			return user
		}
		// 根据id查询指定的用户信息对象
		getUserId(id: number): User {
			const user = this.data.find(item => item.id === id)
			if (user) {
				return user
			} else {
				return {
					id: NaN,
					name: 'undefined',
					age: NaN,
				}
			}
		}
	}

	const userCRUD: UserCRUD = new UserCRUD()

	// 调用添加数据的方法
	userCRUD.add(new User('无双', 12))
	userCRUD.add(new User('大蛇', 13))
	userCRUD.add(new User('天下', 14))
	userCRUD.add(new User('无贼', 15))

	console.log(userCRUD.data);

	console.log(userCRUD.getUserId(13));



})()


