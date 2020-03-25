/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0
  const stack = []
  stack.push(-1)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }
  return max
}

// console.log(longestValidParentheses('(()'))
// console.log(longestValidParentheses(')()())'))
