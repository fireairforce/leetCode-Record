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
  dfs(root, result);
  return result;
};

let dfs = (node, arr) => {
  if (node === null) {
    return;
  }
  let { left, right, val } = node;
  arr.push(val);
  dfs(left, arr);
  dfs(right, arr);
};
