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
var sumNumbers = function(root) {
  if (!root) {
    return 0
  }
  const dfs = (sum, root) => {
    if (!root) {
      return 0
    } else if (!root.left && !root.right) {
      return 10 * sum + root.val
    }
    return (
      dfs(10 * sum + root.val, root.left) + dfs(10 * sum + root.val, root.right)
    )
  }
  return dfs(0, root)
}
