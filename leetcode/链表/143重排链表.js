/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  var stack = [];
  let p = head;
  while (p) {
    stack.push(p.val);
    p = p.next;
  }
  p = head;
  let len = 1;
  let odd = 0,
    even = 0;
  while (p) {
    if (len % 2 === 0) {
      p.val = stack[stack.length - odd - 1];
      odd++;
    } else {
      p.val = stack[even];
      even++;
    }
    len++;
    p = p.next;
  }
  return head;
};
