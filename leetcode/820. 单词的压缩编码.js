/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  function TreeNode(val) {
    this.isEnd = false
    this.children = {}
    this.val = val
  }
  class Trie {
    constructor() {
      this.tree = new TreeNode(null)
    }
    // 单词倒序插入进去，因为小的单词如果被包含在其他长的单词中，那么后缀一定相同
    insert(word) {
      let tree = this.tree
      let len = word.length,
        index = len - 1
      while (index >= 0) {
        let curr = word.charCodeAt(index)
        if (tree.children[curr] === undefined) {
          tree.children[curr] = new TreeNode(curr)
        }
        tree = tree.children[curr]
        index--
      }
      this.isEnd = true
    }

    // 查找单词是否在字典树里面
    search(word) {
      let tree = this.tree
      let len = word.length,
        index = len - 1,
        flag = true
      while (index >= 0) {
        let curr = word.charCodeAt(index)
        if (tree.children[curr] === undefined) {
          flag = false
          break
        }
        tree = tree.children[curr]
        index--
      }
      return flag
    }
  }
  words = [...new Set(words)]
  words.sort((a, b) => b.length - a.length)
  let wordTree = new Trie(),
    long = 0
  for (let i = 0; i < words.length; i++) {
    let c = words[i]
    if (!wordTree.search(c)) {
      wordTree.insert(c)
      long += c.length + 1
    }
  }
  return long
}

// console.log(minimumLengthEncoding(["time", "me", "bell"]))
