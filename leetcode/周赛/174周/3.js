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

const hx = (root, res, sum, hash) => {
  if (!root) {
    return;
  }
  hx(root.left, res, sum, hash);
  hx(root.right, res, sum, hash);
  res.push(root.val);
  sum += root.val;
  hash.push(sum);
};

let treeSum = (root) => {
  let stack = [root];
  let sum = 0;
  while (stack.length) {
    let temp = [];
    for (let i = 0; i < stack.length; i++) {
      sum += stack[i].val;
      stack[i].left && temp.push(stack[i].left);
      stack[i].right && temp.push(stack[i].right);
    }
    stack = temp;
  }
  return sum;
};

var maxProduct = function(root) {
  let mod = 1e9 + 7;
  let res = [];
  let hash = [];
  hx(root, res, 0, hash);
  let count = 0;
  for (let i = 0; i < res.length; i++) {
    count += res[i];
  }
  console.log(hash);
};
