/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
  let a1 = 0, a2 = 0;
  let sum = stones.reduce((prev, now) => prev + now);
  let flag = 0;
  // 讨论一下a2 > a1 的情况
  while (stones.length > 0) {
    if (!(flag & 1)) {
      if (stones[0] > stones[stones.length - 1]) {
        a1 += (sum - stones[stones.length - 1])
        sum -= stones[stones.length - 1]
        stones.pop();
      } else {
        a1 += (sum - stones[0]);
        sum -= stones[0];
        stones.shift();
      }
    } else {
      if (stones[0] < stones[stones.length - 1]) {
        a2 += (sum - stones[stones.length - 1])
        sum -= stones[stones.length - 1]
        stones.pop();
      } else {
        a2 += (sum - stones[0]);
        sum -= stones[0];
        stones.shift();
      }
    }
    console.log(a1, a2);
    flag ++;
  }
  return a1 - a2;
};

console.log(stoneGameVII([5,3,1,4,2]));