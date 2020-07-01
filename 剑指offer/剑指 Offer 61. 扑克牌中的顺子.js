/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  if (nums.length < 5) {
    return false
  }
  nums.sort((a, b) => a - b)
  let newArr = []
  for (let item of nums) {
    if (item !== 0) {
      newArr.push(item)
    }
  }
  let newArr1 = Array.from(new Set(newArr))
  if (newArr.length <= 1) {
    return true;
  } else {
    if (newArr[newArr.length - 1] - newArr[0] < 5 && newArr1.length === newArr.length) {
      return true;
    } else {
      return false;
    }
  }
};