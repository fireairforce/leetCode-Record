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
var longestZigZag = function(root) {
  let max = 0
  const dfs = (root, dir, len) => {
    if (!root) {
      return
    }
    if (max < len) {
      max = len
    }
    if (dir) {
      dfs(root.left, 0, len + 1)
      dfs(root.right, 1, 1)
    } else {
      dfs(root.left, 0, 1)
      dfs(root.right, 1, len + 1)
    }
  }
  //   左为0，右为1
  dfs(root.left, 0, 1)
  dfs(root.right, 1, 1)
  return max
}
