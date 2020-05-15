/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let len = T.length
  let res = []
  let stack = []
  for (let i = 0; i < len; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let item = stack.pop()
      res[item] = i - item
    }
    stack.push(i)
  }
  return res;
}
