function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  const res = []
  const qx = (root) => {
    if (!root) {
      return
    }
    qx(root.left)
    res.push(root.val)
    qx(root.right)
  }
  qx(root)
  return buildTree(res, 0, res.length - 1)
}

const buildTree = (res, l, r) => {
  if (l > r) {
    return null
  }
  let mid = Math.floor((l + r) / 2)
  let root = new TreeNode(res[mid])
  root.left = buildTree(root, l, mid - 1)
  root.right = buildTree(root, mid + 1, r)
  return root
}
