/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 这就是个裸的大数相加
var addTwoNumbers = function(l1, l2) {
  if (l1 === null || l2 === null) {
    return null;
  }
  let pHead = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p = pHead;
  // 用来判断是否进位
  let flag = 0;
  while (l1 || l2) {
    let val1 = p1 ? p1.val : 0;
    let val2 = p2 ? p2.val : 0;
    let sum = val1 + val2 + flag;
    let newNode = new ListNode(sum % 10);
    flag = sum >= 10 ? 1 : 0;
    p.next = newNode;
    p = p.next;
    if (p1) {
      p1 = p1.next;
    }
    if (p2) {
      p2 = p2.next;
    }
  }
  if (flag) {
    p.next = new ListNode(flag);
  }
  return pHead.next;
};
