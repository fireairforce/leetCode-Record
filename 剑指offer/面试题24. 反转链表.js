function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) {
    return head
  }
  let newHead = null
  while (head) {
    let temp = head.next
    head.next = newHead
    newHead = head
    head = temp
  }
  return newHead
}
