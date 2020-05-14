/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  // 处理锁的情况
  const plusOne = (str, index) => {
    let s = str.split('')
    if (s[index] === '9') {
      s[index] = '0'
    } else {
      s[index] = String.fromCharCode(s[index].charCodeAt() + 1)
    }
    return s.join('')
  }

  const minusOne = (str, index) => {
    let s = str.split('')
    if (s[index] === '0') {
      s[index] = '9'
    } else {
      s[index] = String.fromCharCode(s[index].charCodeAt() - 1)
    }
    return s.join('')
  }
  // 记录边界值
  let deads = new Map()
  for (let item of deadends) {
    deads.set(item, deads.get(item) ? deads.get(item) + 1 : 1)
  }
  // 记录已经走过的密码情况
  let visited = new Map()
  let queue = []
  let step = 0
  queue.push('0000')
  visited.set('0000', 1)
  while (queue.length !== 0) {
    let sz = queue.length
    for (let i = 0; i < sz; i++) {
      let cur = queue.shift()
      // 走重了
      if (deads.has(cur)) {
        continue
      }
      // 到了
      if (cur === target) {
        return step
      }
      // 处理一下节点的遍历
      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j)
        if (!visited.has(up)) {
          queue.push(up)
          visited.set(up, 1)
        }
        let down = minusOne(cur, j)
        if (!visited.has(down)) {
          queue.push(down)
          visited.set(down, 1)
        }
      }
    }
    // console.log(queue);
    step++
  }
  return -1
}

// console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'))
