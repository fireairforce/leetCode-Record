function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || k === 1) {
    return head;
  }
  let temp = new ListNode(0);
  temp.next = head;
  let start = temp;
  let end = head;
  let count = 0;
  while (!end) {
    count++;
    if (count % k === 0) {
      start = reverseBetween(start, end.next);
      end = start.next;
    } else {
      end = end.next;
    }
  }
  return temp.next;
};

const reverseBetween = (start, end) => {
  let cur = start.next;
  let prev = start;
  let first = cur;
  while (cur !== end) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  start.next = prev;
  first.next = cur;
  return first;
};
