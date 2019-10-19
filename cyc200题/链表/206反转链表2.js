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
var reverseList = function(head) {
  if (head === null || head.next == null) {
    return head;
  }
  let { next } = head;
  let newHead = reverseList(next);
  next.next = head;
  head.next = null;
  return newHead;
};
