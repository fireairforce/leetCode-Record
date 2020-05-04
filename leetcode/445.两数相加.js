function ListNode(val) {
  this.val = val
  this.next = null
}

var addTwoNumbers = function (l1, l2) {
  let stack1 = l1
  let stack2 = l2
  let arr1 = []
  let arr2 = []
  while (stack1) {
    arr1.push(stack1.val)
    stack1 = stack1.next
  }
  while (stack2) {
    arr2.push(stack2.val)
    stack2 = stack2.next
  }
  let len1 = arr1.length
  let len2 = arr2.length
  let record = 0
  let data = []
  while (len1 >= 0 || len2 >= 0 || record) {
    let num1 = (arr1[len1] || 0) - 0
    let num2 = (arr2[len2] || 0) - 0
    let total = num1 + num2 + record
    data.push(total % 10)
    record = Math.floor(total / 10)
    len1--
    len2--
  }
  // 结果已经存在data里面两
  let result = {}
  let cur = result
  while (data.length > 1) {
    cur.next = {
      val: data.pop(),
      next: null,
    }
    cur = cur.next
  }
  return result.next
}
