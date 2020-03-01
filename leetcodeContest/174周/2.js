/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  var newarr = Object.values(hash).sort((a, b) => b-a);
  let sum = 0;
  let res = 0;
  console.log(newarr);
  for (let i = 0; i < newarr.length; i++) {
    sum += newarr[i];
    res ++;
    if (sum >= Math.floor(arr.length / 2)) {
      break;
    }
  }
  return res;
};
// console.log(minSetSize([1000,1000,3,7]));