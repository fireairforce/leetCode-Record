/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let p1 = head;
  let p2 = head;
  if (head === null || head.next === null) {
    return null;
  }
  let sum = 0;
  while (head) {
    if (head.next !== null && sum < n) {
       sum++;
    }
    if (head.next !== null && sum === n) {
      p2 = p2.next;
    }
    head = head.next;
    p1 = p1.next;
  }
  p2.next = p2.next.next;
  return p2;
};
