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
   let newHead;
   if(head === null) {
       return null;
   }
   while(head) {
       //  设置一个中间变量来记录head主链表的运行轨迹   
       let temp = head.next;
       //  newHead这里来用于每一步的反转   
       head.next = newHead;
       newHead = head;
       //  往下面走下去   
       head = temp;
   }
   return newHead;
};