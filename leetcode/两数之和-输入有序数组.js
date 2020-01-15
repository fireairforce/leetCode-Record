/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  if (numbers.length < 2) {
    return;
  }
  let l = 0,
    r = numbers.length - 1;
  while (l <= r) {
      if(numbers[l] + numbers[r] < target) {
          l++;
      } else if(numbers[l] + numbers[r] > target) {
          r--;
      } else {
          return [l + 1,r + 1];
      }
  }
};
