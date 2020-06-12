/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxSum = -Infinity
  let dfs = function (node) {
    if (node == null) return 0
    let leftVal = Math.max(dfs(node.left), 0)
    let rightVal = Math.max(dfs(node.right), 0)
    let newPath = node.val + leftVal + rightVal
    maxSum = Math.max(maxSum, newPath)
    return node.val + Math.max(leftVal, rightVal)
  }
  dfs(root)
  return maxSum
}
