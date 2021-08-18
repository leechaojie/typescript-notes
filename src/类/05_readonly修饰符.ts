/**
 * readonly 修饰符
 * 构造函数中对只读的属性成员进行修改
 */

(() => {
  class Person {
    readonly name: string = 'super'
    constructor(name: string) {
      this.name = name
    }
    sayHi() {
      // 类中的普通方法也是无法修改类中的成员属性
      // this.name = 'err'
      console.log('父', this.name);
    }
  }

  const person: Person = new Person('大蛇')
  console.log('---', person);
  console.log('===', person.name);

  // 无法修改name， 因为是只读的
  // person.name = '无双'
  // console.log('-=-', person.name);
})()