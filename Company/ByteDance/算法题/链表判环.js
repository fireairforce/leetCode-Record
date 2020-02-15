var hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
