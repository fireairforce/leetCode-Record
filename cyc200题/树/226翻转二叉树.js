/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return root;
  }
  let left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return root; 
};
