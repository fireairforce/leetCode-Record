/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(a) {
  let len = a.length;
  for (let i = 0;i<len;i++) {
    for (let j = i + 1;j<len;j++) {
      if(a[j] <= a[i]) {
        a[i] = a[i]-a[j]
        break;
      }
    }
  }
  return a;
};