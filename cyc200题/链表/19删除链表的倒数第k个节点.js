/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
  搞个双指针去扫即可
*/
var removeNthFromEnd = function(head, n) {
  let p1 = head;
  //    先让一根指针先走n
  for(let i = 0 ;i < n;i++) {
      p1 = p1.next;
  }
  //   如果这根指针走到头了，那么头结点GG了
  if(p1 === null) {
      return head.next;
  } 
  let p2 = head;
  //   然后放另一根指针开始走
  while(p1.next) {
      p1 = p1.next;
      p2 = p2.next;
  }
  p2.next = p2.next.next;
  return head;
};
