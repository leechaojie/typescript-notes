/**
 * 助手类
 */


/**
 * 添加到链表中的项
 * @param element 加入链表元素的值
 * @param next 指向链表中下一个元素的指针
 */
export class Node<T> {
  constructor(public element: T, public next?: Node<T>) {}
}