/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  let p = head;
  let stack = [];
  while (p) {
    stack.push(p.val);
    p = p.next;
  }
  stack.sort((a, b) => a - b);
  p = head;
  let i = 0;
  while(p) {
      p.val = stack[i++]
      p = p.next;
  }
  return head;
};
