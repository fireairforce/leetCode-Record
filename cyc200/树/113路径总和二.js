/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) {
    return false;
  }
  if (root.left === null && root.right === null && root.val === sum) {
    return true;
  }
  return (
    pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val)
  );
};
