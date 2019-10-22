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
var oddEvenList = function(head) {
  if (!head) {
    return head;
  }
  let p1 = head,p2 = head.next,p3 = p2;
  while(p2&&p2.next) {
      p1.next = p1.next.next;
      p2.next = p2.next.next;
      p1 = p1.next;
      p2 = p2.next;
  }
  //  p1是奇数链表的尾节点,p3是偶数链表的头部节点   
  p1.next = p3;
  return head;
};
