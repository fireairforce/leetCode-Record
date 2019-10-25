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

var insertionSortList = function(head) {
  let p = new ListNode(0),
    pre;
  p.next = head;
  while (head && head.next) {
    //   如果是正常顺序就一直向后遍历
    if (head.val <= head.next.val) {
      head = head.next;
      continue;
    }
    // head主要作用就是找不规则节点的上一个节点
    // 如果当前节点值大于下个节点,就从头去遍历那个下个节点的位置
    pre = p;
    // 比较的就是这里
    while (pre.next.val < head.next.val) {
      pre = pre.next;
    }
    // 得到pre大概就是取到head的位置，然后
    let temp = head.next;
    head.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }
  return p.next;
};
