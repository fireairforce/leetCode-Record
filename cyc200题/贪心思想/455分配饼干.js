/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let sum = 0,
    i = 0,
    j = 0;
    // 直接用饼干数量去遍历就行了,饼干分完了就结束
  while (j < g.length || j < s.length) {
    if(s[j]>=g[i]){
      sum++;
      i++;
    }
    j++;
  }
  return sum;
  // console.log(sum);
};

// findContentChildren([1, 2], [1, 2,3]);