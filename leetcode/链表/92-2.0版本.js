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
   var current = head;
   var stack = [];
   var count = 1;
   while(current) {
       if(m<=count && count <=n) {
           stack.push(current.val);
       }
       count ++ ;
       current = current.next;
   }
   current = head;
   count = 1;
   while(current) {
       if(m<=count && count <= n) {
           current.val = stack.pop();
       }
       count ++;
       current = current.next;
   }
   return head;
};
