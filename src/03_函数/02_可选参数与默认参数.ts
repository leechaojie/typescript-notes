/**
 * 可选参数与默认参数
 */

(() => {
  const getFullName = function(firstName: string = '无双', lastName?: string): string {
    if (lastName) {
      return firstName + '_' + lastName
    } else {
      return firstName
    }
  }

  console.log(getFullName())

})()