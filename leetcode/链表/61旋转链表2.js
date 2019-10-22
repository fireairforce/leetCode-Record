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
  //  指向尾节点   
  let cur = temp;
  //  形成一个循环链表   
  temp.next = head;
  //  指向头节点  
  temp = head;
  for (let i = 0; i < rotateSize; i++) {
    cur = cur.next;
    temp = temp.next;
  }
  // 这里的cur就在节点上面了，把循环链表在这里断开   
  cur.next = null;
  return temp;
};
