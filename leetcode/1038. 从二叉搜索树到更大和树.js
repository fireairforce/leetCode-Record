function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  const arr = []
  const qx = (root) => {
    if (!root) {
      return
    }
    qx(root.left)
    arr.push(root.val)
    qx(root.right)
  }
  qx(root)
  let sum = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] += sum
    sum = arr[i]
  }
  let index = 0
  const dfs2 = (root, arr) => {
    if (!root) {
      return
    }
    dfs2(root.left, arr)
    root.val = arr[index++]
    dfs2(root.right, arr)
  }
  dfs2(root,arr);
  return root;
}
