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
var postorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const result = [];
  hx(root, result);
};

const hx = (node, arr) => {
  if (!node) {
    return;
  }
  hx(node.left,arr);
  hx(node.right,arr);
  arr.push(node.val);
};
