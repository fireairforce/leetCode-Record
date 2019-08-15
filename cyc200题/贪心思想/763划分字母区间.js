/**
 * @param {string} S
 * @return {number[]}
 */
// 这题的思路比较简单，直接遍历一整个字符串先找首字母的最后出现下标，然后在这个区间有字母超出了就直接再扩大区间就行了,直到扩大的外层循环遍历完成
var partitionLabels = function (S) {
  if (!S || !S.length) {
    return;
  }
  // 使用cache来存储某个字母最后出现的下标位置
  let cache = {};
  for (let i = 0; i < S.length; i++) {
    cache[S[i]] = i;
  }
  let index = 0;
  let arr = [];
  let flag = 0;
  for (let i = 0; i < S.length; i++) {
    index = cache[S[i]];
    flag = 0;
    // 去遍历区间里面剩下的元素，如果有末尾值比终点大，则扩大区间
    for (let j = i; j <= index; j++) {
      if (cache[S[j]] > index) {
        // 这里减一是为了出去之后i++
        i = j - 1;
        flag = 1;
        break;
      }
    }
    if (!flag) {
      i = index;
      arr.push(i);
    }
  }
  // 对数据处理一下
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i !== 0) {
      arr[i] = arr[i] - arr[i - 1];
    }
  }
  arr[0] = arr[0] + 1;
  return arr;
};
// console.log(partitionLabels("ababcbacadefegdehijhklij"));