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
var rob = function(root) {
  if (!root) {
    return 0;
  }
  let a = root.val,
    b;
  a += root.left === null ? 0 : rob(root.left.left) + rob(root.left.right);
  a += root.right === null ? 0 : rob(root.right.left) + rob(root.right.right);
  b = rob(root.left) + rob(root.right);
  return Math.max(a, b);
};