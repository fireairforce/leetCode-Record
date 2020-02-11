/**
 * 1 0
 * 2 0
 * 3 2
 * 4 0
 * 5 2
 */

//  202020202020

/**
 * 给定一个对象和一个路径，得到路径对应的值
    输入输出样例
    样例一
    输入：get({a: 1}, 'a')
    输出：1
    样例二
    输入：get({a: [1, {b: 2}]}, 'a[1].b')
    输出：2
 */

const get = (obj, path) => {
  if (path.length === 1) {
    return obj[path]
  }
  let res
  path = path.replace(/\[|\]\./g, '')
  for (let i = 0; i < path.length; i++) {
    if ('0' <= path[i] && path[i] <= '9') {
      let sum = parseInt(path[i])
      while (i + 1 < path.length && Number.isNaN(path[i + 1])) {
        sum = sum * 10 + parseInt(path[i + 1])
        i++
      }
      res = res[sum]
    } else {
      let str = path[i]
      while (i + 1 < path.length && Number.isNaN(path[i + 1])) {
        str += path[i + 1]
        i++
      }
      if (!res) {
        res = obj[str]
      } else {
        res = res[str]
      }
    }
  }
  return res
}
console.log(get({ a: 1 }, 'a'))
// output:1
console.log(get({ a: [1, { b: 2 }] }, 'a[1].b'))
// output:2
