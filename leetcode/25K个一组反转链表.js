function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let len = 0
  let node = head
  while (node) {
    node = node.next
    len++
  }
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  let curr = head
  let next
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
