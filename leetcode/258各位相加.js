/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  num = (num+'').split('')
  let res = 0;
  while(num.length > 1) {
    for(let i = 0;i<num.length;i++) {
        res += parseInt(num[i]);
    }
    num = (res+'').split('');
    res = 0;
  }
  return parseInt(num.join(''));
}

