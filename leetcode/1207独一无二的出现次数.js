/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    if (arr.length < 0) {
      return false;
    }
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
      if (!hash[arr[i]]) {
        hash[arr[i]] = 1;
      } else {
        hash[arr[i]]++;
      }
    }
    let hashA = {};
    for(let key in hash) {
        if(!hashA[hash[key]]) {
            hashA[hash[key]] = 1;
        } else {
            hashA[hash[key]] ++;
        }
    }
    for(let key in hashA) {
        if(hashA[key] >1) {
          return false;
        }
    }
    return true;
  };
  