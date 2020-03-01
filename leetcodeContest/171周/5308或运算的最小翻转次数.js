/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let count = 0;
  // 对a,b,c进行一个移位操作
  while (a || b || c) {
    let x = c & 1;
    let y = b & 1;
    let z = a & 1;
    if (x===0) {
      if (y!==0) {
        count++;
      }
      if (z!==0) {
        count++;
      }
    } else if (x===1) {
      if (y === 0 && z === 0) {
        count++;
      }
    }
    a = a >> 1;
    b = b >> 1;
    c = c >> 1;
  }
  return count;
};