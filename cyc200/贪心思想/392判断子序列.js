/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 判断s是否为t的子序列
var isSubsequence = function(s, t) {
  let sum = 0,j = 0,i=0;
  for(let i = 0;i<t.length;i++){
     if(t[i]===s[j]){
       sum++;
       j++;
     } 
  }  
  if(sum===s.length){
    return true
  }
  return false;
};

// console.log(isSubsequence('abc','ahbgdc'));