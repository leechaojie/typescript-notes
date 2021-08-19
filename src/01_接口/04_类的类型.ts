/**
 * 类 类型
 */

interface IFly {
  // 该方法没有任何实施（方法里什么都没有）
  fly(): any;
}

class Person implements IFly {
  fly() {
    console.log("实现了");
  }
}
const p = new Person();
p.fly();

// 定义一个接口
interface ISwim {
  swim(): any
}

// 一个类，可以实现多个接口
class Person2 implements IFly, ISwim {
  fly() {
    console.log('实现fly');

  }
  swim() {
    console.log('实现swim');

  }
}
const p2 = new Person2
p2.fly()
p2.swim()

// 接口可以继承其他多个接口
interface IMyFlyAndSwim extends IFly, ISwim { }

// 定义一个类，实现 IMyFlyAndSwim
class Person3 implements IMyFlyAndSwim {
  fly() { }
  swim() { }
}
const p3 = new Person3()