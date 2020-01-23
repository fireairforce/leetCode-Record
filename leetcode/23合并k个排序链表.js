function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//  把合并k的转换成合并两条的链表的做法去归并即可
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null;
  } else if (lists.length === 1) {
    return lists[0];
  } else if (lists.length === 2) {
    return mergeTwoList(lists[0], lists[1]);
  }
  const mid = lists.length >> 1;
  const l1 = [];
  for (let i = 0; i < mid; i++) {
    l1[i] = lists[i];
  }
  const l2 = [];
  for (let i = mid, j = 0; i < lists.length; i++, j++) {
    l2[j] = lists[i];
  }
  return mergeTwoList(mergeKLists(l1), mergeKLists(l2));
};

const mergeTwoList = (l1, l2) => {
  let newHead = new ListNode(-1);
  let cur = newHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
    } else {
      cur.next = l2;
      cur = cur.next;
      l2 = l2.next;
    }
  }
  if (!l1) {
    cur.next = l2;
  }
  if (!l2) {
    cur.next = l1;
  }
  return newHead.next;
};
