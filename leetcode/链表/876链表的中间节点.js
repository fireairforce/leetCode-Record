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
var middleNode = function(head) {
    if(!head&&!head.next){
        return null;
    }
  let fast = head,
    slow = head,
    p = head;
  while (fast && fast.next) {
      fast = fast.next.next;
      p = slow;
      slow = slow.next;
  }
  return p.next;
};
