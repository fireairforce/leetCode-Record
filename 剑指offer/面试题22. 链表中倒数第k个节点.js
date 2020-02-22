/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let len = 0
  let lenHead = head
  while (lenHead) {
    lenHead = lenHead.next
    len++
  }
  k = k % len
  if (k === 0) {
    return head
  }
  let preHead = head
  let realHead = head
  for (let i = 0; i < k; i++) {
    preHead = preHead.next
  }
  while (preHead) {
    realHead = realHead.next
    preHead = preHead.next
  }
  return realHead
}
