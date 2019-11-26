function FindKthToTail(head, k) {
  if (!head) {
    return head;
  }
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  return k > arr.length ? null : arr[arr.length - k];
}
module.exports = {
  FindKthToTail: FindKthToTail,
};
