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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // 递归到终点都没碰到下个条件直接回false
  if (!root) {
    return false;
  }
//   这个判定条件是走到了终点
  if (root.left === null && root.right === null && root.val === sum) {
    return true;
  }
  return (
    //   这个是把所有的节点都遍历一遍
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
