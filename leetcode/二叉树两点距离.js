function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const findLatestAncestor = (root, p, q) => {
  if (!root || root === p || root === q) {
    return root
  }
  const left = findLatestAncestor(root.left, p, q)
  const right = findLatestAncestor(root.right, p, q)
  if (!left) {
    return right
  }
  if (!right) {
    return left
  }
  return root
}

const main = (root, a, b) => {
  let newRoot = findLatestAncestor(root, a, b)
  let start = 0
  let end = 0
  const dfs = (newRoot, depth) => {
    if (!newRoot) {
      return
    }
    if (newRoot === a) {
      start = depth
    }
    if (newRoot === b) {
      end = depth
    }
    dfs(newRoot.left, depth + 1)
    dfs(newRoot.left, depth + 1)
  }
  dfs(newRoot, 0)
  return Math.abs(start - end)
}
