/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!A || !B) {
    return false
  }
  var hasSubTree = function(A, B) {
    if (!B) {
      return true
    }
    if (!A) {
      return false
    }
    if (A.val !== B.val) {
      return false
    }
    return hasSubTree(A.left, B.left) && hasSubTree(A.right, B.right)
  }
  return (
    hasSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  )
}
