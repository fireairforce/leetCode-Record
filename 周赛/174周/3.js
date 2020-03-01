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

const hx = (root, res) => {
  if (!root) {
    return;
  }
  hx(root.left, res);
  hx(root.right, res);
  res.push(root.val);
};

const dfs = (root, res, count) => {
  if (!root) {
    return 0;
  }
  let x = dfs(root.left, res, count) + dfs(root.right, res, count) + root.val;
  res.push(x * (count - x));
  return x;
};

var maxProduct = function(root) {
  let mod = 1e9 + 7;
  let res = [];
  hx(root, res);
  let count = 0;
  for (let i = 0; i < res.length; i++) {
    count += res[i];
  }
  res = [];
  dfs(root, res, count);
  return res.sort((a, b) => b - a)[0] % mod;
};
