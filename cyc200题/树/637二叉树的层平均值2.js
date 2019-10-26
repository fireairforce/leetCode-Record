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
        //   节点push进数组,这里push值的话，等下循环得不到值
        temp.push(cur[i].left);
      }
      if (cur[i].right) {
        //   这里把下层的节点都push进数组
        temp.push(cur[i].right);
      }
    }
    res.push(sum / cur.length);
    cur = temp;
  }
  return res;
};
