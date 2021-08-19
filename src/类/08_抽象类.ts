/**
 * abstract 抽象类
 * 抽象类中包含抽象方法（抽象方法一般没有任何具体内容的实现），也可以包含实例方法
 * 态成员在使用的时候是通过类名.的这种语法来调用的
 * 目的：为子类（派生类）服务
 */

(() => {
  // 抽象类，可以有抽象方法与实例方法
  abstract class Animal {
    abstract name: string = '无双' // 抽象属性子类无法使用
    // abstract eat() {} // 方法“eat”不能具有实现，因为它标记为抽象
    
    // 实例方法
    sayHi(): void {
      console.log('hello');
      
    }

  }

  // 定义一个子类（派生类）
  class Dog extends Animal {
    name: string = '大蛇'
    eat() {
      console.log('Dog---');
      
    }
  }

  // 实例化抽象类对象
  // const animal = new Animal() // 无法创建抽象类的实例

  const dog = new Dog()
  dog.eat()
  dog.sayHi()
  console.log(dog.name);
})()