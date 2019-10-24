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
  let temp = new ListNode(0);
  temp.next = head;
  let pre = temp;
  for (let i = 1; i < m; i++) {
    pre = pre.next;
  }
  // head此时就是当前节点
  head = pre.next;
  for (let i = m; i < n; i++) {
    // next作为当前节点的下一个节点
    let nex = head.next;
    // 其实这里也相当于使用头插法搞了一波
    head.next = nex.next;
    nex.next = pre.next;
    pre.next = nex;
  }
  return temp.next;
};
