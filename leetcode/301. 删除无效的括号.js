/**
 * @param {string} s
 * @return {string[]}
 */
// 删除
var removeInvalidParentheses = function (s) {
  const isvalid = (str) => {
    str = str.split('')
    let stack = []
    for (let item of str) {
      if (item === '(') {
        stack.push(item)
      } else if(item === ')'){
        let item1 = stack.pop()
        if (item1 !== '(') {
          return false
        }
      }
    }
    return stack.length === 0
  }
  let res = []
  let queue = []
  let visited = new Map()
  // 直接遍历去删?
  visited.set(s, 1)
  queue.push(s)
  let step = 0
  while (queue.length) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let item = queue.shift()
      if (isvalid(item) && item) {
        res.push(item)
      }
      for (let k = 0; k < item.length; k++) {
        let item3 = ''
        // 只用删括号
        if (item[k] === '(' || item[k] === ')') {
          if (k === 0) {
            item3 = item.slice(1)
          } else if (k === item.length - 1) {
            item3 = item.slice(0, k)
          } else {
            item3 = item.slice(0, k) + item.slice(k + 1)
          }
        }
        if (visited.has(item3)) {
          continue
        } else {
          visited.set(item3, 1)
          queue.push(item3)
        }
      }
    }
    step++
    if (res.length !== 0) {
      return res
    }
  }
  return ['']
}

// console.log(removeInvalidParentheses('()())()'))
// console.log(removeInvalidParentheses("(a)())()"))
