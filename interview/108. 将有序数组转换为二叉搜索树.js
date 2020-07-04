function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const solve = (arr) => {
  if (arr.length === 0) {
    return;
  }
  let root = new TreeNode(null)
  let len = arr.length
  buildTree(root, arr, 0, len - 1)
  return root;
}

const buildTree = (root, nums, start, end) => {
  let mid = Math.floor((end + start) / 2)
  root.val = nums[mid]
  if (start <= mid - 1) {
    root.left = new TreeNode(null)
    buildTree(root.left, nums, start, mid - 1)
  } else {
    root.right = new TreeNode(null)
    buildTree(root.right, nums, mid + 1, end)
  }
}