/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  let hash = Array(50001).fill(0)
  for (let i = 0; i < A.length; i++) {
    hash[A[i]]++
  }
  let sum = 0
  for (let i = 0; i < 50001; i++) {
    if (hash[i] > 1) {
      sum += hash[i] - 1
      hash[i + 1] += hash[i] - 1
      hash[i] = 1
    }
  }
  return sum
}

// console.log(minIncrementForUnique([1, 2, 2]))
// console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]))