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
  function dfs(root, expectNumber) {
    stack.push(root.val)
    if (
      root.val === expectNumber &&
      root.left === null &&
      root.right === null
    ) {
      path.push(stack.slice(0))
    } else {
      if (root.left !== null) {
        dfs(root.left, expectNumber - root.val)
      }
      if (root.right !== null) {
        dfs(root.right, expectNumber - root.val)
      }
    }
    stack.pop()
  }
  dfs(root, sum)
  return path
}
