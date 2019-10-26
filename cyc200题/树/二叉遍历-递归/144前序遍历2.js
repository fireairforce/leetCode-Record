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
var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const result = [];
  zx(root, result);
  return result;
};

const zx = (root, arr) => {
  if (!root) {
    return;
  }
  arr.push(root.val);
  zx(root.left, arr);
  zx(root.right, arr);
};
