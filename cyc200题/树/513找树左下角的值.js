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
var findBottomLeftValue = function(root) {
  let res = [root];
  let nums = [];
  while (res.length) {
    let temp = [];
    nums.length = 0;
    // 就是做个bfs，然后每次从左侧的节点，这样后来取数组的值的时候就会拿到最左的值
    for (let i = 0; i < res.length; i++) {
      nums.push(res[i].val);
      if(res[i].left) {
          temp.push(res[i].left);
      }
      if(res[i].right) {
          temp.push(res[i].right);
      }
    }
    res = temp;
  }
  return nums;
};
