/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = []
  const backtrak = (list, str) => {
    // 边界条件
    if (
      (list.length === 4 && str.length !== 0) ||
      list.length > 4 ||
      (list.length < 4 && str.length === 0)
    ) {
      return
    }
    // 满足条件的一组ip
    if (list.length === 4 && str.length === 0) {
      res.push(list.join('.'))
      return
    }
    // 单独要首位的情况
    backtrak([...list, str[0]], str.slice(1))
    // 非单独，但需要首位不为0
    if (str[0] !== '0' && str.length > 1) {
      // list里面push一些值
      backtrak([...list, str.slice(0, 2)], str.slice(2))
    }
    // 按照条件去进行一个回溯
    if (str[0] !== '0' && parseInt(str.slice(0, 3)) <= 255 && str.length > 2) {
      backtrak([...list, str.slice(0, 3)], str.slice(3))
    }
  }
  backtrak([], s)
  return res
}


// console.log(restoreIpAddresses("25525511135"));
// console.log(restoreIpAddresses("010010"));
