/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length){
        return false;
    }
    let S = fullpermutate(s1);
    // console.log(s2);
    for(let i = 0;i<S.length;i++){
        if(s2.indexOf(S[i])>-1){
            return true;
        }
    }
    return false;
};

// 对字符串进行全排列
var fullpermutate = (str) => {
  const result = [];
  if (str.length > 1) {
    // 遍历每个字符
    for (let i = 0; i < str.length; i++) {
      // 拿到当前元素
      let left = str[i];
      //   拿到除了当前元素的其他元素组合体
      let rest = str.slice(0, i) + str.slice(i + 1, str.length);
      //   获取到其他元素的全排列体
      let preResult = fullpermutate(rest);
      for (let j = 0; j < preResult.length; j++) {
        let temp = left + preResult[j];
        result.push(temp);
      }
    }
  } else if (str.length === 1) {
    result.push(str);
  }
  return result;
};

console.log(checkInclusion("ab","eidboaoo"));
// console.log(fullpermutate('ab'));
// "ab"
// "eidboaoo"