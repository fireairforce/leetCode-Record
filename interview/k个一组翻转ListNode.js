function ListNode(val) {
  this.val = val;
  this.next = null;
}

const solve = (head, k) => {
  let len = 0;
  let newHead = head;
  // 先把链表长度拉出来
  while (newHead) {
    newHead = newHead.next;
    len++;
  }
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy;
  let curr = head;
  let next;
  for (let i = 0; i < Math.floor(len / k); i++) {
    for (let j = 0; j < k - 1; j++) {
      next = curr.next
      curr.next = next.next
      next.next = prev.next
      prev.next = next
    }
    prev = curr
    curr = prev.next
  }
  return dummy.next
}
