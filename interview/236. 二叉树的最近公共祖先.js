function TreeNode(val) {
  this.val = val;
  this.left = this.right = null
}

const solve = (root, p, q) => {
  if (!root || root === p || root === q) {
    return root;
  }
  let left = solve(root.left, p, q)
  let right = solve(root.right, p, q)
  if (!left) {
    return right
  }
  if (!right) {
    return left;
  }
  return root;
}