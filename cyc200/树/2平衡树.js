/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

let result = true;
var isBalanced = function(root) {
  maxDepth(root);
  return result;
};

let maxDepth = (root) => {
  if(root === null) {
      return 0;
  }
  let l = maxDepth(root.left);
  let r = maxDepth(root.right);
  if(Math.abs(l-r) > 1) {
      result = false;
  } 
  return 1 + Math.max(l,r);
}