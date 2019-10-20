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
/**
 * 我佛了，这题用js拿不到l1链表节点的值?????
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1,
    p2 = l2;
  let sum1 = [],
    sum2 = [];
  while (p1) {
    sum1.unshift(p1.val);
    p1 = p1.next;
  }
  while (p2) {
    sum2.unshift(p2.val);
    p2 = p2.next;
  }
  let len1 = sum1.length,
    len2 = sum2.length;
  let len = Math.max(len1, len2);
  for (let i = 0; i <= len; i++) {
    sum1[i] += sum2[i];
    if (sum1[i] > 9) {
      sum1[i] -= 10;
      sum1[i + 1]++;
    }
  }
  if (sum1[len] !== 0) {
    len++;
  }
  let newHead = new ListNode(-1);
  for (let i = len - 1; i >= 0; i--) {
     newHead.val = sum1[i];
     newHead = newHead.next;
  }
  return newHead;
};
