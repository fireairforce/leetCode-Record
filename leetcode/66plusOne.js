/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // 判断进位
  if(digits.length === 1) {
    digits[0] += 1;
    if (digits[0] > 9) {
      if (digits[0] > 9) {
        digits[0] %= 10;
      }
      digits.unshift(1);
    }
    return digits;
  }
  
  let count = 0;
  for (let i = digits.length - 1; i > 0; i--) {
    if (i === digits.length - 1) {
      if (digits[i] < 9) {
        digits[i] += 1;
        return digits;
      } else if (digits[i] === 9) {
        digits[i] += 1;
        count = digits[i] / 10;
        digits[i] %= 10;
      }
    } else {
      if (digits[i] < 9) {
        digits[i] += count;
        return digits;
      } else if (digits[i] === 9) {
        digits[i] += count;
        count = digits[i] / 10;
        digits[i] %= 10;
      }
    }
  }
  digits[0] = digits[0] + count;
  if (digits[0] > 9) {
    if (digits[0] > 9) {
      digits[0] %= 10;
    }
    digits.unshift(1);
  }
  return digits;
};

// console.log(plusOne([0]));
