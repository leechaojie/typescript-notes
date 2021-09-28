/**
 * 修饰符
 * 类中成员的修饰符
 * 类中成员的可访问性
 * public：类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
 * private： 私有，外部无法访问，子类无法访问
 * protected: 受保护，类中可以访问，外部无法访问。子类可以访问
 */

(() => {
  class Person {
    public name: string
    public constructor(name: string) {
      this.name = name
    }
    public eat() {
      console.log('eat', this.name)
    }
  }

  class Student extends Person {
    constructor(name: string) {
      super(name)
    }
    play() {
      console.log('子类', this.name)

    }
  }

  const per = new Person('大蛇')
  console.log('---', per.name)
  per.eat()

  const st = new Student('小蛇')
  console.log('===', st.name)

  st.play()
})()