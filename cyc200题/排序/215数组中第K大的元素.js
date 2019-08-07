/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  k = nums.length - k;
  let l = 0,
    h = nums.length - 1;
  while (l < h) {
    let j = partition(nums, l, h);
    if (j === k) {
      break;
    } else if (j < k) {
      l = j + 1;
    } else {
      h = j - 1;
    }
  }
};

let partition = (a, l, h) => {
  let i = l,
    j = h + 1;
  while (true) {
    while (a[++i] < a[l] && i < h);
    while (a[--j] > a[l] && j > l);
    if (i >= j) {
      break;
    }
    [a[i], a[j]] = [a[j], a[i]];
  }
  [a[l], a[j]] = [a[j], a[l]];
  return j;
}