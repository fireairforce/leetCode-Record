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
let path = 0;

var longestUnivaluePath = function(root) {
  dfs(root);
  return path;
};

const dfs = (root) => {
  if (!root) {
    return 0;
  }
  let left = dfs(root.left);
  let right = dfs(root.right);
  let leftPath =
    root.left !== null && root.left.val === root.val ? left + 1 : 0;
  let rightPath =
    root.right !== null && root.right.val === root.val ? right + 1 : 0;
  path = Math.max(path, leftPath + rightPath);
  return Math.max(leftPath, rightPath);
};
