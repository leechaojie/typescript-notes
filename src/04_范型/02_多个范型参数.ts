/**
 * T 多个范型参数
 */

(() => {

  function getMsg<K, V>(value: K, value2: V): [K, V] {
    return [value, value2]
  }
  const arr1 = getMsg<string, number>('无双', 123.456)
  console.log('arr1', arr1)
  console.log(arr1[0].split(''))
  console.log(arr1[1].toFixed(1))

})()