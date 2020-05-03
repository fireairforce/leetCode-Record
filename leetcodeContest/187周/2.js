/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let dir = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      dir.push(i)
    }
  }
  // console.log(`h`);
  console.log(dir);
  for (let i = 1; i < dir.length; i++) {
    if (dir[i] - dir[i - 1] <= k) {
      return false
    }
  }
  return true
}

// console.log(kLengthApart([1,0,0,0,1,0,0,1], 2));
// console.log(kLengthApart([1,0,0,1,0,1],2));
// console.log(kLengthApart([1,1,1,1,1], 0));
// console.log(kLengthApart([0,1,0,1], 1));



