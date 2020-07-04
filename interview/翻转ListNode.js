function ListNode(val) {
  this.val = val;
  this.next = null
}

const reverse = (head) => {
  if (head.next || head) {
    return head;
  }
  let newHead;
  while (head) {
    let temp = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;
  }
  return newHead;
}