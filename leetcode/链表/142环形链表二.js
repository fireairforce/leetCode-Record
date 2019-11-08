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
var detectCycle = function(head) {
  if (!head) {
    return head;
  }
  let fast = head,
    slow = head;
  let hasCycle = false;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      hasCycle = true;
      break;
    }
  }
  let p = head;
  if (hasCycle) {
    // 这里找的是入环的前一个节点,所以从环和起点同时开始走，他们会在入环前碰到
    while (fast !== p) {
      fast = fast.next;
      p = p.next;
    }
    return p;
  } else {
    return null;
  }
};
