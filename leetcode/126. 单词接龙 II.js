/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let queue = []
  let visited = new Set()
  if (!wordList.includes(endWord)) {
    return []
  }
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
  queue.push(beginWord)
  visited.add(beginWord)
  let res1 = []
  let step = 1
  let flag = false
  while (queue.length !== 0) {
    let sz = queue.length
    res1.push([...queue])
    for (let i = 0; i < sz; i++) {
      let item = queue.shift()
      if (item === endWord) {
        flag = true
        break
      }
      for (let i = 0; i < wordList.length; i++) {
        if (!visited.has(wordList[i]) && compareStr(item, wordList[i])) {
          visited.add(wordList[i])
          queue.push(wordList[i])
        }
      }
    }
    if (flag) {
      break
    }
    step++
  }
  queue = []
  visited = new Set()
  queue.push(endWord)
  visited.add(endWord)
  step = 1
  let flag2 = false
  let res2 = []
  while (queue.length !== 0) {
    let sz = queue.length
    res2.push([...queue])
    for (let i = 0; i < sz; i++) {
      let item = queue.shift()
      if (item === beginWord) {
        flag2 = true
        break
      }
      for (let i = 0; i < wordList.length; i++) {
        if (!visited.has(wordList[i]) && compareStr(item, wordList[i])) {
          visited.add(wordList[i])
          queue.push(wordList[i])
        }
      }
    }
    if (flag2) {
      break
    }
    step++
  }

  if (!wordList.includes(beginWord)) {
    res2.push([beginWord])
  }

  res2 = res2.reverse()
  let res = []
  for (let i = 0; i < res2.length; i++) {
    res[i] = []
    for (let item of res1[i]) {
      if (res2[i].indexOf(item) !== -1 && !res[i].includes(item)) {
        res[i].push(item)
      }
    }
    for (let item of res2[i]) {
      if (res1[i].indexOf(item) !== -1 && !res[i].includes(item)) {
        res[i].push(item)
      }
    }
  }

  let hash = new Map()
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      hash.set(res[i][j], i)
    }
  }
  let result = []
  const backtrack = (current, target, wordRes, path) => {
    if (path.length > step) {
      return
    }
    if (current === target) {
      result.push([...path])
      return
    }
    for (let i = 1; i < wordRes.length; i++) {
      if (i <= hash.get(current)) {
        continue
      }
      for (let j = 0; j < wordRes[i].length; j++) {
        if (
          compareStr(current, wordRes[i][j]) &&
          !path.includes(wordRes[i][j])
        ) {
          path.push(wordRes[i][j])
          backtrack(wordRes[i][j], target, wordRes, path)
          path.pop(wordRes[i][j])
        }
      }
    }
  }
  if (flag) {
    if (res.length === step) {
      backtrack(beginWord, endWord, res, [beginWord])
      return result
    }
  } else {
    return result
  }
}

// console.log(
//   findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
// )
