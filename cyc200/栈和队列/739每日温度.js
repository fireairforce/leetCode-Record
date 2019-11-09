/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let num = [];
  for (let i = 0; i < T.length; i++) {
    let flag = 0;
    for (let j = i; j < T.length; j++) {
      if (T[j] > T[i]) {
        num[i] = j - i;
        flag = 1;
        break;
      }
    }
    if (!flag) {
      num[i] = 0;
    }
  }
  return num;
};
