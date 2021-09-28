/**
 * T 范型
 * 在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
 */

(() => {

  // function getArr(value: number, count: number): number[] {
  // 	// 根据数据与数量，产生一个数据
  // 	const arr: number[] = []
  // 	for (let i = 0; i < count; i++) {
  // 		arr.push(value)
  // 	}
  // 	return arr
  // }

  // const arr1 = getArr(100, 3)
  // console.log(arr1);

  // 定义一个函数，同上，只不过传入的是字符串类型
  // const arr2 = getArr(100, '3')


  function getArr<T>(value: T, count: number): T[] {
    // 根据数据与数量，产生一个数据
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr = getArr<number>(200, 3)
  console.log('arr', arr)
  console.log(arr[0].toFixed(1)) // toFixed 编辑器就有了语法提示


  const arr2 = getArr<string>('200', 3)
  console.log('arr2', arr2)
  console.log('join', arr2.join(','))

})()