/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/*
这么写内存会不够
*/
var rotateRight = function(head, k) {
  if (!head) {
    return head;
  }
  let len = 1;
  let temp = head;
  while (temp.next) {
    temp = temp.next;
    len++;
  }
  // 翻转的那个节点   
  let rotateSize = len - (k % len);
  let p1 = head,
    p2 = head,
    newHead = p1,
    newTail = p2;

  for (let i = 0; i < rotateSize; i++) {
      p2 = p2.next;
      newHead = newHead.next;
  }
  newHead.next = null;
  while(newTail.next) {
      newTail = newTail.next;
  }
  newTail.next = p1;
  return p1;
};
