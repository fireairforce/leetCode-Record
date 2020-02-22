function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = new ListNode(0)
  let head = result
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }
    head = head.next
  }
  if (l1) {
    head.next = l1
  } else {
    head.next = l2
  }
  return result.next
}
