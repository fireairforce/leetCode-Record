/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
//  只保留在L~R之间的节点
var trimBST = function(root, L, R) {
  if (!root) {
    return root;
  }
  //   返回修剪过的右子树
  if (root.val > R) {
    return trimBST(root.left, L, R);
  }
  //   返回修剪过的左子树
  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  //   处理正常的树
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};
