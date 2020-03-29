/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let hash = {}
  for(let i = 0;i<arr.length;i++) {
    hash[arr[i]] ? hash[arr[i]] ++ : hash[arr[i]] = 1
  }
  let res = [];
  for(let key in hash) {
    if(parseInt(key) === hash[key]) {
      res.push(parseInt(key))
    }
  }
  return res.length === 0 ? -1 : res.sort((a,b)=>b-a)[0]
};
// console.log(findLucky([2,2,3,4]));
// console.log(findLucky([7,7,7,7,7,7,7]))
// console.log(findLucky([2,2,2,3]))
