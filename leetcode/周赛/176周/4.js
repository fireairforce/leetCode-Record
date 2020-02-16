/**
 * @param {number[]} target
 * @return {boolean}
 */
let count = (arr, count) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum - count
}
var isPossible = function(target) {
  target.sort((a, b) => a - b)
  while (target[target.length - 1] !== 1) {
    target[target.length - 1] =
      target[target.length - 1] - count(target, target[target.length - 1])
    if (target[target.length - 1] < 1) {
      return false
    }
    target = target.sort((a, b) => a - b)
  }
  return true
}

console.log(isPossible([8, 5]))
