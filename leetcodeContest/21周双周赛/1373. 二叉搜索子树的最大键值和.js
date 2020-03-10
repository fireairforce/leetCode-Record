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
var maxSumBST = function(root) {
  let sum = 0
  const postOrder = (root) => {
    if (!root) {
      return 0
    }
    let left = postOrder(root.left)
    let right = postOrder(root.right)
    if (left === Number.MIN_SAFE_INTEGER || right === Number.MIN_SAFE_INTEGER) {
      return Number.MIN_SAFE_INTEGER
    }
    if (
      (!root.left || root.val > root.left.val) &&
      (!root.right || root.val < root.right.val)
    ) {
      sum = Math.max(sum, left + right + root.val)
      return left + right + root.val
    }
    return Number.MIN_SAFE_INTEGER
  }
  postOrder(root)
  return sum
}
