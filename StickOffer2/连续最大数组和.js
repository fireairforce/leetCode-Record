function FindGreatestSumOfSubArray(array) {
  // write code here
  let res = 0;
  let count = -99999999999999999;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
    if (res > count) {
      count = res;
    }
    if (res < 0) {
      res = 0;
    }
  }
  return count;
}
module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
};
