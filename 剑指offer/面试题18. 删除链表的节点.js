function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let tempHead = new ListNode(-1)
  let pre = tempHead
  tempHead.next = head
  while (pre.next) {
    if (pre.next.val === val) {
      pre.next = pre.next.next
      break
    }
    pre = pre.next
  }
  return tempHead.next
}
