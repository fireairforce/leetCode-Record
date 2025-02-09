/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }
  return res;
};


const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    let res = [];

    for (let i = 0; i< promises.length; i++) {
      Promise.resolve(promises[i]).then((data) => {
        res.push(data);
        count ++;

        if (count === promises.length) {
          resolve(res);
        }
      }).catch(reject)
    }
  })
}