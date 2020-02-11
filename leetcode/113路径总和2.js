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
  let res = []
  if (!root) {
    return res
  }
  const dfs = (root, sum, temp) => {
    if (!root) {
      return
    }
    temp.push(root.val)
    if (!root.left && !root.right) {
      if (sum === root.val) {
        res.push([...temp])
      }
      return
    }
    if (root.left) {
      dfs(root.left, sum - root.val, temp)
      temp.pop()
    }
    if (root.right) {
      dfs(root.right, sum - root.val, temp)
      temp.pop()
    }
  }
  dfs(root, sum, [])
  return res
}
