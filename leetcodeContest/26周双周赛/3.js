/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let res = 0
  const dfs = (root, path) => {
    if (!root) {
      return
    }
    let max = path.length === 0 ? -999999 : Math.max(...path)
    if (root.val > max) {
      res ++;
    }
    path.push(root.val)
    if (root.left) {
      dfs(root.left, path)
    }
    if (root.right) {
      dfs(root.right, path)
    }
    path.pop()
  }
  dfs(root, [])
  return res;
}