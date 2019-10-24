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
var reverseList = function(head) {
  if (head === null) {
    return head;
  }
   let stack = [];
   let p1 = head;
   while(p1) {
       stack.push(p1.val);
       p1 = p1.next;
   }
   p1 = head;
   while(p1) {
       p1.val = stack.pop();
       p1 = p1.next;
   }
   return head;
};
