/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let max = 0
  let index = 0
  if (s.length === 1){
    return 1;
  }
  for (let i = 0;i<s.length;i++) {
    if (i === 0) {
      continue;
    } else {
      if (s[i] === s[i -1] && i === 1) {
        index += 2
        max = Math.max(index,max)
      } else if(s[i] !== s[i -1] && i === 1){
         max = Math.max(index, max)
         index = 1;
      } else if(s[i] === s[i -1] && i !== 1) {
        index ++
        max = Math.max(index,max)
      } else if(s[i] !== s[i -1] && i !== 1) {
        max = Math.max(max, index)
        index = 1
      }
    }
  }
  return max;
};

// console.log(maxPower('leetcode'));
// console.log(maxPower('abbcccddddeeeeedcba'));
// console.log(maxPower('triplepillooooow'));
// console.log(maxPower('hooraaaaaaaaaaay'));
// console.log(maxPower('tourist'));
// console.log(maxPower('cc'));

