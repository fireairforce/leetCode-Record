function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
  const arr = []
  const zx = (root) => {
    if (!root) {
      return
    }
    zx(root.left)
    arr.push(root.val)
    zx(root.right)
  }
  zx(root)
  if (arr.length === 0) {
    return root
  }
  let index = 0
  let node = new TreeNode(arr[index++])
  let res = node
  while (index <= arr.length - 1) {
    res.right = new TreeNode(arr[index++])
    res.left = null
    res = res.right
  }
  return node
}
