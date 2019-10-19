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
var swapPairs = function(head) {
  let newHead = new ListNode(-1);
  newHead.next = head;
  let pre = newHead;
  while(pre.next !== null && pre.next.next !== null) {
      let p1 = pre.next,p2 = pre.next.next;
      let next = p2.next;
      p1.next = next;
      p2.next = p1;
      pre.next = p2;
      pre = p1;
  }
  return newHead.next;
};
