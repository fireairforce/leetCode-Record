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
  if (!head || !head.next) {
    return null;
  }
  let p1 = head,
    p2 = head;
  let hasCryCle = false;
  while(p2 && p2.next) {
      p1 = p1.next;
      p2 = p2.next.next;
      if(p1===p2) {
          hasCryCle = true;
          break;
      }
  }
  if(hasCryCle) {
      let q = head;
      while(p !== q) {
          p = p.next;
          q = q.next;
      }
      return q;
  } else {
    return null;
  }
};
