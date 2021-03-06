/**
 * 内置对象
 */

(() => {

  /* 1. ECMAScript 的内置对象 */
  const b: Boolean = new Boolean(1)
  const n: Number = new Number(true)
  const s: String = new String('abc')
  const d: Date = new Date()
  const r: RegExp = /^1/
  const e: Error = new Error('error message')
  // b = true
  // console.log(b);
  // let bb: boolean = new Boolean(2)  // error


  /* 2. BOM 和 DOM 的内置对象 */
  // const div: HTMLElement = document.getElementById('test')
  const allDiv: NodeList = document.querySelectorAll('div')
  document.addEventListener('click', (event: MouseEvent) => {
    console.dir(event.target)
  })

  // console.log('div', div);
  console.log('allDiv', 'allDiv')

  const fragment: DocumentFragment = document.createDocumentFragment()

})()