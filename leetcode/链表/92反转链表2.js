/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let p = head;
  for (let i = 1; i < m; i++) {
    p = p.next;
  }
  //   此时p到了m这个节点
  let p1 = p.next;
  for (let i = m; i < n; i++) {
    let temp = p1.next;
    p1.next = temp.next;
    temp.next = p.next;
    p.next = temp;
  }
  return head;
};
