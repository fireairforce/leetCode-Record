/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const compareStr = (s1, s2) => {
    s1 = s1.split('')
    s2 = s2.split('')
    let len = s1.length
    let count = 0
    for (let i = 0; i < len; i++) {
      if (s1[i] !== s2[i]) {
        count++
      }
    }
    return count === 1
  }
  let queue = []
  if (!wordList.includes(endWord)) {
    return 0
  }
  let step = 0
  let visited = new Map()
  queue.push(beginWord)
  visited.set(beginWord, 1)
  let flag = false
  while (queue.length) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let item = queue.shift()
      if (item === endWord) {
        flag = true
        break;
      }
      for (let word of wordList) {
        if (!visited.has(word) && compareStr(word, item)) {
          visited.set(word, 1)
          queue.push(word)
        }
      }
    }
    step++
    if (flag) {
      break
    }
  }
  if (flag) {
    return step
  } else {
    return 0
  }
}

// console.log(
//   ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
// )
