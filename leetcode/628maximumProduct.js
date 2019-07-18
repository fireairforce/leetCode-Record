/**
 * @param {number[]} nums
 * @return {number}
 */
let quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let privotIndex = Math.floor(arr.length / 2);
  let privot = arr.splice(privotIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([privot], quickSort(right));
};
var maximumProduct = function(nums) {
  if (nums.length < 3) {
    return;
  }
  let newArr = quickSort(nums);
  return Math.max(
    newArr[newArr.length - 1] * newArr[newArr.length - 2] * newArr[newArr.length - 3],
    newArr[0] * newArr[1] * newArr[newArr.length - 1]
  );
};
// console.log("maximumProduct: ", maximumProduct([1,2,3,4]));
