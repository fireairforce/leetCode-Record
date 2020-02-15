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
var sortList = function(head) {
  if (!head) {
    return head;
  }
  let result = [];
  let p = head;
  let newHead = head;
  while (p) {
    result.push(p.val);
    p = p.next;
  }
  result.sort((a, b) => a - b);
  for (let i = 0; i < result.length; i++) {
    newHead.val = result[i];
    newHead = newHead.next;
  }
  return head;
};
