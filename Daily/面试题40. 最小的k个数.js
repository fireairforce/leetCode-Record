/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((a,b) => a-b)
  let res = [...new Set([...arr])]
  return res.slice(0,k)
};

// console.log(getLeastNumbers([0,1,2,1],1));