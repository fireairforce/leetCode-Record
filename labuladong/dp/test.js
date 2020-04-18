// 利用最优子结构求二叉树的最值
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

const maxVal = (root) => {
  if(!root) {
    return -1;
  }
  let left = maxVal(root.left)
  let right = maxVal(root.right)
  return Math.max(root.val, left, right)
}

