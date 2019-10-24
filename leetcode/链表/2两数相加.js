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
var addTwoNumbers = function(l1, l2) {
  let num1 = [],
    num2 = [];
  let len1 = 0,
    len2 = 0;
  let p1 = l1,
    p2 = l2;
  while (p1) {
    num1.push(p1.val);
    p1 = p1.next;
    len1++;
  }
  while (p2) {
    num2.push(p2.val);
    p2 = p2.next;
    len2++;
  }
  p1 = l1;
  p2 = l2;
  let p3 = new ListNode(0);
  if (len1 > len2) {
    p3.next = len1;
    let sum = 0;
    for (let i = 0; i < len2; i++) {
       
    }
  } else {
    p3.next = len2;
  }
};
