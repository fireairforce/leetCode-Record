/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
  const getSum = (a) => {
    let count = 0;
    while(a !== 1) {
      if(a % 2 === 0) {
        a = a / 2;
      } else {
        a = 3 * a + 1;
      }
      count ++;
    }
    return count;
  }
  let hash = {}; 
  for(let i = lo;i<=hi;i++){
     hash[i] = getSum(i);
  }
  let arr = Object.keys(hash).sort((a,b) => {
    if(hash[a] === hash[b]) {
      return parseInt(a) - parseInt(b)
    }
    return hash[a] - hash[b]
  })
  return arr[k - 1];
};
// 
// console.log(getKth(12,15,2));
// console.log(getKth(1,1,1));
// console.log(getKth(7,11,4));
// console.log(getKth(10,20,5));
// console.log(getKth(1,1000,777));



