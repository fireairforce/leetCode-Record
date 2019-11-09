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
  let dum = new ListNode(-1);
  dum.next = head;
  let current = dum;
  while (current.next!=null && current.next.next!=null) {
    
    // 开两根指针
    let first = current.next;
    let second = current.next.next;

    // 更新双指针,和当前指针
    first.next = second.next;
    second.next = first;
    current.next = second;

    // 更新一下当前指针
    current = current.next.next;
  }
  return dum.next;
};
