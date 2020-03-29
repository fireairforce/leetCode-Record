function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) {
    return '[null]'
  }
  let res = []
  let queue = [root]
  while (queue.length !== 0) {
    let item = queue.shift()
    if (item) {
      res.push(item.val)
      queue.push(item.left)
      queue.push(item.right)
    } else {
      res.push('null')
    }
  }
  return JSON.stringify(res)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = JSON.parse(data)
  if (data.length === 0 || data[0] === null) {
    return null
  }
  let root = new TreeNode(parseInt(data.shift()))
  let queue = [root]
  while (queue.length !== 0) {
    let node = queue.shift()
    // 左边
    if (data.length <= 0) {
      break
    }
    let left = data.shift()
    if (left !== 'null') {
      node.left = new TreeNode(parseInt(left))
      queue.push(node.left)
    } else {
      node.left = null
    }

    // 右边
    if (data.length <= 0) {
      break
    }
    let right = data.shift()
    if (right !== 'null') {
      node.right = new TreeNode(parseInt(right))
      queue.push(node.right)
    } else {
      node.right = null
    }
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
