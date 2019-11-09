/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // 记住一定要把字符串先散成数组 
    s=[...s];
    let i = 0;
    let j = s.length - 1;
    let word = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
        'A': 1,
        'E': 1,
        'I': 1,
        'O': 1,
        'U': 1
    }
    while(i<=j){
      if(!word[s[i]]){
        i++;
      }else if(!word[s[j]]){
        j--;
      } else {
          // console.log(s[i],s[j]);
          [s[i],s[j]] = [s[j],s[i]];
          // console.log(s[i],s[j]);
          i++;
          j--;
      }   
    }
    return s.join('');
};

// console.log(reverseVowels('leetcode'));