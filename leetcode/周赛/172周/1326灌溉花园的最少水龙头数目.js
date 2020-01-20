/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
  let land = Array(n).fill(0);
  for (let i = 0; i < ranges.length; i++) {
    let l = Math.max(i - ranges[i], 0);
    let r = Math.min(i + ranges[i], n);
    for (let j = l; j < r; j++) {
      land[j] = Math.max(land[j], r);
    }
  }
  let count = 0;
  let cur = 0;
  while (cur < n) {
    if (land[cur] === 0) {
      return -1;
    }
    cur = land[cur];
    count++;
  }
  return count;
};