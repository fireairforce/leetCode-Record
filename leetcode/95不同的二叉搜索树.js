function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return []
  }
  const generateTree = (start, end) => {
    if (start > end) {
      return [null]
    }
    let res = []
    for (let i = start; i <= end; i++) {
      let ls = generateTree(start, i - 1)
      let rs = generateTree(i + 1, end)
      for (let l of ls) {
        for (let r of rs) {
          node = new TreeNode(i)
          node.left = l
          node.right = r
          res.push(node)
        }
      }
      return res
    }
  }
  return generateTree(1, n)
}
