/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let res = []
  if (nums === null || nums.length === 0) {
    return res
  }
  let candicateA = nums[0]
  let candicateB = nums[0]
  let countA = 0
  let countB = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candicateA) {
      countA++
      continue
    }
    if (nums[i] === candicateB) {
      countB++
      continue
    }
    if (countA === 0) {
      candicateA = nums[i]
      countA++
      continue
    }
    if (countB === 0) {
      candicateB = nums[i]
      countB++
      continue
    }
    countA--
    countB--
  }
  countA = 0
  countB = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candicateA) {
      countA++
    } else if (nums[i] === candicateB) {
      countB++
    }
  }
  if (countA > Math.floor(nums.length / 3)) {
    res.push(candicateA)
  }
  if (countB > Math.floor(nums.length / 3)) {
    res.push(candicateB)
  }
  return res
}

// console.log(majorityElement([3, 2, 3]))
