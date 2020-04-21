/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 奇为1，偶为2
var numberOfSubarrays = function (nums, k) {
  let len = nums.length
  const odd = []
  for (let i = 0; i < len; i++) {
    if (nums[i] % 2 !== 0) {
      odd.push(i)
    }
  }
  if (odd.length < k) {
    return 0
  }
  let total = 0
  for (let i = 0;i<=odd.length - k;i++) {
    let l = 0, r = 0
    let left_index = odd[i],right_index = odd[i + k - 1]
    while (left_index > 0 && nums[left_index - 1] % 2 === 0) {
      left_index --
      l ++
    }
    while (right_index < len && nums[right_index + 1] % 2 === 0) {
      r ++
      right_index ++
    }
    total += (l + 1) * (r + 1)
  }
  return total
}

console.log(numberOfSubarrays([1,1,2,1,1], 3));
