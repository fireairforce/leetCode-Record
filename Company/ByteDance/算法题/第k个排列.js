/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += i;
  }
  const result = fullPermutation(str);
  return result[k - 1];
};

const fullPermutation = (str) => {
  let result = [];
  if (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      let left = str[i];
      let rest = str.slice(0, i) + str.slice(i + 1, str.length);
      let preResult = fullPermutation(rest);
      for (let j = 0; j < preResult.length; j++) {
        let temp = left + preResult[j];
        result.push(temp);
      }
    }
  } else if (str.length === 1) {
    result.push(str);
  }
  return result;
};
