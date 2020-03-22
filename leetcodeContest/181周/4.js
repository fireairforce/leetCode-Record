/**
 * @param {string} s
 * @return {string}
 */

var longestPrefix = function(s) {
  let max = 0;
  for (let i = 0;i<s.length;i++) {
    if(max !== s.length) {
      if(s.slice(0,i) === s.slice(s.length - i, s.length)) {
        max = i;
      }
    }
  }
  if(max === 0) {
    return ''
  } 
  return s.slice(0,max)
}

// console.log(longestPrefix("level"))
// console.log(longestPrefix("ababab"))
// console.log(longestPrefix('leetcodeleet'))
// console.log(longestPrefix('a'))

