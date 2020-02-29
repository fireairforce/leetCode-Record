/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  // write code here
  if (root === null) {
    return []
  }
  let path = []
  let stack = []
  function cal(root, expectNumber) {
    stack.push(root.val)
    if (
      root.val === expectNumber &&
      root.left === null &&
      root.right === null
    ) {
      path.push(stack.slice(0))
    } else {
      if (root.left !== null) {
        cal(root.left, expectNumber - root.val)
      }
      if (root.right !== null) {
        cal(root.right, expectNumber - root.val)
      }
    }
    stack.pop()
  }
  cal(root, sum)
  return path
}
