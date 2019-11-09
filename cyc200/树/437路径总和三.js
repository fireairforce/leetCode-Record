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
 * @return {number}
 */

//  使用两个递归
// 第一个递归先遍历每个节点
// 第二个递归以第一次递归的节点作为起始点来寻找满足条件的路劲
var pathSum = function(root, sum) {
  if (root === null) {
    return 0;
  }
  //   这里先把根节点的值找了
  let res = resSum(root, sum);
  //   然后利用这个函数去递归所有的点
  res += pathSum(root.left, sum);
  res += pathSum(root.right, sum);
  return res;
};
// 用于递归找以当前节点为根节点的路径和为sum的总和
let resSum = function(root, sum) {
  if (!root) {
    return 0;
  }
  let res = 0;
  //   这个终止条件代表路径已经到位了
  if (root.val === sum) {
    res++;
  }
  res += resSum(root.left, sum - root.val);
  res += resSum(root.right, sum - root.val);
  return res;
};
