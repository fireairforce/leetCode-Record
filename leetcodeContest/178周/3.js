/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let sum = 0
  let path = []
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  const qx = (root) => {
    if (!root) {
      return
    }
    dfs(root, sum, [])
    qx(root.left)
    qx(root.right)
  }
  function dfs(root, expectNumber, stack) {
    stack.push(root.val)
    if (root.val === expectNumber) {
      path.push(stack.slice(0))
    } else {
      if (root.left !== null) {
        dfs(root.left, expectNumber - root.val, stack)
      }
      if (root.right !== null) {
        dfs(root.right, expectNumber - root.val, stack)
      }
    }
    stack.pop()
  }
  qx(root)
  for (let i = 0; i < path.length; i++) {
    if (path[i].join('') === arr.join('')) {
      return true
    }
  }
  return false
}
