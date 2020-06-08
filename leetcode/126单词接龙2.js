var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList) // 将单词表存入Set，Set的查找是O(1)
  wordSet.add(beginWord) // 这个其实要不要都行
  if (!wordSet.has(endWord)) return [] // 单词表中没有endWord，无法变到endWord

  const levelMap = new Map() // 存放图中的单词对应的level
  const wordMap = new Map() // 存放图中的单词是从哪些单词变来的
  const queue = [beginWord] // BFS需要维护一个队列，初始放入level0的beginWord
  const visited = new Set() // 存放访问过的节点，避免重复

  let finished = false // true代表存在变化到endWord的路径，false表示不存在

  let level = 0 // 路径的深度，初始化0

  levelMap.set(beginWord, 0) // beginWord的level为0
  visited.add(beginWord) // 起点是beginWord，后面不能再出现它，存入visited

  while (queue.length) {
    // 队列空了，代表所有邻接节点遍历完了
    let levelSize = queue.length // 当前level的单词个数
    level++ // 一次遍历一层的单词，level+1
    for (let i = 0; i < levelSize; i++) {
      // 当前层的单词逐个出列，同时逐个考察
      const word = queue.shift() // 当前出列的单词
      for (let i = 0; i < word.length; i++) {
        // 遍历当前单词的所有字符
        for (let code = 97; code <= 122; code++) {
          // 将当前字符替换为26个字符，生成新单词逐个试

          const newWord =
            word.slice(0, i) + String.fromCharCode(code) + word.slice(i + 1)
          if (!wordSet.has(newWord)) continue // 如果不是单词表中的单词，continue

          if (wordMap.has(newWord)) {
            // 如果已经存在于wordMap，有自己的数组
            wordMap.get(newWord).push(word) // 对应的数组推入它的“父单词”，即出列的单词
          } else {
            // 新单词不存在于wordMap，初始化一个数组
            wordMap.set(newWord, [word]) // 并放入“父单词”
          }

          if (visited.has(newWord)) continue // 这个新单词已经存在于路径中，不重复考察
          if (newWord === endWord) finished = true // 遇到了终点词，说明存在抵达终点词的路径

          levelMap.set(newWord, level) // 记录这个单词所处于的level
          queue.push(newWord) // 这个新单词是下一层的，让下一层的单词入列
          visited.add(newWord) // 这个新单词访问过了，记录一下
        }
      }
    }
  }
  if (!finished) return [] // 无法从到达终点词，返回一个[]
  const res = []
  dfs(res, [], beginWord, endWord, wordMap, levelMap) // dfs的入口
  return res
}
function dfs(res, path, beginWord, word, wordMap, levelMap) {
  if (word === beginWord) {
    // dfs的出口，如果dfs传入的word，已经和起始词相同
    res.push([beginWord, ...path]) // 将当前路径推入res数组，别忘了加上起始词
    return // path在dfs中是引用传递，要深拷贝一下再推入res
  }
  path.unshift(word) // 将当前单词加入到path数组的开头
  if (wordMap.get(word)) {
    // 当前单词有对应的“父单词”们
    for (let parent of wordMap.get(word)) {
      // 遍历当前单词对应的“父单词”们
      if (levelMap.get(parent) + 1 === levelMap.get(word)) {
        // 找出其中满足层次要求的
        dfs(res, path, beginWord, parent, wordMap, levelMap) // 即找出满足要求的“父单词” 递归dfs
      }
    }
  }
  path.shift() // 回溯，撤销选择，将path数组开头的单词弹出
}
