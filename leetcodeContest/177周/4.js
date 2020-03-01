/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
  let arr = JSON.parse(JSON.stringify(digits))
  let arr1 = arr.filter((item) => item % 3 === 1).sort((a, b) => a - b)
  let arr2 = arr.filter((item) => item % 3 === 2).sort((a, b) => a - b)
  let sum = arr.reduce((pre, cur) => pre + cur, 0)
  if (sum % 3 === 0) {
    return deletePrefixZero(digits.sort((a, b) => b - a).join(''))
  } else if (sum % 3 === 1) {
    if (arr1.length >= 1) {
      for (let i = 0; i < digits.length; i++) {
        if (digits[i] === arr1[0]) {
          digits.splice(i, 1)
          break
        }
      }
    } else if (arr2.length >= 2) {
      for (let i = 0; i < digits.length; i++) {
        if (digits[i] === arr2[0]) {
          digits.splice(i, 1)
        }
        if (digits[i] === arr2[1]) {
          digits.splice(i, 1)
        }
      }
    }
    return deletePrefixZero(digits.sort((a, b) => b - a).join(''))
  } else if (sum % 3 === 2) {
    if (arr2.length >= 1) {
      for (let i = 0; i < digits.length; i++) {
        if (digits[i] === arr2[0]) {
          digits.splice(i, 1)
          break
        }
      }
    } else if (arr1.length >= 2) {
      for (let i = 0; i < digits.length; i++) {
        if (digits[i] === arr1[0]) {
          digits.splice(i, 1)
        }
        if (digits[i] === arr1[1]) {
          digits.splice(i, 1)
        }
      }
    }
    return deletePrefixZero(digits.sort((a, b) => b - a).join(''))
  }
  return ''
}

const deletePrefixZero = (s) => {
  if (s.length >= 1) {
    s = s.replace(/\b(0+)/gi, '')
  } else {
    return ''
  }
  if (s.length === 0) {
    return '0'
  }
  return s
}

// console.log(largestMultipleOfThree([6,0,8,2,6,3,5,8,6,3,0,9,8,0,8,5,4,5,1,6,9,3,0,4,7,4,3,7,8,2,6,8,3,3,7,9,2,6,6,9,9,7,8,3,5,9,8,1,1,2,9,8,8,3,8,1,9,5,3,1,7,2,0,0,4,5,0,1,3,5,8,8,4,4,0,7,5,2,4,3,6,7,5,8,6,6,8,3,4,1,3,9,0,7,3,1,1,9,3,7,2,6,7,6,4,5,6,1,5,0,6,0,6,0,7,4,6,4,2,6,3,1,4,6,8,6,0,2,1,8,5,2,9,7,9,6,3,2,2,9,3,7,1,9,7,3,3,7,6,4,6,1,8,8,5,6,6,8,7,1,5,0,7,2,2,9,4,0,7,5,3,5,8,1,1,5,8,8,2,4,1,6,8,0,5,5,7,0,2,8,9,9,9,3,8,3,2,2,9,3,1,1,7,3,2,3,9,6,6,1,3,7,4,7,6,7,5,4,5,0,7,7,4,9,5,8,5,6,1,6,1,6,9,9,3,4,4,8,6,7,1,8,2,7,7,4,3,9,7,9,4,8,3,6,2,0,2,1,3,8,7,7,6,4,8,3,6,9,8,1,3,3,6,3,6,8,5,3,4,8,3,3,5,3,8,7,0,1,9,1,2,1,2,9,9,9,2,1,5,6,4,4,9,3,1,0,3,0,0,5,8,5,5,4,6,6,5,4,7,4,1,4,7,0,7,1,6,4,5,0,8,2,9,3,1,7,7,9,9,2,5,6,6,8,2,9,5,8,4,5,6,3,5,2,7,7,2,1,3,2,2,7,9,8,7,7,4,4,5,1,6,1,8,9,3,0,4,6,3,5,4,1,0,8,9,6,9,8,0,2,9,1,6,7,1,0,8,7,5,4,0,5,6,9,5,7,1,5,2,1,5,9,2,5,6,9,8,9,3,7,3,3,6,5,9,3,8,2,9,4,6,9,5,7,8,0,6,3,4,5,8,6,4,1,8,8,9,3,2,0,4,2,1,9,6,7,7,2,9,2,8,2,6,2,1,3,8,5,1,6,2,0,7,2,8,1,0,2,2,5,9,5,8,2,5,1,2,3,9,4,8,9,8,9,3,4,3,4,4,3]))
