/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root) {
    return null
  }
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  if (!root.left && !root.right && root.val === 0) {
    return null
  }
  return root
}
