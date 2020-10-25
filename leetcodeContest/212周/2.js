/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  let res = []
  let m = l.length
  for (let i = 0; i < m; i++) {
    res[i] = nums.slice(l[i], r[i] + 1);
    res[i] = res[i].sort((a, b) => a - b);
    let a = []
    let index = 0
    for (let j = 1;j<res[i].length;j++) {
      a[index ++] = res[i][j] - res[i][j-1]
    }
    if (Array.from(new Set(a)).length !== 1) {
      res[i] = false;
    } else {
      res[i] = true;
    }
  }
  return res;
}

// console.log(checkArithmeticSubarrays(
//   [4,6,5,9,3,7],
//   [0,0,2],
//   [2,3,5]));