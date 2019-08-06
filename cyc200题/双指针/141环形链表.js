/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let l1 = head,
    l2 = head.next;
    // 用两根快慢指针，如果他们能够相遇则证明有环
  while (l1 == null && l2 !== null && l2.next !== null) {
     if(l1===l2){
       return true;
     }
     l1 = l1.next;
     l2 = l2.next.next;
  }
};