/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//  这题可以用一个indexOf函数就过去了，但是这里就违背了题目初衷,其实这题最厉害的方法是使用KMP算法，有时间要去学习一个KMP算法
var strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    let i = 0,
        j = 0;
    for (i = 0; i < haystack.length; i++) {
       if(j===needle.length){
           return i - needle.length;
       }
       if(haystack[i] === needle[j]){
           j ++;
       } else {
           i = i -j;
           j = 0;
       }
    }
    if(j===needle.length){
        return i - needle.length;
    }
    return -1;
};

// console.log(strStr('hello', 'll'));