/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  let num1 = 0
  let num2 = 0
  let s1 = [...String(num)]
  let temp = ''
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== '9' && temp === '') {
      temp = s1[i]
      s1[i] = '9'
    }
    if (temp !== '' && s1[i] === temp) {
      s1[i] = '9'
    }
  }
  num1 = parseInt(s1.join(''))
  let s2 = [...String(num)]
  temp = ''
  let flag = false
  for (let i = 0; i < s2.length; i++) {
    if (i === 0 && s2[i] !== '1') {
      temp = s2[i]
      s2[i] = '1'
    } else if (i === 0 && s2[i] === '1') {
      flag = true
      continue
    }
    if (temp) {
      if (flag && s2[i] === temp) {
        s2[i] = '0'
      } else if(!flag && s2[i] === temp){
        s2[i] = '1'
      }
    } else {
      if (flag) {
        if (s2[i] !== '1' && s2[i] !== '0') {
          temp = s2[i]
          s2[i] = '0'
        }
      }
    }
  }
  num2 = parseInt(s2.join(''))
  // console.log(num2);
  return num1 - num2
}

// console.log(maxDiff(555));
// console.log(maxDiff(9));
// console.log(maxDiff(123456));
// console.log(maxDiff(10000));
// console.log(maxDiff(9288));
// console.log(maxDiff(1101057));