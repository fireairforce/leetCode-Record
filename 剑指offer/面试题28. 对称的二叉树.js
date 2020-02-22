/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true
  }
  var isSameTree = function(left, right) {
    if (!left && !right) {
      return true
    } else if (!left || !right) {
      return false
    } else if (left.val !== right.val) {
      return false
    } else
      return (
        isSameTree(left.left, right.right) && isSameTree(left.right, right.left)
      )
  }
  return isSameTree(root.left, root.right)
}
