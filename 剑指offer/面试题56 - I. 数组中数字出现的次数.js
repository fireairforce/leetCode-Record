/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let sum = 0
  //   sum为两个不同值的异或值
  for (let item of nums) {
    sum ^= item
  }
  //   得到二进制1的最低位
  let flag = -sum & sum
  let result = [0, 0]
  //  用flag两组去进行^
  for (let item of nums) {
    if ((flag & item) === 0) {
      result[0] = result[0] ^ item
    } else {
      result[1] = result[1] ^ item
    }
  }
  return result
}
