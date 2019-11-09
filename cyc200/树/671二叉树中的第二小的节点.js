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

//  转化为求左右子树的最小值
var findSecondMinimumValue = function(root) {
  return getLower(root, root.val);
};

let getLower = (root, val) => {
  if (!root) {
    return -1;
  }
  if (root.val > val) {
    return root.val;
  }
  let l = getLower(root.left, val);
  let r = getLower(root.right, val);
  if (l > val && r > val) {
    return Math.min(l, r);
  }
  return Math.max(l, r);
};
