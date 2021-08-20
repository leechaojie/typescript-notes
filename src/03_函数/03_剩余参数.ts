/**
 * 剩余参数
 */

(() => {
  // 剩余参数放到 args 的数组中
  const showMsg = function (str: string = '无双', ...args: string[]): void {
    console.log(str);
    console.log(args);
    
  }

  console.log(showMsg('1', '2', '3', '4'));

})()