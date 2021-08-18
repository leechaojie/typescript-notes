/**
 * 接口
 * 接口是对象的状态(属性)和行为(方法)的抽象(描述)
 * 一种类型 一种规范 一种约束 一种能力
 */

/**
 * 创建 人 这个对象，对人的属性进行约束
 * id 是number类型, 必须有, 只读的
 * name 是string类型, 必须有
 * age 是number类型, 必须有
 * sex 是string类型, 可以没有
 */
interface IPerson {
    readonly id: number, // readonly 只读
    name: string,
    age: number,
    sex?: string // ？可有可无
}
const person: IPerson = {
    id: 1,
    name: 'lee',
    age: 16,
    sex: '男'
}

console.log(person);


