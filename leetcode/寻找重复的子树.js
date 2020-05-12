/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let res = []
  let map = new Map()
  const dfs = (root) => {
    let str = ''
    if (!root) {
      return '#'
    }
    str = String(root.val + ' ' + dfs(root.left) + ' ' + dfs(root.right))
    if (map.get(str) === 1) {
      res.push(root)
    }
    map.set(str, map.has(str) ? map.has(str) + 1 : 1)
    return str
  }
  dfs(root)
  return res
}
