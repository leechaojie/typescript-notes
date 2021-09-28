/**
 * 存取器
 * 可以有效的控制对象中成员的访问，通过 getters 和 setters 控制
 */

(() => {
  // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
  class Person {
    firstName: string
    lastName: string
    // 姓名的属性，外部可以访问修改
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }
    // 读取器
    public get fullName(): string {
      return this.firstName + '_' + this.lastName
    }

    // 设置器
    public set fullName(v : string) {
      const names = v.split('_')
      this.firstName = names[0]
      this.lastName = names[1]
    }


    say() {
      return this.firstName + '_' + this.lastName
    }

  }
  const person: Person = new Person('无双', '大蛇')
  console.log('---', person)
  console.log('===', person.fullName)
  person.fullName = '诸葛_孔明'
  console.log('=-=', person.fullName)
})()