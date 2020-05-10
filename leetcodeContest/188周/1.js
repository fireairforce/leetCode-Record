/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  let a1 = []
  for (let i = 1;i<=n;i++) {
    a1.push(i)
  }
  let index = 0;
  let res = []
  for (let i =0;i<a1.length;i++) {
    if (index >= target.length) {
      break;
    }
    if (a1[i] !== target[index]) {
       res.push('Push','Pop')
    } else {
      res.push('Push')
      index ++
    }
  }
  return res;
};

// console.log(buildArray([1, 3],3));
// console.log(buildArray([1,2,3],3))
// console.log(buildArray([1,2],4));
// console.log(buildArray([2,3,4],4));
