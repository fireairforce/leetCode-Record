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
  let p1 = l1,
    p2 = l2;
  while (p1) {
    num1.push(p1.val);
    p1 = p1.next;
  }
  while (p2) {
    num2.push(p2.val);
    p2 = p2.next;
  }
  p1 = l1;
  p2 = l2;
  let p3 = new ListNode(0);
  

};
