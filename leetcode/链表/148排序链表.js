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

 /*
 * 还没写出来
 */
//  使用归并排序来对链表元素排序
// 1.先使用慢指针找到中点
// 2.递归调用mergeSort
// 3.合并两个链表
var sortList = function(head) {
  return mergeSort(head);
};

const mergeSort = (node) => {
  if (!node || !node.next) {
    return node;
  }
  let fast = node,
    slow = node,
    p = node;
  while (fast && fast.next) {
    fast = fast.next.next;
    p = slow;
    slow = slow.next;
  }
  //   把后面的节点全部断开
  p.next = null;
  //   这里slow就是中间的节点了
  let p1 = mergeSort(node);
  let p2 = mergeSort(slow);
  return merge(p1, p2);
};

const merge = (l1, l2) => {
  //  递归的终点情况
  if (!l1) return l2;
  if (!l2) return l1;
  //   分情况的递归
  if (l1.val <= l2.val) {
    l1.next = mergeSort(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeSort(l2.next, l1);
    return l2;
  }
};
