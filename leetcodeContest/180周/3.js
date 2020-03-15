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
  let index = Math.floor(res.length / 2)
  let newTree = new TreeNode(res[Math.floor(res.length / 2)])
  return newTree
}

const buildTree = (root, res, index) => {
  if (!root) {
    return
  }
  root.left = new TreeNode(res[index - 1])
  root.right = new TreeNode(res[index + 1])
  buildTree(root)
}
