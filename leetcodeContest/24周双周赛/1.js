/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let res = 0
  for (let i = 1; i <= 100000; i++) {
    let sum = i
    let flag = true
    for (let j = 0; j < nums.length; j++) {
       sum += nums[j]
       if (sum < 1) {
        flag = false
        break;
       }
    }
    if(flag) {
      res = i
      break
    }
  }
  if(res === 0) {
    return 1;
  } else {
    return res;
  }
}

// console.log(minStartValue([2, 3, 5, -5, -1]))
// console.log(minStartValue([1,2]));
// console.log(minStartValue([1,-2,-3]));
// console.log(minStartValue([-3,2,-3,4,2]));
// console.log(minStartValue([-4, -1, 1, -5, -4, 5, 5]))
