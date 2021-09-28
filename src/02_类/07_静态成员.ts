/**
 * 静态成员
 * 在类中通过 static 修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为:静态成员
 * 态成员在使用的时候是通过类名.的这种语法来调用的
 */

(() => {
  // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改操作
  class Person {
    // static name: string // 类中有内置的 name 属性，报错
    static firstName: string
    // 姓名的属性，外部可以访问修改
    constructor(name: string) {
      // 此时this是实例对象, name1是静态属性，不能通过实例对象直接调用静态属性来使用
      // this.firstName = name
    }

    static sayHi(): void {
      console.log('hello', Person.name)

    }

  }

  Person.firstName = '大蛇'
  console.log('===', Person.firstName)
  Person.sayHi()
})()