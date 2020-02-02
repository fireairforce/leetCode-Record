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

const qx = (root, res) => {
  if (!root) {
    return;
  }
  res.push(root.val);
  qx(root.left, res);
  qx(root.right, res);
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

const countRoot = (root, result) => {
  let stack = [root];
  while (stack.length) {
    let temp = [];
    for (let i = 0; i < stack.length; i++) {
      stack[i].left &&
        temp.push(stack[i].left) &&
        result.push(treeSum(stack[i].left));
      stack[i].right &&
        temp.push(stack[i].right) &&
        result.push(treeSum(stack[i].right));
    }
    stack = temp;
  }
  return result;
};

var maxProduct = function(root) {
  let mod = 1e9 + 7;
  let res = [];
  let begin = root;
  qx(begin, res);
  let count = 0;
  for (let i = 0; i < res.length; i++) {
    count += res[i];
  }
  let result = [];
  countRoot(root, result);
  let max = 0;
  for (let i = 0; i < result.length; i++) {
    if (max < (count - result[i]) * result[i]) {
      max = (count - result[i]) * result[i];
    }
  }
  return max % mod;
};
