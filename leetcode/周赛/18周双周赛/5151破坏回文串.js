/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
  palindrome = palindrome.split("");
  let flag = false;
  for (let i = 0; i < Math.floor(palindrome.length / 2); i++) {
    if (palindrome.length >= 2) {
      if (palindrome[i] !== "a") {
        flag = true;
        palindrome[i] = "a";
        break;
      }
    }
  }
  if (flag) {
    return palindrome.join("");
  }
  if (!flag && palindrome.length === 1) {
    return '';
  } 
  if(!flag && palindrome.length > 1) {
      palindrome[palindrome.length - 1] = 'b';
      return palindrome.join('');
  }
};
// console.log(breakPalindrome("aa"));
// console.log(breakPalindrome('a'));
