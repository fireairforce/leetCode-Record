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
let max = 0;
var diameterOfBinaryTree = function(root) {
  let result = 0;
  depth(root);
  return result;
  function depth(root) {
    if (!root) {
      return 0;
    }
    let left = root.left ? depth(root.left) + 1 : 0;
    let right = root.right ? depth(root.right) + 1 : 0;
    result = Math.max(left + right, result);
    return Math.max(left, right);
  }
};
