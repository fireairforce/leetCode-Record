// 整数反转
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const num = x.toString().split(""); // 将字符串转换成字符数组
  const max = Math.pow(2, 31),
    min = Math.pow(2, -31);
  let flag = false,
    str = "",
    len = num.length;
  for (let i = len - 1; i >= 0; i--) {
    if (num[i] === "-") {
      flag = true;
      continue;
    }
    str += num[i];
  }
  let m = parseInt(str);
  if (min < m && m < max) {
    if (flag) {
      return -m;
    } else {
      return m;
    }
  } else {
    return 0;
  }
};
