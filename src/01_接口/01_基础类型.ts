/**
 * 基础类型
 */

// Boolean
let flag: boolean = true

// Number
let a1: number = 10 // 十进制
let a2: number = 0b1010 // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0x12 // 十六进制

// String
let str: string = 'this is a string'

// Undefined Null
let u: undefined = undefined
let n: null = null

// Array
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

// 元组类型
let arr3: [string, number, boolean] = ['1', 123, true]

// enum 枚举 
// 枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从日开始的，依次的递增加1
enum Color {
    red,
    green,
    blue = 100
}
let color1: Color = Color.red
let color2: Color = Color.green
let color3: Color = Color.blue
console.log(color1); // 0
console.log(color2); // 1
console.log(color3); // 100
console.log(Color[1]);

// any 可以存储任何类型
let ast: any = '任何类型'
ast = 12

let anArr: any[] = [12, '任何类型', true]
anArr[2] = 100 // 把 boolean 改变成了 number

// void 函数没有返回值
function showMsg(): void {
    console.log('函数没有返回值，使用void类型');
}
console.log(showMsg()); // undefined 没有返回值，所以是undefined

// Object
function getObj(obj: object): object {
    console.log(obj);
    return {
        name: 'lee',
        age: 18
    }
}
const resultObj = getObj({
    message: 'hello ts'
})
console.log('返回值', resultObj);

// 联合类型

// 需求1 定义一个函数得到一个数字或字符串值的字符串形式值
function getString(str: number | string): string {
    console.log('参数', str);
    return str.toString()
}
console.log('联合类型返回值', getString(123));
console.log('联合类型返回值', getString('123'));

// 需求2 定义一个函数得到一个数字或字符串值的长度
// <> 或者 as
function getLen(str: number | string): number {
    // return str.toString().length // 不合理，str 本身就是 string 类型时，没有必要调用 toString()
    if ((<string>str).length) { // 类型断言。告诉编译器什么类型  使用<>
        // return (<string>str).length
        return (str as string).length // 也可以使用 as 语法
    } else {
        return str.toString().length
    }
}
console.log(getLen(12345));
console.log(getLen('012345'));

// 类型推断
let txt = 100 // 没有明确指定 txt 是什么类型，编译器自动推断为 number 类型

