/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  if (!arr.includes(0)) {
    return false;
  }
  let flag = Array(arr.length).fill(0);
  judge = [];
  const dfs = (arr, start, flag, judge) => {
    if (start < 0 || start > arr.length - 1 || flag[start]) {
      return;
    }
    if (arr[start] === 0 || arr[start] === 0) {
      judge.push(1);
      return;
    }
    flag[start] = 1;
    dfs(arr, start - arr[start], flag, judge);
    dfs(arr, start + arr[start], flag, judge);
    flag[start] = 0;
  };
  dfs(arr, start, flag, judge);
  return judge.length > 0;
};

// console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
