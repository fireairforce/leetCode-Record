/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  let result = [];
  zx(root, result);
  return result;
};

const zx = (root, arr) => {
  if (!root) {
    return;
  }
  zx(root.left, arr);
  arr.push(root.val);
  zx(root.right, arr);
};
