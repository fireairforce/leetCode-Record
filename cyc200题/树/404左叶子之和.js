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
// 递归所有节点
// 递归这些节点的左节点
// 找到左叶子
var sumOfLeftLeaves = function(root) {
  if (!root) {
    return 0;
  }
  if (isLeftLeave(root.left)) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

const isLeftLeave = (root) => {
  if(root===null) {
    return false;
  }
  if(root.left === null && root.right === null) {
    return true;
  }
};
