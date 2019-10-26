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

//  使用bfs去对二叉树进行一个遍历
var averageOfLevels = function(root) {
  let res = [];
  let cur = [root];
  while (cur.length) {
    let sum = 0;
    let temp = [];
    for (let i = 0; i < cur.length; i++) {
      sum += cur[i].val;
      if (cur[i].left) {
        temp.push(cur[i].left);
      }
      if (cur[i].right) {
        temp.push(cur[i].right);
      }
    }
    // sum 这里取到的是一个层级下面的cur总值
    res.push(sum / cur.length);
    // temp用来存储下一层次的节点
    cur = temp;
  }
  //   res 是个数组
  return res;
};
